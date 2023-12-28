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
 * `/v1/safety/safety-rated-locations/by-square` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocations.bySquare;
 * ```
 *
 * @param {Client} client
 */
var bySquare = /*#__PURE__*/function () {
  function bySquare(client) {
    _classCallCheck(this, bySquare);
    this.client = client;
  }

  /**
   * Returns the safety rating of a given area
   *
   * @param {Object} params
   * @param {Double} params.north latitude north of bounding box - required
   * @param {Double} params.west  longitude west of bounding box - required
   * @param {Double} params.south latitude south of bounding box - required
   * @param {Double} params.east  longitude east of bounding box - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How safe is Barcelona? (based on a square)
   *
   * ```js
   * amadeus.safety.safetyRatedLocations.bySquare.get({
   *   north: 41.397158,
   *   west: 2.160873,
   *   south: 41.394582,
   *   east: 2.177181
   * });
   * ```
   */
  _createClass(bySquare, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/safety/safety-rated-locations/by-square', params);
    }
  }]);
  return bySquare;
}();
var _default = bySquare;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieVNxdWFyZSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2FmZXR5L3NhZmV0eV9yYXRlZF9sb2NhdGlvbnMvYnlfc3F1YXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3NhZmV0eS9zYWZldHktcmF0ZWQtbG9jYXRpb25zL2J5LXNxdWFyZWAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNhZmV0eS5zYWZldHlSYXRlZExvY2F0aW9ucy5ieVNxdWFyZTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgYnlTcXVhcmUge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzYWZldHkgcmF0aW5nIG9mIGEgZ2l2ZW4gYXJlYVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubm9ydGggbGF0aXR1ZGUgbm9ydGggb2YgYm91bmRpbmcgYm94IC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy53ZXN0ICBsb25naXR1ZGUgd2VzdCBvZiBib3VuZGluZyBib3ggLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLnNvdXRoIGxhdGl0dWRlIHNvdXRoIG9mIGJvdW5kaW5nIGJveCAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMuZWFzdCAgbG9uZ2l0dWRlIGVhc3Qgb2YgYm91bmRpbmcgYm94IC0gcmVxdWlyZWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBIb3cgc2FmZSBpcyBCYXJjZWxvbmE/IChiYXNlZCBvbiBhIHNxdWFyZSlcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zYWZldHkuc2FmZXR5UmF0ZWRMb2NhdGlvbnMuYnlTcXVhcmUuZ2V0KHtcbiAgICogICBub3J0aDogNDEuMzk3MTU4LFxuICAgKiAgIHdlc3Q6IDIuMTYwODczLFxuICAgKiAgIHNvdXRoOiA0MS4zOTQ1ODIsXG4gICAqICAgZWFzdDogMi4xNzcxODFcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3NhZmV0eS9zYWZldHktcmF0ZWQtbG9jYXRpb25zL2J5LXNxdWFyZScsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnlTcXVhcmU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFRSxZQUFBLENBQUFILFFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBcUJBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRUMsTUFBTSxDQUFDO0lBQy9FO0VBQUM7RUFBQSxPQUFBUCxRQUFBO0FBQUE7QUFBQSxJQUFBVyxRQUFBLEdBR1lYLFFBQVE7QUFBQVksT0FBQSxjQUFBRCxRQUFBO0FBQUFFLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEifQ==