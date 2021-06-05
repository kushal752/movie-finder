import React from 'react';

//This component will be a functional components
//We will be returning some JSX
//Now we will create our div with classnames as container and rows
//div.container for the outer container
//create a section with some classes
//Now Create a from and a div inside it and then an input
//In input give a placeholder
//Export this components
//import it in App.js
//and then place it inside the div


//add property on form tag(onSubmit), when we press enter on search area we will run the function
//function will be coming from props
//function will be created in our app.js (3)

//we'll need access to props (put props in const SearchArea =(props)....)
//Add another property to our input(Onchange={props.handle......})
//goto app.js

const SearchArea = (props) => {
  return (
    <div className="container">
        <div className="row">
            <section className="col s4 offset-s4">
                <form action="" onSubmit={props.handleSubmit}>
                    <div className="input-field">
                        <input placeholder="Search movie" type="text" onChange={props.handleChange}/>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}


export default SearchArea;
