import DataGrid, { Column, Lookup, RowDragging } from 'devextreme-react/data-grid';
import React from 'react';

export default class Grid extends React.Component{

    constructor(props){
        super(props);
        this.dataSource = {
            store: this.props.tasksStore,
            reshapeOnPush: true
        }

        this.filterExpr = ['Status', '=', this.props.status];
        this.priorities = [{
            id: 1, text: 'Low',
          }, {
            id: 2, text: 'Normal',
          }, {
            id: 3, text: 'High',
          }, {
            id: 4, text: 'Urgent',
          }];

          this.onAdd = this.onAdd.bind(this);
    }

    onAdd(e){
        const key = e.itemData.ID;
        const values = {Status: e.toData}
        this.props.tasksStore.update(key, values).then(()=>{
            this.props.tasksStore.push([{
                type: 'update', key, data: values,
            }])
        })
    }

    render(){
        return (
            <DataGrid
                dataSource={this.dataSource}
                filterValue={this.filterExpr}
                height={440}
                width={600}
                showBorders={true}
            >
                <RowDragging 
                    data={this.props.status}
                    group="tasksGroup"
                    onAdd={this.onAdd}
                />
                <Column 
                    dataField="Subject"
                    dataType="string"
                />
                <Column
                    dataField="Priority"
                    dataType="number"
                    width={80}
                >
                    <Lookup
                        dataSource={this.priorities}
                        valueExpr="id"
                        displayExpr="text"
                    />
                </Column>
                <Column 
                dataField="Status"
                dataType="number"
                visible={false}
                />
            </DataGrid>
        )
    }
}