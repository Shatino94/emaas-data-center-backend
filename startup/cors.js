const cors = require("cors");

module.exports = function(app) {
    const whitelist = ["http://localhost:3000"];
    const corsOptions = {
        origin: function(origin, callback) {
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    };
    app.use(cors(corsOptions));
};