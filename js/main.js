let header_burger = document.querySelector('.header_burger');
let header_body3 = document.querySelector('.header_body3');
let header_list2 = document.querySelector('.header_list2');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_body3.classList.toggle('active');
}
header_list2.onclick = function () {
    header_list2.classList.remove('active');
}
