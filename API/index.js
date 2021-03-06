/**
 * Created by jetrodriguez on 6/14/17.
 */
//imports
var express = require('express');
var app =  express();
var axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars view engine
app.set('view engine', 'hbs');
app.use('/axios', express.static('node_modules/axios/dist'));

//backend
app.get('/', function(req, res) {
    res.render('search.hbs');
});
app.get('/search.hbs', function(req, res) {
    res.render('search.hbs');
});
var api_url = 'https://api.themoviedb.org/3/search/movie/api_key=7e1972182eb6105c196b67794648a379&';
app.post('/search_results', function(req, res) {
    .then(function (resultData) {
        api_url = req.body.search;
        console.log(resultData)
    })
})
//get api data

/*var config = {
    params: {
        api_key: '7e1972182eb6105c196b67794648a379',
        query: 'fight'
    }
}*/
app.get('/api', function(req, res) {
    console.log('generating response');
    axios.get(api_url, config)
        .then(function (r) {
            console.log(r.data);
            res.json(r.data);
        })
        .catch(function (error) {
            console.log(error);
    });
});


//port
var PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log('port ' + PORT ' is live');
});