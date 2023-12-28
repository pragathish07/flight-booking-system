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
 * `/v2/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffersSeach;
 * ```
 *
 * @param {Client} client
 */
var FlightOffersSearch = /*#__PURE__*/function () {
  function FlightOffersSearch(client) {
    _classCallCheck(this, FlightOffersSearch);
    this.client = client;
  }

  /**
   * Get cheapest flight recommendations and prices on a given journey.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart
   * from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.adults the number of adult travelers (age 12 or older on date of departure)
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get cheapest flight recommendations and prices for SYD-BKK on 2020-08-01 for 2 adults
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    originLocationCode: 'SYD',
   *    destinationLocationCode: 'BKK',
   *    departureDate: '2020-08-01',
   *    adults: '2'
   * });
   * ```
   */
  _createClass(FlightOffersSearch, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v2/shopping/flight-offers', params);
    }

    /**
     * To do a customized search with every option available.
     *
     * @param {Object} params
     * @param {Double} params.getFlightOffersBody list of criteria to retrieve a list of flight offers
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To do a customized search with given options.
     *
     * ```js
     * amadeus.shopping.flightOffersSearch.post (JSON.stringify({
          "currencyCode": "USD",
          "originDestinations": [
            {
              "id": "1",
              "originLocationCode": "RIO",
              "destinationLocationCode": "MAD",
              "departureDateTimeRange": {
                "date": "2020-03-01",
                "time": "10:00:00"
              }
            },
            {
              "id": "2",
              "originLocationCode": "MAD",
              "destinationLocationCode": "RIO",
              "departureDateTimeRange": {
                "date": "2020-03-05",
                "time": "17:00:00"
              }
            }
          ],
          "travelers": [
            {
              "id": "1",
              "travelerType": "ADULT",
              "fareOptions": [
                "STANDARD"
              ]
            },
            {
              "id": "2",
              "travelerType": "CHILD",
              "fareOptions": [
                "STANDARD"
              ]
            }
          ],
          "sources": [
            "GDS"
          ],
          "searchCriteria": {
            "maxFlightOffers": 50,
            "flightFilters": {
              "cabinRestrictions": [
                {
                  "cabin": "BUSINESS",
                  "coverage": "MOST_SEGMENTS",
                  "originDestinationIds": [
                    "1"
                  ]
                }
              ],
              "carrierRestrictions": {
                "excludedCarrierCodes": [
                  "AA",
                  "TP",
                  "AZ"
                ]
              }
            }
          }
        }))
      * ```
      */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v2/shopping/flight-offers', params);
    }
  }]);
  return FlightOffersSearch;
}();
var _default = FlightOffersSearch;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPZmZlcnNTZWFyY2giLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzX3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzU2VhY2g7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9mZmVyc1NlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgb24gYSBnaXZlbiBqb3VybmV5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQsIGUuZy4gQk9TIGZvciBCb3N0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIHRvIHdoaWNoIHRoZSB0cmF2ZWxlciBpcyBnb2luZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnRcbiAgICogZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi4gRGF0ZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgSVNPIDg2MDEgWVlZWS1NTS1ERCBmb3JtYXQsIGUuZy4gMjAxNy0xMi0yNVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFkdWx0cyB0aGUgbnVtYmVyIG9mIGFkdWx0IHRyYXZlbGVycyAoYWdlIDEyIG9yIG9sZGVyIG9uIGRhdGUgb2YgZGVwYXJ0dXJlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgZm9yIFNZRC1CS0sgb24gMjAyMC0wOC0wMSBmb3IgMiBhZHVsdHNcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnMuZ2V0KHtcbiAgICogICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnU1lEJyxcbiAgICogICAgZGVzdGluYXRpb25Mb2NhdGlvbkNvZGU6ICdCS0snLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgIGFkdWx0czogJzInXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzJywgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBkbyBhIGN1c3RvbWl6ZWQgc2VhcmNoIHdpdGggZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmdldEZsaWdodE9mZmVyc0JvZHkgbGlzdCBvZiBjcml0ZXJpYSB0byByZXRyaWV2ZSBhIGxpc3Qgb2YgZmxpZ2h0IG9mZmVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGRvIGEgY3VzdG9taXplZCBzZWFyY2ggd2l0aCBnaXZlbiBvcHRpb25zLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5wb3N0IChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwiY3VycmVuY3lDb2RlXCI6IFwiVVNEXCIsXG4gICAgICAgIFwib3JpZ2luRGVzdGluYXRpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJvcmlnaW5Mb2NhdGlvbkNvZGVcIjogXCJSSU9cIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogXCJNQURcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlRGF0ZVRpbWVSYW5nZVwiOiB7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMDMtMDFcIixcbiAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTA6MDA6MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwib3JpZ2luTG9jYXRpb25Db2RlXCI6IFwiTUFEXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IFwiUklPXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZURhdGVUaW1lUmFuZ2VcIjoge1xuICAgICAgICAgICAgICBcImRhdGVcIjogXCIyMDIwLTAzLTA1XCIsXG4gICAgICAgICAgICAgIFwidGltZVwiOiBcIjE3OjAwOjAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwidHJhdmVsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJ0cmF2ZWxlclR5cGVcIjogXCJBRFVMVFwiLFxuICAgICAgICAgICAgXCJmYXJlT3B0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIFwiU1RBTkRBUkRcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwidHJhdmVsZXJUeXBlXCI6IFwiQ0hJTERcIixcbiAgICAgICAgICAgIFwiZmFyZU9wdGlvbnNcIjogW1xuICAgICAgICAgICAgICBcIlNUQU5EQVJEXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic291cmNlc1wiOiBbXG4gICAgICAgICAgXCJHRFNcIlxuICAgICAgICBdLFxuICAgICAgICBcInNlYXJjaENyaXRlcmlhXCI6IHtcbiAgICAgICAgICBcIm1heEZsaWdodE9mZmVyc1wiOiA1MCxcbiAgICAgICAgICBcImZsaWdodEZpbHRlcnNcIjoge1xuICAgICAgICAgICAgXCJjYWJpblJlc3RyaWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNhYmluXCI6IFwiQlVTSU5FU1NcIixcbiAgICAgICAgICAgICAgICBcImNvdmVyYWdlXCI6IFwiTU9TVF9TRUdNRU5UU1wiLFxuICAgICAgICAgICAgICAgIFwib3JpZ2luRGVzdGluYXRpb25JZHNcIjogW1xuICAgICAgICAgICAgICAgICAgXCIxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNhcnJpZXJSZXN0cmljdGlvbnNcIjoge1xuICAgICAgICAgICAgICBcImV4Y2x1ZGVkQ2FycmllckNvZGVzXCI6IFtcbiAgICAgICAgICAgICAgICBcIkFBXCIsXG4gICAgICAgICAgICAgICAgXCJUUFwiLFxuICAgICAgICAgICAgICAgIFwiQVpcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAqIGBgYFxuICAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsaWdodE9mZmVyc1NlYXJjaDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxrQkFBa0I7RUFDdEIsU0FBQUEsbUJBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGtCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBckJFRSxZQUFBLENBQUFILGtCQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQXNCQSxTQUFBQyxJQUFBLEVBQWlCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsNEJBQTRCLEVBQUVDLE1BQU0sQ0FBQztJQUM5RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUExRUU7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBMkVBLFNBQUFNLEtBQUEsRUFBa0I7TUFBQSxJQUFiSixNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNkLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNVLElBQUksQ0FBQyw0QkFBNEIsRUFBRUosTUFBTSxDQUFDO0lBQy9EO0VBQUM7RUFBQSxPQUFBUCxrQkFBQTtBQUFBO0FBQUEsSUFBQVksUUFBQSxHQUdZWixrQkFBa0I7QUFBQWEsT0FBQSxjQUFBRCxRQUFBO0FBQUFFLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEifQ==