"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrder;
 * ```
 *
 * @param {Client} client
 */
var FlightOrder = /*#__PURE__*/function () {
  function FlightOrder(client, orderId) {
    _classCallCheck(this, FlightOrder);
    this.client = client;
    this._orderId = orderId;
  }

  /**
   * To retrieve a flight order based on its id.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To retrieve a flight order with ID 'XXX'
   *
   * ```js
   * amadeus.booking.flightOrder('XXX').get();
   * ```
   */
  _createClass(FlightOrder, [{
    key: "get",
    value: function get() {
      if (this._orderId) return this.client.get('/v1/booking/flight-orders/' + this._orderId);else throw new Error('MISSING_REQUIRED_PARAMETER');
    }

    /**
     * To cancel a flight order based on its id.
     *
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To cancel a flight order with ID 'XXX'
     *
     * ```js
     * amadeus.booking.flightOrder('XXX').delete();
     * ```
     */
  }, {
    key: "delete",
    value: function _delete() {
      if (this._orderId) return this.client["delete"]('/v1/booking/flight-orders/' + this._orderId);else throw new Error('MISSING_REQUIRED_PARAMETER');
    }
  }]);
  return FlightOrder;
}();
var _default = FlightOrder;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPcmRlciIsImNsaWVudCIsIm9yZGVySWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfb3JkZXJJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiRXJyb3IiLCJfZGVsZXRlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvYm9va2luZy9mbGlnaHRfb3JkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZy9mbGlnaHQtb3JkZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcjtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRmxpZ2h0T3JkZXIge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIG9yZGVySWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLl9vcmRlcklkID0gb3JkZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZXRyaWV2ZSBhIGZsaWdodCBvcmRlciBiYXNlZCBvbiBpdHMgaWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gcmV0cmlldmUgYSBmbGlnaHQgb3JkZXIgd2l0aCBJRCAnWFhYJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmJvb2tpbmcuZmxpZ2h0T3JkZXIoJ1hYWCcpLmdldCgpO1xuICAgKiBgYGBcbiAgICovXG4gIGdldCgpIHtcbiAgICBpZiAodGhpcy5fb3JkZXJJZClcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9ib29raW5nL2ZsaWdodC1vcmRlcnMvJyArIHRoaXMuX29yZGVySWQpO1xuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcignTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBjYW5jZWwgYSBmbGlnaHQgb3JkZXIgYmFzZWQgb24gaXRzIGlkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGNhbmNlbCBhIGZsaWdodCBvcmRlciB3aXRoIElEICdYWFgnXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcignWFhYJykuZGVsZXRlKCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGlmICh0aGlzLl9vcmRlcklkKVxuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmRlbGV0ZSgnL3YxL2Jvb2tpbmcvZmxpZ2h0LW9yZGVycy8nICsgdGhpcy5fb3JkZXJJZCk7XG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsaWdodE9yZGVyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxXQUFXO0VBQ2YsU0FBQUEsWUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxXQUFBO0lBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0csUUFBUSxHQUFHRixPQUFPO0VBQ3pCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRUcsWUFBQSxDQUFBTCxXQUFBO0lBQUFNLEdBQUE7SUFBQUMsS0FBQSxFQVdBLFNBQUFDLElBQUEsRUFBTTtNQUNKLElBQUksSUFBSSxDQUFDSixRQUFRLEVBQ2YsT0FBTyxJQUFJLENBQUNILE1BQU0sQ0FBQ08sR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUMsS0FFckUsTUFBTSxJQUFJSyxLQUFLLENBQUMsNEJBQTRCLENBQUM7SUFDakQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVZFO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQVdBLFNBQUFHLFFBQUEsRUFBUztNQUNQLElBQUksSUFBSSxDQUFDTixRQUFRLEVBQ2YsT0FBTyxJQUFJLENBQUNILE1BQU0sVUFBTyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUMsS0FFeEUsTUFBTSxJQUFJSyxLQUFLLENBQUMsNEJBQTRCLENBQUM7SUFDakQ7RUFBQztFQUFBLE9BQUFULFdBQUE7QUFBQTtBQUFBLElBQUFXLFFBQUEsR0FHWVgsV0FBVztBQUFBWSxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9