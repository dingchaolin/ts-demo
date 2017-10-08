/**
 * Created by dcl on 2017/10/3 0003.
 */
//使用接口声明方法
interface Animal{
    eat();
};

class Sheep implements Animal{
    eat(){
        console.log("i eat grass")
    }
}

class Tiger implements Animal{
    eat(){
        console.log("i eat meat");
    }
}