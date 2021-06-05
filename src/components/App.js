
///////////////////////////////CONSTRUCTOR/////////////////////////////////////
//The constructor in a React component is called before the component is mounted.
// When you implement the constructor for a React component,
//you need to call super(props) method before any other statement.
//If you do not call super(props) method, this. props will be undefined,
//in the constructor and can lead to bugs


//So, we can achieve two purposes with the constructor function.
//Set the initial state of the component
//Point the global context of this keyword
///////////////////////////////CONSTRUCTOR/////////////////////////////////////



//first we set up the constructor
//then we gonna set up our state
//our state will contain an array of movie objects


//(3)we will create a function here now from searchArea.js
//and we're gonna pass this function as a prop to our searchArea component

//Now we will setup our API key
//In constructor set property called this.apiKey and set this equal to the API we got from MovieDB

//WHEN USING API's, we wanna create some .env file where you have all your credentials and all your constants
//.env is private so we won't push to github repos or anything
//Put the value of API key in .env file against REACT_APP_API

//Now we will create our handleSubmit button
//then we will (fetch) i.e make request to the movieDB API
// put variable--->${this.apiKey} in the fetch method and then
//fetch method is a promise based method so we have access to (.then) method
//convert the http response to json format using json() method
//Once we get the data from the movieDB API, we want to set the state in our application
//To do that: this.setState..... for the movies array
//spread operator (...) helps in spreading out the contents from this results array into the new array
//Now we have created the handleSubmit method and now we will set that as a prop on the searchArea component
//Handle submit will take a event which is whenever we submit it and do a preventDefault
//i.e. we will add preventDefault whenever we submit the form

//'e' is the argument of an event handler you attach to a certain event on a certain component
//Events are objects with certain properties, and e.target almost always represents a DOM element.
//Thus e.target.value is the value property of some DOM element,
 //in this case that means the text entered in the search input.


//e.target.value will be the whatever the key stroke or the key value is or whatever we're typing


// Now we create the handleChange method
//It will handle the change when we type in the search area component
//again we will add another prop to the searchArea component i.e. this.handleChange


//(4) In our movieList component we pass a prop movies={this.state.movies}
//The movie data is coming from our state in our App component so we use {this.state.movies}



//////////////////////////////////////PAGINATION//////////////////////////////////////////
//add (totalResults) and (currentPage) inside this.state
//Create the method (nextPage) which will be fired when we click next page or next page number
//Whenever it fires we will make a fetch an AJAX request to the movieDB API
//In the fetch request inside next page we add a page parameter(&page=${pageNumber})
//and then add the pageNumber argument that we pass in to the method
//inside (this.setState) add the (currentPage: pageNumber)
//Now in the handle submit button we update the totalResults property in our state

//Now we create a component called PAGINATION, first export it
//create a varibale inside render called numberPages which will hold the number of pages based on the number of movies that we get from the API
//now we add pagination inside render, we add a conditional there
//if total movies is greter than 20 then we add pagination
//we then add methods (PROPS) like (pages={numberPages}) inside the pagination component
//if no. of movies is <=20 then we just display an empty string i.e. we won't display anything


/////////////////////////////VIEW MOVIE DETAILS COMPONENT//////////////////////////////////
//add currentMovie property to the this.state
//Now we will build some methods, first one will be viewMovieInfo
//this method will set current movie to the one on which we click on
//viewMovieInfo will take an (id), this will be the id of the movie
//filter function to check if the given id matches with the required movie id
//newCurrentMovie, it will be set to the movie it clicked if a matching id is found else it will be set to null
//then perform the given operation -----> this.setState ({currentMovie: filteredMovie})


///////////////////////CLOSE MOVIE INFO COMPONENT//////////////////////////////////
//set the currentMovie to null----> this.setState({currentMovie: null})


//Now do some editing in the render components
//we need to make a process, which will show the home page with movies if currentMovie is null
//else we will display the view details component
//Now add a prop to the MovieList component, it will be viewMovieInfo
//pass that method as a prop to the movieList and then we're going to pass from the movieList,.....
//.... that prop method down to the Movie component
//i.e. click on the Movie component and fire off that viewMovieInfo method
//put all these things inside a div and put that div inside the condtion statement
//if true then show the div otherwise show the <MovieInfo /> component
// pass the method closeMovieInfo inside the <MovieInfo /> component
//after that go to MovieList.js to pass the defined props




import React, { Component } from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Pagination from './Pagination'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], totalResults: data.total_results})
      })
      e.preventDefault()
  }

  handleChange = (e) => {
      this.setState({searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber, totalResults: data.total_results})
      })
  }


  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }



render() {
  let numberPages = Math.floor(this.state.totalResults / 20);

  return (
    <div className="App">
        <Nav />
        {this.state.currentMovie === null ? <div> <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie}closeMovieInfo={this.closeMovieInfo} />}
        {this.state.totalResults > 20 && this.currentMovie===null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
    </div>
  );
}
}

export default App;
