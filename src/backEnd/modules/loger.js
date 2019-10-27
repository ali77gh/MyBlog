var fs = require("fs");

exports.d = function (obj) {

        if (typeof obj !== 'string') obj = JSON.stringify(obj);

        fs.appendFile("log.txt", new Date().toString() + " : " + obj + "\n", () => {});
        console.log(obj);
}