import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
const SearchBar = (props) =>
{

    return (

        <div>
            <Form className="Dropdown" >
<Form.Group controlId="yearId">
    <Form.Label>Select Year</Form.Label> 
    <Form.Control as="select"  name="Year" onChange={props.handleChange}   >
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
    <Form.Control as="select"  name="Genre" onChange={props.handleChange} >
   
    <option></option>
      <option>Action</option>
      <option>Fantasy</option>
      <option>Animation</option>
      <option>Comedy</option>
      <option>Adventure</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={props.handleSearch}>
    Search
  </Button>
 
</Form>
        </div>
    )


}
export default SearchBar;