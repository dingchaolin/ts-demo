/**
 * Created by Administrator on 2017/9/30 0030.
 */
function getData(){
    return {
        x:1,
        y:2,
        z:{a:11,b:21}
    }
}

let{ x:xx,y,z:{b}} = getData();

console.log( xx, y, b );

let arr = [1,2,3];
let [a1,a2] = arr;
console.log( a1,a2)
let[,a3,a4] = arr;
console.log( a3,a4)

let[a5,a6,...others] = arr;
console.log( a5,a6,others)

function test([a5,a6,...others]){
    console.log("test", a5,a6,others)

}

test(arr)