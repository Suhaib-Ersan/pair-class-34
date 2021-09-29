import React, { useState } from "react";
import { Card, Button, FormGroup, InputGroup, RadioGroup, Radio } from "@blueprintjs/core";
import Auth from "../login/auth";

export default function Form(props) {
    const [color, setColor] = useState("colorless");
    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return (
        <Card className="mainItem" style={{ backgroundColor: "#76c393" }}>
            <h4>Add to do list</h4>
            <form onSubmit={() => props.addItem(event)}>
                <FormGroup labelFor="text-input" labelInfo="(required)">
                    <label>To Do item</label>
                    <InputGroup name="toDoItem" className="text-input" placeholder="Item Details" />
                    <label>Assigned To </label>
                    <InputGroup name="assignee" className="text-input" placeholder="Assignee Name" />
                    <label>image URL (optional)</label>
                    <InputGroup name="imageURL" className="text-input" placeholder="Background image URL" />
                    <div className="Difficulty">
                        <label>Difficulty </label>
                        <input defaultValue={1} type="range" min={1} max={10} name="difficulty" />
                    </div>
                    <RadioGroup name="colorRadio" label="Color select" onChange={handleColorChange} selectedValue={color} inline>
                        <Radio label="colorless" value="colorless" />
                        <Radio label="blue" value="blue" />
                        <Radio label="lightblue" value="lightblue" />
                        <Radio label="green" value="green" />
                        <Radio label="orange" value="orange" />
                        <Radio label="red" value="red" />
                        <Radio label="pink" value="pink" />
                    </RadioGroup>

                    <Auth capability="create">
                        <div>
                            <Button className="button" type="submit">
                                Add Item
                            </Button>
                        </div>
                    </Auth>
                </FormGroup>
            </form>
        </Card>
    );
}
