const  express = require('express');
const yelp = require('yelp-fusion');
const bodyParser= require("body-parser");
const cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const apiKey="AHvS0mIi8sbLjfEfjF07C4Fn-uGWyFmYLBptX78nxq2bVK2iLd6TKP4mt2wzgTZ4iEm9GgWcavUZQXRuAxMyy0Z8n_5FkvIfJXJb4yYs7Goa7_K4jEhlPwOKEdkCXHYx"
const client = yelp.client(apiKey);


app.post('/search',  (req, res) =>{
    let requests = req.body;
    console.log(requests);
    client.search({
        latitude: requests.latitude,
        longitude: requests.longitude,
        categories: requests.categories
      }).then(response => {
        res.send(response);
      }).catch(e => {
        console.log("This failed with the following error: \n" + e);
      });
});


app.listen(8080, ()=>{
    console.log("Server started ");
    
})
