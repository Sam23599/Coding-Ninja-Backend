const http = require('http');
const port = 8000;
const fs = require('fs') ;

function requestHandler(req, res){
    console.log("url: "+req.url);
    res.writeHead(200, {'content-type':'text/html'});
    // res.end('Gotchya, I am listening. ');
    // res.end('<h1>Heading now, Hi there</h1>');
    

    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         console.log('error:', err);
    //         return res.end('<h1>Error!</h1>');
    //     }
    //     return res.end(data);
    // });
    

    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        default:
            filePath ='./404.html';
    }
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('Error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })

}

const server = http.createServer(requestHandler);

// why requestHandler is in const server arguments and not in server.listen()??

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: "+ port);
    // console.log(server);

});
