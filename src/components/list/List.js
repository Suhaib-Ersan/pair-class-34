import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import ReactPaginate from "react-paginate";
import { SettingsContext } from "../../context/contex";

import Auth from "../login/auth";
import "./list.scss";
function List(props) {
    const settings = useContext(SettingsContext);
    const [pageNumber, setPageNumber] = useState(0);
    const listPerPage = settings.itemsPerPage;
    const pagesVisited = pageNumber * listPerPage;

    let displayList = "";
    if (props.incomplete.length < 1) {
        displayList = (
            <div className="toDoDivCard" style={{ width: "650px" }}>
                <div className="toDoImgDiv">
                    <img src="https://i.imgur.com/tu4bh16.png" />
                </div>
                <Card interactive={true} elevation={Elevation.TWO} style={{ borderLeft: `black 0.5rem solid` }}>
                    <p>Add items to your To Do list</p>
                    <p>
                        <small>Assigned to: you</small>
                    </p>
                    <p>
                        <small>Difficulty: 1</small>
                    </p>
                    <br />
                    <br />
                </Card>
            </div>
        );
    } else {
        displayList = (settings.showCompleted == "true" ? props.list : props.incomplete).map((ele) => {
            return (
                <div className="toDoDivCard" key={ele.id} style={{ width: "650px" }}>
                    <div className="toDoImgDiv">
                        <img src={ele.image} />
                    </div>
                    <Card interactive={true} elevation={Elevation.TWO} style={{ borderLeft: `${ele.color} 0.5rem solid` }}>
                        <div>
                            <h2>{ele.toDoText}</h2>
                            <p>
                                <small>Assigned to: {ele.assignee}</small>
                            </p>
                            <p>
                                <small>Difficulty: {ele.difficulty}</small>
                            </p>
                            <div className="comDelCon">
                                <Auth capability="update">
                                    <div className="completeBtn btn" onClick={() => props.toggleComplete(ele.id)}>
                                        Mark as completed
                                    </div>
                                </Auth>
                                <Auth capability="delete">
                                    <div className="deleteBtn btn" onClick={() => props.deleteItem(ele.id)}>
                                        Delete
                                    </div>
                                </Auth>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        });
    }

    return <Card className="listOfToDoItems">{displayList}</Card>;
}

export default List;
