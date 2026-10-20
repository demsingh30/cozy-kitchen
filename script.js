const yes = document.querySelector('#open-form')
const submitForm = document.querySelector('#submit-form')

yes.addEventListener ('click' , function () {
    submitForm.classList.remove('hidden')
})

submitForm.addEventListener('submit' , function (event) {
    event.preventDefault()
     console.log('submit fired')
})