/**
 * Created by Administrator on 2017/9/30 0030.
 */
function*doSometing(){
    while( 1 ){
        yield Math.random()*100;
    }
}

let fun = doSometing();
let value = 100;
let limitValue = 15;
while( value > limitValue ){
    value = fun.next().value;
    console.log(`此时value为：${value}`);
}

console.log(`最后价格为:${value}`);