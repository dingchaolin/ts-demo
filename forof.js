/**
 * Created by Administrator on 2017/10/1 0001.
 */
let arr = [1,2,3];
for( let item  of arr ){
    console.log( item )
}

let arr1 = {a:1,b:2,c:3};//遍历的是值
for( let item  of arr ){
    console.log( item )
}
//只支持 map set 相关的数据结构

let str = "asdf";
for( let item  of str ){
    console.log( item )
}