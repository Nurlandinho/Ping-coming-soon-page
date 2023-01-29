const input = document.querySelector("input");
const small = document.querySelector("small")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputValue = input.value;


    if (!validateEmail(inputValue)) {
        small.style.display = 'block'
        input.classList.add('error')
    }
    else {
        small.style.display = 'none'
        input.classList.remove('error')
    }
})


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}