import React, { useCallback, useState } from "react";
import 'devextreme/dist/css/dx.light.css';
import { employees } from "./employeeData";
import { DataGrid,Column, ColumnChooser, FilterRow, SearchPanel, GroupPanel, Editing, Selection, Summary, GroupItem, Grouping, Toolbar, Item, MasterDetail } from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import DataGridComponent from "./Datagrid";
const renderGridCell = data => {
    return <div style={{color: 'blue'}}>{data.text}</div>
}
export const dgRef = React.createRef();

export const ExampleComponent = ()=>{
    const [selectedEmployee, setSelectedEmployee] = useState();
    const dxref = React.createRef();
    const selectEmployee = useCallback((e)=>{
        const x = e.component.byKey(e.currentSelectedRowKeys[0])
        x.done(employee => {
            setSelectedEmployee(employee)
        });
    }, [])
    const customizeColumns = useCallback( columns =>{
        columns[0].width = 200;
        columns[1].width = 200;
    }, [])

    const customizeCellInfo = useCallback( cellInfo =>{
        return cellInfo.value + ' new';
    }, [])

    const [expanded, setExpanded] = useState(true);

    return (
        <div className="dx-app">
            <DataGrid
                ref={dgRef}
                customizeColumns={customizeColumns}
                dataSource={employees}
                keyExpr = "EmployeeID"
                allowColumnReordering={true}
                allowColumnResizing={true}
                columnAutoWidth={true}
                onSelectionChanged={selectEmployee}
                columnHidingEnabled={true}
            >
                <Column 
                    dataField="FullName" 
                    customizeText={customizeCellInfo}
                    cellRender={renderGridCell}
                    ></Column>
                <Column dataField="Position"></Column>
                <Column
                    dataField="BirthDate"
                    dataType="date">
                </Column>
                <Column
                    dataField="HireDate"
                    dataType="date"
                    hidingPriority={1}
                >
                </Column>
                <Column dataField="City" />
                <Column dataField="Country" sortOrder="asc" groupIndex={0}></Column>
                <Column 
                    dataField="Address" 
                    hidingPriority={0}
                />
                <Column dataField="HomePhone" />
                <Column dataField="PostalCode" visible={false}/>
                <ColumnChooser enabled={true} mode="select" />
                <FilterRow visible={true}/>
                <SearchPanel visible={true}/>
                <GroupPanel visible={true}/>
                <Editing 
                    mode="popup"
                    allowAdding={true}
                    allowDeleting={true}
                    allowUpdating={true}
                />
                <Selection mode="single"/>
                <Summary>
                    <GroupItem 
                        summaryType="count"
                    />
                </Summary>
                <Grouping autoExpandAll={expanded} />
                <Toolbar>
                    <Item name="groupPanel" />
                    <Item location="after">
                        <Button 
                            text={ expanded ? "Collapse All": "Expand All"}
                            width={136}
                            onClick={() => setExpanded( prevExpanded => !prevExpanded)}
                        />
                    </Item>
                    <Item name="addRowButton" showText="always" />
                    <Item name="exportButton" />
                    <Item name="columnChooserButton" />
                    <Item name="searchPanel" />
                </Toolbar>
                <MasterDetail
                    enabled={true}
                    component={DetailSection}
                />
            </DataGrid>
            <SelectedEmployee employee={selectedEmployee} />
            <DataGridComponent />
            <button id="click" onClick={()=> dataGridAddRow(dgRef)}>Add Row</button>
        </div>
        
    )
}

const dataGridAddRow = (dxref)=>{ 
    dxref.current.instance.addRow();
    setTimeout( ()=> dxref.current.instance.saveEditData() , 300 );
}

function SelectedEmployee(props){
    if(props.employee){
        return (
            <p id="selected-employee">
                Selected Employee: {props.employee.FullName}
            </p>
        )
    }
    return null
}

function DetailSection(props){
    const employee = props.data.data;

    return(
        <div>
            <img
                className="employee-photo"
                alt={employee.FullName}
                src={employee.Photo}
            />
            <p className="employee-notes">{employee.Notes}</p>
        </div>
    )
}
 