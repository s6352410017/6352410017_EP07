//control statement คำสั่งควบคุม
//selection/condition statement
//if , if-else, if-else-if, switch
let a = 15;

if (a < 20) {
    console.log('Hello....')
}

//--------------------------

let b = 500;

if (b == 5) {
    console.log('Wow...')
} else {
    console.log('Wee...')
}

//----------------------------

let c = 99;

if (c > 100) {
    console.log('Hi')
} else if (c > 80) {
    console.log('Hey')
} else if (c > 50) {
    console.log('Hello')
} else if (c > 30) {
    console.log('Heyo')
} else if (c > 0) {
    console.log('Helo')
} else {
    console.log('555')
}

//--------------------------------

let d = 999;

switch(d){
    case 2: console.log('aaa')
        break
    case 4, 3: console.log('bbb')
        break
    case 5: console.log('ccc')
        break
    case 9: console.log('ddd')
        break
    case 12, 999, 888, 55: console.log('eee')
        break
    default : console.log('fff')

}

//------------------------------------

let i = 1;

while( i <= 5 ){
    console.log('SAU')
    ++i //i++ , i = i + 1 , i += 1

}

//----------------------

let j = 1;

do{
    console.log('SAU')
    ++j //j++ , j = j+1 , j+= 1

}while( j <= 5)

//------------------------------

for(let k = 1; k <= 5; k++){
    console.log('DTI')
}



//loop/Iterarion/Repeat statement
//while, do-while, for, for-in, for-of