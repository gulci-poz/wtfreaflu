// w angular mamy $on i $broadcast ale nie używa się ich, bo mocno komplikują aplikacje

function EventEmitter () {
    this._events = {};
}

EventEmitter.prototype.on = function (type, listener) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(listener);
};

EventEmitter.prototype.emit = function (type) {
    if (this._events[type]) {
        this._events[type].forEach(function (listener) {
            listener();
        });
    }
};

EventEmitter.prototype.removeListener = function (type, listener) {
    if (this._events[type]) {

        // usunięcie jednego elementu o wskazanym indeksie
        // najlepiej, żeby funkcja nie była anonimowa, tylko żeby miała jakiś identyfikator
        this._events[type].splice(this._events[type].indexOf(listener), 1);
    }
};
