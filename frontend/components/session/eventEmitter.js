var EventEmitter = {
    _events: {},
    dispatch: function (event, data) {
      if (!this._events[event]) {
        return;
      }
      for (var i = 0; i < this._events[event].length; i++) {
        this._events[event][i]();
      }
    },
    subscribe: function (event, callback) {
      if (!this._events[event]) this._events[event] = []; // new event
      this._events[event].push(callback);
    }
};

module.exports = EventEmitter;
