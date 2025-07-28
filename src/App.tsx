"use client"
import React, {useState, type FC, type ReactNode} from "react"
import "./App.scss"
import Select from "./Select"
import {selectData} from "./Data/select_data";

export interface SelectOption {
    value: string
    label: string
    content?: ReactNode
    disabled?: boolean
}


const App: FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>("")

    return (
        <div className="App" >

            <div className="Container">

                    <h2 className="Title">Select Component</h2>
                    <div>
                        <label className="Label">Choose a item:</label>
                        <Select
                            options={selectData}
                            value={selectedItem}
                            placeholder="Select an item here..."
                            onSelect={(value) => {
                                setSelectedItem(value)
                            }}
                        />
                    </div>

            </div>
        </div>
    )
}

export default App
