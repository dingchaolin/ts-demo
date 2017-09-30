/**
 * Created by Administrator on 2017/10/1 0001.
 */
function getData( name){
    this.name = name;
    setInterval( function(){
        console.log("this.name===", this.name )
    },1000);
}

getData2("dcl");


function getData2( name){
    this.name = name;
    setInterval( ()=>{
        console.log("this.name===", this.name )
    },1000);
}