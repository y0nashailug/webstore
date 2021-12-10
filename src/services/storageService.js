import { TOKEN_KEY, USER_KEY } from '../config'
export class AppStorage {
  constructor(storage) {
    this.storage = storage || window.localStorage

    if (!this.isSupported()) {
      throw new Error('Storage is not supported by browser!')
    }
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key))
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  isSupported() {
    let supported = true

    if (!this.storage) {
      supported = false
    }

    return supported
  }
}

const appLocalStorage = new AppStorage()
const appStorage = appLocalStorage //MARK: - Default localstorage

const tokenService = {
  getToken() {
    return appStorage.getItem(TOKEN_KEY)
  },

  saveToken(accessToken) {
    appStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken() {
    appStorage.removeItem(TOKEN_KEY)
  },

}

const userInfoService = {
  getUser() {
    return appStorage.getItem(USER_KEY)
  },

  saveUser(user) {
    appStorage.setItem(USER_KEY, user)
  },

  removeUser() {
    appStorage.removeItem(USER_KEY)
  },
}

export {
  appStorage,
  tokenService,
  userInfoService,
}
