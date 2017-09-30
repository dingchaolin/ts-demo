/**
 * Created by Administrator on 2017/9/30 0030.
 */
function*doSometing(){
    console.log( 1 );
    yield;
    console.log( 2 );
    yield;
    console.log( 3 );
}

let fun = doSometing();

fun.next();
fun.next();
fun.next();