class BaseComponent {

  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Это абстрактный класс BaseComponent, от него нельзя создать экземпляр')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue
        
        if (newValue !== oldValue) {
          this.updateUi()
        }

        return true
      },
    })
  }

  updateUi() {
    throw new Error('Необходимо реализовать метод updateUi')
  }
}

export default BaseComponent