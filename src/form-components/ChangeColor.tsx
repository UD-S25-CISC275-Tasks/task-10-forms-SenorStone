import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "yellow",
        "purple",
        "cyan",
        "magenta",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col: string) => (
                <Form.Check
                    key={col}
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    style={{ backgroundColor: col }}
                    label={col}
                    value={col}
                    checked={color === col}
                />
            ))}
            <div>You have chosen:</div>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
