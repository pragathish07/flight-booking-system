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
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointOfInterest;
 * ```
 *
 * @param {Client} client
 */
var PointOfInterest = /*#__PURE__*/function () {
  function PointOfInterest(client, poiId) {
    _classCallCheck(this, PointOfInterest);
    this.client = client;
    this._poiId = poiId;
  }

  /**
   * Extracts the information about point of interest with given ID
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * amadeus.referenceData.locations.pointOfInterest('9CB40CB5D0').get();
   * ```
   */
  _createClass(PointOfInterest, [{
    key: "get",
    value: function get() {
      return this.client.get("/v1/reference-data/locations/pois/".concat(this._poiId));
    }
  }]);
  return PointOfInterest;
}();
var _default = PointOfInterest;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb2ludE9mSW50ZXJlc3QiLCJjbGllbnQiLCJwb2lJZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9wb2lJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvcG9pc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLnBvaW50T2ZJbnRlcmVzdDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgUG9pbnRPZkludGVyZXN0IHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBwb2lJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX3BvaUlkID0gcG9pSWQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHBvaW50IG9mIGludGVyZXN0IHdpdGggZ2l2ZW4gSURcbiAgICpcbiAgICogRXh0cmFjdCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgcG9pbnQgb2YgaW50ZXJlc3Qgd2l0aCBJRCAnOUNCNDBDQjVEMCdcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5wb2ludE9mSW50ZXJlc3QoJzlDQjQwQ0I1RDAnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9wb2lzLyR7dGhpcy5fcG9pSWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZkludGVyZXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGVBQWU7RUFDbkIsU0FBQUEsZ0JBQVlDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsZUFBQTtJQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNHLE1BQU0sR0FBR0YsS0FBSztFQUNyQjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEVHLFlBQUEsQ0FBQUwsZUFBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFRQSxTQUFBQyxJQUFBLEVBQU07TUFDSixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDTyxHQUFHLHNDQUFBQyxNQUFBLENBQXNDLElBQUksQ0FBQ0wsTUFBTSxDQUFFLENBQUM7SUFDNUU7RUFBQztFQUFBLE9BQUFKLGVBQUE7QUFBQTtBQUFBLElBQUFVLFFBQUEsR0FHWVYsZUFBZTtBQUFBVyxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9