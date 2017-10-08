/**
 * Created by dcl on 2017/10/8 0008.
 */
var Clock = (function () {
    function Clock(d) {
        this.currentTime = d;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var c = new Clock(new Date());
console.log(c);
//# sourceMappingURL=interface2.js.map