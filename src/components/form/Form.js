import React, { useState } from "react";
import { Card, Button, FormGroup, InputGroup, RadioGroup, Radio } from "@blueprintjs/core";
import Auth from "../login/auth";

import "./form.scss";

export default function Form(props) {
    const [color, setColor] = useState("black");
    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return (
        <Card className="mainItem">
            <h4>Add to do list</h4>
            <form onSubmit={() => props.addItem(event)}>
                <FormGroup className="formMainStuffContainer" labelFor="text-input" labelInfo="(required)">
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
                    <RadioGroup className="colorRadio" name="colorRadio" onChange={handleColorChange} selectedValue={color} inline>
                        <p>Color Select</p>
                        <Radio className="black" label="black" value="black" />
                        <Radio className="blue" label="blue" value="blue" />
                        <Radio className="lightblue" label="lightblue" value="lightblue" />
                        <Radio className="green" label="green" value="green" />
                        <Radio className="orange" label="orange" value="orange" />
                        <Radio className="red" label="red" value="red" />
                        <Radio className="pink" label="pink" value="pink" />
                    </RadioGroup>

                    <Auth capability="create">
                        <Button className="addToDoBtn" type="submit">
                            Add Item
                        </Button>
                    </Auth>
                </FormGroup>
            </form>
        </Card>
    );
}
