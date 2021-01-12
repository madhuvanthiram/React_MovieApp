import React from "react";
import './App.css';
import { Button } from 'react-bootstrap';
import {useHistory,useLocation} from "react-router-dom";
import Table from 'react-bootstrap/Table';
const Details = (props) => {
 
    const history = useHistory();
    const location = useLocation();
    const movieitemlist = location.state.movieitemlist; // to get the details of movie that is clicked
   
  

 

    const Home = () =>
    {   
   

        history.push('/')
   

    }
    return (
       

        <div className="MovieList">
        
      
        <Button variant="primary"style={{margin:'20px'}} onClick={Home}>Home</Button> 
        

<Table striped bordered hover responsive="sm" size="sm">
  <thead>
  
  </thead>
  <tbody>
    <tr>
     
      <td><b>Name</b></td>
      <td>{movieitemlist.name}</td>
     
    </tr>
    <tr>
     
      <td><b>Short Synopsis</b></td>
      <td>{movieitemlist.synopsisShort}</td>
     
    </tr>
    <tr>
      <td><b>Year</b></td>
      <td>{movieitemlist.productionYear}</td>
    </tr>
    <tr>
      <td><b>Genre</b></td>
      <td>{movieitemlist.genre}</td>
     
    </tr>
    <tr>
      <td><b>Synopsis</b></td>
      <td>{movieitemlist.synopsis}</td>
     
    </tr>
  </tbody>
</Table>
      



    </div>
    )
}

export default Details;