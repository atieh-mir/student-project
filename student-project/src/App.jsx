import { useState } from 'react'


function App() {
  const [value, setValue] = useState('')
  const [students,setStudents] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);


  const handleOnChangeValue = (e) => {
    setValue(e.target.value);
    
  }
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    setStudents([...students, {id:students.length+1, name: value}])
    
  }
  const handlerSearchTerm = (e) =>{
    setSearchTerm(e.target.value)
  }
  return (
   <div>
    <h1>Students list</h1>
    <form onSubmit={handleOnSubmitForm}>
      <input  placeholder='Enter ypur name...' value={value} onChange={handleOnChangeValue}/>
      <button type='submit'>Add</button>
    </form>
    <div>
      <input onChange={handlerSearchTerm} placeholder='Search' />
    </div>
    <ul>
    
        {students
        .filter(({name})=>name.includes(searchTerm))
        .map(({id, name})=><li key={id}>{name}</li>
        
        )}
     
    </ul>
   </div>
  )
}

export default App
