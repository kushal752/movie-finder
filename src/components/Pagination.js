//we are basically going to render out the pagination bar
// create const pageLinks = [], it will be the number link on the pagination bar
//array will hold all the li tags for that particular page number
//create a for loop to go through all the pageLinks
//create a variable active, it will contain a string called active which will be highlited if it is the current page
//push the <li> tag inside pageLinks array
//'waves-effect' is the class from google materialize class
//we will add the active class so that if the current page is equal to the i then we set it active
//add method onClick, we will do a function
//whenever we click on that particular page link number we will run that nextPage method
//add an anchor tag, give it the value of i, which will be the number for the page
//Now we will return rest of the UI

//For props.currentPage>1, we show previous pages
//copy the <li> tag from above and past it, remove the key part from it
//For props.currentPage<last page, we show next pages

import React from 'react';

const Pagination = (props) => {
  let pageLinks = []

  for(let i = 1; i <= props.pages + 1; i++){
      let active = props.currentPage === i ? 'active' : '';

      pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
  }

  return(
    <div className="container">
      <div className="row">
          <ul className="pagination">
            {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
            {pageLinks}
            {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}

          </ul>
      </div>
    </div>
  )

}

export default Pagination;
