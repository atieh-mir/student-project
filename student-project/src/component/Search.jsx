

export const Search = ({searchStudent}) => {
    return(
        <div>
        <input className='search--box' onChange={searchStudent} placeholder='Search' />
      </div>
    )
}