
let toggleBody = document.querySelector('.toggle')
let widihtBody = document.querySelector('.w_input')
let hegihttBody = document.querySelector('.h_input')
let radiusBody = document.querySelector('.r_input')
let colorBody = document.querySelector('.c_input')
let buttonBody = document.querySelector('.cilik_button')
 

buttonBody.addEventListener('click', function(){
    toggleBody.style.width = widihtBody.value + 'px'
    toggleBody.style.height = hegihttBody.value + 'px'
    toggleBody.style.borderRadius = radiusBody.value + 'px'
    toggleBody.style.backgroundColor = colorBody.value

    console.log(widihtBody.value, hegihttBody.value, radiusBody.value, colorBody.value);

})

