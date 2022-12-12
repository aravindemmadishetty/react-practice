import { Autocomplete } from "devextreme-react";
import React from "react";
import { employeesTasks } from "./data";
import DataSource from 'devextreme/data/data_source';

export default function AutoCompleteComponent(){
    const dataSource = new DataSource({
        store: {
            type: 'array',
            data: employeesTasks,
            key : 'ID',
        },
        group: 'Assignee',
    })
    return (
        <Autocomplete 
            dataSource={dataSource}
            valueExpr="Subject"
            grouped= {true}
            label = "Enter your input"
            labelMode="floating"
            showClearButton={true}
        />
    )
}