import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
import React, { useCallback } from "react";

export default function DataGridComponent(){
    const customizeColumns = useCallback( columns =>{
        columns[0].width = 100;
        columns[1].widht = 210;
    }, [])
    return (
        <div style={{marginTop: '10px', borderTop: '10px'}}>
            <DataGrid customizeColumns={customizeColumns} >
                <Column dataField="Title" caption="Position" />
                <Column dataField="Fullname" width={300}/>
                <Column dataField="Company" />
                <Column dataField="City" />
            </DataGrid>
        </div>
        
    )
}