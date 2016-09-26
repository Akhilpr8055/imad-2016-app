var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    
    title :'article-one',
    heading :'surya frends',
    content :`this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows paddingthis is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows paddingthis is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding this is a demo shows padding`
    };
var htmltemplate = ` <html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
   
    <body>
        <div class=container>
        <div>
       <a href= "https://cloud.imad.hasura.io/home" >Home</a>
        </div>
        <div>
        
                <h4>
                    ${heading}
                </h4>
        
        </div>
        <div>
            <ul>
                <li><a href = "http://www.cochintalkies.com/celebrities_image/thumb1/jomon-t-john-movie-cinematography-pics-6113.jpg">JOMON</a></li>
                 <li>sasi</li>
                  <li>suneesh</li>
            </ul>
        </div>
        <div>
            <p>
           ${content}
            </p>
        </div>
        </div>
    </body>
    

</html>


    
    
`;


    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
       res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
