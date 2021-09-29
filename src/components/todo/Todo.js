import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import { v4 as uuid } from "uuid";
import List from "../list/List";

import Form from "../form/Form.js";
import { SettingsContext } from "../../context/contex";
const ToDo = () => {
    const settings = useContext(SettingsContext);
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem);

    function addItem(event) {
        event.preventDefault();
        let defaultImages = ["https://i.imgur.com/KnZosS1.png", "https://i.imgur.com/3xI3exC.png", "https://i.imgur.com/EwapY29.jpg", "https://i.imgur.com/DZblxlc.png"];



        let color = event.target.colorRadio.value;
        let toDoText = event.target.toDoItem.value;
        let assignee = event.target.assignee.value;
        let image = event.target.imageURL.value;

        if (!toDoText) {
            console.error("to do item can't be empty");
            return;
        }
        if (!assignee) {
            assignee = "for anyone";
        }
        if (!image) {
            let math = (Math.floor(Math.random() * 5));
            console.log("addItem ~ math", math)
            console.log(defaultImages[math]);
            image = defaultImages[math]
        }
        

        let item = {
            toDoText,
            assignee,
            image,
            difficulty: event.target.difficulty.value,
            color
        }

        item.id = uuid();
        item.complete = false;

        console.log(`item >>> `,item);
        setList([...list, item]);
    }

    function deleteItem(id) {
        const items = list.filter((item) => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {
        const items = list.map((item) => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        });

        setList(items);
    }

    useEffect(() => {
        let incompleteCount = list.filter((item) => !item.complete);
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete.length}`;
    }, [list, settings.showCompleted]);

    return (
        <>
            <header style={{ width: "1000px", margin: "0 auto" }}>
                <nav className="bp3-navbar .modifier " style={{ color: "white", backgroundColor: "rgb(31 17 31)" }}>
                    <h2>
                        To Do List: {incomplete.length} Items Pending, and {list.length - incomplete.length} Completed
                    </h2>
                </nav>
            </header>
            <div className="div-flex">
                <Form addItem={addItem} />
                <div>
                    <List list={list} incomplete={incomplete} toggleComplete={toggleComplete} deleteItem={deleteItem} />
                </div>
            </div>
        </>
    );
};

export default ToDo;
