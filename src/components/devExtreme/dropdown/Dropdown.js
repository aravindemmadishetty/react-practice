import { DropDownBox, List } from "devextreme-react";
import React, { useCallback, useRef, useState } from "react";
import 'devextreme/dist/css/dx.light.css';

const fruits = ['Apple', 'Orange', 'Banana', 'Pineapple', 'Guava']
export default function DropdownComponent(){
    const [data, setData] = useState(fruits)
    const [value, setValue] = useState('');
    const listRef = useRef(null);
    const dropDownBoxRef = useRef(null);
    const onItemDeleting = (e) => {
        if( data.length === 1 ){
            e.cancel = true
        }
    }

    const onValueChanged = (e) => {
        setValue(e.value)
    }

    const onSelectionChanged = useCallback((arg) => {
        setValue(arg.addedItems[0]);
        dropDownBoxRef.current.instance.close();
    }, []);

    const addItem = useCallback( () => {
        setData( [...data, value]);
        setValue('');
        listRef.current.instance.reload();
    }, [data, value]);

    return (
        <DropDownBox
            onValueChanged= {onValueChanged}
            value = { value }
            ref = { dropDownBoxRef}
            dataSource= {data}
            acceptCustomValue={true}
            openOnFieldClick={false}
            onEnterKey={addItem}
        >
            <List 
                dataSource={data}
                onItemDeleting={onItemDeleting}
                ref={listRef}
                allowItemDeleting={true}
                selectionMode="single"
                onSelectionChanged={onSelectionChanged }
            />
        </DropDownBox>
    )
}