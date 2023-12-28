"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _qs = _interopRequireDefault(require("qs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A Request object containing all the compiled information about this request.
 *
 * @property {string} host the host used for this API call
 * @property {number} port the port for this API call. Standard set to 443.
 * @property {boolean} ssl wether this API call uses SSL
 * @property {string} scheme the scheme inferred from the SSL state
 * @property {string} verb the HTTP method, for example `GET` or `POST`
 * @property {string} path the full path of the API endpoint
 * @property {Object} params the parameters to pass in the query or body
 * @property {string} queryPath the path and query string used for the API call
 * @property {string} bearerToken the authentication token
 * @property {string} clientVersion the version of the Amadeus library
 * @property {string} languageVersion the version of Node used
 * @property {string} appId the custom ID of the application using this library
 * @property {string} appVersion the custom version of the application
 *  using this library
 * @property {Object} headers the request headers
 *
 * @param {Object} options
 */
var Request = /*#__PURE__*/function () {
  function Request(options) {
    _classCallCheck(this, Request);
    this.host = options.host;
    this.port = options.port;
    this.ssl = options.ssl;
    this.scheme = this.ssl ? 'https' : 'http';
    this.verb = options.verb;
    this.path = options.path;
    this.params = options.params;
    this.queryPath = this.fullQueryPath();
    this.bearerToken = options.bearerToken;
    this.clientVersion = options.clientVersion;
    this.languageVersion = options.languageVersion.replace('v', '');
    this.appId = options.appId;
    this.appVersion = options.appVersion;
    this.headers = {
      'User-Agent': this.userAgent(),
      'Accept': 'application/json, application/vnd.amadeus+json'
    };
    this.ListHTTPOverride = ['/v2/shopping/flight-offers', '/v1/shopping/seatmaps', '/v1/shopping/availability/flight-availabilities', '/v2/shopping/flight-offers/prediction', '/v1/shopping/flight-offers/pricing', '/v1/shopping/flight-offers/upselling'];
    this.addAuthorizationHeader();
    this.addContentTypeHeader();
    this.addHTTPOverrideHeader();
  }

  // PROTECTED

  /**
   * Compiles the options for the HTTP request.
   *
   * Used by Client.execute when executing this request against the server.
   *
   * @return {Object} an associative array of options to be passed into the
   *  Client.execute function
   * @protected
   */
  _createClass(Request, [{
    key: "options",
    value: function options() {
      var options = {
        'host': this.host,
        'port': this.port,
        'protocol': "".concat(this.scheme, ":"),
        'path': this.queryPath,
        'method': this.verb,
        'headers': this.headers
      };
      return options;
    }

    /**
     * Creats the body for the API cal, serializing the params if the verb is POST.
     *
     * @return {string} the serialized params
     * @protected
     */
  }, {
    key: "body",
    value: function body() {
      if (this.verb !== 'POST') {
        return '';
      } else {
        if (!this.bearerToken) {
          return _qs["default"].stringify(this.params);
        }
        return this.params;
      }
    }

    // PRIVATE

    /**
     * Build up the custom User Agent
     *
     * @return {string} a user agent in the format "library/version language/version app/version"
     * @private
     */
  }, {
    key: "userAgent",
    value: function userAgent() {
      var userAgent = "amadeus-node/".concat(this.clientVersion, " node/").concat(this.languageVersion);
      if (!this.appId) {
        return userAgent;
      }
      return "".concat(userAgent, " ").concat(this.appId, "/").concat(this.appVersion);
    }

    /**
     * Build the full query path, combining the path with the query params if the
     * verb is 'GET'. For example: '/foo/bar?baz=qux'
     *
     * @return {string} the path and params combined into one string.
     * @private
     */
  }, {
    key: "fullQueryPath",
    value: function fullQueryPath() {
      if (this.verb === 'POST') {
        return this.path;
      } else {
        return "".concat(this.path, "?").concat(_qs["default"].stringify(this.params));
      }
    }

    /**
     * Adds an Authorization header if the BearerToken is present
     *
     * @private
     */
  }, {
    key: "addAuthorizationHeader",
    value: function addAuthorizationHeader() {
      if (!this.bearerToken) {
        return;
      }
      this.headers['Authorization'] = "Bearer ".concat(this.bearerToken);
    }

    /**
     * Adds an Content-Type header if the HTTP method equals POST
     *
     * @private
     */
  }, {
    key: "addContentTypeHeader",
    value: function addContentTypeHeader() {
      if (this.verb === 'POST' && !this.bearerToken) {
        this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      } else {
        this.headers['Content-Type'] = 'application/vnd.amadeus+json';
      }
      return;
    }

    /**
    * Adds HTTPOverride method if it is required
    *
    *  @private
    */
  }, {
    key: "addHTTPOverrideHeader",
    value: function addHTTPOverrideHeader() {
      if (this.verb === 'POST' && this.ListHTTPOverride.includes(this.path)) {
        this.headers['X-HTTP-Method-Override'] = 'GET';
      }
      return;
    }
  }]);
  return Request;
}();
var _default = Request;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIk51bWJlciIsIlJlcXVlc3QiLCJvcHRpb25zIiwiaG9zdCIsInBvcnQiLCJzc2wiLCJzY2hlbWUiLCJ2ZXJiIiwicGF0aCIsInBhcmFtcyIsInF1ZXJ5UGF0aCIsImZ1bGxRdWVyeVBhdGgiLCJiZWFyZXJUb2tlbiIsImNsaWVudFZlcnNpb24iLCJsYW5ndWFnZVZlcnNpb24iLCJyZXBsYWNlIiwiYXBwSWQiLCJhcHBWZXJzaW9uIiwiaGVhZGVycyIsInVzZXJBZ2VudCIsIkxpc3RIVFRQT3ZlcnJpZGUiLCJhZGRBdXRob3JpemF0aW9uSGVhZGVyIiwiYWRkQ29udGVudFR5cGVIZWFkZXIiLCJhZGRIVFRQT3ZlcnJpZGVIZWFkZXIiLCJ2YWx1ZSIsImNvbmNhdCIsImJvZHkiLCJxcyIsInN0cmluZ2lmeSIsImluY2x1ZGVzIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9yZXF1ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcyc7XG5cbi8qKlxuICogQSBSZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgY29tcGlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyByZXF1ZXN0LlxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3N0IHRoZSBob3N0IHVzZWQgZm9yIHRoaXMgQVBJIGNhbGxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3J0IHRoZSBwb3J0IGZvciB0aGlzIEFQSSBjYWxsLiBTdGFuZGFyZCBzZXQgdG8gNDQzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBzc2wgd2V0aGVyIHRoaXMgQVBJIGNhbGwgdXNlcyBTU0xcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzY2hlbWUgdGhlIHNjaGVtZSBpbmZlcnJlZCBmcm9tIHRoZSBTU0wgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHF1ZXJ5UGF0aCB0aGUgcGF0aCBhbmQgcXVlcnkgc3RyaW5nIHVzZWQgZm9yIHRoZSBBUEkgY2FsbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJlYXJlclRva2VuIHRoZSBhdXRoZW50aWNhdGlvbiB0b2tlblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsaWVudFZlcnNpb24gdGhlIHZlcnNpb24gb2YgdGhlIEFtYWRldXMgbGlicmFyeVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhbmd1YWdlVmVyc2lvbiB0aGUgdmVyc2lvbiBvZiBOb2RlIHVzZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhcHBJZCB0aGUgY3VzdG9tIElEIG9mIHRoZSBhcHBsaWNhdGlvbiB1c2luZyB0aGlzIGxpYnJhcnlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhcHBWZXJzaW9uIHRoZSBjdXN0b20gdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAqICB1c2luZyB0aGlzIGxpYnJhcnlcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkZXJzIHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaG9zdCAgICAgICAgICAgID0gb3B0aW9ucy5ob3N0O1xuICAgIHRoaXMucG9ydCAgICAgICAgICAgID0gb3B0aW9ucy5wb3J0O1xuICAgIHRoaXMuc3NsICAgICAgICAgICAgID0gb3B0aW9ucy5zc2w7XG4gICAgdGhpcy5zY2hlbWUgICAgICAgICAgPSB0aGlzLnNzbCA/ICdodHRwcycgOiAnaHR0cCc7XG4gICAgdGhpcy52ZXJiICAgICAgICAgICAgPSBvcHRpb25zLnZlcmI7XG4gICAgdGhpcy5wYXRoICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XG4gICAgdGhpcy5wYXJhbXMgICAgICAgICAgPSBvcHRpb25zLnBhcmFtcztcbiAgICB0aGlzLnF1ZXJ5UGF0aCAgICAgICA9IHRoaXMuZnVsbFF1ZXJ5UGF0aCgpO1xuICAgIHRoaXMuYmVhcmVyVG9rZW4gICAgID0gb3B0aW9ucy5iZWFyZXJUb2tlbjtcbiAgICB0aGlzLmNsaWVudFZlcnNpb24gICA9IG9wdGlvbnMuY2xpZW50VmVyc2lvbjtcbiAgICB0aGlzLmxhbmd1YWdlVmVyc2lvbiA9IG9wdGlvbnMubGFuZ3VhZ2VWZXJzaW9uLnJlcGxhY2UoJ3YnLCAnJyk7XG4gICAgdGhpcy5hcHBJZCAgICAgICAgICAgPSBvcHRpb25zLmFwcElkO1xuICAgIHRoaXMuYXBwVmVyc2lvbiAgICAgID0gb3B0aW9ucy5hcHBWZXJzaW9uO1xuICAgIHRoaXMuaGVhZGVycyAgICAgICAgID0ge1xuICAgICAgJ1VzZXItQWdlbnQnIDogdGhpcy51c2VyQWdlbnQoKSxcbiAgICAgICdBY2NlcHQnIDogJ2FwcGxpY2F0aW9uL2pzb24sIGFwcGxpY2F0aW9uL3ZuZC5hbWFkZXVzK2pzb24nXG4gICAgfTtcbiAgICB0aGlzLkxpc3RIVFRQT3ZlcnJpZGU9IFtcbiAgICAgICcvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycycsXG4gICAgICAnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJyxcbiAgICAgICcvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllcycsXG4gICAgICAnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJlZGljdGlvbicsXG4gICAgICAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZycsXG4gICAgICAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvdXBzZWxsaW5nJ1xuICAgIF07XG4gICAgdGhpcy5hZGRBdXRob3JpemF0aW9uSGVhZGVyKCk7XG4gICAgdGhpcy5hZGRDb250ZW50VHlwZUhlYWRlcigpO1xuICAgIHRoaXMuYWRkSFRUUE92ZXJyaWRlSGVhZGVyKCk7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogQ29tcGlsZXMgdGhlIG9wdGlvbnMgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAqXG4gICAqIFVzZWQgYnkgQ2xpZW50LmV4ZWN1dGUgd2hlbiBleGVjdXRpbmcgdGhpcyByZXF1ZXN0IGFnYWluc3QgdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBhbiBhc3NvY2lhdGl2ZSBhcnJheSBvZiBvcHRpb25zIHRvIGJlIHBhc3NlZCBpbnRvIHRoZVxuICAgKiAgQ2xpZW50LmV4ZWN1dGUgZnVuY3Rpb25cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgb3B0aW9ucygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICdob3N0JyA6IHRoaXMuaG9zdCxcbiAgICAgICdwb3J0JyA6IHRoaXMucG9ydCxcbiAgICAgICdwcm90b2NvbCcgOiBgJHt0aGlzLnNjaGVtZX06YCxcbiAgICAgICdwYXRoJyA6IHRoaXMucXVlcnlQYXRoLFxuICAgICAgJ21ldGhvZCcgOiB0aGlzLnZlcmIsXG4gICAgICAnaGVhZGVycycgOiB0aGlzLmhlYWRlcnNcbiAgICB9O1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0cyB0aGUgYm9keSBmb3IgdGhlIEFQSSBjYWwsIHNlcmlhbGl6aW5nIHRoZSBwYXJhbXMgaWYgdGhlIHZlcmIgaXMgUE9TVC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgc2VyaWFsaXplZCBwYXJhbXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgYm9keSgpIHtcbiAgICBpZiAodGhpcy52ZXJiICE9PSAnUE9TVCcpIHsgcmV0dXJuICcnOyB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuYmVhcmVyVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHFzLnN0cmluZ2lmeSh0aGlzLnBhcmFtcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIC8qKlxuICAgKiBCdWlsZCB1cCB0aGUgY3VzdG9tIFVzZXIgQWdlbnRcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBhIHVzZXIgYWdlbnQgaW4gdGhlIGZvcm1hdCBcImxpYnJhcnkvdmVyc2lvbiBsYW5ndWFnZS92ZXJzaW9uIGFwcC92ZXJzaW9uXCJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVzZXJBZ2VudCgpIHtcbiAgICBsZXQgdXNlckFnZW50ID0gYGFtYWRldXMtbm9kZS8ke3RoaXMuY2xpZW50VmVyc2lvbn0gbm9kZS8ke3RoaXMubGFuZ3VhZ2VWZXJzaW9ufWA7XG4gICAgaWYgKCF0aGlzLmFwcElkKSB7IHJldHVybiB1c2VyQWdlbnQ7IH1cbiAgICByZXR1cm4gYCR7dXNlckFnZW50fSAke3RoaXMuYXBwSWR9LyR7dGhpcy5hcHBWZXJzaW9ufWA7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZ1bGwgcXVlcnkgcGF0aCwgY29tYmluaW5nIHRoZSBwYXRoIHdpdGggdGhlIHF1ZXJ5IHBhcmFtcyBpZiB0aGVcbiAgICogdmVyYiBpcyAnR0VUJy4gRm9yIGV4YW1wbGU6ICcvZm9vL2Jhcj9iYXo9cXV4J1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBwYXRoIGFuZCBwYXJhbXMgY29tYmluZWQgaW50byBvbmUgc3RyaW5nLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVsbFF1ZXJ5UGF0aCgpIHtcbiAgICBpZiAodGhpcy52ZXJiID09PSAnUE9TVCcpIHsgcmV0dXJuIHRoaXMucGF0aDsgfVxuICAgIGVsc2UgeyByZXR1cm4gYCR7dGhpcy5wYXRofT8ke3FzLnN0cmluZ2lmeSh0aGlzLnBhcmFtcyl9YDsgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gQXV0aG9yaXphdGlvbiBoZWFkZXIgaWYgdGhlIEJlYXJlclRva2VuIGlzIHByZXNlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZEF1dGhvcml6YXRpb25IZWFkZXIoKSB7XG4gICAgaWYgKCF0aGlzLmJlYXJlclRva2VuKSB7IHJldHVybjsgfVxuICAgIHRoaXMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3RoaXMuYmVhcmVyVG9rZW59YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIENvbnRlbnQtVHlwZSBoZWFkZXIgaWYgdGhlIEhUVFAgbWV0aG9kIGVxdWFscyBQT1NUXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRDb250ZW50VHlwZUhlYWRlcigpIHtcbiAgICBpZiAodGhpcy52ZXJiID09PSAnUE9TVCcgJiYgIXRoaXMuYmVhcmVyVG9rZW4pIHtcbiAgICAgIHRoaXMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi92bmQuYW1hZGV1cytqc29uJztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICogQWRkcyBIVFRQT3ZlcnJpZGUgbWV0aG9kIGlmIGl0IGlzIHJlcXVpcmVkXG4gICpcbiAgKiAgQHByaXZhdGVcbiAgKi9cbiAgYWRkSFRUUE92ZXJyaWRlSGVhZGVyKCkge1xuICAgIGlmICh0aGlzLnZlcmIgPT09ICdQT1NUJyAmJiB0aGlzLkxpc3RIVFRQT3ZlcnJpZGUuaW5jbHVkZXModGhpcy5wYXRoKSkge1xuICAgICAgdGhpcy5oZWFkZXJzWydYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJ10gPSAnR0VUJztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEdBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFvQixTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsUUFBQUYsR0FBQSxzQ0FBQUUsT0FBQSx3QkFBQUMsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFKLEdBQUEsa0JBQUFBLEdBQUEsZ0JBQUFBLEdBQUEsV0FBQUEsR0FBQSx5QkFBQUcsTUFBQSxJQUFBSCxHQUFBLENBQUFLLFdBQUEsS0FBQUYsTUFBQSxJQUFBSCxHQUFBLEtBQUFHLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQU4sR0FBQSxLQUFBRSxPQUFBLENBQUFGLEdBQUE7QUFBQSxTQUFBTyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FBQUEsU0FBQUMsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBZixXQUFBLEVBQUFnQixVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZCxpQkFBQSxDQUFBRixXQUFBLENBQUFILFNBQUEsRUFBQW1CLFVBQUEsT0FBQUMsV0FBQSxFQUFBZixpQkFBQSxDQUFBRixXQUFBLEVBQUFpQixXQUFBLEdBQUFOLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWixXQUFBLGlCQUFBVSxRQUFBLG1CQUFBVixXQUFBO0FBQUEsU0FBQWEsZUFBQUssR0FBQSxRQUFBSixHQUFBLEdBQUFLLFlBQUEsQ0FBQUQsR0FBQSxvQkFBQXpCLE9BQUEsQ0FBQXFCLEdBQUEsaUJBQUFBLEdBQUEsR0FBQU0sTUFBQSxDQUFBTixHQUFBO0FBQUEsU0FBQUssYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUE3QixPQUFBLENBQUE0QixLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBM0IsTUFBQSxDQUFBOEIsV0FBQSxPQUFBRCxJQUFBLEtBQUFFLFNBQUEsUUFBQUMsR0FBQSxHQUFBSCxJQUFBLENBQUFJLElBQUEsQ0FBQU4sS0FBQSxFQUFBQyxJQUFBLG9CQUFBN0IsT0FBQSxDQUFBaUMsR0FBQSx1QkFBQUEsR0FBQSxZQUFBekIsU0FBQSw0REFBQXFCLElBQUEsZ0JBQUFGLE1BQUEsR0FBQVEsTUFBQSxFQUFBUCxLQUFBO0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQSxJQXFCTVEsT0FBTztFQUNYLFNBQUFBLFFBQVlDLE9BQU8sRUFBRTtJQUFBaEMsZUFBQSxPQUFBK0IsT0FBQTtJQUNuQixJQUFJLENBQUNFLElBQUksR0FBY0QsT0FBTyxDQUFDQyxJQUFJO0lBQ25DLElBQUksQ0FBQ0MsSUFBSSxHQUFjRixPQUFPLENBQUNFLElBQUk7SUFDbkMsSUFBSSxDQUFDQyxHQUFHLEdBQWVILE9BQU8sQ0FBQ0csR0FBRztJQUNsQyxJQUFJLENBQUNDLE1BQU0sR0FBWSxJQUFJLENBQUNELEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTTtJQUNsRCxJQUFJLENBQUNFLElBQUksR0FBY0wsT0FBTyxDQUFDSyxJQUFJO0lBQ25DLElBQUksQ0FBQ0MsSUFBSSxHQUFjTixPQUFPLENBQUNNLElBQUk7SUFDbkMsSUFBSSxDQUFDQyxNQUFNLEdBQVlQLE9BQU8sQ0FBQ08sTUFBTTtJQUNyQyxJQUFJLENBQUNDLFNBQVMsR0FBUyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQ0MsV0FBVyxHQUFPVixPQUFPLENBQUNVLFdBQVc7SUFDMUMsSUFBSSxDQUFDQyxhQUFhLEdBQUtYLE9BQU8sQ0FBQ1csYUFBYTtJQUM1QyxJQUFJLENBQUNDLGVBQWUsR0FBR1osT0FBTyxDQUFDWSxlQUFlLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQy9ELElBQUksQ0FBQ0MsS0FBSyxHQUFhZCxPQUFPLENBQUNjLEtBQUs7SUFDcEMsSUFBSSxDQUFDQyxVQUFVLEdBQVFmLE9BQU8sQ0FBQ2UsVUFBVTtJQUN6QyxJQUFJLENBQUNDLE9BQU8sR0FBVztNQUNyQixZQUFZLEVBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUMvQixRQUFRLEVBQUc7SUFDYixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRSxDQUNyQiw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLGlEQUFpRCxFQUNqRCx1Q0FBdUMsRUFDdkMsb0NBQW9DLEVBQ3BDLHNDQUFzQyxDQUN2QztJQUNELElBQUksQ0FBQ0Msc0JBQXNCLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDO0VBQzlCOztFQUVBOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVJFcEMsWUFBQSxDQUFBYyxPQUFBO0lBQUFmLEdBQUE7SUFBQXNDLEtBQUEsRUFTQSxTQUFBdEIsUUFBQSxFQUFVO01BQ1IsSUFBSUEsT0FBTyxHQUFHO1FBQ1osTUFBTSxFQUFHLElBQUksQ0FBQ0MsSUFBSTtRQUNsQixNQUFNLEVBQUcsSUFBSSxDQUFDQyxJQUFJO1FBQ2xCLFVBQVUsS0FBQXFCLE1BQUEsQ0FBTSxJQUFJLENBQUNuQixNQUFNLE1BQUc7UUFDOUIsTUFBTSxFQUFHLElBQUksQ0FBQ0ksU0FBUztRQUN2QixRQUFRLEVBQUcsSUFBSSxDQUFDSCxJQUFJO1FBQ3BCLFNBQVMsRUFBRyxJQUFJLENBQUNXO01BQ25CLENBQUM7TUFDRCxPQUFPaEIsT0FBTztJQUNoQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBaEIsR0FBQTtJQUFBc0MsS0FBQSxFQU1BLFNBQUFFLEtBQUEsRUFBTztNQUNMLElBQUksSUFBSSxDQUFDbkIsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUFFLE9BQU8sRUFBRTtNQUFFLENBQUMsTUFDbkM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDSyxXQUFXLEVBQUU7VUFDckIsT0FBT2UsY0FBRSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDbkIsTUFBTSxDQUFDO1FBQ2xDO1FBQ0EsT0FBTyxJQUFJLENBQUNBLE1BQU07TUFDcEI7SUFDRjs7SUFFQTs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBdkIsR0FBQTtJQUFBc0MsS0FBQSxFQU1BLFNBQUFMLFVBQUEsRUFBWTtNQUNWLElBQUlBLFNBQVMsbUJBQUFNLE1BQUEsQ0FBbUIsSUFBSSxDQUFDWixhQUFhLFlBQUFZLE1BQUEsQ0FBUyxJQUFJLENBQUNYLGVBQWUsQ0FBRTtNQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDRSxLQUFLLEVBQUU7UUFBRSxPQUFPRyxTQUFTO01BQUU7TUFDckMsVUFBQU0sTUFBQSxDQUFVTixTQUFTLE9BQUFNLE1BQUEsQ0FBSSxJQUFJLENBQUNULEtBQUssT0FBQVMsTUFBQSxDQUFJLElBQUksQ0FBQ1IsVUFBVTtJQUN0RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUEvQixHQUFBO0lBQUFzQyxLQUFBLEVBT0EsU0FBQWIsY0FBQSxFQUFnQjtNQUNkLElBQUksSUFBSSxDQUFDSixJQUFJLEtBQUssTUFBTSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNDLElBQUk7TUFBRSxDQUFDLE1BQzFDO1FBQUUsVUFBQWlCLE1BQUEsQ0FBVSxJQUFJLENBQUNqQixJQUFJLE9BQUFpQixNQUFBLENBQUlFLGNBQUUsQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ25CLE1BQU0sQ0FBQztNQUFJO0lBQzdEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBdkIsR0FBQTtJQUFBc0MsS0FBQSxFQUtBLFNBQUFILHVCQUFBLEVBQXlCO01BQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUNULFdBQVcsRUFBRTtRQUFFO01BQVE7TUFDakMsSUFBSSxDQUFDTSxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQUFPLE1BQUEsQ0FBYSxJQUFJLENBQUNiLFdBQVcsQ0FBRTtJQUM5RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTFCLEdBQUE7SUFBQXNDLEtBQUEsRUFLQSxTQUFBRixxQkFBQSxFQUF1QjtNQUNyQixJQUFJLElBQUksQ0FBQ2YsSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0ssV0FBVyxFQUFFO1FBQzdDLElBQUksQ0FBQ00sT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLG1DQUFtQztNQUNwRSxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNBLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyw4QkFBOEI7TUFDL0Q7TUFDQTtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBaEMsR0FBQTtJQUFBc0MsS0FBQSxFQUtBLFNBQUFELHNCQUFBLEVBQXdCO01BQ3RCLElBQUksSUFBSSxDQUFDaEIsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUNhLGdCQUFnQixDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDckIsSUFBSSxDQUFDLEVBQUU7UUFDckUsSUFBSSxDQUFDVSxPQUFPLENBQUMsd0JBQXdCLENBQUMsR0FBRyxLQUFLO01BQ2hEO01BQ0E7SUFDRjtFQUFDO0VBQUEsT0FBQWpCLE9BQUE7QUFBQTtBQUFBLElBQUE2QixRQUFBLEdBR1k3QixPQUFPO0FBQUE4QixPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9