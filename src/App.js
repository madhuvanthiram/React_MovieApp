
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import { useHistory} from "react-router-dom";

import _ from 'lodash';
import SearchBar from './SearchBar';




const App=()=> {
  const [items, setItems] = useState([]);//list of movies from the API
  const [filteredMovies, setFilteredMovies] =useState([]);//filtered movie list
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemclicked, setItemClicked] = useState(false);//for conditioonal rendering
  const [val, setval] = useState("");//for search criteria
  //


 
  const history = useHistory();

  const handleClick = (index,movieList) =>
  {   
    
    
history.push('/details',{movieitemlist:movieList[index]});// pass the movie list as props 

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
  filteredarray = _.filter(items, function(obj) {return obj.genre===(val.Genre )});

     setFilteredMovies(filteredarray)
}

else if(val.Year)
{

 filteredarray = _.filter(items, function(obj) { return obj.productionYear===Number(val.Year)});
    
 setFilteredMovies(filteredarray)


}


else{
  setFilteredMovies(items)


  
}






}
 

 let moviearray;
{itemclicked ? moviearray=filteredMovies : moviearray=items} // rendering based on search

if(moviearray.length>0)
{
var listItems = moviearray.map((item,index) =>

 
<div key={index} className="App">

 {/* <Card  as="a"  border="primary" style={{ width: '14rem', height: '22rem',cursor:"pointer" } } onClick={()=> handleClick(index,moviearray)}>  */}
{/* 
 <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/"+ item.image}/>  */}

 <img src={process.env.PUBLIC_URL + "/images/"+ item.image} alt="movies" onClick={()=> handleClick(index,moviearray)}/> 


</div>

 
  );
}
else if(error)
{
  setError(error)
}

else 
{
   listItems =<div><p>"No match found "</p></div>
}

const getMovieRequest = async () => {
  const url = "https://sometimes-maybe-flaky-api.gdshive.io/";
try{
  const response = await fetch(url);
 // console.log(response)
  const result = await response.json();
  //console.log(result)
  setIsLoaded(true);
  setItems(result);
}

catch(err)
{
  setIsLoaded(true);
  setError('An unexpected error occured.')
 
}
};

useEffect(() => {
  getMovieRequest();
}, []);




 
  if (error) {
    return <div>Error: {error}</div>;
  }
  else if (!isLoaded) {
    return <div> <h2>Loading...</h2></div>;
  }


  return (
    
<div className="Navbar">
<h1>Trending Movies</h1>
<SearchBar handleChange={handleChange}
  handleSearch={handleSearch}
/>

{listItems}



</div>


  
  );
}

export default  App;
