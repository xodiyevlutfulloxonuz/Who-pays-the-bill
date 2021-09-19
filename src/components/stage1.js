import React, {useContext, useRef,useState} from "react";
import {Button,Form,Alert} from 'react-bootstrap'
import {MyContext} from "../context";

const Stage1=()=>{
    const textInput=useRef()
    const context=useContext(MyContext)
    const [error,setError]=useState([false,''])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const value=textInput.current.value
        const validate=validateInput(value)
        if(validate){
            setError([false,''])
            context.addPlayer(value)
            textInput.current.value=null

        }


    }
    const validateInput=(value)=>{
        if(value===''){
         setError([true, 'Sorry, you need add something'])
            return  false
        }
        if(value.length<3){
            setError([true ,'Min length mus be 3'])
            return false
        }
        return true

    }
    console.log(context)


    return(
        <div>
        <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Add player name" name="player" ref={textInput}>

                </Form.Control>
            </Form.Group>
            {
               error[0]?<Alert variant="danger mt-2">{error[1]}</Alert>
                   :''
            }
            <Button className="m-2 miami" variant="primary" type="submit">Add Player</Button>
            {
                context.state.players && context.state.players.length>0?
                    <div>
                        <ul className="list-group">
                            {
                             context.state.players.map((item,index)=>(
                                 <li key={index} className='list-group-item d-flex justify-content-between
                                 align-items-center list-group-item-action'>{item}
                                 <span className="badge badge-danger" onClick={()=>context.removePlayer(index)}>x</span>
                                 </li>
                             ))
                            }
                        </ul>
                        <div className="action_button" onClick={()=>context.next()}>
                         NEXT
                        </div>
                    </div>:''
            }
        </Form>

        </div>
    )
}
export default Stage1
