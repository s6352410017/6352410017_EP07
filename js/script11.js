//สร้างตัวแปรเพื่ออ้างอิงไปยังตำแหน่ง content ในเอกสาร html
let money = document.getElementById('money')
let person = document.getElementById('person')
let btnCal = document.getElementById('btnCal')
let btnCancel = document.getElementById('btnCancel')
let result = document.getElementById('result')



btnCal.addEventListener('click', () => {
    //alert('money.value')
    //result.innerHTML = 'Testing'

    if (money.value.trim().length == 0) {
        alert('ป้อนจำนวนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนจำนวนคนด้วย')
    } else {

        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }

})

//btnCancel.addEventListener('click', () => {
//alert('person.value')
//  money.value = ''
//person.value = ''
//result.innerHTML = '0.00'

//})

btnCancel.addEventListener('click', clearScreen)
//alert('person.value')
function clearScreen() {
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'


}
