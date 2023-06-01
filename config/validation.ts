const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const validation = {
  email: (value: string, isRequired?: boolean) => {
    if (isRequired && (!value || value.length < 1)) {
      return 'Champ obligatoire'
    }
    if (!emailRegex.test(value)) {
      return 'Email invalide'
    }
    return false
  },
  required: (value: string | string[]) => {
    if (!value || value.length < 1) {
      return 'Champ obligatoire'
    }
    return false
  },
  username: (value: string, isRequired?: boolean) => {
    if (isRequired && (!value || value.length < 1)) {
      return 'Champ obligatoire'
    }
    if (value && value.length < 3) {
      return 'Minimum 3 caractères'
    }
    if (value && value.length > 20) {
      return 'Maximum 20 caractères'
    }
    if (value && value.match(/^[a-zA-Z0-9]$/)) {
      return 'Format invalide, caractères autorisés: a-z, A-Z, 0-9'
    }
    return false
  },
  plainPassword: (value: string, isRequired?: boolean) => {
    if (isRequired && (!value || value.length < 1)) {
      return 'Champ obligatoire'
    }
    if (value && !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)) {
      return 'Le mot de passe doit contenir au moins 8 caractères, une lettre miniscule, une lettre majuscule, un chiffre et un caractère spécial.'
    }
    return false
  },
  plainPassword2: (value: string, password1: string) => {
    if (!value || value.length < 1) {
      return 'Champ obligatoire'
    }
    if (value !== password1) {
      return 'Les mots de passe ne correspondent pas'
    }
    return false
  },
  slug: (value: string, isRequired?: boolean) => {
    if (isRequired && (!value || value.length < 1)) {
      return 'Champ obligatoire'
    }
    if (value && value.length < 3) {
      return 'Minimum 3 caractères'
    }
    if (value && !value.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) {
      return 'Format slug invalide, contactez l\'administrateur'
    }
    return false
  }
}

export default validation
