import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AutoCompleteComponent from './AutoComplete'

async function sleep(time){
    await new Promise( (resolve) => {
        setTimeout(resolve, time)
    })
}

test('render autocomplete suggestions',async () => {
    render(<AutoCompleteComponent />);

    await screen.findByRole('combobox').then((element)=>{
        expect(screen.queryByRole('listbox')).toBeNull()
        element.focus();
        fireEvent.change(element, {
            target: { value: 'a'}
        })
    });
    await screen.findByRole('listbox').then((element)=>{
        expect(element).toBeInTheDocument();
    })

})