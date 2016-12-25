const request = require('request');
var config = require('./config');
var _ = require('underscore');

// var express = require('express');
// var app = express();
// app.use(express.static('../files'));
var SyllabusUrls = {
    btech1st : '/syllabus/BTECH/COMMON/BTech1st2014.pdf',
    btech2nd : '/syllabus/BTECH/COMMON/BTech2nd2014.pdf',
    //AEI syllabus
    btechaei3rd : '/syllabus/BTECH/AEI/BTechAEI3rd2014.pdf',
    btechaei4th : '/syllabus/BTECH/AEI/BTechAEI4th2014.pdf',
    btechaei5th : '/syllabus/BTECH/AEI/BTechAEI5th2014.pdf',
    btechaei6th : '/syllabus/BTECH/AEI/BTechAEI6th2014.pdf',
    btechaei7th : '/syllabus/BTECH/AEI/BTechAEI7th2014.pdf',
    btechaei8th : '/syllabus/BTECH/AEI/BTechAEI8th2014.pdf',
    //CE syllabus
    btechce3rd : '/syllabus/BTECH/CE/BTechCE3rd2014.pdf',
    btechce4th : '/syllabus/BTECH/CE/BTechCE4th2014.pdf',
    btechce5th : '/syllabus/BTECH/CE/BTechCE5th2014.pdf',
    btechce6th : '/syllabus/BTECH/CE/BTechCE6th2014.pdf',
    btechce7th : '/syllabus/BTECH/CE/BTechCE7th2014.pdf',
    btechce8th : '/syllabus/BTECH/CE/BTechCE8th2014.pdf',
    //CSE syllabus
    btechcse3rd : '/syllabus/BTECH/CSE/BTechCSE3rd2014.pdf',
    btechcse4th : '/syllabus/BTECH/CSE/BTechCSE4th2014.pdf',
    btechcse5th : '/syllabus/BTECH/CSE/BTechCSE5th2014.pdf',
    btechcse6th : '/syllabus/BTECH/CSE/BTechCSE6th2014.pdf',
    btechcse7th : '/syllabus/BTECH/CSE/BTechCSE7th2014.pdf',
    btechcse8th : '/syllabus/BTECH/CSE/BTechCSE8th2014.pdf',
    //ECE syllabus
    btechece3rd : '/syllabus/BTECH/ECE/BTechECE3rd2014.pdf',
    btechece4th : '/syllabus/BTECH/ECE/BTechECE4th2014.pdf',
    btechece5th : '/syllabus/BTECH/ECE/BTechECE5th2014.pdf',
    btechece6th : '/syllabus/BTECH/ECE/BTechECE6th2014.pdf',
    btechece7th : '/syllabus/BTECH/ECE/BTechECE7th2014.pdf',
    btechece8th : '/syllabus/BTECH/ECE/BTechECE8th2014.pdf',
    //EE syllabus
    btechee3rd : '/syllabus/BTECH/EE/BTechEE3rd2014.pdf',
    btechee4th : '/syllabus/BTECH/EE/BTechEE4th2014.pdf',
    btechee5th : '/syllabus/BTECH/EE/BTechEE5th2014.pdf',
    btechee6th : '/syllabus/BTECH/EE/BTechEE6th2014.pdf',
    btechee7th : '/syllabus/BTECH/EE/BTechEE7th2014.pdf',
    btechee8th : '/syllabus/BTECH/EE/BTechEE8th2014.pdf',
    //EEE syllabus
    btecheee3rd : '/syllabus/BTECH/EEE/BTechEEE3rd2014.pdf',
    btecheee4th : '/syllabus/BTECH/EEE/BTechEEE4th2014.pdf',
    btecheee5th : '/syllabus/BTECH/EEE/BTechEEE5th2014.pdf',
    btecheee6th : '/syllabus/BTECH/EEE/BTechEEE6th2014.pdf',
    btecheee7th : '/syllabus/BTECH/EEE/BTechEEE7th2014.pdf',
    btecheee8th : '/syllabus/BTECH/EEE/BTechEEE8th2014.pdf',
    //ME syllabus
    btechme3rd : '/syllabus/BTECH/ME/BTechME3rd2014.pdf',
    btechme4th : '/syllabus/BTECH/ME/BTechME4th2014.pdf',
    btechme5th : '/syllabus/BTECH/ME/BTechME5th2014.pdf',
    btechme6th : '/syllabus/BTECH/ME/BTechME6th2014.pdf',
    btechme7th : '/syllabus/BTECH/ME/BTechME7th2014.pdf',
    btechme8th : '/syllabus/BTECH/ME/BTechME8th2014.pdf',
    //MBA syllabus
    mba1st : "/syllabus/MBA/MBA1st2014.pdf",
    mba2nd : "/syllabus/MBA/MBA2nd2014.pdf",
    mba3rd : "/syllabus/MBA/MBA3rd2014.pdf",
    mba4th : "/syllabus/MBA/MBA4th2014.pdf",
    //MTECH syllabus
    mtechcse : "/syllabus/MTECH/MTechCSE2014.pdf",
    //MCA syllabus
    mca : "/syllabus/MCA/MCA2014.pdf"
}
function getSyllabus(appUrl,command,chatId) {
    var fileUrl =  _.propertyOf(SyllabusUrls)(command);
    if(command == "mba4th") {
        var docUrl = "http://www.astu.org.in/MBA4thd2014.pdf";         
    } else {
        var docUrl = config.webhook + fileUrl;
    }
    console.log(docUrl);

        request.post((appUrl+'/sendDocument'),{
                form:{
                    chat_id : chatId,
                    document : docUrl,
                    caption : "Syllabus",
                    reply_markup : '{"remove_keyboard" : true}'
                }
    });
    // } 
}

var ExportObj = {
    CommandList : SyllabusUrls,
    Command : getSyllabus
}
module.exports = ExportObj;