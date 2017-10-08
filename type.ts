/**
 * Created by dcl on 2017/9/30 0030.
 */
let myname: string = "dcl";
let age: any = 15;//any 表示任务类型
age = "123";

let money: number = 1;
let sex : boolean = true;

function test1():void{
    let a = 1;
}

function test2( name: string ):string{
    let a = 1;
    return "123";
}

test2( "234" )

class _Person{
    name: string;
    age : number;
}

let person1 = new _Person();
person1.age = 12;
person1.name = "eee";

console.log( person1 )

//默认值参数
function test3( a: string, b: string, c:string = "ggg"){
    console.log( a );
    console.log( b );
    console.log( c );
}

test3( "1", "2", "3" );

test3( "1", "2" );

//可选参数
function test4( a: string, b?: string, c:string = "hhh"){
    console.log( a, b, c );
}
test4("1")

//rest
function test5( ...args ){
    console.log( args );
}
test5(1,2,3,4,5);

function test6( a, b, c ){
    console.log( a, b, c );
}
let args1 = [1];
//test6(...args1);//暂不支持