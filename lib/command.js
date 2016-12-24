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
        text : "<b>Girijananda Chowdhury Institute of Management and Technology</b>\n\n"
                + "<b>Girijananda Chowdhury Institute of Management and Technology is an institute offering degree level technical courses in the State of Assam in the non-government sector established by Shrimanta Shankar Academy Society</b>\n\n"
                + "<b>Address: National Highway 37, Near Borjhar Airport, Hatkhowapara, Azara \nGuwahati, Assam 781017\n\n</b>"
                + "<b>Founded: 2006\n\n</b>"
                + "<b>Motto: Truth, Discipline & Excellence\n\n</b>",
        parse_mode : "HTML",
    },
    getcontactinfo : {
        text : "<b>Phone :	0361-2843404 / 2843507\n\n</b>"
                + "<b>Fax :	0361-2843506\n\n</b>"
                + "<b>E-mail :	gimt_guwahati@rediffmail.com\n\n</b>"
                + "<b>Website :	www.gimt-guwahati.ac.in\n\n</b>"
                + "<b>Address :	Hathkhowapara, Azara, Guwahati - 781017 Assam, India\n\n</b>",
        parse_mode : "HTML"                      
    },
    getholidaylist : {
        document : "http://www.gimt-guwahati.ac.in/administration/images/downloads/holiday2016.pdf",
        caption : "Holiday List"
    },
    getdownloads : {
        text : "Select Option",
	    reply_markup : {
		keyboard : [
            [{
                text : "PROSPECTUS"
                },
            {
                text : "POWER"
            }],
            [{
                text : "GIMTECH"
            }, {
                text : "NEWSLETTER"
            }]
            
            ],
        resize_keyboard : true
	}
    }
}

function commandReply(appUrl,command,chatId) {
    Commands.command.chat_id = chatId;
    if(command == "getholidaylist") {
        request.post((appUrl+'/sendDocument'),{
                form: Commands.command
        });
    } else {
        request.post((appUrl+'/sendMessage'),{
                form: Commands.command
        });
    }
}


var ExportObj = {
    CommandList : Commands,
    Command : commandReply
}
module.exports = ExportObj;