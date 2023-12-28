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
 * `/v1/travel/analytics/air-traffic/busiest-period` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.BusiestPeriod;
 * ```
 *
 * @param {Client} client
 */
var BusiestPeriod = /*#__PURE__*/function () {
  function BusiestPeriod(client) {
    _classCallCheck(this, BusiestPeriod);
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports.
   *
   * @param {Object} params
   * @param {string} params.cityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.direction to select between arrivals and departures (default: arrivals)
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What were the busiest months for Madrid in 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.BusiestPeriod.get({
   *   cityCode: 'MAD',
   *   period: '2017',
   *   direction: Amadeus.direction.arriving
   * });
   * ```
   */
  _createClass(BusiestPeriod, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/travel/analytics/air-traffic/busiest-period', params);
    }
  }]);
  return BusiestPeriod;
}();
var _default = BusiestPeriod;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCdXNpZXN0UGVyaW9kIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy90cmF2ZWwvYW5hbHl0aWNzL2Fpcl90cmFmZmljL2J1c2llc3RfcGVyaW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvYnVzaWVzdC1wZXJpb2RgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQnVzaWVzdFBlcmlvZHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlyIHRyYWZmaWMgcmVwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNpdHlDb2RlIElBVEEgY29kZSBvZiB0aGUgb3JpZ2luIGNpdHkgLSBlLmcuIE1BRCBmb3JcbiAgICogICBNYWRyaWQgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnBlcmlvZCBwZXJpb2Qgd2hlbiBjb25zdW1lcnMgYXJlIHRyYXZlbGxpbmcgaW5cbiAgICogICBZWVlZLU1NIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRpcmVjdGlvbiB0byBzZWxlY3QgYmV0d2VlbiBhcnJpdmFscyBhbmQgZGVwYXJ0dXJlcyAoZGVmYXVsdDogYXJyaXZhbHMpXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGF0IHdlcmUgdGhlIGJ1c2llc3QgbW9udGhzIGZvciBNYWRyaWQgaW4gMjAxNz9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZC5nZXQoe1xuICAgKiAgIGNpdHlDb2RlOiAnTUFEJyxcbiAgICogICBwZXJpb2Q6ICcyMDE3JyxcbiAgICogICBkaXJlY3Rpb246IEFtYWRldXMuZGlyZWN0aW9uLmFycml2aW5nXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljL2J1c2llc3QtcGVyaW9kJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXNpZXN0UGVyaW9kO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsYUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRUUsWUFBQSxDQUFBSCxhQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQXNCQSxTQUFBQyxJQUFBLEVBQWlCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsaURBQWlELEVBQUVDLE1BQU0sQ0FBQztJQUNuRjtFQUFDO0VBQUEsT0FBQVAsYUFBQTtBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUdZWCxhQUFhO0FBQUFZLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=