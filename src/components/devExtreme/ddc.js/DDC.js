import React from "react";
import Grid from "./Grid";
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
const url = 'https://js.devexpress.com/Demos/Mvc/api/DnDBetweenGrids';

const tasksStore = AspNetData.createStore({
  key: 'ID',
  loadUrl: `${url}/Tasks`,
  updateUrl: `${url}/UpdateTask`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

export default function DDC(){
    return (
        <>
            <h1>Drag and drop between Datagrids</h1>
            
            <div className="tables">
                <div className="column">
                    <Grid tasksStore = {tasksStore} status = {1}/>
                </div>
                <div className="column">
                    <Grid tasksStore = {tasksStore} status = {2} />
                </div>
            </div>
        </>
    )
}