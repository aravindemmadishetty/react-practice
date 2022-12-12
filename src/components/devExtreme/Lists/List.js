import React, { useRef } from "react";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { ItemDragging, List } from "devextreme-react/list";
import { products } from "./products";
import DataSource from "devextreme/data/data_source";
import ExampleListComponent from "./exampleList";

const dataSource = new DataSource({
    store: products,
    group: "Category",
    paginate: true,
    pagesize: 10,
})

export default function ListComponent(){
    const ref = useRef(null);
    console.log(ref);
    return (
        <div className="list-component" style={{margin: "auto"}}>
            <h1>List Component</h1>
            <List id="list"
                dataSource={dataSource}
                displayExpr="Name"
                selectionMode="single"
                grouped={true}
                searchEnabled={true}
                searchMode="contains"
                allowItemDeleting={true}
                width = {800}
                height = {400}
                pageLoadMode = "scrollBottom"
                collapsibleGroups={true}
                ref = {ref}
            >
                <ItemDragging 
                    allowReordering={true}
                />
            </List>
            <ExampleListComponent />
            <h2>Other Example</h2>
        </div>
    )
}