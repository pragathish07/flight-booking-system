"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _transfer_orders = _interopRequireDefault(require("./ordering/transfer_orders"));
var _transfer_order = _interopRequireDefault(require("./ordering/transfer_order"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/ordering` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering;
 * ```
 *
 * @param {Client} client
 * @property {TransferOrders} transferOrders
 * @property {TransferOrder} transferOrder
 */
var Ordering = /*#__PURE__*/_createClass(function Ordering(client) {
  _classCallCheck(this, Ordering);
  this.client = client;
  this.transferOrders = new _transfer_orders["default"](client);
  this.transferOrder = function (orderId) {
    return new _transfer_order["default"](client, orderId);
  };
});
var _default = Ordering;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhbnNmZXJfb3JkZXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdHJhbnNmZXJfb3JkZXIiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIk9yZGVyaW5nIiwiY2xpZW50IiwidHJhbnNmZXJPcmRlcnMiLCJUcmFuc2Zlck9yZGVycyIsInRyYW5zZmVyT3JkZXIiLCJvcmRlcklkIiwiVHJhbnNmZXJPcmRlciIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL29yZGVyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2Zlck9yZGVycyBmcm9tICcuL29yZGVyaW5nL3RyYW5zZmVyX29yZGVycyc7XG5pbXBvcnQgVHJhbnNmZXJPcmRlciBmcm9tICcuL29yZGVyaW5nL3RyYW5zZmVyX29yZGVyJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvb3JkZXJpbmdgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7VHJhbnNmZXJPcmRlcnN9IHRyYW5zZmVyT3JkZXJzXG4gKiBAcHJvcGVydHkge1RyYW5zZmVyT3JkZXJ9IHRyYW5zZmVyT3JkZXJcbiAqL1xuY2xhc3MgT3JkZXJpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnRyYW5zZmVyT3JkZXJzID0gbmV3IFRyYW5zZmVyT3JkZXJzKGNsaWVudCk7XG4gICAgdGhpcy50cmFuc2Zlck9yZGVyID0gKG9yZGVySWQpID0+IG5ldyBUcmFuc2Zlck9yZGVyKGNsaWVudCwgb3JkZXJJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJpbmc7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsZ0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGVBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUFzRCxTQUFBRCx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLEdBQUEsUUFBQU4sR0FBQSxHQUFBTyxZQUFBLENBQUFELEdBQUEsb0JBQUFFLE9BQUEsQ0FBQVIsR0FBQSxpQkFBQUEsR0FBQSxHQUFBUyxNQUFBLENBQUFULEdBQUE7QUFBQSxTQUFBTyxhQUFBRyxLQUFBLEVBQUFDLElBQUEsUUFBQUgsT0FBQSxDQUFBRSxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBRyxNQUFBLENBQUFDLFdBQUEsT0FBQUYsSUFBQSxLQUFBRyxTQUFBLFFBQUFDLEdBQUEsR0FBQUosSUFBQSxDQUFBSyxJQUFBLENBQUFQLEtBQUEsRUFBQUMsSUFBQSxvQkFBQUgsT0FBQSxDQUFBUSxHQUFBLHVCQUFBQSxHQUFBLFlBQUFFLFNBQUEsNERBQUFQLElBQUEsZ0JBQUFGLE1BQUEsR0FBQVUsTUFBQSxFQUFBVCxLQUFBO0FBQUEsU0FBQVUsZ0JBQUFDLFFBQUEsRUFBQW5CLFdBQUEsVUFBQW1CLFFBQUEsWUFBQW5CLFdBQUEsZUFBQWdCLFNBQUE7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTUksUUFBUSxnQkFBQXJCLFlBQUEsQ0FDWixTQUFBcUIsU0FBWUMsTUFBTSxFQUFFO0VBQUFILGVBQUEsT0FBQUUsUUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJQywyQkFBYyxDQUFDRixNQUFNLENBQUM7RUFDaEQsSUFBSSxDQUFDRyxhQUFhLEdBQUcsVUFBQ0MsT0FBTztJQUFBLE9BQUssSUFBSUMsMEJBQWEsQ0FBQ0wsTUFBTSxFQUFFSSxPQUFPLENBQUM7RUFBQTtBQUN0RSxDQUFDO0FBQUEsSUFBQUUsUUFBQSxHQUdZUCxRQUFRO0FBQUFRLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=