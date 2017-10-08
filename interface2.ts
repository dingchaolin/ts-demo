/**
 * Created by dcl on 2017/10/8 0008.
 */

interface ClockInterface {
    currentTime :Date;
    setTime( d :Date );
}

class Clock implements ClockInterface{
    constructor( d: Date ){
        this.currentTime = d;
    }
    currentTime: Date;
    setTime( d: Date ){
        this.currentTime = d;
    }

}

let c = new Clock( new Date() );
console.log( c )