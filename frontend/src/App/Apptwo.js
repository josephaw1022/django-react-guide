import React, { Component } from "react"
import { Button, Container, Card, Row, Col } from "react-bootstrap"
import axios from "axios"

export default class Apptwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            fetchData: [],
            initialButton: {},
            gotData: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.GetData = this.GetData.bind(this)
    }

    async GetData() {
        const res = await fetch("http://localhost:8000/api/buttons/")
        const data = await res.json()
        this.setState({
            fetchData: data,
            initialButton: data[0],
            gotData: true,
        })
    }

    handleApiButton(value) {

        const tempButton = this.state.initialButton
        tempButton.count += value
        
        this.setState({ initialButton: tempButton })
      
        if (tempButton){
        axios.put('http://localhost:8000/api/buttons/' + tempButton.id + '/', tempButton)
        } 
    }

    handleClick(value) {
        this.setState({ count: this.state.count + value })
    }

    componentDidMount() {
        this.GetData()
    }

    componentDidUpdate(){
      
    }

    render() {
        const gotData = this.state.gotData
        const currentcount = this.state.count
        const currentAPICount = this.state.initialButton.count 
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
                        <Row>
                            <Col>
                                <h1> {this.state.count}</h1>
                            </Col>
                        </Row>
                    </Card>
                </Row>

                <Row style={{ marginTop: "30px" }}>
                    <Col>
                        <Button
                            style={{ padding: "20px", width: "auto" }}
                            onClick={() => {
                                this.handleClick(-1)
                            }}
                        >
                            -
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            style={{ padding: "20px" }}
                            onClick={() => {
                                this.handleClick(1)
                            }}
                        >
                            +
                        </Button>
                    </Col>
                    <Col>
                        <Button
                          style={{height:'100%'}}
                            onClick=
                            {() => {
                                this.handleClick(-currentcount)
                            }}
                            >
                             Reset
                        </Button>
                    </Col>
                </Row>

                <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <Card style={{ padding: "30px" }}>
                        <h1>API Button Count</h1>
                        <hr />

                        {gotData ? (
                            <h2> {this.state.initialButton.count} </h2>
                        ) : (
                            <h2>0</h2>
                        )}
                    </Card>
                </Row>
                <Row style={{ marginTop: "100px" }}>
                    <Col>
                        <Button
                            style={{ padding: "20px", marginBottom: "100px" }}
                            onClick={() => {
                                this.handleApiButton(-1)
                            }}
                        >
                            -
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            style={{ padding: "20px", marginBottom: "100px" }}
                            onClick={() => {
                                this.handleApiButton(1)
                            }}
                        >
                            +
                        </Button>

                    </Col>
                    <Col>
                        <Button
                            style={{ padding: "20px", marginBottom: "100px" }}
                            onClick={() => {
                                this.handleApiButton(-currentAPICount)
                            }}
                        >
                            Reset 
                        </Button>

                    </Col>
                    
                </Row>
            </Container>
        )
    }
}
