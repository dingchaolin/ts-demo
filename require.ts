/**
 * Created by dcl on 2017/10/8 0008.
 */
import request = require( "request" );

request("http://www.baidu.com", (err, response, body ) => {
    console.log(body)
})
