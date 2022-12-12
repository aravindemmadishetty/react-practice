import { render, within, screen, fireEvent } from "@testing-library/react";
import React from "react";
import AccordionComponent, { ref } from "./Accordion";
test('no of tabs in accourdion', () => {
    render(<AccordionComponent />);
    const tabElements = within(screen.getByRole('tablist')).getAllByRole('tab');
    expect(tabElements.length).toBe(4)
})

test('accordion content', ()=>{
    render( <AccordionComponent />);
    expect(within(screen.getByRole('tablist')).getAllByRole('tab', {hidden: false})[0]).toBeInTheDocument();
})

test('accordion default expanded view text', async ()=>{
    render( <AccordionComponent />);
    await screen.findByText(/.*ceo.*/i);
    return within(screen.getByRole('tablist')).findAllByRole('tab', {hidden: false}).then((elements)=>{
        expect(elements[0]).toHaveTextContent(/.*ceo.*/i);
    })
}) 

test('click on second option', async ()=>{
    render( <AccordionComponent />);
    await screen.findByText(/Olivia/i).then( el => {
        fireEvent.click(el);
    });
    expect( ref.current.instance._getActiveItem()[0]).toHaveTextContent(/sales.*/i);
})