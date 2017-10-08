/**
 * Created by dcl on 2017/10/3 0003.
 */
//使用接口声明一些属性
interface IPerson{
    name:string;
    age:number
};

class Student{
    constructor( public config:IPerson ){}
}

let pnew = new Student( {name:"zhangsan",age:16})