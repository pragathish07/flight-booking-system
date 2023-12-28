"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(require("./amadeus/client"));
var _pagination = _interopRequireDefault(require("./amadeus/client/pagination"));
var _reference_data = _interopRequireDefault(require("./amadeus/namespaces/reference_data"));
var _shopping = _interopRequireDefault(require("./amadeus/namespaces/shopping"));
var _booking = _interopRequireDefault(require("./amadeus/namespaces/booking"));
var _travel = _interopRequireDefault(require("./amadeus/namespaces/travel"));
var _e_reputation = _interopRequireDefault(require("./amadeus/namespaces/e_reputation"));
var _media = _interopRequireDefault(require("./amadeus/namespaces/media"));
var _ordering = _interopRequireDefault(require("./amadeus/namespaces/ordering"));
var _airport = _interopRequireDefault(require("./amadeus/namespaces/airport"));
var _safety = _interopRequireDefault(require("./amadeus/namespaces/safety"));
var _schedule = _interopRequireDefault(require("./amadeus/namespaces/schedule"));
var _analytics = _interopRequireDefault(require("./amadeus/namespaces/analytics"));
var _location = _interopRequireDefault(require("./amadeus/namespaces/location"));
var _duty_of_care = _interopRequireDefault(require("./amadeus/namespaces/duty_of_care"));
var _airline = _interopRequireDefault(require("./amadeus/namespaces/airline"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Amadeus client library for accessing the travel APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var Amadeus = require('amadeus');
 * var amadeus = new Amadeus({
 *     clientId:    'YOUR_CLIENT_ID',
 *     clientSecret: 'YOUR_CLIENT_SECRET'
 * });
 * ```
 *
 * Alternatively, initialize the library using
 * the environment variables `AMADEUS_CLIENT_ID`
 * and `AMADEUS_CLIENT_SECRET`
 *
 * ```js
 * var amadeus = new Amadeus();
 * ```
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.logLevel='warn'] the log level for the client,
 *  available options are `debug`, `warn`, and `silent`
 * @param {string} [params.hostname='production'] the name of the server API
 *  calls are made to (`production` or `test`)
 * @param {string} [params.host] the full domain or IP for a server to make the
 *  API clal to. Only use this if you don't want to use the provided servers
 * @param {boolean} [params.ssl=true] wether to use SSL for this API call
 * @param {number} [params.port=443] the port to make the API call to
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTP(S)-compatible client
 *  that accepts a 'request()' call with an array of options.
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
var Amadeus = /*#__PURE__*/function () {
  function Amadeus() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Amadeus);
    this.client = new _client["default"](params);
    this.version = this.client.version;
    this.referenceData = new _reference_data["default"](this.client);
    this.shopping = new _shopping["default"](this.client);
    this.booking = new _booking["default"](this.client);
    this.travel = new _travel["default"](this.client);
    this.eReputation = new _e_reputation["default"](this.client);
    this.media = new _media["default"](this.client);
    this.ordering = new _ordering["default"](this.client);
    this.airport = new _airport["default"](this.client);
    this.pagination = new _pagination["default"](this.client);
    this.safety = new _safety["default"](this.client);
    this.schedule = new _schedule["default"](this.client);
    this.analytics = new _analytics["default"](this.client);
    this.location = new _location["default"](this.client);
    this.dutyOfCare = new _duty_of_care["default"](this.client);
    this.airline = new _airline["default"](this.client);
  }

  /**
   * The previous page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return amadeus.previous(response);
   * }).then(function(previousPage){
   *   console.log(previousPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   */
  _createClass(Amadeus, [{
    key: "previous",
    value: function previous(response) {
      return this.pagination.page('previous', response);
    }

    /**
     * The next page for the given response. Resolves to null if the page could
     * not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.next(response);
     * }).then(function(nextPage){
     *   console.log(nextPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Bluebird Promise
     */
  }, {
    key: "next",
    value: function next(response) {
      return this.pagination.page('next', response);
    }

    /**
     * The first page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY',
     *   page: { offset: 2 }
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.first(response);
     * }).then(function(firstPage){
     *   console.log(firstPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Bluebird Promise
     */
  }, {
    key: "first",
    value: function first(response) {
      return this.pagination.page('first', response);
    }

    /**
     * The last page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.last(response);
     * }).then(function(lastPage){
     *   console.log(lastPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Bluebird Promise
     */
  }, {
    key: "last",
    value: function last(response) {
      return this.pagination.page('last', response);
    }
  }]);
  return Amadeus;
}();
/**
 * A handy list of location types, to be used in the locations API:
 *
 * ```js
 * amadeus.referenceData.location.get({
 *   keyword: 'lon',
 *   subType: Amadeus.location.any
 * });
 * ```
 *
 * Currently available are the types `.airport`, `.city`, and `.any`
 */
Amadeus.location = {
  airport: 'AIRPORT',
  city: 'CITY',
  any: 'AIRPORT,CITY'
};

/**
 * A handy list of direction types, to be used in the Flight Busiest Period API:
 *
 * ```js
 * amadeus.travel.analytics.airTraffic.busiestPeriod.get({
 *   cityCode: 'par',
 *   perdiod: 2015,
 *   direction: Amadeus.direction.arriving
 * });
 * ```
 *
 * Currently available are the types `.arriving` and `.departing`
 */

Amadeus.direction = {
  arriving: 'ARRIVING',
  departing: 'DEPARTING'
};
var _default = Amadeus;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcGFnaW5hdGlvbiIsIl9yZWZlcmVuY2VfZGF0YSIsIl9zaG9wcGluZyIsIl9ib29raW5nIiwiX3RyYXZlbCIsIl9lX3JlcHV0YXRpb24iLCJfbWVkaWEiLCJfb3JkZXJpbmciLCJfYWlycG9ydCIsIl9zYWZldHkiLCJfc2NoZWR1bGUiLCJfYW5hbHl0aWNzIiwiX2xvY2F0aW9uIiwiX2R1dHlfb2ZfY2FyZSIsIl9haXJsaW5lIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJjYWxsIiwiTnVtYmVyIiwiQW1hZGV1cyIsInBhcmFtcyIsImFyZ3VtZW50cyIsImNsaWVudCIsIkNsaWVudCIsInZlcnNpb24iLCJyZWZlcmVuY2VEYXRhIiwiUmVmZXJlbmNlRGF0YSIsInNob3BwaW5nIiwiU2hvcHBpbmciLCJib29raW5nIiwiQm9va2luZyIsInRyYXZlbCIsIlRyYXZlbCIsImVSZXB1dGF0aW9uIiwiRVJlcHV0YXRpb24iLCJtZWRpYSIsIk1lZGlhIiwib3JkZXJpbmciLCJPcmRlcmluZyIsImFpcnBvcnQiLCJBaXJwb3J0IiwicGFnaW5hdGlvbiIsIlBhZ2luYXRpb24iLCJzYWZldHkiLCJTYWZldHkiLCJzY2hlZHVsZSIsIlNjaGVkdWxlIiwiYW5hbHl0aWNzIiwiQW5hbHl0aWNzIiwibG9jYXRpb24iLCJMb2NhdGlvbiIsImR1dHlPZkNhcmUiLCJEdXR5T2ZDYXJlIiwiYWlybGluZSIsIkFpcmxpbmUiLCJ2YWx1ZSIsInByZXZpb3VzIiwicmVzcG9uc2UiLCJwYWdlIiwibmV4dCIsImZpcnN0IiwibGFzdCIsImNpdHkiLCJhbnkiLCJkaXJlY3Rpb24iLCJhcnJpdmluZyIsImRlcGFydGluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvYW1hZGV1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50ICAgICAgICBmcm9tICcuL2FtYWRldXMvY2xpZW50JztcbmltcG9ydCBQYWdpbmF0aW9uICAgIGZyb20gJy4vYW1hZGV1cy9jbGllbnQvcGFnaW5hdGlvbic7XG5cbmltcG9ydCBSZWZlcmVuY2VEYXRhIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhJztcbmltcG9ydCBTaG9wcGluZyAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nJztcbmltcG9ydCBCb29raW5nICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcnO1xuaW1wb3J0IFRyYXZlbCAgICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsJztcbmltcG9ydCBFUmVwdXRhdGlvbiAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbic7XG5pbXBvcnQgTWVkaWEgICAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9tZWRpYSc7XG5pbXBvcnQgT3JkZXJpbmcgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZyc7XG5pbXBvcnQgQWlycG9ydCAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0JztcbmltcG9ydCBTYWZldHkgICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eSc7XG5pbXBvcnQgU2NoZWR1bGUgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9zY2hlZHVsZSc7XG5pbXBvcnQgQW5hbHl0aWNzICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9hbmFseXRpY3MnO1xuaW1wb3J0IExvY2F0aW9uICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvbG9jYXRpb24nO1xuaW1wb3J0IER1dHlPZkNhcmUgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvZHV0eV9vZl9jYXJlJztcbmltcG9ydCBBaXJsaW5lICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2FpcmxpbmUnO1xuXG5cbi8qKlxuICogVGhlIEFtYWRldXMgY2xpZW50IGxpYnJhcnkgZm9yIGFjY2Vzc2luZyB0aGUgdHJhdmVsIEFQSXMuXG4gKlxuICogSW5pdGlhbGl6ZSB1c2luZyB5b3VyIGNyZWRlbnRpYWxzOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgQW1hZGV1cyA9IHJlcXVpcmUoJ2FtYWRldXMnKTtcbiAqIHZhciBhbWFkZXVzID0gbmV3IEFtYWRldXMoe1xuICogICAgIGNsaWVudElkOiAgICAnWU9VUl9DTElFTlRfSUQnLFxuICogICAgIGNsaWVudFNlY3JldDogJ1lPVVJfQ0xJRU5UX1NFQ1JFVCdcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQWx0ZXJuYXRpdmVseSwgaW5pdGlhbGl6ZSB0aGUgbGlicmFyeSB1c2luZ1xuICogdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBgQU1BREVVU19DTElFTlRfSURgXG4gKiBhbmQgYEFNQURFVVNfQ0xJRU5UX1NFQ1JFVGBcbiAqXG4gKiBgYGBqc1xuICogdmFyIGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jbGllbnRJZCB0aGUgQVBJIGtleSB1c2VkIHRvIGF1dGhlbnRpY2F0ZSB0aGUgQVBJXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNsaWVudFNlY3JldCB0aGUgQVBJIHNlY3JldCB1c2VkIHRvIGF1dGhlbnRpY2F0ZVxuICogIHRoZSBBUElcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zLmxvZ2dlcj1jb25zb2xlXSBhIGBjb25zb2xlYC1jb21wYXRpYmxlIGxvZ2dlciB0aGF0XG4gKiAgYWNjZXB0cyBgbG9nYCwgYGVycm9yYCBhbmQgYGRlYnVnYCBjYWxscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmxvZ0xldmVsPSd3YXJuJ10gdGhlIGxvZyBsZXZlbCBmb3IgdGhlIGNsaWVudCxcbiAqICBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYGRlYnVnYCwgYHdhcm5gLCBhbmQgYHNpbGVudGBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmhvc3RuYW1lPSdwcm9kdWN0aW9uJ10gdGhlIG5hbWUgb2YgdGhlIHNlcnZlciBBUElcbiAqICBjYWxscyBhcmUgbWFkZSB0byAoYHByb2R1Y3Rpb25gIG9yIGB0ZXN0YClcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmhvc3RdIHRoZSBmdWxsIGRvbWFpbiBvciBJUCBmb3IgYSBzZXJ2ZXIgdG8gbWFrZSB0aGVcbiAqICBBUEkgY2xhbCB0by4gT25seSB1c2UgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0byB1c2UgdGhlIHByb3ZpZGVkIHNlcnZlcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtcy5zc2w9dHJ1ZV0gd2V0aGVyIHRvIHVzZSBTU0wgZm9yIHRoaXMgQVBJIGNhbGxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLnBvcnQ9NDQzXSB0aGUgcG9ydCB0byBtYWtlIHRoZSBBUEkgY2FsbCB0b1xuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuY3VzdG9tQXBwSWQ9bnVsbF0gYSBjdXN0b20gQXBwIElEIHRvIGJlIHBhc3NlZCBpblxuICogdGhlIFVzZXIgQWdlbnQgdG8gdGhlIHNlcnZlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmN1c3RvbUFwcFZlcnNpb249bnVsbF0gYSBjdXN0b20gQXBwIFZlcnNpb24gbnVtYmVyIHRvXG4gKiBiZSBwYXNzZWQgaW4gdGhlIFVzZXIgQWdlbnQgdG8gdGhlIHNlcnZlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zLmh0dHA9aHR0cHNdIGFuIG9wdGlvbmFsIE5vZGUvSFRUUChTKS1jb21wYXRpYmxlIGNsaWVudFxuICogIHRoYXQgYWNjZXB0cyBhICdyZXF1ZXN0KCknIGNhbGwgd2l0aCBhbiBhcnJheSBvZiBvcHRpb25zLlxuICpcbiAqIEBwcm9wZXJ0eSB7Q2xpZW50fSBjbGllbnQgVGhlIGNsaWVudCBmb3IgbWFraW5nIGF1dGhlbnRpY2F0ZWQgSFRUUCBjYWxsc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhpcyBBUEkgY2xpZW50XG4gKi9cbmNsYXNzIEFtYWRldXMge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuICAgIHRoaXMuY2xpZW50ID0gbmV3IENsaWVudChwYXJhbXMpO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuY2xpZW50LnZlcnNpb247XG5cbiAgICB0aGlzLnJlZmVyZW5jZURhdGEgID0gbmV3IFJlZmVyZW5jZURhdGEodGhpcy5jbGllbnQpO1xuICAgIHRoaXMuc2hvcHBpbmcgICAgICAgPSBuZXcgU2hvcHBpbmcodGhpcy5jbGllbnQpO1xuICAgIHRoaXMuYm9va2luZyAgICAgICAgPSBuZXcgQm9va2luZyh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy50cmF2ZWwgICAgICAgICA9IG5ldyBUcmF2ZWwodGhpcy5jbGllbnQpO1xuICAgIHRoaXMuZVJlcHV0YXRpb24gICAgPSBuZXcgRVJlcHV0YXRpb24odGhpcy5jbGllbnQpO1xuICAgIHRoaXMubWVkaWEgICAgICAgICAgPSBuZXcgTWVkaWEodGhpcy5jbGllbnQpO1xuICAgIHRoaXMub3JkZXJpbmcgICAgICAgPSBuZXcgT3JkZXJpbmcodGhpcy5jbGllbnQpO1xuICAgIHRoaXMuYWlycG9ydCAgICAgICAgPSBuZXcgQWlycG9ydCh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5wYWdpbmF0aW9uICAgICA9IG5ldyBQYWdpbmF0aW9uKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnNhZmV0eSAgICAgICAgID0gbmV3IFNhZmV0eSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5zY2hlZHVsZSAgICAgICA9IG5ldyBTY2hlZHVsZSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5hbmFseXRpY3MgICAgICA9IG5ldyBBbmFseXRpY3ModGhpcy5jbGllbnQpO1xuICAgIHRoaXMubG9jYXRpb24gICAgICAgPSBuZXcgTG9jYXRpb24odGhpcy5jbGllbnQpO1xuICAgIHRoaXMuZHV0eU9mQ2FyZSAgICAgPSBuZXcgRHV0eU9mQ2FyZSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5haXJsaW5lICAgICAgICA9IG5ldyBBaXJsaW5lKHRoaXMuY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXMgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlXG4gICAqIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknLFxuICAgKiAgIHBhZ2U6IHsgb2Zmc2V0OiAyIH1cbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLnByZXZpb3VzKHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihwcmV2aW91c1BhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHByZXZpb3VzUGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgQmx1ZWJpcmQgUHJvbWlzZVxuICAgKi9cbiAgcHJldmlvdXMocmVzcG9uc2UpIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdwcmV2aW91cycsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmV4dCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2UgY291bGRcbiAgICogbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWSdcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLm5leHQocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKG5leHRQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhuZXh0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgQmx1ZWJpcmQgUHJvbWlzZVxuICAgKi9cbiAgbmV4dChyZXNwb25zZSkgICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCduZXh0JywgcmVzcG9uc2UpOyB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaXJzdCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2VcbiAgICogY291bGQgbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWScsXG4gICAqICAgcGFnZTogeyBvZmZzZXQ6IDIgfVxuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAqICAgcmV0dXJuIGFtYWRldXMuZmlyc3QocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKGZpcnN0UGFnZSl7XG4gICAqICAgY29uc29sZS5sb2coZmlyc3RQYWdlKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHByZXZpb3VzIHJlc3BvbnNlIGZvciBhbiBBUEkgY2FsbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBCbHVlYmlyZCBQcm9taXNlXG4gICAqL1xuICBmaXJzdChyZXNwb25zZSkgICAgeyByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLnBhZ2UoJ2ZpcnN0JywgcmVzcG9uc2UpOyB9XG5cbiAgLyoqXG4gICAqIFRoZSBsYXN0IHBhZ2UgZm9yIHRoZSBnaXZlbiByZXNwb25zZS4gUmVzb2x2ZXMgdG8gbnVsbCBpZiB0aGUgcGFnZVxuICAgKiBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnTE9OJyxcbiAgICogICBzdWJUeXBlOiAnQUlSUE9SVCxDSVRZJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAqICAgcmV0dXJuIGFtYWRldXMubGFzdChyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24obGFzdFBhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKGxhc3RQYWdlKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHByZXZpb3VzIHJlc3BvbnNlIGZvciBhbiBBUEkgY2FsbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBCbHVlYmlyZCBQcm9taXNlXG4gICAqL1xuICBsYXN0KHJlc3BvbnNlKSAgICAgeyByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLnBhZ2UoJ2xhc3QnLCByZXNwb25zZSk7IH1cbn1cblxuXG4vKipcbiAqIEEgaGFuZHkgbGlzdCBvZiBsb2NhdGlvbiB0eXBlcywgdG8gYmUgdXNlZCBpbiB0aGUgbG9jYXRpb25zIEFQSTpcbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9uLmdldCh7XG4gKiAgIGtleXdvcmQ6ICdsb24nLFxuICogICBzdWJUeXBlOiBBbWFkZXVzLmxvY2F0aW9uLmFueVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBDdXJyZW50bHkgYXZhaWxhYmxlIGFyZSB0aGUgdHlwZXMgYC5haXJwb3J0YCwgYC5jaXR5YCwgYW5kIGAuYW55YFxuICovXG5BbWFkZXVzLmxvY2F0aW9uID0ge1xuICBhaXJwb3J0OiAnQUlSUE9SVCcsXG4gIGNpdHk6ICdDSVRZJyxcbiAgYW55OiAnQUlSUE9SVCxDSVRZJ1xufTtcblxuLyoqXG4gKiBBIGhhbmR5IGxpc3Qgb2YgZGlyZWN0aW9uIHR5cGVzLCB0byBiZSB1c2VkIGluIHRoZSBGbGlnaHQgQnVzaWVzdCBQZXJpb2QgQVBJOlxuICpcbiAqIGBgYGpzXG4gKiBhbWFkZXVzLnRyYXZlbC5hbmFseXRpY3MuYWlyVHJhZmZpYy5idXNpZXN0UGVyaW9kLmdldCh7XG4gKiAgIGNpdHlDb2RlOiAncGFyJyxcbiAqICAgcGVyZGlvZDogMjAxNSxcbiAqICAgZGlyZWN0aW9uOiBBbWFkZXVzLmRpcmVjdGlvbi5hcnJpdmluZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBDdXJyZW50bHkgYXZhaWxhYmxlIGFyZSB0aGUgdHlwZXMgYC5hcnJpdmluZ2AgYW5kIGAuZGVwYXJ0aW5nYFxuICovXG5cbkFtYWRldXMuZGlyZWN0aW9uID0ge1xuICBhcnJpdmluZzogJ0FSUklWSU5HJyxcbiAgZGVwYXJ0aW5nOiAnREVQQVJUSU5HJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW1hZGV1cztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUUsZUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsU0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksUUFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUssT0FBQSxHQUFBTixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU0sYUFBQSxHQUFBUCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU8sTUFBQSxHQUFBUixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVEsU0FBQSxHQUFBVCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVMsUUFBQSxHQUFBVixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVUsT0FBQSxHQUFBWCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVcsU0FBQSxHQUFBWixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFB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