console.log('Hi js 9 ....')

function showName(name) {
    console.log('สวัสดี' + name);

}

showName('แมว')  //เรียกใช้ฟังก์ชั่น
showName('มด')  // call function

function calSum(a, b) {
    console.log('a + b ได้ค่าเป็น ')
    return a + b;
}

console.log(calSum(10, 20))  // เรียกใช้ function

//alert(calSum(100, 99))

//let test1 = function(){
//    console.log('hello')
//}

let test1 = () => {
    console.log('hello')
}

//let test2 = function(number){
//    console.log('hi' + number)
//}

let test2 = (number) => {
    console.log('hi' + number)
}

test1()
test1()
test2()

