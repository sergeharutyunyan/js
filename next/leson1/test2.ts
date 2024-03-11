type Point = {
    x:number,
    y:number
};
interface IPoint  {
    x:number,
    y:number
};

type D3Point = Point & {
    z:number;
}

interface i3DPoint extends IPoint{
    z:number;
}

type stringOrNumber = string | number;
function print (cord:Point){

};

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
interface Test {
    a:number;
}
interface Test {
    b:number;
}
