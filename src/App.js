import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import AddTaskForm from './components/addTAskForm.jsx';
import UpdateForm from './components/updateForm.jsx';
import ToDo from './components/toDo.jsx';

function App() {
  // todo task state;
  const [toDo,setToDo]=useState([])

  // temp state;
  const [newTask,setNewTask]=useState('')
  const [updateData,setUpdateData]=useState('')

  //add task
  const addTask=()=>{
    if(newTask){
      let num = toDo.length+1
      let newEntry = {id:num,title:newTask,status:false}
      setToDo([...toDo,newEntry])
      setNewTask('')
    }
  }

  //delete Task
  const deleteTask=(id)=>{
    let newtasks = toDo.filter(task => task.id !==id)
    setToDo(newtasks)
  }

  //mark task done
  const markDone=(id)=>{
    let newTask = toDo.map( task => {
      if(task.id === id){
        return({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask)
  }

  //cancel update
  const cancelUpdate=()=>{
    setUpdateData('')
  }

  //change task
  const changeTask=(e)=>{
    let newEntry = {
      id : updateData.id,
      title : e.target.value,
      status : updateData.status?true:false
    }
    setUpdateData(newEntry)
  }

  // update Task
  const UpdateTask  =()=>{
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id)
    let updatedObject = [...filterRecords,updateData]
    setToDo(updatedObject)
    setUpdateData('')
  }
  return (
    <div className="container App">

      <br /><br />
      <h2 >To Do</h2>
      <br /><br />

      {/* Update task */}
      {updateData && updateData.title ? (
        <UpdateForm
        UpdateTask ={UpdateTask}
        changeTask ={changeTask}
        updateData ={updateData}
        cancelUpdate ={cancelUpdate}
        />
      ):(
        <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        />
      )}
    
      {/*display todos*/}

      {toDo && toDo.length ?'':'No Tasks... '}

      <ToDo
      toDo ={toDo}
      markDone ={markDone}
      setUpdateData ={setUpdateData}
      deleteTask  ={deleteTask}
      />

    </div>
  );
}

export default App;
