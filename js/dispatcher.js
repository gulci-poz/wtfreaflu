function Dispatcher() {
    this._lastID = 0;
    this._callbacks = {};
}

// rejestrujemy funkcję, która będzie odpowiadała na daną akcję
Dispatcher.prototype.register = function (callback) {
    var id = "CID_" + this._lastID++;
    // id to będzie name danej właściwości, callback to value
    this._callbacks[id] = callback;
    return id;
};

// uruchomienie funkcji, która powiadomi Event Emitters o wystąpieniu danej akcji; aplikacja (Event Emitters) musi mieć zarejestrowane takie callbaki
// wszystkie funkcje zarejestrowane w _callbacks muszą zostać uruchomione
Dispatcher.prototype.dispatch = function (action) {
    for (var id in this._callbacks) {
        this._callbacks[id](action);
    }
};

// ids callbacków
// idea: callbaki czekają na zakończenie innych callbaków

Dispatcher.prototype.waitFor = function (ids) {
    // na razie nie implementujemy
};
