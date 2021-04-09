import React, { useState } from "react";

import { Button, Container, Card, Row } from "react-bootstrap";

export default function App() {
  const [count, setCount] = useState(0);
  
  const handleCount = () =>{ 
      setCount(count+1)
  }
  return (
    <Container>
      <Row
        style={{
          alignSelf: "center",
          marginTop:"20px"
        }}
      >
        <Card style={{ padding: "30px" }}>
          <h1>Button Count</h1>
          <hr />

          <Button
            onClick={
            ()=>{  handleCount() }
            }
          >
            click me
          </Button>
        </Card>
      </Row>
      <Row
        style={{
          alignSelf: "center",
          marginTop: "50px",
        }}
      >
        <Card style={{padding:"30px", alignSelf:"center",alignContent:"center"}}> 
          <h1>{count}</h1>
        </Card>
      </Row>
    </Container>
  );
}
