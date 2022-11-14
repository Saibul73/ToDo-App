const UpdateForm = ({UpdateTask,changeTask,updateData,cancelUpdate})=>{
    return(
        <>
        <div className='row'>
        <div className='col'>
          <input
          value={ updateData && updateData.title }
          onChange={ (e)=> changeTask(e) } 
          className='form-control form-control-lg' />  
        </div>
        <div className='col-auto'>
          <button 
          className='btn btn-success'
          onClick={()=>UpdateTask()}
          >Update</button>
        </div>
        <div className='col-auto'>
          <button 
          onClick={()=>cancelUpdate()}
          className='btn btn-warning'>Cancel</button>
        </div>
      </div>
      <br />
      </>
    )
}

export default UpdateForm;