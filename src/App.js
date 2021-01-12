
import './App.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import { useHistory} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import _ from 'lodash';
import Card from 'react-bootstrap/Card';  
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';



const App=()=> {
  const [items, setItems] = useState([]);//list of movies from the API
  const [filteredMovies, setFilteredMovies] =useState([]);//filtered movie list
  const [error, setError] = useState(null);
  const [itemclicked, setItemClicked] = useState(false);//for conditioonal rendering
  const [val, setval] = useState("");//for search criteria
 
 
  const history = useHistory();

  const handleClick = (index,types) =>
  {   
    
    
history.push('/details',{movieitemlist:types[index]});// pass the movie list as props 

  }
  const handleChange = (e) => // for search criteria
  {
  
   
    setval(val => ({...val, [e.target.name]: e.target.value}));//merge the values using spread operator in hook
     

    
  }
  
  const handleSearch=(e)=>//trigerred when search button is clicked
  {  
    
    setItemClicked(true); 

    //using lodash to get the filterd movie based on  search criteria
if((val.Year) && (val.Genre))
{
  var filteredarray = _.filter(items, function(obj) { return obj.productionYear===Number(val.Year) && obj.genre===(val.Genre )});
 
  setFilteredMovies(filteredarray)
}

else if(val.Genre)
{
  var filteredarray = _.filter(items, function(obj) {return obj.genre===(val.Genre )});
 
     setFilteredMovies(filteredarray)
}

else if(val.Year)
{
  var filteredarray = _.filter(items, function(obj) { return obj.productionYear===Number(val.Year)});
    
 
 setFilteredMovies(filteredarray)

}
else{
  setFilteredMovies(items)
  
}


}
 

 let moviearray;
{itemclicked ? moviearray=filteredMovies : moviearray=items} // rendering based on search

 
const listItems = moviearray.map((item,index) =>
 
<div key={index} className="App">

 <Card  as="a"  border="primary" style={{ width: '18rem',cursor:"pointer" } } onClick={()=> handleClick(index,moviearray)}> 


    <Card.Header key={index}>{item.image}</Card.Header>
    <Card.Body>

      <Card.Title>{item.name}</Card.Title>  
    </Card.Body>
  </Card> 

 
  <br />
  

</div>
 
  );



  
	const getMovieList = async () => {
	  fetch("https://sometimes-maybe-flaky-api.gdshive.io/")
  .then(res => res.json())
     .then(

       (result) => {
         
         setItems(result); // set result array
         
        },
   
       (error) => {
       
          
       setError(error);
        
    }
		
	)
  }

  useEffect(() => {
		getMovieList();
	}, []);
 
  if (error) {
    
    return <div><h2>Error: {error.message}</h2></div>;
  }
  

  return (
    
  

    <div>
    

<div>
<ul className="Navbar">

<h1> Trending Movies</h1>

<li><Form className="Dropdown" >
<Form.Group controlId="yearId">
    <Form.Label>Select Year</Form.Label> 
    <Form.Control as="select"  name="Year" onChange={handleChange}   >
 <option></option>
      <option>2020</option>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
      <option>2010</option>
      <option>2009</option>
      <option>2008</option>
      <option>2007</option>
      <option>2006</option>
      <option>2005</option>
      <option>2004</option>
      <option>2003</option>
      <option>2002</option>
      <option>2001</option>
      <option>2000</option>
     
    </Form.Control>
  
  </Form.Group>

<Form.Group controlId="GenreId" >
    <Form.Label>Select Genre</Form.Label> 
    <Form.Control as="select"  name="Genre" onChange={handleChange} >
   
    <option></option>
      <option>Action</option>
      <option>Fantasy</option>
      <option>Animation</option>
      <option>Comedy</option>
      <option>Adventure</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={handleSearch}>
    Search
  </Button>
</Form>

</li>


<li>{listItems}</li>
</ul>




</div>

 </div>
  
  );
}

export default  App;
