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
 * `/v2/duty-of-care/diseases/covid19-area-report` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.dutyOfCare.diseases.covid19Report;
 * ```
 *
 * @param {Client} client
 */
var Covid19Report = /*#__PURE__*/function () {
  function Covid19Report(client) {
    _classCallCheck(this, Covid19Report);
    this.client = client;
  }

  /**
  * Returns Covid-19 related restrictions for a given country
  *
  * @param {Object} params
  * @param {string} params.countryCode  ISO 3166 Alpha-2 code. e.g. "US" United States of America.
  * @return {Promise.<Response,ResponseError>} a Promise
  *
  * Returns Covid-19 restrictions in the United States
  *
  * ```js
  * amadeus.dutyOfCare.diseases.covid19Report.get({
  *     countryCode: 'US'
  * }).then(function(response){
  *     console.log(response.data);
  * }).catch(function(responseError){
  *     console.log(responseError);
  * });
  * ```
  */
  _createClass(Covid19Report, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v2/duty-of-care/diseases/covid19-area-report', params);
    }
  }]);
  return Covid19Report;
}();
var _default = Covid19Report;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb3ZpZDE5UmVwb3J0IiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9kdXR5X29mX2NhcmUvZGlzZWFzZXMvY292aWQxOV9yZXBvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvZHV0eS1vZi1jYXJlL2Rpc2Vhc2VzL2NvdmlkMTktYXJlYS1yZXBvcnRgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5kdXR5T2ZDYXJlLmRpc2Vhc2VzLmNvdmlkMTlSZXBvcnQ7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIENvdmlkMTlSZXBvcnQge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAqIFJldHVybnMgQ292aWQtMTkgcmVsYXRlZCByZXN0cmljdGlvbnMgZm9yIGEgZ2l2ZW4gY291bnRyeVxuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY291bnRyeUNvZGUgIElTTyAzMTY2IEFscGhhLTIgY29kZS4gZS5nLiBcIlVTXCIgVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhLlxuICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgKlxuICAqIFJldHVybnMgQ292aWQtMTkgcmVzdHJpY3Rpb25zIGluIHRoZSBVbml0ZWQgU3RhdGVzXG4gICpcbiAgKiBgYGBqc1xuICAqIGFtYWRldXMuZHV0eU9mQ2FyZS5kaXNlYXNlcy5jb3ZpZDE5UmVwb3J0LmdldCh7XG4gICogICAgIGNvdW50cnlDb2RlOiAnVVMnXG4gICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICogICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAqIH0pLmNhdGNoKGZ1bmN0aW9uKHJlc3BvbnNlRXJyb3Ipe1xuICAqICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVycm9yKTtcbiAgKiB9KTtcbiAgKiBgYGBcbiAgKi9cblxuXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9kdXR5LW9mLWNhcmUvZGlzZWFzZXMvY292aWQxOS1hcmVhLXJlcG9ydCcsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ292aWQxOVJlcG9ydDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxhQUFhO0VBQ2pCLFNBQUFBLGNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkVFLFlBQUEsQ0FBQUgsYUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFxQkEsU0FBQUMsSUFBQSxFQUFpQjtNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLCtDQUErQyxFQUFFQyxNQUFNLENBQUM7SUFDakY7RUFBQztFQUFBLE9BQUFQLGFBQUE7QUFBQTtBQUFBLElBQUFXLFFBQUEsR0FHWVgsYUFBYTtBQUFBWSxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9