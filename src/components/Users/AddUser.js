import React, {useRef} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

function AddUser(props) {

    
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    

    const addUserHandler = (event)=>{
        
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredUserAge.trim().lenth === 0){
            return;
        }
        if(+enteredUserAge < 1){
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
       
    }

    // const usernameChangeHandler = (event)=>{
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event)=>{
    //     setEnteredAge(event.target.value)
    // }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor ="username" >Username</label>
            <input 
            id = "username" 
            type = "text" 
            ref = {nameInputRef}
            />
            
            <label htmlFor ="age" >Age</label>
            <input 
            id = "age" 
            type = "number" 
            ref = {ageInputRef}
            />
            
            <Button type = "submit">Add User</Button>
        </form>
        </Card>
    )
}


export default AddUser
