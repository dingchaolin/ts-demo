var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by dcl on 2017/10/8 0008.
 */
var Family = (function () {
    function Family(fatherName, motherName) {
        this.father = fatherName;
        this.mother = motherName;
    }
    Family.prototype.sonGreet = function (age) {
        console.log("\u60A8\u597D\uFF0C\u6211\u662F" + this.father + "\u7684\u513F\u5B50\uFF0C\u6211\u4ECA\u5E74" + age + "\u5C81\u4E86\uFF01");
    };
    return Family;
})();
var Son = (function (_super) {
    __extends(Son, _super);
    function Son(fatherName, age) {
        _super.call(this, fatherName);
        this.age = age;
    }
    Son.prototype.hi = function (age) {
        if (age === void 0) { age = this.age; }
        _super.prototype.sonGreet.call(this, age);
    };
    return Son;
})(Family);
var family = new Son("dcl", 13);
family.hi();
/*
public 公有的
private 私有的
protected 受保护的
static 静态 属于类 不属于对象
abstract 抽象的
 */
//# sourceMappingURL=class1.js.map