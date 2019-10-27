
var test = require("./test/test")

exports.register = function(app, db) {

        app.use("/test", (req ,res) => test.test(req, res, db));

        // todo add other apis here
        //          .
        //          .
        //          .
}