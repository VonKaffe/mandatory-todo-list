import _ from 'lodash';
import React from 'react';


export default class TodosList extends React.Component {

    render () {


        if (this.props.todos.length > 0){
            return (<ul>
                    {
                        this.props.todos.map((item,key)=>{
                            return (
                                <li key={key}>
                                    <button type="button" onClick={()=>this.props.fnDeleteTask(item.id)}>Delete</button>
                                    <input id={item.id} onChange={(e)=>this.props.fnHandleChecked(item.id,e)} type="checkbox"/>
                                    {item.task}
                                </li>
                            )
                        })
                    }

                </ul>
            );
        }

        return null
    }
}