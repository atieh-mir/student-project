
export const StudentItem = ({name,id,searchTerm}) =>{
    const index = name.indexOf(searchTerm);
    return(
        <li key={id}>{
            index === -1 ? name :
                <p>
                    <span>{name.slice(0,index)}</span>
                    <span style={{background:"yellow"}}>{name.slice(index, index+searchTerm.length)}</span>
                    <span>{name.slice( index+searchTerm.length)}</span>
                </p>
        }</li>
    )
}