const a: number = 5;
let c : number = 4;
let b : string = "ss";
let f = true;


let  d : string[] = ["sdf", "ddd", ];
let e : any = 3;
e  = "ss";

function test(a:string):string | number {
    return ""

}


/**
 *
 * @param a
 */
const test2 = (a:number)=>{
    return a * 2
}

d = d.map((x : string) => x.toLowerCase())

/**
 *
 * @param cord
 */
function countCord(cord: { lat: number, long?: number }) {

}

function printIt(id : number | string) {
    if (typeof  id  === 'number'){
        console.log(id.toString())
    }else if(typeof id === 'string'){
        id.toUpperCase()
    }
}

function getSum(a:number | number[]){
    if(Array.isArray(a)){

    }
}

const aa : undefined = undefined;
const z : null = null;
