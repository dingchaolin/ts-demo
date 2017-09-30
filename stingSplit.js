/**
 * Created by Administrator on 2017/9/30 0030.
 */
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = 'dcl';
var getAge = function () {
    return 18;
};
(_a = ["hello,my name is ", ", i am ", " years old~"], _a.raw = ["hello,my name is ", ", i am ", " years old~"], test(_a, myName, getAge()));
var _a;
//# sourceMappingURL=stingSplit.js.map