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
 * `/v1/shopping/flight-offers/pricing` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.pricing;
 * ```
 *
 * @param {Client} client
 */
var Pricing = /*#__PURE__*/function () {
  function Pricing(client) {
    _classCallCheck(this, Pricing);
    this.client = client;
  }

  /**
   * To get or confirm the price of a flight and obtain information
   * about taxes and fees to be applied to the entire journey. It also
   * retrieves ancillary information (e.g. additional bag or extra legroom
   * seats pricing) and the payment information details requested at booking time.
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {string} params.data.type 'flight-offers-pricing' for Flight Offer Pricing
   * @param {Array} params.data.flightOffers list of flight offers for which the
   * pricing needs to be retrieved
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.pricing.post({
   *  'data': {
   *      'type': 'flight-offers-pricing',
   *      'flightOffers': []
   *  }
   * });
   * ```
   */
  _createClass(Pricing, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v1/shopping/flight-offers/pricing', params);
    }
  }]);
  return Pricing;
}();
var _default = Pricing;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcmljaW5nIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy9wcmljaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmljaW5nO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBQcmljaW5nIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogVG8gZ2V0IG9yIGNvbmZpcm0gdGhlIHByaWNlIG9mIGEgZmxpZ2h0IGFuZCBvYnRhaW4gaW5mb3JtYXRpb25cbiAgICogYWJvdXQgdGF4ZXMgYW5kIGZlZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgZW50aXJlIGpvdXJuZXkuIEl0IGFsc29cbiAgICogcmV0cmlldmVzIGFuY2lsbGFyeSBpbmZvcm1hdGlvbiAoZS5nLiBhZGRpdGlvbmFsIGJhZyBvciBleHRyYSBsZWdyb29tXG4gICAqIHNlYXRzIHByaWNpbmcpIGFuZCB0aGUgcGF5bWVudCBpbmZvcm1hdGlvbiBkZXRhaWxzIHJlcXVlc3RlZCBhdCBib29raW5nIHRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcy5kYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGF0YS50eXBlICdmbGlnaHQtb2ZmZXJzLXByaWNpbmcnIGZvciBGbGlnaHQgT2ZmZXIgUHJpY2luZ1xuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMuZGF0YS5mbGlnaHRPZmZlcnMgbGlzdCBvZiBmbGlnaHQgb2ZmZXJzIGZvciB3aGljaCB0aGVcbiAgICogcHJpY2luZyBuZWVkcyB0byBiZSByZXRyaWV2ZWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmljaW5nLnBvc3Qoe1xuICAgKiAgJ2RhdGEnOiB7XG4gICAqICAgICAgJ3R5cGUnOiAnZmxpZ2h0LW9mZmVycy1wcmljaW5nJyxcbiAgICogICAgICAnZmxpZ2h0T2ZmZXJzJzogW11cbiAgICogIH1cbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy9wcmljaW5nJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxPQUFPO0VBQ1gsU0FBQUEsUUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsT0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRUUsWUFBQSxDQUFBSCxPQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQXNCQSxTQUFBQyxLQUFBLEVBQWtCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsb0NBQW9DLEVBQUVDLE1BQU0sQ0FBQztJQUN2RTtFQUFDO0VBQUEsT0FBQVAsT0FBQTtBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUdZWCxPQUFPO0FBQUFZLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=