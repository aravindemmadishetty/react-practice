import { Tabs } from "devextreme-react";
import { Item } from "devextreme-react/tabs";
import notify from 'devextreme/ui/notify';
import React  from "react";

function renderFourth(){
    return (
        <div id="fourth">Fourth</div>
    )
}
export default function TabsComponent(){

    const showMessage = (id) => {
        notify({
            message: `You clicked ${id} tab`,
            width: 250
        }, 'info', 500);
    }

    const onItemClick = (e) => {
        showMessage(e.itemIndex + 1);
    }
    return (
        <Tabs
            width={300}
            selectedIndex={2}
            selectionMode="multiple"
            onItemClick={onItemClick}
        >
            <Item
                badge="First"
            >
            </Item>
            <Item
                text="second"
                disabled={true}
            > 
            </Item>
            <Item
                text='Third'
                icon='favorites'
            >
            </Item>
            <Item
                render={renderFourth}
            ></Item>
        </Tabs>
    )
}