import React, { useState } from 'react'

import { Button, Container, Card, CardTitle, Row, CardBody  } from 'reactstrap' 

export default function App() { 

    const [count , setCount] = useState(0)

    return ( 
        
        <Container>
            <Row>
            <Card>
                <CardTitle>
                    <h1>
                        Button Count <hr/> 
                    </h1>
                </CardTitle>
                <CardBody>
                    <h2>
                        <Button onclick={()=>{setCount(count+1)}}>
                            click me 
                        </Button>
                    </h2>
                </CardBody>
            </Card>
            </Row>
            <Row>

            </Row>
        </Container>
        
    )
}

