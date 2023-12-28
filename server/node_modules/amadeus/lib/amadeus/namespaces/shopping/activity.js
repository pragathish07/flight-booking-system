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
 * `/v1/shopping/activities/{activityId}` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activity
 * ```
 *
 * @param {Client} client
 */
var Activity = /*#__PURE__*/function () {
  function Activity(client, activityId) {
    _classCallCheck(this, Activity);
    this.client = client;
    this.activityId = activityId;
  }

  /**
   * Retieve information of an activity by its Id.
   *
   * What is the activity information with Id 3216547684?
   * ```js
   * amadeus.shopping.activity('3216547684').get();
   * ```
   */
  _createClass(Activity, [{
    key: "get",
    value: function get() {
      return this.client.get("/v1/shopping/activities/".concat(this.activityId));
    }
  }]);
  return Activity;
}();
var _default = Activity;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY3Rpdml0eSIsImNsaWVudCIsImFjdGl2aXR5SWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2FjdGl2aXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMve2FjdGl2aXR5SWR9YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQWN0aXZpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGFjdGl2aXR5SWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmFjdGl2aXR5SWQgPSBhY3Rpdml0eUlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldGlldmUgaW5mb3JtYXRpb24gb2YgYW4gYWN0aXZpdHkgYnkgaXRzIElkLlxuICAgKlxuICAgKiBXaGF0IGlzIHRoZSBhY3Rpdml0eSBpbmZvcm1hdGlvbiB3aXRoIElkIDMyMTY1NDc2ODQ/XG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHkoJzMyMTY1NDc2ODQnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMvJHt0aGlzLmFjdGl2aXR5SWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEVFLFlBQUEsQ0FBQUosUUFBQTtJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFRQSxTQUFBQyxJQUFBLEVBQU07TUFDSixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDTSxHQUFHLDRCQUFBQyxNQUFBLENBQTRCLElBQUksQ0FBQ04sVUFBVSxDQUFFLENBQUM7SUFDdEU7RUFBQztFQUFBLE9BQUFGLFFBQUE7QUFBQTtBQUFBLElBQUFTLFFBQUEsR0FHWVQsUUFBUTtBQUFBVSxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9