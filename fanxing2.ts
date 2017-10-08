/**
 * Created by dcl on 2017/10/9 0009.
 */

interface param<T> {
    (arg: T);T
}

function whatis <T> (arg:T) :T{
    return arg;
}

let num:param<number> = whatis;

console.log( num(10) )