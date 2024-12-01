import React from "react";

function People(props) {

    const showAgeDes = (age) => {
        let description = "";
        if (age < 3) {
            description = "Baby"
        } else if (age < 12) {
            description = "Child";
        } else if (age < 18) {
            description = "teenager";
        } else {
            description = "adult";
        }
        return "You are an " + description + "!";
    }
    return (
        <div style={{paddingTop: "10px", color: props.age > 30 ? "red" : "green", fontStyle: "italic"}}>
            <div>Name: {props.name}</div>
            <div> Age: {props.age}</div>
            <div> Description: {showAgeDes(props.age)}</div>
        </div>
    )
}

export default People;