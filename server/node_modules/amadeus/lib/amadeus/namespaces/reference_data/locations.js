"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _airports = _interopRequireDefault(require("./locations/airports"));
var _cities = _interopRequireDefault(require("./locations/cities"));
var _hotel = _interopRequireDefault(require("./locations/hotel"));
var _hotels = _interopRequireDefault(require("./locations/hotels"));
var _poi = _interopRequireDefault(require("./locations/poi"));
var _pois = _interopRequireDefault(require("./locations/pois"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v2/reference-data/locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations;
 * ```
 *
 * @param {Client} client
 * @property {Airports} airports
 */
var Locations = /*#__PURE__*/function () {
  function Locations(client) {
    _classCallCheck(this, Locations);
    this.client = client;
    this.airports = new _airports["default"](client);
    this.cities = new _cities["default"](client);
    this.hotel = new _hotel["default"](client);
    this.hotels = new _hotels["default"](client);
    this.pointsOfInterest = new _pois["default"](client);
  }

  /**
   * Returns a list of airports and cities matching a given keyword.
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent the start of
   *   a word in a city or airport name or code
   * @param {string} params.subType the type of location to search for
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find any location starting with 'lon'
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'lon',
   *   subType: Amadeus.location.any
   * });
   * ```
   */
  _createClass(Locations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations', params);
    }
  }, {
    key: "pointOfInterest",
    value: function pointOfInterest(poiId) {
      return new _poi["default"](this.client, poiId);
    }
  }]);
  return Locations;
}();
var _default = Locations;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWlycG9ydHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jaXRpZXMiLCJfaG90ZWwiLCJfaG90ZWxzIiwiX3BvaSIsIl9wb2lzIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJjYWxsIiwiTnVtYmVyIiwiTG9jYXRpb25zIiwiY2xpZW50IiwiYWlycG9ydHMiLCJBaXJwb3J0cyIsImNpdGllcyIsIkNpdGllcyIsImhvdGVsIiwiSG90ZWwiLCJob3RlbHMiLCJIb3RlbHMiLCJwb2ludHNPZkludGVyZXN0IiwiUG9pbnRzT2ZJbnRlcmVzdCIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwicG9pbnRPZkludGVyZXN0IiwicG9pSWQiLCJQb2ludE9mSW50ZXJlc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9yZWZlcmVuY2VfZGF0YS9sb2NhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFpcnBvcnRzIGZyb20gJy4vbG9jYXRpb25zL2FpcnBvcnRzJztcbmltcG9ydCBDaXRpZXMgZnJvbSAnLi9sb2NhdGlvbnMvY2l0aWVzJztcbmltcG9ydCBIb3RlbCBmcm9tICcuL2xvY2F0aW9ucy9ob3RlbCc7XG5pbXBvcnQgSG90ZWxzIGZyb20gJy4vbG9jYXRpb25zL2hvdGVscyc7XG5pbXBvcnQgUG9pbnRPZkludGVyZXN0IGZyb20gJy4vbG9jYXRpb25zL3BvaSc7XG5pbXBvcnQgUG9pbnRzT2ZJbnRlcmVzdCBmcm9tICcuL2xvY2F0aW9ucy9wb2lzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0FpcnBvcnRzfSBhaXJwb3J0c1xuICovXG5jbGFzcyBMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmFpcnBvcnRzID0gbmV3IEFpcnBvcnRzKGNsaWVudCk7XG4gICAgdGhpcy5jaXRpZXMgPSBuZXcgQ2l0aWVzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbCA9IG5ldyBIb3RlbChjbGllbnQpO1xuICAgIHRoaXMuaG90ZWxzID0gbmV3IEhvdGVscyhjbGllbnQpO1xuICAgIHRoaXMucG9pbnRzT2ZJbnRlcmVzdCA9IG5ldyBQb2ludHNPZkludGVyZXN0KGNsaWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlycG9ydHMgYW5kIGNpdGllcyBtYXRjaGluZyBhIGdpdmVuIGtleXdvcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5rZXl3b3JkIGtleXdvcmQgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBzdGFydCBvZlxuICAgKiAgIGEgd29yZCBpbiBhIGNpdHkgb3IgYWlycG9ydCBuYW1lIG9yIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5zdWJUeXBlIHRoZSB0eXBlIG9mIGxvY2F0aW9uIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIGFueSBsb2NhdGlvbiBzdGFydGluZyB3aXRoICdsb24nXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnbG9uJyxcbiAgICogICBzdWJUeXBlOiBBbWFkZXVzLmxvY2F0aW9uLmFueVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zJywgcGFyYW1zKTtcbiAgfVxuXG4gIHBvaW50T2ZJbnRlcmVzdChwb2lJZCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRPZkludGVyZXN0KHRoaXMuY2xpZW50LCBwb2lJZCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE9BQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLE9BQUEsR0FBQUosc0JBQUEsQ0FB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