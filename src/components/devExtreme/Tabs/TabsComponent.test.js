import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TabsComponent from "./TabsComponent";

test("testing the tabs", async ()=>{
    render( <TabsComponent/> );
    const tabs = [/first/i, undefined, /third/i, /fourth/i];
    await screen.findByText(/fourth/i).then( () => {
        tabs.forEach( (tab, i) => {
            if( !tab ){
                return;
            }
            fireEvent.click( screen.getByText(tab) );
            expect( screen.getByText(`You clicked ${i+1} tab`) ).toBeInTheDocument();
        })
    }) 
})