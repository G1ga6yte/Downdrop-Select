import { SelectOption } from "../App";
import type React from "react";

export const selectData: SelectOption[] = [
    {
        value: "alex",
        label: "Alex Carter",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "600",
                    }}
                >
                    AC
                </div>
                <div>
                    <div style={{ fontWeight: "600", fontSize: "14px", color: "#1f2937" }}>Alex Carter</div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>Frontend Engineer</div>
                </div>
            </div>
        ),
    },
    {
        value: "camera",
        label: "Sony Alpha",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "linear-gradient(135deg, #ff6a00, #ee0979)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                    }}
                >
                    📷
                </div>
                <div>
                    <div style={{ fontWeight: "600", fontSize: "14px", color: "#1f2937" }}>Sony Alpha A7 IV</div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>Full Frame • 33MP • 4K 60fps</div>
                </div>
            </div>
        ),
    },
    {
        value: "jp",
        label: "Japan",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "24px",
                        height: "18px",
                        borderRadius: "2px",
                        background: "white",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#bc002d"
                    }} />
                </div>
                <span style={{ fontWeight: "500" }}>Japan</span>
            </div>
        ),
    },
    {
        value: "maya",
        label: "Maya Singh",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #11998e, #38ef7d)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "600",
                    }}
                >
                    MS
                </div>
                <div>
                    <div style={{ fontWeight: "600", fontSize: "14px", color: "#1f2937" }}>Maya Singh</div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>UX Researcher</div>
                </div>
            </div>
        ),
    },
    {
        value: "watch",
        label: "Apple Watch Ultra",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                    }}
                >
                    ⌚
                </div>
                <div>
                    <div style={{ fontWeight: "600", fontSize: "14px", color: "#1f2937" }}>Apple Watch Ultra</div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>Titanium • GPS+Cellular</div>
                </div>
            </div>
        ),
    },
    {
        value: "de",
        label: "Germany",
        content: (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                    style={{
                        width: "24px",
                        height: "18px",
                        borderRadius: "2px",
                        background: "linear-gradient(to bottom, black 33%, red 33%, red 66%, gold 66%)",
                        border: "1px solid #e2e8f0",
                    }}
                />
                <span style={{ fontWeight: "500" }}>Germany</span>
            </div>
        ),
    }
];
