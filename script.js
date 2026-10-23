
const oyakodon = {
  id: 1,
  name: 'Oyakodon (Chicken and Egg Rice Bowl)',
  sourceName: 'Just One Cookbook',
  sourceLink: 'https://www.justonecookbook.com/oyakodon/',
  servings: 2,
  ingredients: [
    { name: 'yellow onion', amount: 0.5, unit: '', aisle: 'produce' },
    { name: 'boneless skinless chicken thighs', amount: 10, unit: 'oz', aisle: 'meat' },
    { name: 'sake', amount: 1, unit: 'tbsp', aisle: 'pantry' },
    { name: 'large eggs', amount: 3, unit: '', aisle: 'eggs' },
    { name: 'dashi', amount: 0.5, unit: 'cup', aisle: 'pantry' },
    { name: 'soy sauce', amount: 2, unit: 'tbsp', aisle: 'pantry' },
    { name: 'mirin', amount: 2, unit: 'tbsp', aisle: 'pantry' },
    { name: 'sugar', amount: 2, unit: 'tsp', aisle: 'pantry' },
    { name: 'cooked short-grain rice', amount: 2, unit: 'servings', aisle: 'grains' },
    { name: 'mitsuba or green onions', amount: 4, unit: 'sprigs', aisle: 'produce' }
  ],
  steps: [
    'Stir the dashi, soy sauce, mirin, and sugar in a bowl until the sugar dissolves.',
    'Cut the onion lengthwise into 1/4-inch slices. Chop the mitsuba into 1/2-inch pieces.',
    'Cut the chicken into bite-size pieces. Toss with the sake and set aside for 5 minutes.',
    'Crack the eggs into a bowl. Cut through the whites with chopsticks without beating them.',
    'Spread the onion in a pan and add just enough sauce to cover it.',
    'Heat to a simmer, then spread the chicken over the onion.',
    'Reduce to medium-low and cook uncovered for about 5 minutes, flipping the chicken halfway.',
    'Drizzle two-thirds of the eggs over the chicken. Cover briefly if needed.',
    'When the eggs begin to set, add the rest and sprinkle with mitsuba. Cook to your liking.',
    'Spoon over rice in two bowls and drizzle with the sauce.'
  ]
}


const recipe = document.querySelector('#recipe-title')
recipe.textContent = oyakodon.name

const servings = document.querySelector('#recipe-servings')
servings.textContent = oyakodon.servings


const ingredients = document.querySelector('#recipe-ingredients')
let ingredientList = oyakodon.ingredients.map (function(ingredient) {
    return (`<li>${ingredient.name} : ${ingredient.amount} ${ingredient.unit}</li>`)
})

const instructions = document.querySelector('#recipe-steps')
let instructionsList =  oyakodon.steps.map(function (step){
    return (`<li> ${step} </li>`)
})

instructions.innerHTML = instructionsList.join('')
ingredients.innerHTML = ingredientList.join('')

const sourceLink = document.querySelector('#recipe-source')
sourceLink.textContent = oyakodon.sourceName
sourceLink.href = oyakodon.sourceLink









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