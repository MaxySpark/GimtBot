const request = require('request');
var config = require('./config');
var sem1 = "1st";
var sem2 = "2nd";
var sem3 = "3rd";
var sem4 = "4th";
var sem5 = "5th";
var sem6 = "6th";
var sem7 = "7th";
var sem8 = "8th";
var SyllabusList = {
    CSE : [sem1,sem3,sem4,sem5,sem6,sem7,sem8],
    CE : [sem3,sem4,sem5,sem6,sem7,sem8],
    ME : [sem3,sem4,sem5,sem6,sem7,sem8],
    EE : [sem3,sem4,sem5,sem6,sem7,sem8],
    EEE : [sem3,sem4,sem5,sem6,sem7,sem8],
    AEI : [sem3,sem4,sem5,sem6,sem7,sem8],
    ECE : [sem3,sem4,sem5,sem6,sem7,sem8],
    MBA : [sem1,sem2,sem3,sem4],
    CSE_MTECH : [cse_mtech]
}
function getSyllabus(course,branch,semester,chatId) {
    
    if(course == "BTECH" && semester=="sem1") {
        var docUrl = config.webhook + '/syllabus/BTECH/COMMON/BTech1st2014.pdf';  
    } else if(course == "BTECH" && semester=="sem2") {
        var docUrl = config.webhook + '/syllabus/BTECH/COMMON/BTech2nd2014.pdf';
    } else if(course=="BTECH") {
        var docUrl = config.webhook + '/syllabus'+ course + branch + '/BTech'+ semester + '2014.pdf';
    } else if(course=="MTECH") {
        var docUrl = config.webhook + '/syllabus'+ course + branch + '/MTech'+ branch + '2014.pdf';
    } else if(course=="MBA") {
        var docUrl = config.webhook + '/syllabus'+ course + '/MBA'+ semester + '2014.pdf';        
    }

    request.post((reply_url+'/sendDocument'),{
                form:{
                    chat_id : chatId,
                    document : docUrl,
                    caption : "Syllabus"
                }
    });
}