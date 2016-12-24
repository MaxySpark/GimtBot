const request = require('request');
var config = require('./config');

var Commands = {
    prospectus : {
        document : "http://www.gimt-guwahati.ac.in/prospectus2016.pdf",
        caption : "Prospectus"
    },
    power : {
        document : "http://www.gimt-guwahati.ac.in/images/eemagazine.pdf",
        caption : "POWER"
    },
    gimtech : {
        document : "http://www.gimt-guwahati.ac.in/images/gimtech1516.pdf ",
        caption : "GIMTECH"
    },
    newsletter : {
        document : "http://www.gimt-guwahati.ac.in/images/newsletterv1i1.pdf",
        caption : "NEWSLETTER"
    }
}

function getDownloads(appUrl,command,chatId) {
        Commands.command.chat_id = chatId;
        request.post((appUrl+'/sendDocument'),{
                form: Commands.command
        });
}

var ExportObj = {
    CommandList : Commands,
    Command : getDownloads
}
module.exports = ExportObj;