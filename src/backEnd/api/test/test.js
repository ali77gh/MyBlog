var Log = require("../../modules/loger");

exports.test = function (req, res, db) {

        Log.d({ ali : "test" , mahdi : "j"});

        res.send("test resp");
}