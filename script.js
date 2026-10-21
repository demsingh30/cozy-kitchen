const yes = document.querySelector('#open-form')
const submitForm = document.querySelector('#submit-form')
const thankYou = document.querySelector('#thank-you')
const submitAnother = document.querySelector('#submit-another')
const resetForm = document.querySelector('form')

yes.addEventListener ('click' , function () {
    submitForm.classList.remove('hidden')
})

submitForm.addEventListener('submit' , function (event) {
    event.preventDefault()
    submitForm.classList.add('hidden')
    thankYou.classList.remove('hidden')
})

submitAnother.addEventListener('click' , function () {
    resetForm.reset()
    submitForm.classList.remove('hidden')
    thankYou.classList.add('hidden')
})