import { useState } from 'react'
import Form from './component/Form';
import { Search } from './component/Search';
import { StudentList } from './component/StudentsList';

function App() {
  const [value, setValue] = useState('')
  const [students,setStudents] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);
  

  const handleOnChangeValue = (e) => {
    setValue(e.target.value);
    
  }
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
   if(value.trim()){
    setStudents([...students, {id:students.length+1, name: value}])
    setValue('');
   }else{
    alert("Please enter your name...")
   }
    
  }
  const handlerSearchTerm = (e) =>{
    setSearchTerm(e.target.value)
  }
  return (
   <div>
    <Form
    onAdd={handleOnSubmitForm}
    changeValue={handleOnChangeValue}
    value={value}
    />
    <Search 
    searchStudent={handlerSearchTerm}
    />
   <StudentList
              students={students}
              searchTerm={searchTerm}
          />
   </div>
  )
}

export default App
