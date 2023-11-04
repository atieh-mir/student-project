import { StudentItem } from "./StudentItem";

export const StudentList = ({students,searchTerm}) =>{

    return(
        <ul>
    
        {students
        .filter(({name})=>name.includes(searchTerm))
        .map(({id, name})=>
        <StudentItem id={id} name={name} searchTerm={searchTerm} />
        )}
     
    </ul>
    )
}