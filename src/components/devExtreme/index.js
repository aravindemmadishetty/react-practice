import React from "react";
import DropdownComponent from "./dropdown/Dropdown";
import { ExampleComponent } from "./datagrid/ExampleComponent";
import PopupComponent from "./popup/popup";
import TabsComponent from "./Tabs/TabsComponent";

export default function DevExtremeComponents(){
    return (
        <>
            <ExampleComponent />
            <DropdownComponent />
            <PopupComponent/>
            <TabsComponent />
        </>
    )
}