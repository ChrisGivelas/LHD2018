import React, { Component } from 'react';
import * as Yelp from 'yelp-fusion'
import { Button, FormControl } from 'react-bootstrap';
import Card from './Card';
import axios from 'axios';



let apiKey = 'AHvS0mIi8sbLjfEfjF07C4Fn-uGWyFmYLBptX78nxq2bVK2iLd6TKP4mt2wzgTZ4iEm9GgWcavUZQXRuAxMyy0Z8n_5FkvIfJXJb4yYs7Goa7_K4jEhlPwOKEdkCXHYx';
let yelp = Yelp.client(apiKey);

class App extends Component {
  state = {
    search: "Chez Piggy",
    results: []
  }

  handleSearch = () => {
    axios.post('http://localhost:8080/search', {
    latitude: 44.225575 ,
    longitude: -76.5014243,
    categories: 'bars'
  }).then( res => {
    let businesses = JSON.parse(res.data.body).businesses;
    console.log(businesses)
    let results = [];
    
    businesses.map( business => {
      let businessObject = {};
      businessObject.name = business.name;
      businessObject.rating = business.rating;
      businessObject.review_count = business.review_count;
      businessObject.image_url = business.image_url
      results.push(businessObject);
    });
    this.setState({results: results})
  });
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
          {this.state.results.map( result => {
            return(
                <Card {...result} category="bar"/>
            )
          })}
        </div>

      </div>
    )
  }
}

export default App;
