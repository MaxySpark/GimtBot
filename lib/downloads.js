const request = require('request');
var config = require('./config');
var _ = require('underscore');
var Commands = {
    PROSPECTUS : {
        document : "http://www.gimt-guwahati.ac.in/prospectus2016.pdf",
        caption : "Prospectus",
        reply_markup : `{
            "remove_keyboard" : true
                }`
    },
    POWER : {
        document : "http://www.gimt-guwahati.ac.in/images/eemagazine.pdf",
        caption : "POWER",
        reply_markup : `{
            "remove_keyboard" : true
                }`
    },
    GIMTECH : {
        document : "http://gimt-guwahati.ac.in/images/gimtech1516.pdf",
        caption : "GIMTECH",
        reply_markup : `{
            "remove_keyboard" : true
                }`
    },
    NEWSLETTER : {
        document : "http://www.gimt-guwahati.ac.in/images/newsletterv1i1.pdf",
        caption : "NEWSLETTER",
        reply_markup : `{
            "remove_keyboard" : true
                }`
    },
    getchallan : {
        document : config.webhook + "/syllabus/fee/Challan.pdf",
        caption : "Fee Challan",
        reply_markup : `{
            "remove_keyboard" : true
                }`
    }
}

function getDownloads(appUrl,command,chatId) {
         var sendObj = _.propertyOf(Commands)(command);  
        sendObj.chat_id = chatId;
        request.post((appUrl+'/sendDocument'),{
                form: sendObj
        });
}

var ExportObj = {
    CommandList : Commands,
    Command : getDownloads
}
module.exports = ExportObj;