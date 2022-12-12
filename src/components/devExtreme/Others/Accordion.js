import { Accordion } from "devextreme-react";
import React from "react";
import { employees } from "./data";

export const ref = React.createRef(null);
export default class AccordionComponent extends React.Component{
    customTitle(data){
        return data.FirstName + " " + data.LastName;
    }

    customItem(data){
        return data.Position + " from " + data.State;
    }

    render(){
        return (
            <>
                <h2>Accordion</h2>
                <Accordion 
                ref = {ref}
                dataSource={employees}
                itemRender={this.customItem}
                itemTitleRender = { this.customTitle }
                />
            </>
        )
    }
}