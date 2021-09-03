import React from 'react'
import Card from "react-bootstrap/Card";
export default function Display({title,value}) {

return(
    <>
     <Card style={{ width: "22rem",border:"1px solid black" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>{title}</Card.Title>
          <Card.Text>
            {value}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
)
    




}