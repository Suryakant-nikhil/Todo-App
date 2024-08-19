import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{ task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos(()=>{
            return [...todos,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo(" ");
    };

    let updateTodoTask=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTask=(id)=>{
        setTodos((prevTosos)=>todos.filter((prevTosos)=>prevTosos.id!=id));
    }
    let upperCaseAll=()=>{
        setTodos((prevTosos)=>(
            prevTosos.map((todo)=>{
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            })
        ));
    };
    let upperCaseOne=(id)=>{
        setTodos((prevTosos)=>(
            prevTosos.map((todo)=>{
                if(todo.id==id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            }else{
                return todo;
            }
            })
        ));
    };
    let MarkAsDone=(id)=>{
        setTodos((prevTosos)=>(
            prevTosos.map((todo)=>{

                if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo;
            }
            })
        ));
    };
    let MarkAsDoneAll=()=>{
        setTodos((prevTosos)=>(
            prevTosos.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,
                };
           
            })
        ));
    };
    return(
        <>
        <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoTask} />
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br /> <br />
      <hr />
        <h4>Task Todo</h4>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                   <span style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</span> 
                   &nbsp; &nbsp;
                   <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                   <button onClick={()=>upperCaseOne(todo.id)}>UpperCaseOne</button>
                   <button onClick={()=>MarkAsDone(todo.id)}>Mark AS Done</button>
                   </li> 
            ))}
        </ul>
        <button onClick={upperCaseAll}>UpperCse All</button>
        <button onClick={MarkAsDoneAll}>MarkAsDoneAll</button>
        </>
    )
}