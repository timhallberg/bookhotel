import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState } from "react";
import data from "../data.json";

function Cards() {
  const [mydata, setData] = useState(data);
  return (
    <>
      <h3 style={{ marginTop: "6.854rem" }}>City</h3>

      {/* 6.854rem är taget ut golden ratio */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {mydata.map((writeData) => (
          
          <div>
            
            <Card style={{ width: "100%", cursor: "pointer" }}>
              <Card.Img variant="top" src={writeData.countryFlag} />
              <Card.Body>
                <Card.Title>{writeData.country}</Card.Title>
                <Card.Text>{writeData.price} SEK</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
