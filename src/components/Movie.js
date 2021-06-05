//can see more about "cards" on materializeCSS.com
//we will add a default image if there is not a image for the movies
//we will do some inline styling
//In JSX we use style={}.....
//Two curly braces inside style so it will be an object
//img src can be fond on MovieDB website and we need to add it to whatever path we get from the API data
//We then add some javascript, we added backticks instead of quotes
//add the image path (${props.image}) that we get from the API data


//Add onClick for the view details button, pass an anonymous function which gets triggered when clicked
//then add props.viewMovieInfo, pass the argument props.movieId
//then go to movieInfo.js


import React from 'react';


const Movie = (props) => {
  return(
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {
              props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width: "100%", height: 360}} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width: "100%", height: 360}} />
            }
        </div >

        <div className="card-content">
            <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
        </div>
      </div>
    </div>
  )
}

export default Movie;
