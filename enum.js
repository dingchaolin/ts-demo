/**
 * Created by dcl on 2017/10/8 0008.
 */
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["YELLOW"] = 1] = "YELLOW";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
;
var c = color.BLUE;
console.log(color, color.RED, c);
//# sourceMappingURL=enum.js.map