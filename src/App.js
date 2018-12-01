import React, { Component } from 'react';
import * as Yelp from 'yelp-fusion'
import { Button, FormControl } from 'react-bootstrap';
import Card from './Card';

let apiKey = 'AHvS0mIi8sbLjfEfjF07C4Fn-uGWyFmYLBptX78nxq2bVK2iLd6TKP4mt2wzgTZ4iEm9GgWcavUZQXRuAxMyy0Z8n_5FkvIfJXJb4yYs7Goa7_K4jEhlPwOKEdkCXHYx';
let yelp = Yelp.client(apiKey);

class App extends Component {
  state = {
    search: "Chez Piggy",
    results: []
  }

  handleSearch = () => {
    fetch("http://localhost:8080/search", {
      method: 'post',
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({ hello: "bye" })
    })
  }

  handleChange = e => {
    this.setState(({ search: e.target.value }))
  }

  render() {
    return (
      <div id="app">
        <div id="main">
          <h1>Welcome to NoWayJose!</h1>
          <h4>Start typing in the name of a restaurant, and we'll let you know if you should avoid it.</h4>
          <h6>Think of us as the anti-Yelp...</h6>
          <FormControl type="text"
            value={this.state.value}
            placeholder="Search a restuarant here"
            onChange={this.handleChange} />
          <Button onClick={this.handleSearch}>Search</Button>
        </div>
        <div id="cardContainer">
          
          <Card name="Dis Bish" score="2" reviewCount="12312" categories="Coffee"/>
          <Card name="Dis Bish" score="2" reviewCount="12312" categories="Coffee"/>
          <Card name="Dis Bish" score="2" reviewCount="12312" categories="Coffee"/>
          <Card name="Dis Bish" score="2" reviewCount="12312" categories="Coffee"/>
        </div>

      </div>
    )
  }
}

export default App;
