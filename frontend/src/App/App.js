import React, { useState, useEffect } from "react"

import { Button, Container, Card, Row } from "react-bootstrap"

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <Container>
            <Row
                style={{
                    alignSelf: "center",
                    marginTop: "20px",
                }}
            >
                <Card style={{ padding: "30px" }}>
                    <h1>Button Counts </h1>
                    <hr />

                    <Button
                        onClick={() => {
                            setCount(count + 1)
                        }}
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
                <Card
                    style={{
                        padding: "30px",
                        alignSelf: "center",
                        alignContent: "center",
                    }}
                >
                    <h1>{count}</h1>
                </Card>
            </Row>
        </Container>
    )
}
