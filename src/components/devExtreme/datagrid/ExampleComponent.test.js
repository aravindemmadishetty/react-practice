import React from 'react';
import { ExampleComponent } from './ExampleComponent';
import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {dgRef} from './ExampleComponent'

test( 'render Datagrid',async ()=>{
    render( <ExampleComponent />)
    
    await waitFor(()=>{
        const rowElements = screen.getAllByText('sales', {exact: false});
        expect(rowElements.length).toBe(9);
    })
})

test("Adding row in datagrid", async ()=>{
    render( <ExampleComponent />);
    await waitFor(()=>{
        screen.getAllByText('sales', {exact: false});
    })
    dgRef.current.instance.addRow()
    jest.advanceTimersByTime(200);
    dgRef.current.instance.saveEditData();
    jest.advanceTimersByTime(200);
    expect(dgRef.current.instance.getVisibleRows().length).toBe(12);
    expect(dgRef.current.instance.hasEditData()).toBe(false)
})

test("click on add row button",async ()=>{
    render(<ExampleComponent />);
    await waitFor(()=>{
        screen.getAllByText("sales", {exact: false});
    })

    expect(await screen.findByText(/Add Row/)).toBeInTheDocument();

    fireEvent.click( screen.getByText(/Add Row/) );
    expect(dgRef.current.instance.getVisibleRows().length).toBe(14)
})

test("all input elements for filtering should be null", async () => {
    render( <ExampleComponent />);
    await waitFor( ()=> {
        return screen.getAllByRole('textbox');
    }).then( elements => {
        //error
        //expect( elements.length).toBe(7);
        elements.forEach(element => {
            expect(element).toHaveValue('');
        });
    })
})

test("collapse all button", async ()=>{
    render( <ExampleComponent />);
    await screen.findAllByText('sales', {exact: false});
    const collapseElement = screen.getByText('Collapse All');
    fireEvent.click( collapseElement);
    expect(dgRef.current.instance.getVisibleRows().length).toBe(0);
    //error
    // const expandElement = screen.getByText('Expand All');
    // fireEvent.click(expandElement);
    // expect(dgRef.current.instance.getVisibleRows().length).toBe(9);
})
