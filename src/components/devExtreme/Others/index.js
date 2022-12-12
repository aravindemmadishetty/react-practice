import React from "react";
import AccordionComponent from "./Accordion";
import 'devextreme/dist/css/dx.light.css';
import ChartComponent from "./Chart";
import AutoCompleteComponent from "./AutoComplete";

export default function OthersComponent(){

    return (
        <div style={{margin: "10px"}}>
            <h1>Other Components</h1>
            <AccordionComponent />
            <ChartComponent />
            <AutoCompleteComponent />
        </div>
    )
}