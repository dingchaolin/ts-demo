/**
 * Created by dcl on 2017/10/3 0003.
 */

class Person {
    constructor( public name:string){
        //this.name = name;
        console.log("new 的时候会被调用")
    }
    //name;//构造函数传的参数会自动作为该类的属性

    eat(){
        console.log(`${this.name}-i am eating`);
    }
}

class User extends Person{
    constructor( name:string, userId: Number ){
        console.log("子类被调用")
        super(name);//super 用于调用父类的构造函数
        this.userId = userId;
    }
    userId: Number;
    work(){
        super.eat();
        this.doWork();

    }

    private doWork(){

        console.log( 'i am working')
    }
}

let u1 = new User("maya", 1);
u1.work();
let p1 = new Person( "batman" );
//p1.name = "batman";
p1.eat();

let p2 = new Person("supername");
//p2.name = "superman";
p2.eat();


