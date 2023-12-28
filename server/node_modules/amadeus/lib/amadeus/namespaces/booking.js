"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_orders = _interopRequireDefault(require("./booking/flight_orders"));
var _flight_order = _interopRequireDefault(require("./booking/flight_order"));
var _hotel_bookings = _interopRequireDefault(require("./booking/hotel_bookings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightOrders} flightOrders
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @protected
 */
var Booking = /*#__PURE__*/function () {
  function Booking(client) {
    _classCallCheck(this, Booking);
    this.client = client;
    this.flightOrders = new _flight_orders["default"](client);
    this.hotelBookings = new _hotel_bookings["default"](client);
  }
  _createClass(Booking, [{
    key: "flightOrder",
    value: function flightOrder(orderId) {
      return new _flight_order["default"](this.client, orderId);
    }
  }]);
  return Booking;
}();
var _default = Booking;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X29yZGVycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vcmRlciIsIl9ob3RlbF9ib29raW5ncyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIk51bWJlciIsIkJvb2tpbmciLCJjbGllbnQiLCJmbGlnaHRPcmRlcnMiLCJGbGlnaHRPcmRlcnMiLCJob3RlbEJvb2tpbmdzIiwiSG90ZWxCb29raW5ncyIsInZhbHVlIiwiZmxpZ2h0T3JkZXIiLCJvcmRlcklkIiwiRmxpZ2h0T3JkZXIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRPcmRlcnMgZnJvbSAnLi9ib29raW5nL2ZsaWdodF9vcmRlcnMnO1xuaW1wb3J0IEZsaWdodE9yZGVyIGZyb20gJy4vYm9va2luZy9mbGlnaHRfb3JkZXInO1xuaW1wb3J0IEhvdGVsQm9va2luZ3MgZnJvbSAnLi9ib29raW5nL2hvdGVsX2Jvb2tpbmdzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmJvb2tpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyc30gZmxpZ2h0T3JkZXJzXG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyfSBmbGlnaHRPcmRlclxuICogQHByb3BlcnR5IHtIb3RlbEJvb2tpbmdzfSBob3RlbEJvb2tpbmdzXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICA9IGNsaWVudDtcbiAgICB0aGlzLmZsaWdodE9yZGVycyA9IG5ldyBGbGlnaHRPcmRlcnMoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVsQm9va2luZ3MgPSBuZXcgSG90ZWxCb29raW5ncyhjbGllbnQpO1xuICB9XG5cbiAgZmxpZ2h0T3JkZXIgKG9yZGVySWQpIHtcbiAgICByZXR1cm4gbmV3IEZsaWdodE9yZGVyKHRoaXMuY2xpZW50LCBvcmRlcklkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsY0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsZUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEs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