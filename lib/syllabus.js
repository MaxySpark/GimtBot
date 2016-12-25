const request = require('request');
var config = require('./config');
var _ = require('underscore');
var SyllabusUrls = {
    btech1st : '/syllabus/BTECH/COMMON/BTech1st2014.pdf',
    btech2nd : '/syllabus/BTECH/COMMON/BTech2nd2014.pdf',
    //AEI syllabus
    btechaei3rd : '/syllabus/BTECH/AEI/BTechAEI3rd2014.pdf',
    btechaei4th : '/syllabus/BTECH/AEI/BTechAEI4thth2014.pdf',
    btechaei5th : '/syllabus/BTECH/AEI/BTechAEI5thth2014.pdf',
    btechaei6th : '/syllabus/BTECH/AEI/BTechAEI6thth2014.pdf',
    btechaei7th : '/syllabus/BTECH/AEI/BTechAEI7thth2014.pdf',
    btechaei8th : '/syllabus/BTECH/AEI/BTechAEI8thth2014.pdf',
    //CE syllabus
    btechcerd : '/syllabus/BTECH/CE/BTechCE3rd2014.pdf',
    btechceth : '/syllabus/BTECH/CE/BTechCE4thth2014.pdf',
    btechceth : '/syllabus/BTECH/CE/BTechCE5thth2014.pdf',
    btechce6th : '/syllabus/BTECH/CE/BTechCE6thth2014.pdf',
    btechce7th : '/syllabus/BTECH/CE/BTechCE7thth2014.pdf',
    btechce8th : '/syllabus/BTECH/CE/BTechCE8thth2014.pdf',
    //CSE syllabus
    btechcse3rd : '/syllabus/BTECH/CSE/BTechCSE3rd2014.pdf',
    btechcse4th : '/syllabus/BTECH/CSE/BTechCSE4thth2014.pdf',
    btechcse5th : '/syllabus/BTECH/CSE/BTechCSE5thth2014.pdf',
    btechcse6th : '/syllabus/BTECH/CSE/BTechCSE6thth2014.pdf',
    btechcse7th : '/syllabus/BTECH/CSE/BTechCSE7thth2014.pdf',
    btechcse8th : '/syllabus/BTECH/CSE/BTechCSE8thth2014.pdf',
    //ECE syllabus
    btechece3rd : '/syllabus/BTECH/ECE/BTechECE3rd2014.pdf',
    btechece4th : '/syllabus/BTECH/ECE/BTechECE4thth2014.pdf',
    btechece5th : '/syllabus/BTECH/ECE/BTechECE5thth2014.pdf',
    btechece6th : '/syllabus/BTECH/ECE/BTechECE6thth2014.pdf',
    btechece7th : '/syllabus/BTECH/ECE/BTechECE7thth2014.pdf',
    btechece8th : '/syllabus/BTECH/ECE/BTechECE8thth2014.pdf',
    //EE syllabus
    btechee3rd : '/syllabus/BTECH/EE/BTechEE3rd2014.pdf',
    btechee4th : '/syllabus/BTECH/EE/BTechEE4thth2014.pdf',
    btechee5th : '/syllabus/BTECH/EE/BTechEE5thth2014.pdf',
    btechee6th : '/syllabus/BTECH/EE/BTechEE6thth2014.pdf',
    btechee7th : '/syllabus/BTECH/EE/BTechEE7thth2014.pdf',
    bteche8th : '/syllabus/BTECH/EE/BTechEE8thth2014.pdf',
    //EEE syllabus
    btecheee3rd : '/syllabus/BTECH/EEE/BTechEEE3rd2014.pdf',
    btecheee4th : '/syllabus/BTECH/EEE/BTechEEE4thth2014.pdf',
    btecheee5th : '/syllabus/BTECH/EEE/BTechEEE5thth2014.pdf',
    btecheee6th : '/syllabus/BTECH/EEE/BTechEEE6thth2014.pdf',
    btecheee7th : '/syllabus/BTECH/EEE/BTechEEE7thth2014.pdf',
    btecheee8th : '/syllabus/BTECH/EEE/BTechEEE8thth2014.pdf',
    //ME syllabus
    btechme3rd : '/syllabus/BTECH/ME/BTechME3rd2014.pdf',
    btechme4th : '/syllabus/BTECH/ME/BTechME4thth2014.pdf',
    btechme5th : '/syllabus/BTECH/ME/BTechME5thth2014.pdf',
    btechme6th : '/syllabus/BTECH/ME/BTechME6thth2014.pdf',
    btechme7th : '/syllabus/BTECH/ME/BTechME7thth2014.pdf',
    btechme8th : '/syllabus/BTECH/ME/BTechME8thth2014.pdf',
    //MBA syllabus
    mba1st : "/syllabus/MBA/MBA1st2014pdf",
    mba2nd : "/syllabus/MBA/MBA2nd2014pdf",
    mba3rd : "/syllabus/MBA/MBA3rd2014pdf",
    mba4th : "/syllabus/MBA/MBA4th2014pdf",
    //MTECH syllabus
    mtechcse : "/syllabus/MTECH/MTechCSE2014pdf"
}
function getSyllabus(appUrl,command,chatId) {
    var sendObj =  _.propertyOf(Commands)(command);
    var docUrl = config.webhook + sendObj;
    // if(SyllabusUrls.hasOwnProperty(command)){
    //     var docUrl = config.webhook + SyllabusUrls.command;
        request.post((appUrl+'/sendDocument'),{
                form:{
                    chat_id : chatId,
                    document : docUrl,
                    caption : "Syllabus"
                }
    });
    // } 
}

var ExportObj = {
    CommandList : SyllabusUrls,
    Command : getSyllabus
}
module.exports = ExportObj;