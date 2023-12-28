"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _by_square = _interopRequireDefault(require("./safety_rated_locations/by_square"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v1/safety/safety-rated-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocations;
 * ```
 *
 * @param {Client} client
 */
var SafetyRatedLocations = /*#__PURE__*/function () {
  function SafetyRatedLocations(client) {
    _classCallCheck(this, SafetyRatedLocations);
    this.client = client;
    this.bySquare = new _by_square["default"](client);
  }

  /**
   * /safety/safety-rated-locations
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How safe is Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.safety.safetyRatedLocations.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  _createClass(SafetyRatedLocations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/safety/safety-rated-locations', params);
    }
  }]);
  return SafetyRatedLocations;
}();
var _default = SafetyRatedLocations;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlfc3F1YXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJOdW1iZXIiLCJTYWZldHlSYXRlZExvY2F0aW9ucyIsImNsaWVudCIsImJ5U3F1YXJlIiwiQnlTcXVhcmUiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eS9zYWZldHlfcmF0ZWRfbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCeVNxdWFyZSBmcm9tICcuL3NhZmV0eV9yYXRlZF9sb2NhdGlvbnMvYnlfc3F1YXJlJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2FmZXR5L3NhZmV0eS1yYXRlZC1sb2NhdGlvbnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zYWZldHkuc2FmZXR5UmF0ZWRMb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFNhZmV0eVJhdGVkTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5ieVNxdWFyZSA9IG5ldyBCeVNxdWFyZShjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIC9zYWZldHkvc2FmZXR5LXJhdGVkLWxvY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubGF0aXR1ZGUgbGF0aXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sb25naXR1ZGUgbG9uZ2l0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogICB0aGUgc2VhcmNoIGNpcmNsZSAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMucmFkaXVzIHJhZGl1cyBvZiB0aGUgc2VhcmNoIGluIEtpbG9tZXRlciAtIG9wdGlvbmFsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogSG93IHNhZmUgaXMgQmFyY2Vsb25hPyAoYmFzZWQgYSBnZW8gbG9jYXRpb24gYW5kIGEgcmFkaXVzKVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNhZmV0eS5zYWZldHlSYXRlZExvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGxvbmdpdHVkZTogMi4xNjA4NzMsXG4gICAqICAgbGF0aXR1ZGU6IDQxLjM5NzE1OFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2FmZXR5L3NhZmV0eS1yYXRlZC1sb2NhdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmV0eVJhdGVkTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBMEQsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLFFBQUFGLEdBQUEsc0NBQUFFLE9BQUEsd0JBQUFDLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBSixHQUFBLGtCQUFBQSxHQUFBLGdCQUFBQSxHQUFBLFdBQUFBLEdBQUEseUJBQUFHLE1BQUEsSUFBQUgsR0FBQSxDQUFBSyxXQUFBLEtBQUFGLE1BQUEsSUFBQUgsR0FBQSxLQUFBRyxNQUFBLENBQUFHLFNBQUEscUJBQUFOLEdBQUEsS0FBQUUsT0FBQSxDQUFBRixHQUFBO0FBQUEsU0FBQU8sZ0JBQUFDLFFBQUEsRUFBQUMsV0FBQSxVQUFBRCxRQUFBLFlBQUFDLFdBQUEsZUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQWYsV0FBQSxFQUFBZ0IsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWQsaUJBQUEsQ0FBQUYsV0FBQSxDQUFBSCxTQUFBLEVBQUFtQixVQUFBLE9BQUFDLFdBQUEsRUFBQWYsaUJBQUEsQ0FBQUYsV0FBQSxFQUFBaUIsV0FBQSxHQUFBTixNQUFBLENBQUFDLGNBQUEsQ0FBQVosV0FBQSxpQkFBQVUsUUFBQSxtQkFBQVYsV0FBQTtBQUFBLFNBQUFhLGVBQUFLLEdBQUEsUUFBQUosR0FBQSxHQUFBSyxZQUFBLENBQUFELEdBQUEsb0JBQUF6QixPQUFBLENBQUFxQixHQUFBLGlCQUFBQSxHQUFBLEdBQUFNLE1BQUEsQ0FBQU4sR0FBQTtBQUFBLFNBQUFLLGFBQUFFLEtBQUEsRUFBQUMsSUFBQSxRQUFBN0IsT0FBQSxDQUFBNEIsS0FBQSxrQkFBQUEsS0FBQSxrQkFBQUEsS0FBQSxNQUFBRSxJQUFBLEdBQUFGLEtBQUEsQ0FBQTNCLE1BQUEsQ0FBQThCLFdBQUEsT0FBQUQsSUFBQSxLQUFBRSxTQUFBLFFBQUFDLEdBQUEsR0FBQUgsSUFBQSxDQUFBSSxJQUFBLENBQUFOLEtBQUEsRUFBQUMsSUFBQSxvQkFBQTdCLE9BQUEsQ0FBQWlDLEdBQUEsdUJBQUFBLEdBQUEsWUFBQXpCLFNBQUEsNERBQUFxQixJQUFBLGdCQUFBRixNQUFBLEdBQUFRLE1BQUEsRUFBQVAsS0FBQTtBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1RLG9CQUFvQjtFQUN4QixTQUFBQSxxQkFBWUMsTUFBTSxFQUFFO0lBQUFoQyxlQUFBLE9BQUErQixvQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxxQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDdEM7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQW5CRWYsWUFBQSxDQUFBYyxvQkFBQTtJQUFBZixHQUFBO0lBQUFtQixLQUFBLEVBb0JBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQTlCLE1BQUEsUUFBQThCLFNBQUEsUUFBQVgsU0FBQSxHQUFBVyxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLG1DQUFtQyxFQUFFQyxNQUFNLENBQUM7SUFDckU7RUFBQztFQUFBLE9BQUFOLG9CQUFBO0FBQUE7QUFBQSxJQUFBUSxRQUFBLEdBR1lSLG9CQUFvQjtBQUFBUyxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9