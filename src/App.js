import React, { Component } from 'react';
import {Row, Col, Card, Container} from 'react-bootstrap';
import Chart from './Chart';

class App extends Component {

  constructor() {
    super();

    this.state = {
      regions: [],
      searchResults: ""
    }
  }

  componentDidMount = async () => {

    let url = "https://corona.lmao.ninja/v2/states";

    let response = await fetch(url);
    let results  = await response.json();

    console.log(results)

    this.setState({
      regions: results
    })

  }

  handleChange = (e) => {

    this.setState({
      searchResults: e.target.value
    })
  }

  render() {

    let filtered = this.state.regions.filter(region => {

      // filter out news articles based on what user is typing in input field
      return region.state.toLowerCase().includes(this.state.searchResults.toLowerCase());
      
    });

    let regions = filtered.map((region, index)=> {

      return <Col key={index} className="col-4">
                <Card className="mb-3">
                <Card.Body>
                <Card.Title>{region.state}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{region.cases}</Card.Subtitle>
                <Card.Text>

                      
                            Today's cases: {region.todayCases} <br/>
                            Today's deaths: {region.todayDeaths} <br/>
                            Total deaths: {region.deaths} <br/>
                        
                  
                </Card.Text>
                <Card.Link target="_blank" href="https://corona.lmao.ninja/v2/states">Source</Card.Link>
              </Card.Body>
              </Card>
            </Col>

    })

    

    return (
      <>

        <Container>

          {/* <Chart>

          </Chart> */}

          <Row className="justify-content-center mt-5 mb-2">
            <h2>Search coronavirus data by state</h2>
          </Row>

          <Row className="justify-content-center mb-3">
            <input type="text" onChange={this.handleChange}/>
          </Row>

          <Row className="justify-content-center mb-3">
            Filtering cards to ones that include: {this.state.searchResults}
          </Row>

          <Row>
            {regions}
          </Row>

        </Container>

      </>
    )
  }
}

export default App

