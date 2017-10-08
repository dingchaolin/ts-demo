/**
 * Created by dcl on 2017/10/9 0009.
 */
function dianming(banzhang) {
    var tongxue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tongxue[_i - 1] = arguments[_i];
    }
    console.log("\u73ED\u957F:" + banzhang + ",\u540C\u5B66:" + tongxue.join(" | "));
}
dianming("dcl", "张三", "lisi");
//# sourceMappingURL=function.js.map