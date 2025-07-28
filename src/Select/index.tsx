"use client"

import React, {useState, useRef, useEffect, type KeyboardEvent, type FC, type ChangeEvent} from "react"
import "./style.scss"
import {SelectOption} from "../App";

interface SelectProps {
    options: SelectOption[]
    value?: string
    placeholder?: string
    onSelect?: (value: string, option: SelectOption) => void
    allowInput?: boolean
    inputType?: string
    onInputChange?: (value: string) => void
}

const Select: FC<SelectProps> = ({
                                     options,
                                     value,
                                     placeholder,
                                     onSelect,
                                     allowInput = false,
                                     inputType = "text",
                                     onInputChange,
                                 }) => {


    const [isOpen, setIsOpen] = useState(false) // select open/close
    const [highlightedIndex, setHighlightedIndex] = useState(-1) // focused item index
    const [search, setSearch] = useState("") // search input value
    const [inputValue, setInputValue] = useState(value || "")

    const selectRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const itemRef = useRef<(HTMLDivElement | null)[]>([])
    const searchInputRef = useRef<HTMLInputElement>(null)

    const filteredItems = options.filter(
            (option) =>
                option.label.toLowerCase().includes(search.toLowerCase()) ||
                option.value.toLowerCase().includes(search.toLowerCase()),
        )

    // Find selected option
    const selectedOption = options.find((option) => option.value === value)

    // Outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                handleDropDown()
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    // Esc key
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                handleDropDown()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey as any)
            return () => document.removeEventListener("keydown", handleEscapeKey as any)
        }
    }, [isOpen])

    // Autofocus search input
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            setTimeout(() => searchInputRef.current?.focus(), 100)
        }
    }, [isOpen])

    const handleDropDown = () => {
        if (isOpen) return setIsOpen(false);
        setIsOpen(true)
        setHighlightedIndex(-1)
        setSearch("")
    }

    const selectItem = (option: SelectOption) => {
        if (option.disabled) return

        onSelect?.(option.value, option)
        handleDropDown()
    }

    // Handle keyboard buttons
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case "Enter":
            case " ":
                event.preventDefault()
                if (!isOpen) {
                    handleDropDown()
                } else if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
                    const option = filteredItems[highlightedIndex]
                    if (!option.disabled) {
                        selectItem(option)
                    }
                }
                break

            case "ArrowDown":
                event.preventDefault()
                if (!isOpen) {
                    handleDropDown()
                } else {
                    const nextIndex = highlightedIndex < filteredItems.length - 1 ? highlightedIndex + 1 : 0
                    setHighlightedIndex(nextIndex)
                    scrollToOption(nextIndex)
                }
                break

            case "ArrowUp":
                event.preventDefault()
                if (!isOpen) {
                    handleDropDown()
                } else {
                    const prevIndex = highlightedIndex > 0 ? highlightedIndex - 1 : filteredItems.length - 1
                    setHighlightedIndex(prevIndex)
                    scrollToOption(prevIndex)
                }
                break

            case "Escape":
                event.preventDefault()
                handleDropDown()
                break
        }
    }

    // Scroll to item ????
    const scrollToOption = (index: number) => {
        const optionElement = itemRef.current[index]
        if (optionElement && dropdownRef.current) {
            const dropdown = dropdownRef.current
            const optionTop = optionElement.offsetTop
            const optionBottom = optionTop + optionElement.offsetHeight
            const dropdownTop = dropdown.scrollTop
            const dropdownBottom = dropdownTop + dropdown.clientHeight

            if (optionTop < dropdownTop) {
                dropdown.scrollTop = optionTop
            } else if (optionBottom > dropdownBottom) {
                dropdown.scrollTop = optionBottom - dropdown.clientHeight
            }
        }
    }

    // Add input handling
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInputValue(newValue)
        onInputChange?.(newValue)
    }

    // Update the select trigger to show input when allowInput is true
    const renderSelectValue = () => {
        if (allowInput) {
            return (
                <input
                    type={inputType}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="select-input"
                    onClick={(e) => e.stopPropagation()}
                />
            )
        }

        if (selectedOption) {
            return selectedOption.content || selectedOption.label
        }

        return <span className="placeholder">{placeholder}</span>
    }

    return (
        <div className="select-wrapper">
            <div
                ref={selectRef}
                className="select-container"
                onKeyDown={handleKeyDown}
            >
                <div
                    className={`select-trigger ${isOpen ? "open" : ""}`}
                    onClick={handleDropDown}
                >
                    <div className="select-value">{renderSelectValue()}</div>
                    <div className={`select-arrow ${isOpen ? "open" : ""}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M4 6L8 10L12 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <div
                    ref={dropdownRef}
                    className={`select-dropdown ${isOpen ? "open" : ""}`}
                >
                    <div className="search-container">
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search item..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    <div className="select-items">
                        {filteredItems.length === 0 ? (
                            <div className="no-items">No options found</div>
                        ) : (
                            filteredItems.map((option, index) => (
                                <div
                                    key={option.value}
                                    ref={(el) => {
                                        itemRef.current[index] = el;
                                    }}
                                    className={`item ${option.disabled ? "disabled" : ""} ${
                                        highlightedIndex === index ? "highlighted" : ""
                                    } ${selectedOption?.value === option.value ? "selected" : ""}`}
                                    onClick={() => selectItem(option)}
                                    onMouseEnter={() => setHighlightedIndex(index)}
                                    role="option"
                                >
                                    {option.content || option.label}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Select



