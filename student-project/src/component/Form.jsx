

const Form = ({onAdd,changeValue,value}) =>{


    return(
        <form onSubmit={onAdd} className='form--student'>
     <h1 className='form--h1'>Students list</h1>
      <input className='form--add' placeholder='Enter ypur name...' value={value} onChange={changeValue}/>
      <button className='form--btn' type='submit'>Add</button>
    </form>
    )
}
export default Form;