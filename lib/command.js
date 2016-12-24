const request = require('request');
var config = require('./config');
var _ = require('underscore');

var Commands = {
    getsyllabus : {
        text : "Select Option",
	    reply_markup : {
		keyboard : [
            [{
                text : "BTECH"
                },
            {
                text : "MTECH"
            }],
            [{
                text : "MBA"
            }]
            
            ],
        resize_keyboard : true
	}
    },
    getcollegeInfo : {
        text : "<b>Invalid Choice</b>",
        parse_mode : "HTML",
    },
    getcontactinfo : {

    },
    getholidaylist : {

    }
}

function commandReplay(appUrl,command,chatId) {

    request.post((appUrl+'/sendMessage'),{
                form:{
                    chat_id : chatId,
                    text : "<b>Invalid Choice</b>",
                    parse_mode : "HTML",
                }
    });
}


var ExportObj = {
    CommandList : Commands,
    Command : commandReplay
}
module.exports = ExportObj;