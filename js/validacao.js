function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

window.addEventListener('load', () => {
  let form = document.querySelector('main.container form.form-auth.card')
  let input = document.createElement('input')

  input.setAttribute('type', 'date')
  input.setAttribute('id', 'Nascimento')
  input.setAttribute('onchange', 'alterandoCampo(this)')

  form.insertBefore(input, form.querySelector('button'))

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputs = document.querySelectorAll('main.container form.form-auth.card input')

    let errors = new Array

    inputs.forEach((input) => {
      let id = input.id.toLowerCase()
      if (!input.value) {
        input.style.borderColor = 'red'
        errors.push(`o campo ${id} está vazio.`)
        return
      }
      switch (id) {
        case 'nome':
          if ((input.value.length < 3) || (input.value.length >= 80)) {
            errors.push(`o campo ${id} precisa ter entre 3 e 80 caracteres.`)
            input.style.borderColor = 'red'

          }
          break;
        case 'sobrenome':
          if ((input.value.length < 3) || (input.value.length >= 100)) {
            errors.push(`o campo ${id} precisa ter entre 3 e 100 caracteres.`)
            input.style.borderColor = 'red'

          }
          break;
        case 'e-mail':
          if ((input.value.length < 10) || (input.value.length >= 180)) {
            errors.push(`o campo ${id} precisa ter entre 3 e 80 caracteres.`)
            input.style.borderColor = 'red'

          }
          if (!input.value.includes('@') || !(input.value.includes('.'))) {
            errors.push(`o campo ${id} precisa ter @ e .`)
            input.style.borderColor = 'red'

          }
          break;
        case 'nascimento':
          let date = input.value.split('-')
          let age = calculate_age(new Date(date[0], date[1], date[2]))
          if (age <= 16 || age >= 120) {
            errors.push(`Sua idade precisa ser no mínimo 16 anos, e no máximo 120.`)
            input.style.borderColor = 'red'
          }

          break;
        case 'senha':
          if ((input.value.length < 8) || (input.value.length > 100)) {
            errors.push(`o campo ${id} precisa ter entre 8 e 100 caracteres.`)
            input.style.borderColor = 'red'

          }
          break;
        case 'usuário':
          if ((input.value.length < 10) || (input.value.length > 15)) {
            errors.push(`o campo ${id} precisa ter entre 10 e 15 caracteres.`)
            input.style.borderColor = 'red'

          }
          break;
        default:
          break;
      }
    })

    if (errors) {
      console.log(errors);
      let errorsContainer = document.querySelector('body .errors')
      errorsContainer.setAttribute('class', 'errors activated')

      errors.forEach(value => {
        let snackError = document.createElement('div')
        snackError.setAttribute('class', 'snack-container')

        let errorLabel = document.createElement('span')
        errorLabel.setAttribute('class', 'error')
        errorLabel.innerHTML = value

        snackError.appendChild(errorLabel)
        errorsContainer.appendChild(snackError)
      })
      setTimeout(() => {
        errorsContainer.setAttribute('class', 'errors desactive')
      }, 3000)
      setTimeout(() => {
        errorsContainer.setAttribute('class', 'errors')
        errorsContainer.querySelectorAll('.snack-container').forEach((value) => {
          errorsContainer.removeChild(value)
        })
      }, 3500)
    }

  })
})

const alterandoCampo = (element) => {
  element.style.borderColor = '#d7d7d7'
}