export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (regex.test(email)) {
    return false
  }
  else return true
}

export const validateName = (name: string) => {
  if (name.length < 20) {
    return true
  }
}
export const validateId = (id: string) => {
  if (id.length < 5) {
    return true
  }
}
