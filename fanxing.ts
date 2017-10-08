/**
 * Created by dcl on 2017/10/3 0003.
 */

class Human{
    constructor( public name:string){

        console.log(`${name}-被构造`)
    }

    eat(){
        console.log(`${this.name}- eating`);
    }
}

class Emp extends Human{
    constructor( name:string, userId: Number ){
        console.log(`Emp-${name}被构造`)
        super(name);//super 用于调用父类的构造函数
        this.userId = userId;
    }
    userId: Number;
    work(){
        super.eat();
        this.doWork();

    }

    private doWork(){
        console.log( `${this.name} is working`)
    }
}

let works: Array<Human> = [];


works.push( new Human("zhangsan"));
works.push( new Emp("lisi", 3 ));
