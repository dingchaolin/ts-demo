/**
 * Created by dcl on 2017/10/8 0008.
 */
class Family{

    public father: string;
    public mother: string;
    constructor( fatherName: string, motherName?: string ){
        this.father = fatherName;
        this.mother = motherName;
    }
    sonGreet( age: number ){
        console.log(`您好，我是${this.father}的儿子，我今年${age}岁了！`);
    }
}

class Son extends Family{
    public age: number;
    constructor( fatherName: string, age: number ){
        super( fatherName );
        this.age = age;
    }
    hi( age: number = this.age ){
        super.sonGreet( age );
    }
}

let family = new Son( "dcl", 13 );
family.hi();

/*
public 公有的
private 私有的
protected 受保护的
static 静态 属于类 不属于对象
abstract 抽象的
 */

