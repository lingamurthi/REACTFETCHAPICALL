function Pagination({postPerPage,totalPosts,paginate})
{


    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i);
    }


    return(
       <nav>
        <ul className='pagination'>
           {pageNumbers.map((number,index)=>{
                return(
            <li className='page-item'>
                    <a 
                    key={index} 
                     href="#"
                    onClick={() => paginate(number)} className='page-link'>{number}</a>
            </li>
                )

                })}
           </ul>
       </nav>
    )
}
export default Pagination