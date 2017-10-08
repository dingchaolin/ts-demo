/**
 * Created by dcl on 2017/10/9 0009.
 */
function dianming( banzhang: string, ...tongxue:string[]){
    console.log( `班长:${banzhang},同学:${tongxue.join(" | ")}`)
}

dianming("dcl", "张三", "lisi")