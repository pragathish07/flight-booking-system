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
 * `/v1/analytics/itinerary-price-metrics
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics.itineraryPriceMetrics
 * ```
 *
 * @param {Client} client
 */
var ItineraryPriceMetrics = /*#__PURE__*/function () {
  function ItineraryPriceMetrics(client) {
    _classCallCheck(this, ItineraryPriceMetrics);
    this.client = client;
  }

  /**
   * Provides historical prices in a quartile distribution, including minimum, maximum and average price.
   *
   * @param {Object} params
   * @param {string} params.originIataCode city/airport code, following IATA standard, from which the traveler will depart
   * @param {string} params.destinationIataCode city/airport code, following IATA standard, from which the traveler is going
   * @param {string} params.departureDate The date on which the traveler will depart from the origin to go to the destination.
   * @return {Promise.<Response,ResponseError>} a Promise
   * Am I getting a good deal on this flight?
   * ```js
   * amadeus.analytics.itineraryPriceMetrics.get({
   * originIataCode: 'MAD',
   * destinationIataCode: 'CDG',
   * departureDate: '2021-03-13'
   * });
   * ```
   */
  _createClass(ItineraryPriceMetrics, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/analytics/itinerary-price-metrics', params);
    }
  }]);
  return ItineraryPriceMetrics;
}();
var _default = ItineraryPriceMetrics;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJdGluZXJhcnlQcmljZU1ldHJpY3MiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcy9pdGluZXJhcnlfcHJpY2VfbWV0cmljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9hbmFseXRpY3MvaXRpbmVyYXJ5LXByaWNlLW1ldHJpY3NcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYW5hbHl0aWNzLml0aW5lcmFyeVByaWNlTWV0cmljc1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBJdGluZXJhcnlQcmljZU1ldHJpY3Mge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBoaXN0b3JpY2FsIHByaWNlcyBpbiBhIHF1YXJ0aWxlIGRpc3RyaWJ1dGlvbiwgaW5jbHVkaW5nIG1pbmltdW0sIG1heGltdW0gYW5kIGF2ZXJhZ2UgcHJpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcmlnaW5JYXRhQ29kZSBjaXR5L2FpcnBvcnQgY29kZSwgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQsIGZyb20gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25JYXRhQ29kZSBjaXR5L2FpcnBvcnQgY29kZSwgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQsIGZyb20gd2hpY2ggdGhlIHRyYXZlbGVyIGlzIGdvaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSBUaGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBBbSBJIGdldHRpbmcgYSBnb29kIGRlYWwgb24gdGhpcyBmbGlnaHQ/XG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYW5hbHl0aWNzLml0aW5lcmFyeVByaWNlTWV0cmljcy5nZXQoe1xuICAgKiBvcmlnaW5JYXRhQ29kZTogJ01BRCcsXG4gICAqIGRlc3RpbmF0aW9uSWF0YUNvZGU6ICdDREcnLFxuICAgKiBkZXBhcnR1cmVEYXRlOiAnMjAyMS0wMy0xMydcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL2FuYWx5dGljcy9pdGluZXJhcnktcHJpY2UtbWV0cmljcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRpbmVyYXJ5UHJpY2VNZXRyaWNzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLHFCQUFxQjtFQUN6QixTQUFBQSxzQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYscUJBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWhCRUUsWUFBQSxDQUFBSCxxQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFpQkEsU0FBQUMsSUFBQSxFQUFpQjtNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLHVDQUF1QyxFQUFFQyxNQUFNLENBQUM7SUFDekU7RUFBQztFQUFBLE9BQUFQLHFCQUFBO0FBQUE7QUFBQSxJQUFBVyxRQUFBLEdBR1lYLHFCQUFxQjtBQUFBWSxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9