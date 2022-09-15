import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {

  return (
    <>
    <h3 style={{marginTop: "6.854rem"}}>City</h3>

    {/* 6.854rem är taget ut golden ratio */}
    <div style={{display: "grid",  gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginTop: "1rem"}}>
    <Card style={{ width: "100%", cursor: "pointer" }}>
        <Card.Img variant="top" src="https://picsum.photos/300/150" />
        <Card.Body>
          <Card.Title>Stockholm</Card.Title>
          <Card.Text>
            20 accommodation available
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%"}}>
        <Card.Img variant="top" src="https://picsum.photos/300/150" />
        <Card.Body>
          <Card.Title>Gothenburg</Card.Title>
          <Card.Text>
            Some quick 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%"}}>
        <Card.Img variant="top" src="https://picsum.photos/300/150" />
        <Card.Body>
          <Card.Title>Malmö</Card.Title>
          <Card.Text>
            Some quick 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%"}}>
        <Card.Img variant="top" src="https://picsum.photos/300/150" />
        <Card.Body>
          <Card.Title>Öland</Card.Title>
          <Card.Text>
            Some quick 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
    
      


  
    </>
  );
}

export default Cards;
