import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {

    constructor($root, options = {}){
        super($root, options.listeners)
        this.name = options.name
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []
        this.storeSub = null
        this.prepare()
    }
	// Возращает шаблон компонента
    toHTML(){
        return ''
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // Инициализируем компонент
    // Добавляем DOM слушателей
    // Уведомляем слушателей про событие event
    
    $emit(event, ...args){
        this.emitter.emit(event, ...args)
    }

    $dispatch(action){
        this.store.dispatch(action)
    }

    // Сюда приходят только те изминения по тем полям, на которые мы подписались
    storeChanged(){

    }

    isWatching(key){
        return this.subscribe.includes(key)
    }

    $subscribe(fn){
        this.storeSub = this.store.subscribe(fn)
    }

    prepare(){

    }
 
    init(){
        this.initDOMListeners()
    }

    // Удаляем компонент
    // Добавляем DOM слушателей
    destroy(){
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
        this.storeSub.unsubscribe()
    }
}