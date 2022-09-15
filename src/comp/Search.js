import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <>
      <InputGroup className="mb-3 " style={{ marginTop: "-30px" }}>
        <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
        <Form.Control
          style={{ color: "#FF8C8C", height: "60px" }}
          placeholder="Where are you going?"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Form.Control
          style={{ color: "#FF8C8C", height: "60px" }}
          placeholder="Check-in?"
          type="date"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <Form.Control
          style={{ color: "#FF8C8C", height: "60px" }}
          placeholder="Check-out?"
          type="date"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Button
        className="Searchbutton"
          style={{ backgroundColor: "white", borderColor: "#ced4da" }}
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default Search;
