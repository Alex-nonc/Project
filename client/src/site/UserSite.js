import {makeAutoObservable} from "mobx"

// State-менеджер

export default class UserSite {
    // Конструктор state-менеджера
    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this); // Меняет свойства при вызове менеджера
    }

    // Сеттеры и геттеры для переключения состояний

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}