import { UserEntity } from '@/models';

const user: UserEntity = {
  email: 'john@travolta.io',
  password: '123456',
  name: 'John'
}

export const checkIfUserExistsInDB = (email: string): Promise<boolean | string> => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === user.email) {
          resolve(true)
        } else {
          reject('user not found')
        }
      }, 1000)
  })
}

export const authenticateUser = (email: string, password: string): Promise<Object | string> => {
  return new Promise((resolve, reject) => {
    console.log(email === user.email && password === user.password)
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve({
          email: user.email,
          name: user.name
        })
      } else {
        reject('supplied credentials do not match any user')
      }
    }, 1000)
  })
}

export const postFormToDB = (form: Object): Promise<Object> => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(form), 1000)
  })
}
