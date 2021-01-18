export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Dispatch, fire, trigger
  // Уведомляем слушателей если они есть
  // table.emit('table:select', )

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])){
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen
  // Подписываемся на уведомления
  // Добавляем нового слушателя
  // Formula.subscrive('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = 
        this.listeners[event].filter(listener => listener !== fn)
    }
  }

}

/* const emitter = new Emitter()
emitter.subscribe('ruslan', data => console.log('Sub', data))
emitter.emit('ruslan', 25) */