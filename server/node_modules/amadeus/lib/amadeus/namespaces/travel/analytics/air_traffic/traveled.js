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
 * `/v1/travel/analytics/air-traffic/traveled` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Traveled;
 * ```
 *
 * @param {Client} client
 */
var Traveled = /*#__PURE__*/function () {
  function Traveled(client) {
    _classCallCheck(this, Traveled);
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of people traveling.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Where were people flying to from Madrid in the January 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Traveled.get({
   *   originCityCode: 'MAD',
   *   period: '2017-01'
   * });
   * ```
   */
  _createClass(Traveled, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/travel/analytics/air-traffic/traveled', params);
    }
  }]);
  return Traveled;
}();
var _default = Traveled;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmF2ZWxlZCIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL2FuYWx5dGljcy9haXJfdHJhZmZpYy90cmF2ZWxlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljL3RyYXZlbGVkYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcy5BaXJUcmFmZmljLlRyYXZlbGVkO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmF2ZWxlZHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlyIHRyYWZmaWMgcmVwb3J0cyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHBlb3BsZSB0cmF2ZWxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcmlnaW5DaXR5Q29kZSBJQVRBIGNvZGUgb2YgdGhlIG9yaWdpbiBjaXR5IC0gZS5nLiBNQUQgZm9yXG4gICAqICAgTWFkcmlkIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wZXJpb2QgcGVyaW9kIHdoZW4gY29uc3VtZXJzIGFyZSB0cmF2ZWxsaW5nIGluXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGVyZSB3ZXJlIHBlb3BsZSBmbHlpbmcgdG8gZnJvbSBNYWRyaWQgaW4gdGhlIEphbnVhcnkgMjAxNz9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuVHJhdmVsZWQuZ2V0KHtcbiAgICogICBvcmlnaW5DaXR5Q29kZTogJ01BRCcsXG4gICAqICAgcGVyaW9kOiAnMjAxNy0wMSdcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvdHJhdmVsZWQnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVkO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFFBQVE7RUFDWixTQUFBQSxTQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixRQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbEJFRSxZQUFBLENBQUFILFFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBbUJBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRUMsTUFBTSxDQUFDO0lBQzdFO0VBQUM7RUFBQSxPQUFBUCxRQUFBO0FBQUE7QUFBQSxJQUFBVyxRQUFBLEdBR1lYLFFBQVE7QUFBQVksT0FBQSxjQUFBRCxRQUFBO0FBQUFFLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEifQ==