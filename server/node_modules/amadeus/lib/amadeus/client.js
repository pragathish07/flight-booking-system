"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(require("events"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var _util = _interopRequireDefault(require("util"));
var _access_token = _interopRequireDefault(require("./client/access_token"));
var _listener = _interopRequireDefault(require("./client/listener"));
var _request = _interopRequireDefault(require("./client/request"));
var _validator = _interopRequireDefault(require("./client/validator"));
var _package = _interopRequireDefault(require("../../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A convenient wrapper around the API, allowing for generic, authenticated and
 * unauthenticated API calls without having to manage the serialization,
 * desrialization, and authentication.
 *
 * Generally you do not need to use this object directly. Instead it is used
 * indirectly by the various namespaced methods for every API call.
 *
 * For example, the following are the semantically the same.
 *
 * ```js
 * amadeus.client.get('/v1/reference-data/urls/checkin-links', params);
 * amadeus.amadeus.reference_data.urls.checkin_links.get(params);
 * ```
 *
 * @param {Object} options a list of options. See {@link Amadeus} .
 * @property {string} clientId the API key used to authenticate the API
 * @property {string} clientSecret the API secret used to authenticate
 *  the API
 * @property {Object} logger the `console`-compatible logger used to debug calls
 * @property {string} logLevel the log level for the client, available options
 *  are `debug`, `warn`, and `silent`. Defaults to 'silent'
 * @property {string} host the hostname of the server API calls are made to
 * @property {number} port the port the server API calls are made to
 * @property {boolean} ssl wether an SSL request is made to the server
 * @property {string} customAppId the custom App ID to be passed in the User
 *  Agent to the server
 * @property {string} customAppVersion the custom App Version number to be
 *  passed in the User Agent to the server
 * @property {Object} http the Node/HTTP(S)-compatible client used to make
 *  requests
 * @property {number} version The version of this API client
 */
var Client = /*#__PURE__*/function () {
  function Client() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Client);
    new _validator["default"]().validateAndInitialize(this, options);
    this.accessToken = new _access_token["default"](this);
    this.version = _package["default"].version;
  }

  /**
   * Make an authenticated GET API call.
   *
   * ```js
   * amadeus.client.get('/v2/foo/bar', { some: 'data' });
   * ```
   * @param {string} path the full path of the API endpoint
   * @param {Object} [params={}] the query string parameters
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  _createClass(Client, [{
    key: "get",
    value: function get(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('GET', path, params);
    }

    /**
     * Make an authenticated POST API call.
     *
     * ```js
     * amadeus.client.post('/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the POST parameters
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "post",
    value: function post(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('POST', path, params);
    }

    /**
     * Make an authenticated DELETE API call.
     *
     * ```js
     * amadeus.client.delete('/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the query string parameters
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "delete",
    value: function _delete(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('DELETE', path, params);
    }

    // PROTECTED

    /**
     * Make an authenticated API call.
     *
     * ```js
     * amadeus.client.call('GET', '/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the POST parameters
     * @return {Promise.<Response,ResponseError>} a Promise
     * @protected
     */
  }, {
    key: "request",
    value: function request(verb, path) {
      var _this = this;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.accessToken.bearerToken(this).then(function (bearerToken) {
        return _this.unauthenticatedRequest(verb, path, params, bearerToken);
      });
    }

    // PRIVATE

    /**
     * Make any kind of API call, authenticated or not
     *
     * Used by the .get, .post methods to make API calls.
     *
     * Sets up a new Promise and then excutes the API call, triggering the Promise
     * to be called when the API call fails or succeeds.
     *
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} params the parameters to pass in the query or body
     * @param {string} [bearerToken=null] the BearerToken as generated by the
     *  AccessToken class
     * @return {Promise.<Response,ResponseError>} a Promise
     * @private
     */
  }, {
    key: "unauthenticatedRequest",
    value: function unauthenticatedRequest(verb, path, params) {
      var bearerToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var request = this.buildRequest(verb, path, params, bearerToken);
      this.log(request);
      var emitter = new _events["default"]();
      var promise = this.buildPromise(emitter);
      this.execute(request, emitter);
      return promise;
    }

    /**
     * Actually executes the API call.
     *
     * @param {Request} request the request to execute
     * @param {EventEmitter} emitter the event emitter to notify of changes
     * @private
     */
  }, {
    key: "execute",
    value: function execute(request, emitter) {
      var http_request = this.http.request(request.options());
      var listener = new _listener["default"](request, emitter, this);
      http_request.on('response', listener.onResponse.bind(listener));
      http_request.on('error', listener.onError.bind(listener));
      http_request.write(request.body());
      http_request.end();
    }

    /**
     * Builds a Request object to be used in the API call
     *
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} params the parameters to pass in the query or body
     * @param {string} [bearerToken=null] the BearerToken as generated by the
     *  AccessToken class
     * @return {Request}
     * @private
     */
  }, {
    key: "buildRequest",
    value: function buildRequest(verb, path, params, bearerToken) {
      return new _request["default"]({
        host: this.host,
        verb: verb,
        path: path,
        params: params,
        bearerToken: bearerToken,
        clientVersion: this.version,
        languageVersion: process.version,
        appId: this.customAppId,
        appVersion: this.customAppVersion,
        port: this.port,
        ssl: this.ssl
      });
    }

    /**
     * Builds a Bluebird Promise to be returned to the API user
     *
     * @param  {type} emitter the event emitter to notify of changes
     * @return {Promise} a Bluebird promise
     * @private
     */
  }, {
    key: "buildPromise",
    value: function buildPromise(emitter) {
      return new _bluebird["default"](function (resolve, reject) {
        emitter.on('resolve', function (response) {
          return resolve(response);
        });
        emitter.on('reject', function (error) {
          return reject(error);
        });
      });
    }

    /**
     * Logs the request, when in debug mode
     *
     * @param  {Request} request the request object to log
     * @private
     */
  }, {
    key: "log",
    value: function log(request) {
      /* istanbul ignore next */
      if (this.debug()) {
        this.logger.log(_util["default"].inspect(request, false, null));
      }
    }

    /**
     * Determines if this client is in debug mode
     *
     * @return {boolean}
     */
  }, {
    key: "debug",
    value: function debug() {
      return this.logLevel == 'debug';
    }

    /**
     * Determines if this client is in warn or debug mode
     *
     * @return {boolean}
     */
  }, {
    key: "warn",
    value: function warn() {
      return this.logLevel == 'warn' || this.debug();
    }
  }]);
  return Client;
}();
var _default = Client;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYmx1ZWJpcmQiLCJfdXRpbCIsIl9hY2Nlc3NfdG9rZW4iLCJfbGlzdGVuZXIiLCJfcmVxdWVzdCIsIl92YWxpZGF0b3IiLCJfcGFja2FnZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIk51bWJlciIsIkNsaWVudCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZUFuZEluaXRpYWxpemUiLCJhY2Nlc3NUb2tlbiIsIkFjY2Vzc1Rva2VuIiwidmVyc2lvbiIsInBrZyIsInZhbHVlIiwiZ2V0IiwicGF0aCIsInBhcmFtcyIsInJlcXVlc3QiLCJwb3N0IiwiX2RlbGV0ZSIsInZlcmIiLCJfdGhpcyIsImJlYXJlclRva2VuIiwidGhlbiIsInVuYXV0aGVudGljYXRlZFJlcXVlc3QiLCJidWlsZFJlcXVlc3QiLCJsb2ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwicHJvbWlzZSIsImJ1aWxkUHJvbWlzZSIsImV4ZWN1dGUiLCJodHRwX3JlcXVlc3QiLCJodHRwIiwibGlzdGVuZXIiLCJMaXN0ZW5lciIsIm9uIiwib25SZXNwb25zZSIsImJpbmQiLCJvbkVycm9yIiwid3JpdGUiLCJib2R5IiwiZW5kIiwiUmVxdWVzdCIsImhvc3QiLCJjbGllbnRWZXJzaW9uIiwibGFuZ3VhZ2VWZXJzaW9uIiwicHJvY2VzcyIsImFwcElkIiwiY3VzdG9tQXBwSWQiLCJhcHBWZXJzaW9uIiwiY3VzdG9tQXBwVmVyc2lvbiIsInBvcnQiLCJzc2wiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJkZWJ1ZyIsImxvZ2dlciIsInV0aWwiLCJpbnNwZWN0IiwibG9nTGV2ZWwiLCJ3YXJuIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgUHJvbWlzZSAgICAgIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCB1dGlsICAgICAgICAgZnJvbSAndXRpbCc7XG5cbmltcG9ydCBBY2Nlc3NUb2tlbiBmcm9tICcuL2NsaWVudC9hY2Nlc3NfdG9rZW4nO1xuaW1wb3J0IExpc3RlbmVyICAgIGZyb20gJy4vY2xpZW50L2xpc3RlbmVyJztcbmltcG9ydCBSZXF1ZXN0ICAgICBmcm9tICcuL2NsaWVudC9yZXF1ZXN0JztcbmltcG9ydCBWYWxpZGF0b3IgICBmcm9tICcuL2NsaWVudC92YWxpZGF0b3InO1xuXG5pbXBvcnQgcGtnICAgICAgICAgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBhcm91bmQgdGhlIEFQSSwgYWxsb3dpbmcgZm9yIGdlbmVyaWMsIGF1dGhlbnRpY2F0ZWQgYW5kXG4gKiB1bmF1dGhlbnRpY2F0ZWQgQVBJIGNhbGxzIHdpdGhvdXQgaGF2aW5nIHRvIG1hbmFnZSB0aGUgc2VyaWFsaXphdGlvbixcbiAqIGRlc3JpYWxpemF0aW9uLCBhbmQgYXV0aGVudGljYXRpb24uXG4gKlxuICogR2VuZXJhbGx5IHlvdSBkbyBub3QgbmVlZCB0byB1c2UgdGhpcyBvYmplY3QgZGlyZWN0bHkuIEluc3RlYWQgaXQgaXMgdXNlZFxuICogaW5kaXJlY3RseSBieSB0aGUgdmFyaW91cyBuYW1lc3BhY2VkIG1ldGhvZHMgZm9yIGV2ZXJ5IEFQSSBjYWxsLlxuICpcbiAqIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIGFyZSB0aGUgc2VtYW50aWNhbGx5IHRoZSBzYW1lLlxuICpcbiAqIGBgYGpzXG4gKiBhbWFkZXVzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS91cmxzL2NoZWNraW4tbGlua3MnLCBwYXJhbXMpO1xuICogYW1hZGV1cy5hbWFkZXVzLnJlZmVyZW5jZV9kYXRhLnVybHMuY2hlY2tpbl9saW5rcy5nZXQocGFyYW1zKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIGEgbGlzdCBvZiBvcHRpb25zLiBTZWUge0BsaW5rIEFtYWRldXN9IC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjbGllbnRJZCB0aGUgQVBJIGtleSB1c2VkIHRvIGF1dGhlbnRpY2F0ZSB0aGUgQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xpZW50U2VjcmV0IHRoZSBBUEkgc2VjcmV0IHVzZWQgdG8gYXV0aGVudGljYXRlXG4gKiAgdGhlIEFQSVxuICogQHByb3BlcnR5IHtPYmplY3R9IGxvZ2dlciB0aGUgYGNvbnNvbGVgLWNvbXBhdGlibGUgbG9nZ2VyIHVzZWQgdG8gZGVidWcgY2FsbHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsb2dMZXZlbCB0aGUgbG9nIGxldmVsIGZvciB0aGUgY2xpZW50LCBhdmFpbGFibGUgb3B0aW9uc1xuICogIGFyZSBgZGVidWdgLCBgd2FybmAsIGFuZCBgc2lsZW50YC4gRGVmYXVsdHMgdG8gJ3NpbGVudCdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3N0IHRoZSBob3N0bmFtZSBvZiB0aGUgc2VydmVyIEFQSSBjYWxscyBhcmUgbWFkZSB0b1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvcnQgdGhlIHBvcnQgdGhlIHNlcnZlciBBUEkgY2FsbHMgYXJlIG1hZGUgdG9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3NsIHdldGhlciBhbiBTU0wgcmVxdWVzdCBpcyBtYWRlIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXN0b21BcHBJZCB0aGUgY3VzdG9tIEFwcCBJRCB0byBiZSBwYXNzZWQgaW4gdGhlIFVzZXJcbiAqICBBZ2VudCB0byB0aGUgc2VydmVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VzdG9tQXBwVmVyc2lvbiB0aGUgY3VzdG9tIEFwcCBWZXJzaW9uIG51bWJlciB0byBiZVxuICogIHBhc3NlZCBpbiB0aGUgVXNlciBBZ2VudCB0byB0aGUgc2VydmVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gaHR0cCB0aGUgTm9kZS9IVFRQKFMpLWNvbXBhdGlibGUgY2xpZW50IHVzZWQgdG8gbWFrZVxuICogIHJlcXVlc3RzXG4gKiBAcHJvcGVydHkge251bWJlcn0gdmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGlzIEFQSSBjbGllbnRcbiAqL1xuY2xhc3MgQ2xpZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgbmV3IFZhbGlkYXRvcigpLnZhbGlkYXRlQW5kSW5pdGlhbGl6ZSh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbmV3IEFjY2Vzc1Rva2VuKHRoaXMpO1xuICAgIHRoaXMudmVyc2lvbiA9IHBrZy52ZXJzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBHRVQgQVBJIGNhbGwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuY2xpZW50LmdldCgnL3YyL2Zvby9iYXInLCB7IHNvbWU6ICdkYXRhJyB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV0gdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIGdldChwYXRoLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHBhdGgsIHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBhdXRoZW50aWNhdGVkIFBPU1QgQVBJIGNhbGwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuY2xpZW50LnBvc3QoJy92Mi9mb28vYmFyJywgeyBzb21lOiAnZGF0YScgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dIHRoZSBQT1NUIHBhcmFtZXRlcnNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgcG9zdChwYXRoLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCBwYXRoLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBERUxFVEUgQVBJIGNhbGwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuY2xpZW50LmRlbGV0ZSgnL3YyL2Zvby9iYXInLCB7IHNvbWU6ICdkYXRhJyB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV0gdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIGRlbGV0ZShwYXRoLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHBhdGgsIHBhcmFtcyk7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogTWFrZSBhbiBhdXRoZW50aWNhdGVkIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5jYWxsKCdHRVQnLCAnL3YyL2Zvby9iYXInLCB7IHNvbWU6ICdkYXRhJyB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV0gdGhlIFBPU1QgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHJlcXVlc3QodmVyYiwgcGF0aCwgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbi5iZWFyZXJUb2tlbih0aGlzKS50aGVuKChiZWFyZXJUb2tlbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudW5hdXRoZW50aWNhdGVkUmVxdWVzdCh2ZXJiLCBwYXRoLCBwYXJhbXMsIGJlYXJlclRva2VuKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBSSVZBVEVcblxuICAvKipcbiAgICogTWFrZSBhbnkga2luZCBvZiBBUEkgY2FsbCwgYXV0aGVudGljYXRlZCBvciBub3RcbiAgICpcbiAgICogVXNlZCBieSB0aGUgLmdldCwgLnBvc3QgbWV0aG9kcyB0byBtYWtlIEFQSSBjYWxscy5cbiAgICpcbiAgICogU2V0cyB1cCBhIG5ldyBQcm9taXNlIGFuZCB0aGVuIGV4Y3V0ZXMgdGhlIEFQSSBjYWxsLCB0cmlnZ2VyaW5nIHRoZSBQcm9taXNlXG4gICAqIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBBUEkgY2FsbCBmYWlscyBvciBzdWNjZWVkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmIgdGhlIEhUVFAgbWV0aG9kLCBmb3IgZXhhbXBsZSBgR0VUYCBvciBgUE9TVGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2JlYXJlclRva2VuPW51bGxdIHRoZSBCZWFyZXJUb2tlbiBhcyBnZW5lcmF0ZWQgYnkgdGhlXG4gICAqICBBY2Nlc3NUb2tlbiBjbGFzc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KHZlcmIsIHBhdGgsIHBhcmFtcywgYmVhcmVyVG9rZW4gPSBudWxsKSB7XG4gICAgbGV0IHJlcXVlc3QgPSB0aGlzLmJ1aWxkUmVxdWVzdCh2ZXJiLCBwYXRoLCBwYXJhbXMsIGJlYXJlclRva2VuKTtcbiAgICB0aGlzLmxvZyhyZXF1ZXN0KTtcbiAgICBsZXQgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMuYnVpbGRQcm9taXNlKGVtaXR0ZXIpO1xuXG4gICAgdGhpcy5leGVjdXRlKHJlcXVlc3QsIGVtaXR0ZXIpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGx5IGV4ZWN1dGVzIHRoZSBBUEkgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IHRvIGV4ZWN1dGVcbiAgICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgdGhlIGV2ZW50IGVtaXR0ZXIgdG8gbm90aWZ5IG9mIGNoYW5nZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGV4ZWN1dGUocmVxdWVzdCwgZW1pdHRlcikge1xuICAgIGxldCBodHRwX3JlcXVlc3QgPSB0aGlzLmh0dHAucmVxdWVzdChyZXF1ZXN0Lm9wdGlvbnMoKSk7XG4gICAgbGV0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKHJlcXVlc3QsIGVtaXR0ZXIsIHRoaXMpO1xuICAgIGh0dHBfcmVxdWVzdC5vbigncmVzcG9uc2UnLCBsaXN0ZW5lci5vblJlc3BvbnNlLmJpbmQobGlzdGVuZXIpKTtcbiAgICBodHRwX3JlcXVlc3Qub24oJ2Vycm9yJywgICAgbGlzdGVuZXIub25FcnJvci5iaW5kKGxpc3RlbmVyKSk7XG4gICAgaHR0cF9yZXF1ZXN0LndyaXRlKHJlcXVlc3QuYm9keSgpKTtcbiAgICBodHRwX3JlcXVlc3QuZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgUmVxdWVzdCBvYmplY3QgdG8gYmUgdXNlZCBpbiB0aGUgQVBJIGNhbGxcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmIgdGhlIEhUVFAgbWV0aG9kLCBmb3IgZXhhbXBsZSBgR0VUYCBvciBgUE9TVGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2JlYXJlclRva2VuPW51bGxdIHRoZSBCZWFyZXJUb2tlbiBhcyBnZW5lcmF0ZWQgYnkgdGhlXG4gICAqICBBY2Nlc3NUb2tlbiBjbGFzc1xuICAgKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRSZXF1ZXN0KHZlcmIsIHBhdGgsIHBhcmFtcywgYmVhcmVyVG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3Qoe1xuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgdmVyYjogdmVyYixcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGJlYXJlclRva2VuOiBiZWFyZXJUb2tlbixcbiAgICAgIGNsaWVudFZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgIGxhbmd1YWdlVmVyc2lvbjogcHJvY2Vzcy52ZXJzaW9uLFxuICAgICAgYXBwSWQ6IHRoaXMuY3VzdG9tQXBwSWQsXG4gICAgICBhcHBWZXJzaW9uOiB0aGlzLmN1c3RvbUFwcFZlcnNpb24sXG4gICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICBzc2w6IHRoaXMuc3NsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgQmx1ZWJpcmQgUHJvbWlzZSB0byBiZSByZXR1cm5lZCB0byB0aGUgQVBJIHVzZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gZW1pdHRlciB0aGUgZXZlbnQgZW1pdHRlciB0byBub3RpZnkgb2YgY2hhbmdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIEJsdWViaXJkIHByb21pc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkUHJvbWlzZShlbWl0dGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGVtaXR0ZXIub24oJ3Jlc29sdmUnLCByZXNwb25zZSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgICBlbWl0dGVyLm9uKCdyZWplY3QnLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvZ3MgdGhlIHJlcXVlc3QsIHdoZW4gaW4gZGVidWcgbW9kZVxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB0byBsb2dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxvZyhyZXF1ZXN0KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZih0aGlzLmRlYnVnKCkpIHsgdGhpcy5sb2dnZXIubG9nKHV0aWwuaW5zcGVjdChyZXF1ZXN0LCBmYWxzZSwgbnVsbCkpOyB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGlzIGNsaWVudCBpcyBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dMZXZlbCA9PSAnZGVidWcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhpcyBjbGllbnQgaXMgaW4gd2FybiBvciBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB3YXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsID09ICd3YXJuJyB8fCB0aGlzLmRlYnVnKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxTQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxLQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBRyxhQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxTQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxR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