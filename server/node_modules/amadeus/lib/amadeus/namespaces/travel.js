"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(require("./travel/analytics"));
var _predictions = _interopRequireDefault(require("./travel/predictions"));
var _trip_parser = _interopRequireDefault(require("./travel/trip_parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` & `/v3/travel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel;
 * ```
 *
 * @param {Client} client
 * @property {Analytics} analytics
 * @property {Predictions} predictions
 * @property {TripParser} tripParser
 * @protected
 */
var Travel = /*#__PURE__*/_createClass(function Travel(client) {
  _classCallCheck(this, Travel);
  this.client = client;
  this.analytics = new _analytics["default"](client);
  this.predictions = new _predictions["default"](client);
  this.tripParser = new _trip_parser["default"](client);
});
var _default = Travel;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJlZGljdGlvbnMiLCJfdHJpcF9wYXJzZXIiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlRyYXZlbCIsImNsaWVudCIsImFuYWx5dGljcyIsIkFuYWx5dGljcyIsInByZWRpY3Rpb25zIiwiUHJlZGljdGlvbnMiLCJ0cmlwUGFyc2VyIiwiVHJpcFBhcnNlciIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3RyYXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5hbHl0aWNzIGZyb20gJy4vdHJhdmVsL2FuYWx5dGljcyc7XG5pbXBvcnQgUHJlZGljdGlvbnMgZnJvbSAnLi90cmF2ZWwvcHJlZGljdGlvbnMnO1xuaW1wb3J0IFRyaXBQYXJzZXIgZnJvbSAnLi90cmF2ZWwvdHJpcF9wYXJzZXInO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWxgICYgYC92Mi90cmF2ZWxgICYgYC92My90cmF2ZWxgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy50cmF2ZWw7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0FuYWx5dGljc30gYW5hbHl0aWNzXG4gKiBAcHJvcGVydHkge1ByZWRpY3Rpb25zfSBwcmVkaWN0aW9uc1xuICogQHByb3BlcnR5IHtUcmlwUGFyc2VyfSB0cmlwUGFyc2VyXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIFRyYXZlbCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgID0gY2xpZW50O1xuICAgIHRoaXMuYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcyhjbGllbnQpO1xuICAgIHRoaXMucHJlZGljdGlvbnMgPSBuZXcgUHJlZGljdGlvbnMoY2xpZW50KTtcbiAgICB0aGlzLnRyaXBQYXJzZXIgPSBuZXcgVHJpcFBhcnNlcihjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFlBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUE4QyxTQUFBRCx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLEdBQUEsUUFBQU4sR0FBQSxHQUFBTyxZQUFBLENBQUFELEdBQUEsb0JBQUFFLE9BQUEsQ0FBQVIsR0FBQSxpQkFBQUEsR0FBQSxHQUFBUyxNQUFBLENBQUFULEdBQUE7QUFBQSxTQUFBTyxhQUFBRyxLQUFBLEVBQUFDLElBQUEsUUFBQUgsT0FBQSxDQUFBRSxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBRyxNQUFBLENBQUFDLFdBQUEsT0FBQUYsSUFBQSxLQUFBRyxTQUFBLFFBQUFDLEdBQUEsR0FBQUosSUFBQSxDQUFBSyxJQUFBLENBQUFQLEtBQUEsRUFBQUMsSUFBQSxvQkFBQUgsT0FBQSxDQUFBUSxHQUFBLHVCQUFBQSxHQUFBLFlBQUFFLFNBQUEsNERBQUFQLElBQUEsZ0JBQUFGLE1BQUEsR0FBQVUsTUFBQSxFQUFBVCxLQUFBO0FBQUEsU0FBQVUsZ0JBQUFDLFFBQUEsRUFBQW5CLFdBQUEsVUFBQW1CLFFBQUEsWUFBQW5CLFdBQUEsZUFBQWdCLFNBQUE7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQSxJQWlCTUksTUFBTSxnQkFBQXJCLFlBQUEsQ0FDVixTQUFBcUIsT0FBWUMsTUFBTSxFQUFFO0VBQUFILGVBQUEsT0FBQUUsTUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBTUEsTUFBTTtFQUN2QixJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJQyxxQkFBUyxDQUFDRixNQUFNLENBQUM7RUFDdEMsSUFBSSxDQUFDRyxXQUFXLEdBQUcsSUFBSUMsdUJBQVcsQ0FBQ0osTUFBTSxDQUFDO0VBQzFDLElBQUksQ0FBQ0ssVUFBVSxHQUFHLElBQUlDLHVCQUFVLENBQUNOLE1BQU0sQ0FBQztBQUMxQyxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUdZUixNQUFNO0FBQUFTLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=