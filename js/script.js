// Inputs
const cardholderNameInput = document.querySelector('#cardholder-name')
const cardNumberInput = document.querySelector('#card-number')
const cardExpMonthInput = document.querySelector('#card-exp-month')
const cardExpYearInput = document.querySelector('#card-exp-year')
const cardCvcInput = document.querySelector('#card-cvc')

// Card Preview
const cardholderNamePreview = document.querySelector(
    '.card-preview__front-info-name'
)
const cardNumberPreview = document.querySelector(
    '.card-preview__front-info-number'
)
const cardExpMonthPreview = document.getElementById('card-exp-date-mm')
const cardExpYearPreview = document.getElementById('card-exp-date-yy')
const cardCvcPreview = document.querySelector('.card-preview__back-info-number')

// Form
const cardForm = document.querySelector('.card-form')
const cardFormSuccess = document.querySelector('.card-form__success')

// Buttons
const cardFormButton = document.querySelector('.card-form__button')
const cardFormButtonContinue = document.querySelector(
    '.card-form__success-button'
)

// Elements
const successIcon = document.querySelector('.card-form__success-icon')

// Events
const cardFormError = cardFormButton.nextElementSibling

cardFormButton.addEventListener('click', (e) => {
    e.preventDefault()

    let noErrors = true

    const inputs = document.querySelectorAll('.card-form__group input')

    inputs.forEach((input) => {
        if (input.classList.contains('error')) {
            noErrors = false
        }
    })

    if (noErrors && cardholderNameInput.value.trim() !== '' && cardNumberInput.value.trim() !== '' && cardExpMonthInput.value.trim() !== '' && cardExpYearInput.value.trim() !== '' && cardCvcInput.value.trim() !== '') {
        cardForm.style.display = 'none'
        cardFormSuccess.style.display = 'flex'
        setTimeout(() => {
            successIcon.classList.add('show')
        }, 10)
    } else {
        cardFormError.style.display = 'block'
        cardFormError.textContent = 'Please fill in all fields'

        setTimeout(() => {
            cardFormError.style.display = 'none'
        }, 3000)
    }
})

cardFormButtonContinue.addEventListener('click', () => {
    cardFormSuccess.style.display = 'none'
    cardForm.style.display = 'flex'
    successIcon.classList.remove('show')

    cardholderNameInput.value = ''
    cardNumberInput.value = ''
    cardExpMonthInput.value = ''
    cardExpYearInput.value = ''
    cardCvcInput.value = ''

    cardholderNamePreview.textContent = 'Jane Appleseed'
    cardNumberPreview.textContent = '0000 0000 0000 0000'
    cardExpMonthPreview.textContent = '00'
    cardExpYearPreview.textContent = '00'
    cardCvcPreview.textContent = '000'

    cardFormError.style.display = 'none'
})

//  Real Time Preview
cardholderNameInput.addEventListener('input', () => {
    cardholderNamePreview.textContent = cardholderNameInput.value
})

cardNumberInput.addEventListener('input', (e) => {
    let value = cardNumberInput.value.replace(/\D/g, '')

    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ')

    formattedValue = formattedValue.substring(0, 19)

    cardNumberInput.value = formattedValue

    if (isNaN(value)) {
        cardNumberInput.classList.add('error')
        cardNumberInputError.textContent = 'Write only numbers'
    } else {
        cardNumberInput.classList.remove('error')
        cardNumberInputError.textContent = ''

        cardNumberPreview.textContent = cardNumberInput.value
    }
})

cardExpMonthInput.addEventListener('input', () => {
    let value = cardExpMonthInput.value.replace(/\D/g, '')

    cardExpMonthInput.value = value

    if (!isNaN(value)) {
        cardExpMonthInput.classList.remove('error')
        cardExpDateInputError.style.display = 'none'
        cardExpDateInputError.textContent = ''

        cardExpMonthPreview.textContent = cardExpMonthInput.value
    }
})

cardExpYearInput.addEventListener('input', () => {
    let value = cardExpYearInput.value.replace(/\D/g, '')

    cardExpYearInput.value = value

    if (!isNaN(value)) {
        cardExpYearInput.classList.remove('error')
        cardExpDateInputError.style.display = 'none'
        cardExpDateInputError.textContent = ''

        cardExpYearPreview.textContent = cardExpYearInput.value
    }
})

cardCvcInput.addEventListener('input', () => {
    cardCvcInput.value = cardCvcInput.value.replace(/\D/g, '')

    if (cardCvcInput.value === '') {
        cardCvcPreview.textContent = '000'
    } else {
        cardCvcPreview.textContent = cardCvcInput.value
    }
})

// Check Validity
const cardholderNameInputError = cardholderNameInput.nextElementSibling

cardholderNameInput.addEventListener('blur', () => {
    cardholderNameInput.classList.remove('error')
    cardholderNameInputError.textContent = ''

    if (cardholderNameInput.value.trim().split(' ').length < 2) {
        cardholderNameInput.classList.add('error')
        cardholderNameInputError.textContent = 'Write your First and Last Name'
    }
})

const cardNumberInputError = cardNumberInput.nextElementSibling

cardNumberInput.addEventListener('blur', () => {
    cardNumberInput.classList.remove('error')
    cardNumberInputError.textContent = ''

    if (cardNumberInput.value.length < 19) {
        cardNumberInput.classList.add('error')
        cardNumberInputError.textContent = 'Write a valid number'
    }
})

const cardExpDateInputError = cardExpMonthInput.parentElement.nextElementSibling

cardExpMonthInput.addEventListener('blur', () => {
    cardExpMonthInput.classList.remove('error')
    cardExpDateInputError.style.display = 'none'
    cardExpDateInputError.textContent = ''

    if (cardExpMonthInput.value.length < 2) {
        cardExpMonthInput.classList.add('error')
        cardExpDateInputError.style.display = 'block'
        cardExpDateInputError.textContent = 'Write a valid month'
    }
})

cardExpYearInput.addEventListener('blur', () => {
    cardExpYearInput.classList.remove('error')
    cardExpDateInputError.style.display = 'none'
    cardExpDateInputError.textContent = ''

    if (cardExpYearInput.value.length < 2) {
        cardExpYearInput.classList.add('error')
        cardExpDateInputError.style.display = 'block'
        cardExpDateInputError.textContent = 'Write a valid year'
    }
})

const cardCvcInputError = cardCvcInput.nextElementSibling

cardCvcInput.addEventListener('blur', () => {
    cardCvcInput.classList.remove('error')
    cardCvcInputError.textContent = ''

    if (cardCvcInput.value.length < 3) {
        cardCvcInput.classList.add('error')
        cardCvcInputError.textContent = 'Write a valid CVC'
    }
})
