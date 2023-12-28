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
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.tripPurpose;
 * ```
 *
 * @param {Client} client
 */
var TripPurpose = /*#__PURE__*/function () {
  function TripPurpose(client) {
    _classCallCheck(this, TripPurpose);
    this.client = client;
  }

  /**
   * Forecast traveler purpose, Business or Leisure, together with the probability in the context of search & shopping.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.returnDate the date on which the traveler will depart from the destination to return to the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2018-02-28
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Forecast traveler purpose for a NYC-MAD round-trip between 2020-08-01 & 2020-08-12.
   *
   * ```js
   * amadeus.travel.predictions.tripPurpose.get({
   *    originLocationCode: 'NYC',
   *    destinationLocationCode: 'MAD',
   *    departureDate: '2020-08-01',
   *    returnDate: '2020-08-12'
   * })
   * ```
   */
  _createClass(TripPurpose, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/travel/predictions/trip-purpose', params);
    }
  }]);
  return TripPurpose;
}();
var _default = TripPurpose;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmlwUHVycG9zZSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL3ByZWRpY3Rpb25zL3RyaXBfcHVycG9zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvcHJlZGljdGlvbnMvdHJpcC1wdXJwb3NlYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLnByZWRpY3Rpb25zLnRyaXBQdXJwb3NlO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmlwUHVycG9zZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmVjYXN0IHRyYXZlbGVyIHB1cnBvc2UsIEJ1c2luZXNzIG9yIExlaXN1cmUsIHRvZ2V0aGVyIHdpdGggdGhlIHByb2JhYmlsaXR5IGluIHRoZSBjb250ZXh0IG9mIHNlYXJjaCAmIHNob3BwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQsIGUuZy4gQk9TIGZvciBCb3N0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIHRvIHdoaWNoIHRoZSB0cmF2ZWxlciBpcyBnb2luZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi4gRGF0ZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgSVNPIDg2MDEgWVlZWS1NTS1ERCBmb3JtYXQsIGUuZy4gMjAxNy0xMi0yNVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnJldHVybkRhdGUgdGhlIGRhdGUgb24gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0IGZyb20gdGhlIGRlc3RpbmF0aW9uIHRvIHJldHVybiB0byB0aGUgb3JpZ2luLiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE4LTAyLTI4XG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRm9yZWNhc3QgdHJhdmVsZXIgcHVycG9zZSBmb3IgYSBOWUMtTUFEIHJvdW5kLXRyaXAgYmV0d2VlbiAyMDIwLTA4LTAxICYgMjAyMC0wOC0xMi5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwucHJlZGljdGlvbnMudHJpcFB1cnBvc2UuZ2V0KHtcbiAgICogICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnTllDJyxcbiAgICogICAgZGVzdGluYXRpb25Mb2NhdGlvbkNvZGU6ICdNQUQnLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgIHJldHVybkRhdGU6ICcyMDIwLTA4LTEyJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvcHJlZGljdGlvbnMvdHJpcC1wdXJwb3NlJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwUHVycG9zZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFRSxZQUFBLENBQUFILFdBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBcUJBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3ZFO0VBQUM7RUFBQSxPQUFBUCxXQUFBO0FBQUE7QUFBQSxJQUFBVyxRQUFBLEdBR1lYLFdBQVc7QUFBQVksT0FBQSxjQUFBRCxRQUFBO0FBQUFFLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEifQ==