import { List } from "devextreme-react";
import React from "react";


function ListItem(data){
    return (
        <div>
            <b>{data.text}</b>
            <br />
            <p>{ data.color? data.color: "No color info" }</p>
        </div>
    )
}

export default function ExampleListComponent(){
    const fruits = [
        { text: "Apples", badge: 10, color: 'red' },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ]
    return(
        <>
            <List 
                dataSource={fruits}
                width={300}
                itemRender={ListItem}
            />
        </>
    )
}