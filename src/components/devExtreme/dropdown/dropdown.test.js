import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DropdownComponent from "./Dropdown";

test("Initial list in dropdown", () => {
    render( <DropdownComponent />);
    fireEvent.click( screen.getByRole('button', {name: 'Select'}))
    expect( screen.getByText('Apple')).toBeInTheDocument();
})

//error
test("Add item in the dropdown", ()=>{
    render( <DropdownComponent />)
    const node =  screen.getByRole('combobox');
    fireEvent.click( node )
    fireEvent.change(node, {
        target: {value: 'NewDropdownValue'}
    });
    fireEvent.keyPress(node, {key: 'Enter', code: 'Enter', charCode: 13})
    fireEvent.click( screen.getByRole('button', {name: 'Select'}))
    jest.advanceTimersByTime(200);
    expect( screen.getByText('NewDropdownValue')).toBeInTheDocument();
})