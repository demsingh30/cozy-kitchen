const yes = document.querySelector('#open-form')
const submitForm = document.querySelector('#submit-form')

yes.addEventListener ('click' , function () {
    submitForm.classList.remove('hidden')
})

