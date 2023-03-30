function Pagination({total,postsPerPage,currentPage}){
    const pageNum = Math.ceil(total/postsPerPage);
    const pages = [];
    
    for(let i = 1; i <= pageNum; i++){
      pages.push(i);
    }

  return(
    <ul className="page">
      {
        pages.map(pageNumber => 
        <li 
        key={pageNumber}
        onClick={()=>currentPage(pageNumber)}>
          {pageNumber}
        </li>)
      }
    </ul>
  )
}
export default Pagination;
