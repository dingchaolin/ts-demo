/**
 * Created by dcl on 2017/10/8 0008.
 */
/*
interface stringArray{
    [index:number] : string
}
 */
var searchFunc;
searchFunc = function (searchX, findX) {
    return searchX.search(findX) == -1 ? false : true;
};
console.log(searchFunc("hello world", "llo"));
//# sourceMappingURL=interface1.js.map