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
 * `/v3/travel/trip-parser` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.tripParser;
 * ```
 *
 * @param {Client} client
 */
var TripParser = /*#__PURE__*/function () {
  function TripParser(client) {
    _classCallCheck(this, TripParser);
    this.client = client;
  }

  /**
     * parse information from flight, hotel, rail, and rental car confirmation emails
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * "How can I show travelers their full itinerary in one place?"
     *
     * ```js
     * amadeus.tripParser.post(body);
     * ```
     */
  _createClass(TripParser, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.post('/v3/travel/trip-parser', params);
    }
    /**
    * Helper method to convert file contents in UTF-8 encoded string
    * into Base64 encoded string
    */
  }, {
    key: "fromFile",
    value: function fromFile(fileContentsInUTF8Format) {
      return new Buffer.from(fileContentsInUTF8Format).toString('base64');
    }
  }]);
  return TripParser;
}();
var _default = TripParser;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmlwUGFyc2VyIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZnJvbUZpbGUiLCJmaWxlQ29udGVudHNJblVURjhGb3JtYXQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy90cmF2ZWwvdHJpcF9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjMvdHJhdmVsL3RyaXAtcGFyc2VyYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJpcFBhcnNlcjtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgVHJpcFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAgICogcGFyc2UgaW5mb3JtYXRpb24gZnJvbSBmbGlnaHQsIGhvdGVsLCByYWlsLCBhbmQgcmVudGFsIGNhciBjb25maXJtYXRpb24gZW1haWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgICAqXG4gICAgICogXCJIb3cgY2FuIEkgc2hvdyB0cmF2ZWxlcnMgdGhlaXIgZnVsbCBpdGluZXJhcnkgaW4gb25lIHBsYWNlP1wiXG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqIGFtYWRldXMudHJpcFBhcnNlci5wb3N0KGJvZHkpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICBwb3N0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoJy92My90cmF2ZWwvdHJpcC1wYXJzZXInLCBwYXJhbXMpO1xuICB9XG4gIC8qKlxuICAqIEhlbHBlciBtZXRob2QgdG8gY29udmVydCBmaWxlIGNvbnRlbnRzIGluIFVURi04IGVuY29kZWQgc3RyaW5nXG4gICogaW50byBCYXNlNjQgZW5jb2RlZCBzdHJpbmdcbiAgKi9cbiAgZnJvbUZpbGUoZmlsZUNvbnRlbnRzSW5VVEY4Rm9ybWF0KSB7XG4gICAgcmV0dXJuIChuZXcgQnVmZmVyLmZyb20oZmlsZUNvbnRlbnRzSW5VVEY4Rm9ybWF0KSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBQYXJzZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsVUFBVTtFQUNkLFNBQUFBLFdBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFVBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBWEVFLFlBQUEsQ0FBQUgsVUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFZQSxTQUFBQyxLQUFBLEVBQWtCO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsd0JBQXdCLEVBQUVDLE1BQU0sQ0FBQztJQUMzRDtJQUNBO0FBQ0Y7QUFDQTtBQUNBO0VBSEU7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQU0sU0FBU0Msd0JBQXdCLEVBQUU7TUFDakMsT0FBUSxJQUFJQyxNQUFNLENBQUNDLElBQUksQ0FBQ0Ysd0JBQXdCLENBQUMsQ0FBRUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUN2RTtFQUFDO0VBQUEsT0FBQWYsVUFBQTtBQUFBO0FBQUEsSUFBQWdCLFFBQUEsR0FHWWhCLFVBQVU7QUFBQWlCLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=