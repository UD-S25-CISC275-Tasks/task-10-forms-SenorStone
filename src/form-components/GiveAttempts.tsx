import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Input requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + Number(requested));
                }}
            >
                Gain
            </Button>
            {"Attempts: " + attempts}
        </div>
    );
}
