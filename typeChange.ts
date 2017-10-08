/**
 * Created by Administrator on 2017/10/8 0008.
 */
let idcard:any = "1234556875422423";
let length:number = (<string>idcard).length;
let length2:number = (idcard as string).length;
console.log( length,length2 )