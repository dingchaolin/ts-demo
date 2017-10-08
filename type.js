/**
 * Created by dcl on 2017/9/30 0030.
 */
var myname = "dcl";
var age = 15; //any 表示任务类型
age = "123";
var money = 1;
var sex = true;
function test1() {
    var a = 1;
}
function test2(name) {
    var a = 1;
    return "123";
}
test2("234");
var _Person = (function () {
    function _Person() {
    }
    return _Person;
})();
var person1 = new _Person();
person1.age = 12;
person1.name = "eee";
console.log(person1);
//默认值参数
function test3(a, b, c) {
    if (c === void 0) { c = "ggg"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("1", "2", "3");
test3("1", "2");
//可选参数
function test4(a, b, c) {
    if (c === void 0) { c = "hhh"; }
    console.log(a, b, c);
}
test4("1");
//rest
function test5() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    console.log(args);
}
test5(1, 2, 3, 4, 5);
function test6(a, b, c) {
    console.log(a, b, c);
}
var args1 = [1];
//test6(...args1);//暂不支持 
//# sourceMappingURL=type.js.map