import React, { useState } from 'react';
import TreeMenu from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';

export const SimpleTreeComponent = () => {
    const [state, setState] = useState({
        key: '',
        name: '',
        age: '',
        manager: '',
        project:''
    });
    const treeData = {
        manager1 : {
            label: "Manager 1",
            index: 0,
            nodes: {
                project1: {
                    label: "Project 1",
                    index: 0,
                    nodes:{
                        r1: {
                            label: "Resource 1",
                            index: 0,
                            details: {
                                name: "name1",
                                age: "age1",
                            }
                        },
                        r2: {
                            label: "Resource 2",
                            index: 1,
                            details: {
                                name: "name2",
                                age: "age2",
                            }
                        }
                    }
                },
                project2: {
                    label: "Project 2",
                    index: 1,
                    nodes:{
                        r1: {
                            label: "Resource 1",
                            index: 0,
                            details: {
                                name: "name1",
                                age: "age1",
                            }
                        },
                        r2: {
                            label: "Resource 2",
                            index: 1,
                            details: {
                                name: "name2",
                                age: "age2",
                            }
                        }
                    }
                }
            }
        },

        manager2:{
            label: "Manager 2",
            index: 1,
            nodes: {
                project1: {
                    label: "Project 1",
                    index: 0,
                    nodes:{
                        r1: {
                            label: "Resource 1",
                            index: 0,
                            details: {
                                name: "name1",
                                age: "age1",
                            }
                        },
                        r2: {
                            label: "Resource 2",
                            index: 1,
                            details: {
                                name: "name2",
                                age: "age2",
                            }
                        }
                    }
                },
                project2: {
                    label: "Project 2",
                    index: 1,
                    nodes:{
                        r1: {
                            label: "Resource 1",
                            index: 0,
                            details: {
                                name: "name1",
                                age: "age1",
                            }
                        },
                        r2: {
                            label: "Resource 2",
                            index: 1,
                            details: {
                                name: "name2",
                                age: "age2",
                            }
                        }
                    }
                }
            }
        },
    }
    return (
        <div style={{
            display: "flex",

        }}>
            <TreeMenu 
                style={{
                    width: "20%",
                }}
                data={treeData}
                onClickItem={({ key, label, ...props }) => {
                    const [manager, project] = props.parent.split('/')
                    if(props.details?.name){
                        setState({
                            ...props.details,
                            key,
                            manager,
                            project
                        })
                    }else{
                        setState({
                            name: '',
                            age: '',
                            manager: '',
                            project: ''
                        })
                    }
                }}
                >
            </TreeMenu>
            {
                state.name && 
                <div style={{
                    width: "auto",
                    flexGrow: 4,
                    background: "#eee"
                }}>
                    <p>Name: {state.name}</p>
                    <p>Age: {state.age}</p>
                    <p>Project: {state.project}</p>
                    <p>Manager: {state.manager}</p>
                </div>
            }     
        </div>
    );
}


