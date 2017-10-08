/**
 * Created by dcl on 2017/10/9 0009.
 */
interface jicheng{
    length:number
}

function test<T extends jicheng>( param : T ) :T{
    console.log("-----",param)
    return param;
}

console.log( test(12))