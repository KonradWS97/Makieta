var isshow = true ;
var tImg = ['https://picsum.photos/1000/395?random=1','https://picsum.photos/1000/395?random=2','https://picsum.photos/1000/395?random=3'];
var vImg = true
let btnStandard = document.getElementById("standardBtn")
let btnLux = document.getElementById("luxuriousBtn")
let btnWedd = document.getElementById("weddingBtn")
let nameOfTheCar = document.getElementById("nameOfTheCar")
// let bigPicCar = document.getElementById("bigPicCar").src

btnStandard.addEventListener("mouseout", function(c)
{
    console.log("klik btn standard")
    btnStandard.style.color = "black"
})
btnStandard.addEventListener("mouseover", function(c)
{
    console.log("klik btn standard")
    btnStandard.style.color = "#C7A1A8"
})
//
btnLux.addEventListener("mouseout", function(c)
{
    console.log("klik btn luxd")
    btnLux.style.color = "black"
})
btnLux.addEventListener("mouseover", function(c)
{
    console.log("klik btn lux")
    btnLux.style.color = "#C7A1A8"
})
btnWedd.addEventListener("mouseout", function(c)
{
    console.log("klik btn wedd")
    btnWedd.style.color = "black"
})
btnWedd.addEventListener("mouseover", function(c)
{
    console.log("klik btn wedd")
    btnWedd.style.color = "#C7A1A8"
})
btnStandard.addEventListener("click", function(d)
{
    console.log("zmieniam auto na standard")
    isshow=!isshow
    nameOfTheCar.innerHTML = "Auto typu standard"
    document.getElementById('bigPicCar').src = 'https://picsum.photos/1000/395?random=2'
    document.getElementById('detal').src = 'https://picsum.photos/200/200?random=2'
    document.getElementById('detal2').src = 'https://picsum.photos/200/200?random=2'
    document.getElementById('detal3').src = 'https://picsum.photos/200/200?random=2'
    document.getElementById('detal4').src = 'https://picsum.photos/200/200?random=2'
})
btnLux.addEventListener("click", function(d)
{
    console.log("zmieniam auto na lux")
    isshow=!isshow
    nameOfTheCar.innerHTML = "Auto typu lux"
    document.getElementById('bigPicCar').src = 'https://picsum.photos/1000/395?random=3'
    document.getElementById('detal').src = 'https://picsum.photos/200/200?random=3'
    document.getElementById('detal2').src = 'https://picsum.photos/200/200?random=3'
    document.getElementById('detal3').src = 'https://picsum.photos/200/200?random=3'
    document.getElementById('detal4').src = 'https://picsum.photos/200/200?random=3'
})
btnWedd.addEventListener("click", function(d)
{
    console.log("zmieniam auto na sluben auto")
    isshow=!isshow
    nameOfTheCar.innerHTML = "Auto typu slubne"
    document.getElementById('bigPicCar').src = 'https://picsum.photos/1000/395?random=4'
    document.getElementById('detal').src = 'https://picsum.photos/200/200?random=4'
    document.getElementById('detal2').src = 'https://picsum.photos/200/200?random=4'
    document.getElementById('detal3').src = 'https://picsum.photos/200/200?random=4'
    document.getElementById('detal4').src = 'https://picsum.photos/200/200?random=4'
})