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
 * `/v1/ordering/transfer-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders;
 * ```
 *
 * @param {Client} client
 */
var TransferOrders = /*#__PURE__*/function () {
  function TransferOrders(client) {
    _classCallCheck(this, TransferOrders);
    this.client = client;
  }

  /**
   * To book the selected transfer-offer and create a transfer-order
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the transfer-offer(s) suggested by transferOffers and create a transfer-order
   *
   * ```js
   * amadeus.ordering.transferOrders.post(body, '2094123123');;
   * ```
   */
  _createClass(TransferOrders, [{
    key: "post",
    value: function post(body, offerId) {
      return this.client.post("/v1/ordering/transfer-orders?offerId=".concat(offerId), body);
    }
  }]);
  return TransferOrders;
}();
var _default = TransferOrders;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFuc2Zlck9yZGVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsImJvZHkiLCJvZmZlcklkIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvb3JkZXJpbmcvdHJhbnNmZXJfb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2Zlck9yZGVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuXG4gIH1cblxuICAvKipcbiAgICogVG8gYm9vayB0aGUgc2VsZWN0ZWQgdHJhbnNmZXItb2ZmZXIgYW5kIGNyZWF0ZSBhIHRyYW5zZmVyLW9yZGVyXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgdHJhbnNmZXItb2ZmZXIocykgc3VnZ2VzdGVkIGJ5IHRyYW5zZmVyT2ZmZXJzIGFuZCBjcmVhdGUgYSB0cmFuc2Zlci1vcmRlclxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzLnBvc3QoYm9keSwgJzIwOTQxMjMxMjMnKTs7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChib2R5LCBvZmZlcklkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnM/b2ZmZXJJZD0ke29mZmVySWR9YCwgYm9keSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmZXJPcmRlcnM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGNBQWM7RUFDbEIsU0FBQUEsZUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsY0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUV0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBVkVFLFlBQUEsQ0FBQUgsY0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFXQSxTQUFBQyxLQUFLQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtNQUNsQixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLHlDQUFBRyxNQUFBLENBQXlDRCxPQUFPLEdBQUlELElBQUksQ0FBQztJQUNsRjtFQUFDO0VBQUEsT0FBQVAsY0FBQTtBQUFBO0FBQUEsSUFBQVUsUUFBQSxHQUdZVixjQUFjO0FBQUFXLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=