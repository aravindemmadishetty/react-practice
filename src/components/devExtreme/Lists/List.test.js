import { render, screen, within } from "@testing-library/react";
import React from "react";
import ListComponent from "./List";

test('Testing number of rows in the list', ()=>{
    render(<ListComponent />);
    return screen.findAllByRole('listbox').then(node => {
        within(node[0]).findAllByRole('option').then( ele => {
            expect(ele.length).toBe(16);
        })
    })
})