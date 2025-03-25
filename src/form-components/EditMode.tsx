import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    label="Toggle Edit Mode"
                    checked={editing}
                    onChange={updateEditing}
                />
            </div>
            {editing && (
                <div>
                    <Form.Group>
                        <Form.Label>Input Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
            {editing && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
            {isStudent ? name + " is a student" : name + " is not a student"}
        </div>
    );
}
