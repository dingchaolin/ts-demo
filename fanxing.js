/**
 * Created by dcl on 2017/10/3 0003.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Human = (function () {
    function Human(name) {
        this.name = name;
        console.log(name + "-\u88AB\u6784\u9020");
    }
    Human.prototype.eat = function () {
        console.log(this.name + "- eating");
    };
    return Human;
})();
var Emp = (function (_super) {
    __extends(Emp, _super);
    function Emp(name, userId) {
        console.log("Emp-" + name + "\u88AB\u6784\u9020");
        _super.call(this, name); //super 用于调用父类的构造函数
        this.userId = userId;
    }
    Emp.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Emp.prototype.doWork = function () {
        console.log(this.name + " is working");
    };
    return Emp;
})(Human);
var works = [];
works.push(new Human("zhangsan"));
works.push(new Emp("lisi", 3));
//# sourceMappingURL=fanxing.js.map