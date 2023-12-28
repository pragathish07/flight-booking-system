"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _safety_rated_locations = _interopRequireDefault(require("./safety/safety_rated_locations"));
var _safety_rated_location = _interopRequireDefault(require("./safety/safety_rated_location"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v1/safety` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety;
 * ```
 *
 * @param {Client} client
 * @property {SafetyRatedLocations} safetyRatedLocations
 */
var Safety = /*#__PURE__*/function () {
  function Safety(client) {
    _classCallCheck(this, Safety);
    this.client = client;
    this.safetyRatedLocations = new _safety_rated_locations["default"](client);
  }
  _createClass(Safety, [{
    key: "safetyRatedLocation",
    value: function safetyRatedLocation(locationId) {
      return new _safety_rated_location["default"](this.client, locationId);
    }
  }]);
  return Safety;
}();
var _default = Safety;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc2FmZXR5X3JhdGVkX2xvY2F0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3NhZmV0eV9yYXRlZF9sb2NhdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIk51bWJlciIsIlNhZmV0eSIsImNsaWVudCIsInNhZmV0eVJhdGVkTG9jYXRpb25zIiwiU2FmZXR5UmF0ZWRMb2NhdGlvbnMiLCJ2YWx1ZSIsInNhZmV0eVJhdGVkTG9jYXRpb24iLCJsb2NhdGlvbklkIiwiU2FmZXR5UmF0ZWRMb2NhdGlvbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2FmZXR5UmF0ZWRMb2NhdGlvbnMgZnJvbSAnLi9zYWZldHkvc2FmZXR5X3JhdGVkX2xvY2F0aW9ucyc7XG5pbXBvcnQgU2FmZXR5UmF0ZWRMb2NhdGlvbiBmcm9tICcuL3NhZmV0eS9zYWZldHlfcmF0ZWRfbG9jYXRpb24nO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zYWZldHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zYWZldHk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1NhZmV0eVJhdGVkTG9jYXRpb25zfSBzYWZldHlSYXRlZExvY2F0aW9uc1xuICovXG5jbGFzcyBTYWZldHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnNhZmV0eVJhdGVkTG9jYXRpb25zID0gbmV3IFNhZmV0eVJhdGVkTG9jYXRpb25zKGNsaWVudCk7XG4gIH1cblxuICBzYWZldHlSYXRlZExvY2F0aW9uKGxvY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gbmV3IFNhZmV0eVJhdGVkTG9jYXRpb24odGhpcy5jbGllbnQsIGxvY2F0aW9uSWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmV0eTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLHVCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxzQkFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQWlFLFNBQUFELHVCQUFBRyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxRQUFBRixHQUFBLHNDQUFBRSxPQUFBLHdCQUFBQyxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUosR0FBQSxrQkFBQUEsR0FBQSxnQkFBQUEsR0FBQSxXQUFBQSxHQUFBLHlCQUFBRyxNQUFBLElBQUFILEdBQUEsQ0FBQUssV0FBQSxLQUFB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