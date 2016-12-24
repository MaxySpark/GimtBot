var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var _ = require('underscore');
var config = require('./lib/config');

var CommandList = require('./lib/command.js').CommandList;
var Commands = require('./lib/command.js').Command;

var DownloadList = require('./lib/downloads.js').CommandList;
var getDownload = require('./lib/downloads.js').Command;

var port = process.env.PORT || 5000;
var reply_url = "https://api.telegram.org/bot"+config.bot_token;
var webhook_url = "https://api.telegram.org/bot"+config.bot_token+"/setWebhook?url="+config.webhook+'/'+config.bot_token;
var ignoreMessageIdList = [];

request({
    url: webhook_url,
    json : true
}, (err, res, body) => {
   console.log(body); 
});

app.use(bodyParser.json());
app.use(express.static('files'));

app.get('/',function(req,res,next) {
    res.send("<h1 style='text-align:center; color: blueviolet;'>Welcome to GimtBot</h1>"
        +"<h3 style='text-align:center;'>"
        +"<a href='https://telegram.me/GimtBot'>PLEASE VISIT</a></h3>");
    next();
    request({
        url: "https://api.telegram.org/bot"+config.bot_token+'/getMe',
        json : true
        }, (err,res,body)=>{
        console.log(body);
    });
});

app.post('/'+config.bot_token , (req,res,next)=>{
    var body = req.body;
    console.log('out');
    console.log('incoming msg id - ');
    console.log(body.update_id +'  '+ body.message.message_id + '  ' +body.message.text);
    console.log(body.message.from.first_name);
    console.log(ignoreMessageIdList);
    console.log('out');

    var filterMessageId = _.find(ignoreMessageIdList,(num)=>{
        return num == body.update_id;
    });

    if(typeof filterMessageId == "undefined") {
         console.log(body.message.text);
        if((body.message.text=="/\start")){
            request.post((reply_url+'/sendMessage'),{
                form:{
                    chat_id : body.message.chat.id,
                    text : "<b>Welcome</b>\n<b>Select a Command</b>",
                    parse_mode : "HTML",
                }
            });
            res.status(200).send('OK');
            next();
        } else if(typeof (body.message.text)== "undefined" ){
            request.post((reply_url+'/sendMessage'),{
                form:{
                    chat_id : body.message.chat.id,
                    text : "<b>Invalid Choice</b>",
                    parse_mode : "HTML",
                }
            });
            res.status(200).send('OK');
            next();
        } else if( CommandList.hasOwnProperty(body.message.text.replace(/\//g,'')) ) {
                var com = body.message.text.replace(/\//g,'');

                Commands(reply_url, com,  body.message.chat.id);

            res.status(200).send('OK');
            next();
        } else if( DownloadList.hasOwnProperty(body.message.text.replace(/\//g,'')) ) {
                var com = body.message.text.replace(/\//g,'');

                getDownload(reply_url, com, body.message.chat.id);

            res.status(200).send('OK');
            next();
        } else {
            request.post((reply_url+'/sendMessage'),{
                form:{
                    chat_id : body.message.chat.id,
                    text : "<b>Invalid Choice</b>",
                    parse_mode : "HTML",
                }
            });
            res.status(200).send('OK');
            next();
        }
        ignoreMessageIdList.push(body.update_id);
    }
    
    ignoreMessageIdList = _.sortBy(ignoreMessageIdList,(num)=>{ return num; });
      
});

app.get('/ignorelist',(req,res)=>{
    res.send(200);
    console.log(ignoreMessageIdList);
});

app.listen(port, () =>
{
    console.log("Server is Started at - " + port);
});