/**
 * Created by dcl on 2017/10/8 0008.
 */
interface mother{
    name: string;
    age: number;
}

interface grantmother{
    money: number;
}

interface father extends mother,grantmother{
    height: number
}

let attr = <father>{};

attr.name = "dcl";
attr.age = 23;
attr.money = 120000000;
attr.height = 185;

function GF( baseAttr ){
    console.log( baseAttr )
}

GF( attr );