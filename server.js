var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var aa={ 
title:'articl_eone',
    content:`
       <p>this is paragraph one</p>
       <p>this page is created my</p>
       <p>my name is yash srivastava and i am from raebareli, i am doing btech from bharati vidyapeeth pune..and 
       i learning how to develop app by a good online course by imad hasura</p>`
       
};

function createtemp(data){
    var title=data.title;
    
var content=data.content;
var html=`<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>${title}</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/> 
    
    </head>
    
    <body>
    ${content}
    </body>
</html>
`;
    return createtemp;
}
app.get('/a.html', function (req, res) {
res.send('hello world');
});

app.get('/b.html', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/c.html', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
