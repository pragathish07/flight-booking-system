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
 * `/v1/travel/predictions/flight-delay` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.flightDelay;
 * ```
 *
 * @param {Client} client
 */
var FlightDelay = /*#__PURE__*/function () {
  function FlightDelay(client) {
    _classCallCheck(this, FlightDelay);
    this.client = client;
  }

  /**
   * This machine learning API is based on a prediction model that takes the input of
   * the user -time, carrier, airport and aircraft information- and
   * predict the segment where the flight is likely to lay.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.departureTime local time relative to originLocationCode on which the traveler will depart from the origin. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.arrivalDate the date on which the traveler will arrive to the destination from the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.arrivalTime local time relative to destinationLocationCode on which the traveler will arrive to destination. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.aircraftCode IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)
   * @param {string} params.carrierCode airline / carrier code
   * @param {string} params.flightNumber flight number as assigned by the carrier
   * @param {string} params.duration flight duration in ISO8601 PnYnMnDTnHnMnS format, e.g. PT2H10M
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Predict the segment where LH1009 (BRU-FRA) is likely to lay on 2020-01-14
   *
   * ```js
   * amadeus.travel.predictions.flightDelay.get({
   *    originLocationCode: 'BRU',
   *    destinationLocationCode: 'FRA',
   *    departureDate: '2020-01-14',
   *    departureTime: '11:05:00',
   *    arrivalDate: '2020-01-14',
   *    arrivalTime: '12:10:00',
   *    aircraftCode: '32A',
   *    carrierCode: 'LH',
   *    flightNumber: '1009',
   *    duration: 'PT1H05M'
   * })
   * ```
   */
  _createClass(FlightDelay, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/travel/predictions/flight-delay', params);
    }
  }]);
  return FlightDelay;
}();
var _default = FlightDelay;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHREZWxheSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL3ByZWRpY3Rpb25zL2ZsaWdodF9kZWxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvcHJlZGljdGlvbnMvZmxpZ2h0LWRlbGF5YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLnByZWRpY3Rpb25zLmZsaWdodERlbGF5O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHREZWxheSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWFjaGluZSBsZWFybmluZyBBUEkgaXMgYmFzZWQgb24gYSBwcmVkaWN0aW9uIG1vZGVsIHRoYXQgdGFrZXMgdGhlIGlucHV0IG9mXG4gICAqIHRoZSB1c2VyIC10aW1lLCBjYXJyaWVyLCBhaXJwb3J0IGFuZCBhaXJjcmFmdCBpbmZvcm1hdGlvbi0gYW5kXG4gICAqIHByZWRpY3QgdGhlIHNlZ21lbnQgd2hlcmUgdGhlIGZsaWdodCBpcyBsaWtlbHkgdG8gbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgdG8gd2hpY2ggdGhlIHRyYXZlbGVyIGlzIGRlcGFydGluZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25Mb2NhdGlvbkNvZGUgY2l0eS9haXJwb3J0IElBVEEgY29kZSB0byB3aGljaCB0aGUgdHJhdmVsZXIgaXMgZGVwYXJ0aW5nLCBlLmcuIFBBUiBmb3IgUGFyaXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXBhcnR1cmVEYXRlIHRoZSBkYXRlIG9uIHdoaWNoIHRoZSB0cmF2ZWxlciB3aWxsIGRlcGFydCBmcm9tIHRoZSBvcmlnaW4gdG8gZ28gdG8gdGhlIGRlc3RpbmF0aW9uLiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE5LTEyLTI1XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlVGltZSBsb2NhbCB0aW1lIHJlbGF0aXZlIHRvIG9yaWdpbkxvY2F0aW9uQ29kZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luLiBUaW1lIHJlc3BlY3RzIElTTyA4NjAxIHN0YW5kYXJkLiBlLmcuIDEzOjIyOjAwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYXJyaXZhbERhdGUgdGhlIGRhdGUgb24gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgYXJyaXZlIHRvIHRoZSBkZXN0aW5hdGlvbiBmcm9tIHRoZSBvcmlnaW4uIERhdGVzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIElTTyA4NjAxIFlZWVktTU0tREQgZm9ybWF0LCBlLmcuIDIwMTktMTItMjVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hcnJpdmFsVGltZSBsb2NhbCB0aW1lIHJlbGF0aXZlIHRvIGRlc3RpbmF0aW9uTG9jYXRpb25Db2RlIG9uIHdoaWNoIHRoZSB0cmF2ZWxlciB3aWxsIGFycml2ZSB0byBkZXN0aW5hdGlvbi4gVGltZSByZXNwZWN0cyBJU08gODYwMSBzdGFuZGFyZC4gZS5nLiAxMzoyMjowMFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFpcmNyYWZ0Q29kZSBJQVRBIGFpcmNyYWZ0IGNvZGUgKGh0dHA6Ly93d3cuZmx1Z3pldWdpbmZvLm5ldC90YWJsZV9hY2NvZGVzX2lhdGFfZW4ucGhwKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNhcnJpZXJDb2RlIGFpcmxpbmUgLyBjYXJyaWVyIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5mbGlnaHROdW1iZXIgZmxpZ2h0IG51bWJlciBhcyBhc3NpZ25lZCBieSB0aGUgY2FycmllclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmR1cmF0aW9uIGZsaWdodCBkdXJhdGlvbiBpbiBJU084NjAxIFBuWW5NbkRUbkhuTW5TIGZvcm1hdCwgZS5nLiBQVDJIMTBNXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogUHJlZGljdCB0aGUgc2VnbWVudCB3aGVyZSBMSDEwMDkgKEJSVS1GUkEpIGlzIGxpa2VseSB0byBsYXkgb24gMjAyMC0wMS0xNFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnRyYXZlbC5wcmVkaWN0aW9ucy5mbGlnaHREZWxheS5nZXQoe1xuICAgKiAgICBvcmlnaW5Mb2NhdGlvbkNvZGU6ICdCUlUnLFxuICAgKiAgICBkZXN0aW5hdGlvbkxvY2F0aW9uQ29kZTogJ0ZSQScsXG4gICAqICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTAxLTE0JyxcbiAgICogICAgZGVwYXJ0dXJlVGltZTogJzExOjA1OjAwJyxcbiAgICogICAgYXJyaXZhbERhdGU6ICcyMDIwLTAxLTE0JyxcbiAgICogICAgYXJyaXZhbFRpbWU6ICcxMjoxMDowMCcsXG4gICAqICAgIGFpcmNyYWZ0Q29kZTogJzMyQScsXG4gICAqICAgIGNhcnJpZXJDb2RlOiAnTEgnLFxuICAgKiAgICBmbGlnaHROdW1iZXI6ICcxMDA5JyxcbiAgICogICAgZHVyYXRpb246ICdQVDFIMDVNJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvcHJlZGljdGlvbnMvZmxpZ2h0LWRlbGF5JywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHREZWxheTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWxDRUUsWUFBQSxDQUFBSCxXQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1DQSxTQUFBQyxJQUFBLEVBQWlCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMscUNBQXFDLEVBQUVDLE1BQU0sQ0FBQztJQUN2RTtFQUFDO0VBQUEsT0FBQVAsV0FBQTtBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUdZWCxXQUFXO0FBQUFZLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=