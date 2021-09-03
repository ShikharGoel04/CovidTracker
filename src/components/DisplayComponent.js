import React from 'react'
import CountUp from 'react-countup'
import Card from "react-bootstrap/Card";
import '../css/style.css';
export default function Display({title,value}) {

return(
    <div className="displayCaseVal">
     <Card style={{width: "22rem",border:"1px solid black" }}>
        <Card.Body>
          <Card.Title  style={{ color: "green"}}>{title}</Card.Title>
          <Card.Text>
          <CountUp
          start={0}
          end={value}
          duration={2}
        />    
           
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
)
    




}