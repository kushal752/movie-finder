//this will be a functional component, so const MovieList........
//export it, then import in app.js and.....
// then render it inside the div in app.js with other components


//MovieList will render out the list of individual movie components
//and For us to do that we need to pass in our movie data as a PROP to our MovieList component
// goto (4) and come back from APP.js to where

//Now we need to render out individual movie components by props.movies.map(())....
//We are going to return an actual movie component (<Movie />) which will be created later

//For Every movie object that we map through from our movies prop we are goinf to return a <Movie /> component
//On our movie component we are going to pass a prop again
//Since we are rendering a list we need to make sure that we add the key prop there for react....
//....so that it doesn't give us any error messages

//also add another prop for the images of the movies(its going to be a thumbnail with image and below with view details)
//all we need is the image for this movie component
//use the movie.poster_path property of the API
//do this -----> import Movie from ./Movie


//Whenever we write JSX we need to make sure that we return that


//Add a new prop viewMovieInfo
//add another prop movieId and pass the movie.id
//We want to make use of the movie id because whenever we fire off our movieInfo component...
//...we pass it a parameter or argument which is the id of the movie,...
//...thats why we're passing another prop to our movie component called movieId
//remember Movie comes from the movies array that we are mapping through
//so we get the movie object and then we just grab the id of that movie
//then go the movie component





import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return(
    <div className="container">
        <div className="row">
            <div className="col s12">
                {
                  props.movies.map((movie, i) => {
                      return(
                        <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path}/>
                      )
                  })
                }
            </div>
        </div>
    </div>
  )

}

export default MovieList;
