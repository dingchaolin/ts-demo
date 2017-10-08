/**
 * Created by dcl on 2017/10/3 0003.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        //this.name = name;
        console.log("new 的时候会被调用");
    }
    //name;//构造函数传的参数会自动作为该类的属性
    Person.prototype.eat = function () {
        console.log(this.name + "-i am eating");
    };
    return Person;
})();
var User = (function (_super) {
    __extends(User, _super);
    function User(name, userId) {
        console.log("子类被调用");
        _super.call(this, name); //super 用于调用父类的构造函数
        this.userId = userId;
    }
    User.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    User.prototype.doWork = function () {
        console.log('i am working');
    };
    return User;
})(Person);
var u1 = new User("maya", 1);
u1.work();
var p1 = new Person("batman");
//p1.name = "batman";
p1.eat();
var p2 = new Person("supername");
//p2.name = "superman";
p2.eat();
//# sourceMappingURL=class.js.map