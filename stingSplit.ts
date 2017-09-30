/**
 * Created by Administrator on 2017/9/30 0030.
 */
function test( template, name, age ){
    console.log( template );
    console.log( name );
    console.log( age );
}

let myName = 'dcl';
let getAge = function( ){
    return 18;
}

test`hello,my name is ${myName}, i am ${getAge()} years old~`;