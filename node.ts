/**
 * Created by dcl on 2017/10/8 0008.
 */
import fs = require("fs");
fs.readFile("./README.md", (err, txt ) => {
    console.log( txt.toString() )
})