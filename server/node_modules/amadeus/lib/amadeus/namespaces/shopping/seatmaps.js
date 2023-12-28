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
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */
var Seatmaps = /*#__PURE__*/function () {
  function Seatmaps(client) {
    _classCallCheck(this, Seatmaps);
    this.client = client;
  }

  /**
   * To retrieve the seat map of each flight present in an order.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Retrieve the seat map for flight order with ID 'XXX'
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *    'flight-orderId': 'XXX'}
   * );
   * ```
   */
  _createClass(Seatmaps, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/shopping/seatmaps', params);
    }

    /**
     * To retrieve the seat map of each flight included in a flight offer.
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To retrieve the seat map of each flight included in flight offers
     * for MAD-NYC flight on 2020-08-01.
     *
     * ```js
     * amadeus.shopping.flightOffers.get({
     *    origin: 'MAD',
     *    destination: 'NYC',
     *    departureDate: '2020-08-01'
     * }).then(function(response){
     *    return amadeus.shopping.flightOffers.seatmaps.post(
     *        JSON.stringify({
     *            'data': response.data
     *        })
     *    );
     * });
     * ```
    */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/shopping/seatmaps', params);
    }
  }]);
  return Seatmaps;
}();
var _default = Seatmaps;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWF0bWFwcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL3NlYXRtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvc2VhdG1hcHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgU2VhdG1hcHMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZXRyaWV2ZSB0aGUgc2VhdCBtYXAgb2YgZWFjaCBmbGlnaHQgcHJlc2VudCBpbiBhbiBvcmRlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHJpZXZlIHRoZSBzZWF0IG1hcCBmb3IgZmxpZ2h0IG9yZGVyIHdpdGggSUQgJ1hYWCdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcy5nZXQoe1xuICAgKiAgICAnZmxpZ2h0LW9yZGVySWQnOiAnWFhYJ31cbiAgICogKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2hvcHBpbmcvc2VhdG1hcHMnLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBhIGZsaWdodCBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBmbGlnaHQgb2ZmZXJzXG4gICAqIGZvciBNQUQtTllDIGZsaWdodCBvbiAyMDIwLTA4LTAxLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5nZXQoe1xuICAgKiAgICBvcmlnaW46ICdNQUQnLFxuICAgKiAgICBkZXN0aW5hdGlvbjogJ05ZQycsXG4gICAqICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTA4LTAxJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICAgcmV0dXJuIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnNlYXRtYXBzLnBvc3QoXG4gICAqICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAqICAgICAgICAgICAgJ2RhdGEnOiByZXNwb25zZS5kYXRhXG4gICAqICAgICAgICB9KVxuICAgKiAgICApO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJywgcGFyYW1zKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXRtYXBzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkVFLFlBQUEsQ0FBQUgsUUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFjQSxTQUFBQyxJQUFBLEVBQWlCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsdUJBQXVCLEVBQUVDLE1BQU0sQ0FBQztJQUN6RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBdEJFO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQXVCQSxTQUFBTSxLQUFBLEVBQWtCO01BQUEsSUFBYkosTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDVSxJQUFJLENBQUMsdUJBQXVCLEVBQUVKLE1BQU0sQ0FBQztJQUMxRDtFQUFDO0VBQUEsT0FBQVAsUUFBQTtBQUFBO0FBQUEsSUFBQVksUUFBQSxHQUlZWixRQUFRO0FBQUFhLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=