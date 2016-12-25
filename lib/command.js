const request = require('request');
var config = require('./config');
var _ = require('underscore');

var Commands = {
    getbotauthor : {
        text : "<b>Bhargab Hazarika</b>\n"
                +"<b>Code Name - MaxySpark</b>\n"
                +"<b>Email -</b> devmaxyspark@gmail.com\n"
                +"<a href='https://github.com/MaxySpark'>GitHub - MaxySpark</a>\n"
                +"<a href='https://fb.me/MaxySparx'>Facebook</a>\n"
                +"<b>Telegram -</b> @MaxySpark",             
        parse_mode : "HTML",
    },
    getsyllabus : {
        text : "Select Course\n"
                +"\/BTECH : BTech Course\n"
                +"\/MTECH : MTech Course\n"
                +"\/MBA : MBA Course\n"
                +"\/MCA : MCA Course\n",
	    reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTECH"
                                    },
                                {
                                    "text" : "MTECH"
                                }],
                                [{
                                    "text" : "MBA"
                                }, {
                                    "text" : "MCA"
                                }]
                                
                                ],
                            "resize_keyboard" : true
                        }`
    },
    getcollegeinfo : {
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
                + "<b>E-mail :</b>	gimt_guwahati@rediffmail.com\n\n"
                + "<a href='http://www.gimt-guwahati.ac.in'>Website :	www.gimt-guwahati.ac.in</a>\n\n"
                + "<b>Address :	Hathkhowapara, Azara, Guwahati - 781017 Assam, India\n\n</b>",
        parse_mode : "HTML"                      
    },
    getholidaylist : {
        document : "http://www.gimt-guwahati.ac.in/administration/images/downloads/holiday2016.pdf",
        caption : "Holiday List"
    },
    getdownloads : {
        text : "Select Option\n"
                +"\/PROSPECTUS : Get Prospectus\n"
                +"\/POWER - Get Magazine by Electrical Engineering Department\n"
                +"\/GIMTECH - Get The Annual Magazine\n"
                +"\/NEWSLETTER - Get Special Edition\n",
	    reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "PROSPECTUS"
                                    },
                                {
                                    "text" : "POWER"
                                }],
                                [{
                                    "text" : "GIMTECH"
                                }, {
                                    "text" : "NEWSLETTER"
                                }]
                                
                                ],
                            "resize_keyboard" : true
                        }`
    },
    BTECH : {
        text : "Select Branch"
                + "\/AEI\n"
                + "\/CE\n"
                + "\/CSE\n"
                + "\/EE\n"
                + "\/EEE\n"
                + "\/ECE\n"
                + "\/ME\n",
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "AEI"
                                    },
                                {
                                    "text" : "CE"
                                }],
                                [{
                                    "text" : "CSE"
                                }, {
                                    "text" : "EE"
                                }],
                                [{
                                    "text" : "EEE"
                                }, {
                                    "text" : "ECE"
                                }],
                                [{
                                    "text" : "ME"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    MTECH : {
        text : "Select Branch\n"
                + "\/MTECHCSE : MTech CSE",
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "MTECHCSE"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    MBA : {
        text : "Select Semester\n"
                + "\/MBA1ST : MBA 1st Sem\n"
                + "\/MBA2ND : MBA 2nd Sem\n"
                + "\/MBA3RD : MBA 3rd Sem\n"
                + "\/MBA4TH : MBA 4th Sem",
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "MBA1ST"
                                    },
                                {
                                    "text" : "MBA2ND"
                                }],
                                [{
                                    "text" : "MBA3RD"
                                }, {
                                    "text" : "MBA4TH"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    AEI : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechAEI3rd\n"
                + "\/BTechAEI4th\n"
                + "\/BTechAEI5th\n"
                + "\/BTechAEI6th\n"
                + "\/BTechAEI7th\n"
                + "\/BTechAEI8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechAEI3rd"
                                }, {
                                    "text" : "BTechAEI4th"
                                }],
                                [{
                                    "text" : "BTechAEI5th"
                                }, {
                                    "text" : "BTechAEI6th"
                                }],
                                [{
                                    "text" : "BTechAEI7th"
                                }, {
                                    "text" : "BTechAEI8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    CE : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechCE3rd\n"
                + "\/BTechCE4th\n"
                + "\/BTechCE5th\n"
                + "\/BTechCE6th\n"
                + "\/BTechCE7th\n"
                + "\/BTechCE8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechCE3rd"
                                }, {
                                    "text" : "BTechCE4th"
                                }],
                                [{
                                    "text" : "BTechCE5th"
                                }, {
                                    "text" : "BTechCE6th"
                                }],
                                [{
                                    "text" : "BTechCE7th"
                                }, {
                                    "text" : "BTechCE8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    CSE : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechCSE3rd\n"
                + "\/BTechCSE4th\n"
                + "\/BTechCSE5th\n"
                + "\/BTechCSE6th\n"
                + "\/BTechCSE7th\n"
                + "\/BTechCSE8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechCSE3rd"
                                }, {
                                    "text" : "BTechCSE4th"
                                }],
                                [{
                                    "text" : "BTechCSE5th"
                                }, {
                                    "text" : "BTechCSE6th"
                                }],
                                [{
                                    "text" : "BTechCSE7th"
                                }, {
                                    "text" : "BTechCSE8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    EE : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechEE3rd\n"
                + "\/BTechEE4th\n"
                + "\/BTechEE5th\n"
                + "\/BTechEE6th\n"
                + "\/BTechEE7th\n"
                + "\/BTechEE8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechEE3rd"
                                }, {
                                    "text" : "BTechEE4th"
                                }],
                                [{
                                    "text" : "BTechEE5th"
                                }, {
                                    "text" : "BTechEE6th"
                                }],
                                [{
                                    "text" : "BTechEE7th"
                                }, {
                                    "text" : "BTechEE8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    EEE : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechEEE3rd\n"
                + "\/BTechEEE4th\n"
                + "\/BTechEEE5th\n"
                + "\/BTechEEE6th\n"
                + "\/BTechEEE7th\n"
                + "\/BTechEEE8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechEEE3rd"
                                }, {
                                    "text" : "BTechEEE4th"
                                }],
                                [{
                                    "text" : "BTechEEE5th"
                                }, {
                                    "text" : "BTechEEE6th"
                                }],
                                [{
                                    "text" : "BTechEEE7th"
                                }, {
                                    "text" : "BTechEEE8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    z : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechECE3rd\n"
                + "\/BTechECE4th\n"
                + "\/BTechECE5th\n"
                + "\/BTechECE6th\n"
                + "\/BTechECE7th\n"
                + "\/BTechECE8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechECE3rd"
                                }, {
                                    "text" : "BTechECE4th"
                                }],
                                [{
                                    "text" : "BTechECE5th"
                                }, {
                                    "text" : "BTechECE6th"
                                }],
                                [{
                                    "text" : "BTechECE7th"
                                }, {
                                    "text" : "BTechECE8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    },
    ME : {
        text : "Select Semester\n"
                + "\/BTech1st\n"
                + "\/BTech2nd\n"
                + "\/BTechME3rd\n"
                + "\/BTechME4th\n"
                + "\/BTechME5th\n"
                + "\/BTechME6th\n"
                + "\/BTechME7th\n"
                + "\/BTechME8th\n",                
         reply_markup : `{
                            "keyboard" : [
                                [{
                                    "text" : "BTech1st"
                                }, {
                                    "text" : "BTech2nd"
                                }],
                                [{
                                    "text" : "BTechME3rd"
                                }, {
                                    "text" : "BTechME4th"
                                }],
                                [{
                                    "text" : "BTechME5th"
                                }, {
                                    "text" : "BTechME6th"
                                }],
                                [{
                                    "text" : "BTechME7th"
                                }, {
                                    "text" : "BTechME8th"
                                }]
                                ],
                            "resize_keyboard" : true
                        }`
    }
}

function commandReply(appUrl,command,chatId) {

    var sendObj = _.propertyOf(Commands)(command);  
    sendObj.chat_id = chatId;
    if(command == "getholidaylist") {
        request.post((appUrl+'/sendDocument'),{
                form: sendObj
        });
    } else {
        request.post((appUrl+'/sendMessage'),{
                form: sendObj
        });
    }
}


var ExportObj = {
    CommandList : Commands,
    Command : commandReply
}
module.exports = ExportObj;