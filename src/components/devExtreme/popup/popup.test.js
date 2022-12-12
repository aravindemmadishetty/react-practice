import { findAllByText, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PopupComponent from "./popup";

test("Open Popup", async () => {
    render( <PopupComponent /> );
    fireEvent.click( screen.getByText('Open popup') );
    await screen.findAllByText( 'Lorem Ipsum', {exact: false}).then((el)=>{
        el.forEach( e=> expect(e).toBeInTheDocument());
    })
    
})

test("Close Popup", async ()=> {
    render( <PopupComponent />);
    fireEvent.click( screen.getByText('Open popup') );
    await screen.findByRole( 'button', {name: "Close"}).catch( (err) => {
        throw err.message;
    })
    expect(screen.getByRole('button', {name: "Close popup"})).toBeInTheDocument();
    fireEvent.click(screen.getByRole( 'button', {name: "Close"}));
    expect(screen.getByRole('button', {name: "Open popup"})).toBeInTheDocument();
})