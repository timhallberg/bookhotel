import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Search() {
  return (
    <>
      <h1>Detta är startsidan</h1>
      <h2>Search</h2>
      <form action="">
        <input type="text" />
        <button>Sök</button>
      </form>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

    </>
  );
}

export default Search;
