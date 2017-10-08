/**
 * Created by dcl on 2017/10/8 0008.
 */

interface searchRepeat{
    (
        sourceText : string,
        findText : string)//输入参数
        :boolean//表示返回值
}

/*
interface stringArray{
    [index:number] : string
}
 */
let searchFunc : searchRepeat;

searchFunc = function( searchX:string, findX:string):boolean{
    return searchX.search(findX) == -1 ? false : true;
}

console.log( searchFunc( "hello world", "llo"));