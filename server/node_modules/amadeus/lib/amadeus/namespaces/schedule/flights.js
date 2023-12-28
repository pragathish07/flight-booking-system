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
 * `/v2/schedule/flights` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.schedule.flights;
 * ```
 *
 * @param {Client} client
 */
var Flights = /*#__PURE__*/function () {
  function Flights(client) {
    _classCallCheck(this, Flights);
    this.client = client;
  }

  /**
   * Provides real-time flight schedule data including up-to-date departure and arrival times,
   *  terminal and gate information, flight duration and real-time delay status
   *
   * @param {Object} params
   * @param {Double} params.carrierCode 2 to 3-character IATA carrier code - required
   * @param {Double} params.flightNumber 1 to 4-digit number of the flight. e.g. 4537 - required
   * @param {Double} params.scheduledDepartureDate scheduled departure date of the flight, local to the departure airport - required
   * @return {Promise.<Response,ResponseError>} a Promise
   * What's the current status of my flight?
   * ```js
   * amadeus.schedule.flights.get({
   * carrierCode: 'AZ',
   * flightNumber: '319',
   * scheduledDepartureDate: '2021-03-13'
   * });
   * ```
   */
  _createClass(Flights, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v2/schedule/flights', params);
    }
  }]);
  return Flights;
}();
var _default = Flights;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRzIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zY2hlZHVsZS9mbGlnaHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3NjaGVkdWxlL2ZsaWdodHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zY2hlZHVsZS5mbGlnaHRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgcmVhbC10aW1lIGZsaWdodCBzY2hlZHVsZSBkYXRhIGluY2x1ZGluZyB1cC10by1kYXRlIGRlcGFydHVyZSBhbmQgYXJyaXZhbCB0aW1lcyxcbiAgICogIHRlcm1pbmFsIGFuZCBnYXRlIGluZm9ybWF0aW9uLCBmbGlnaHQgZHVyYXRpb24gYW5kIHJlYWwtdGltZSBkZWxheSBzdGF0dXNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmNhcnJpZXJDb2RlIDIgdG8gMy1jaGFyYWN0ZXIgSUFUQSBjYXJyaWVyIGNvZGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmZsaWdodE51bWJlciAxIHRvIDQtZGlnaXQgbnVtYmVyIG9mIHRoZSBmbGlnaHQuIGUuZy4gNDUzNyAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMuc2NoZWR1bGVkRGVwYXJ0dXJlRGF0ZSBzY2hlZHVsZWQgZGVwYXJ0dXJlIGRhdGUgb2YgdGhlIGZsaWdodCwgbG9jYWwgdG8gdGhlIGRlcGFydHVyZSBhaXJwb3J0IC0gcmVxdWlyZWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBXaGF0J3MgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIG15IGZsaWdodD9cbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zY2hlZHVsZS5mbGlnaHRzLmdldCh7XG4gICAqIGNhcnJpZXJDb2RlOiAnQVonLFxuICAgKiBmbGlnaHROdW1iZXI6ICczMTknLFxuICAgKiBzY2hlZHVsZWREZXBhcnR1cmVEYXRlOiAnMjAyMS0wMy0xMydcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YyL3NjaGVkdWxlL2ZsaWdodHMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsaWdodHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsT0FBTztFQUNYLFNBQUFBLFFBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBakJFRSxZQUFBLENBQUFILE9BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBa0JBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRUMsTUFBTSxDQUFDO0lBQ3hEO0VBQUM7RUFBQSxPQUFBUCxPQUFBO0FBQUE7QUFBQSxJQUFBVyxRQUFBLEdBR1lYLE9BQU87QUFBQVksT0FBQSxjQUFBRCxRQUFBO0FBQUFFLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEifQ==