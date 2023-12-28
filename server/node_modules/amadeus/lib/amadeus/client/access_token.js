"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(require("events"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// The number of seconds before the token expires, when
// we will already try to refresh it
var TOKEN_BUFFER = 10;

/**
  * A helper library to create and maintain the OAuth2 AccessTokens between
  * requests. Keeps track of the expiry time and automatically tries to fetch
  * a new token if needed.
  *
  * @property {string} accessToken the cached current access token (bearer)
  * @property {number} expiresAt the aproximate time this token expires at
  * @protected
  */
var AccessToken = /*#__PURE__*/function () {
  function AccessToken() {
    _classCallCheck(this, AccessToken);
    this.accessToken;
    this.expiresAt;
  }

  // PROTECTED

  /**
   * Fetches or returns a cached bearer token. Used by the Client to get a
   * token before making an API call.
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   * @protected
   */
  _createClass(AccessToken, [{
    key: "bearerToken",
    value: function bearerToken(client) {
      var emitter = new _events["default"]();
      var promise = this.promise(emitter);
      this.emitOrLoadAccessToken(client, emitter);
      return promise;
    }

    // PRIVATE

    /**
     * Builds a Bluebird promise to be returned to the API user
     *
     * @param  {type} emitter the EventEmitter used to notify the Promise of
     * @return {Promise} a Bluebird promise
     * @private
     */
  }, {
    key: "promise",
    value: function promise(emitter) {
      return new Promise(function (resolve, reject) {
        emitter.on('resolve', function (response) {
          return resolve(response);
        });
        emitter.on('reject', function (error) {
          return reject(error);
        });
      });
    }

    /**
     * Checks if the token needs a refresh, if not emits the cached token,
     * otherwise tries to load a new access token
     *
     * @param  {Client} client the Amadeus Client to make an API call with
     * @param  {type} emitter the EventEmitter used to emit the token
     * @private
     */
  }, {
    key: "emitOrLoadAccessToken",
    value: function emitOrLoadAccessToken(client, emitter) {
      if (this.needsLoadOrRefresh()) {
        this.loadAccessToken(client, emitter);
      } else {
        emitter.emit('resolve', this.accessToken);
      }
    }

    /**
     * Checks if the token needs a refresh or first load
     *
     * @return {boolean} wether the token needs a refresh
     * @private
     */
  }, {
    key: "needsLoadOrRefresh",
    value: function needsLoadOrRefresh() {
      if (!this.accessToken) {
        return true;
      } else if (Date.now() + TOKEN_BUFFER > this.expiresAt) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * Loads the access token using the client, emits the token when it's loaded
     *
     * @param  {Client} client the Amadeus Client to make an API call with
     * @param  {type} emitter the EventEmitter used to emit the token
     * @private
     */
  }, {
    key: "loadAccessToken",
    value: function loadAccessToken(client, emitter) {
      var _this = this;
      client.unauthenticatedRequest('POST', '/v1/security/oauth2/token', {
        'grant_type': 'client_credentials',
        'client_id': client.clientId,
        'client_secret': client.clientSecret
      }).then(function (response) {
        _this.storeAccessToken(response);
        _this.emitOrLoadAccessToken(client, emitter);
      })["catch"](function (error) {
        emitter.emit('reject', error);
      });
    }

    /**
     * Stores a loaded access token, calculating the expiry date
     *
     * @param  {Response} response the response object received from the client
     * @private
     */
  }, {
    key: "storeAccessToken",
    value: function storeAccessToken(response) {
      this.accessToken = response.result['access_token'];
      this.expiresAt = Date.now() + response.result['expires_in'] * 1000;
    }
  }]);
  return AccessToken;
}();
var _default = AccessToken;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJOdW1iZXIiLCJUT0tFTl9CVUZGRVIiLCJBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwiZXhwaXJlc0F0IiwidmFsdWUiLCJiZWFyZXJUb2tlbiIsImNsaWVudCIsImVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJwcm9taXNlIiwiZW1pdE9yTG9hZEFjY2Vzc1Rva2VuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJuZWVkc0xvYWRPclJlZnJlc2giLCJsb2FkQWNjZXNzVG9rZW4iLCJlbWl0IiwiRGF0ZSIsIm5vdyIsIl90aGlzIiwidW5hdXRoZW50aWNhdGVkUmVxdWVzdCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwidGhlbiIsInN0b3JlQWNjZXNzVG9rZW4iLCJyZXN1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L2FjY2Vzc190b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5cbi8vIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZWZvcmUgdGhlIHRva2VuIGV4cGlyZXMsIHdoZW5cbi8vIHdlIHdpbGwgYWxyZWFkeSB0cnkgdG8gcmVmcmVzaCBpdFxuY29uc3QgVE9LRU5fQlVGRkVSID0gMTA7XG5cbi8qKlxuICAqIEEgaGVscGVyIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBtYWludGFpbiB0aGUgT0F1dGgyIEFjY2Vzc1Rva2VucyBiZXR3ZWVuXG4gICogcmVxdWVzdHMuIEtlZXBzIHRyYWNrIG9mIHRoZSBleHBpcnkgdGltZSBhbmQgYXV0b21hdGljYWxseSB0cmllcyB0byBmZXRjaFxuICAqIGEgbmV3IHRva2VuIGlmIG5lZWRlZC5cbiAgKlxuICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiB0aGUgY2FjaGVkIGN1cnJlbnQgYWNjZXNzIHRva2VuIChiZWFyZXIpXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGV4cGlyZXNBdCB0aGUgYXByb3hpbWF0ZSB0aW1lIHRoaXMgdG9rZW4gZXhwaXJlcyBhdFxuICAqIEBwcm90ZWN0ZWRcbiAgKi9cbmNsYXNzIEFjY2Vzc1Rva2VuIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB0aGlzLmV4cGlyZXNBdDtcbiAgfVxuXG4gIC8vIFBST1RFQ1RFRFxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIG9yIHJldHVybnMgYSBjYWNoZWQgYmVhcmVyIHRva2VuLiBVc2VkIGJ5IHRoZSBDbGllbnQgdG8gZ2V0IGFcbiAgICogdG9rZW4gYmVmb3JlIG1ha2luZyBhbiBBUEkgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtICB7Q2xpZW50fSBjbGllbnQgdGhlIEFtYWRldXMgQ2xpZW50IHRvIG1ha2UgYW4gQVBJIGNhbGwgd2l0aFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBCbHVlYmlyZCBQcm9taXNlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGJlYXJlclRva2VuKGNsaWVudCkge1xuICAgIGxldCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGxldCBwcm9taXNlID0gdGhpcy5wcm9taXNlKGVtaXR0ZXIpO1xuICAgIHRoaXMuZW1pdE9yTG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcik7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvLyBQUklWQVRFXG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIEJsdWViaXJkIHByb21pc2UgdG8gYmUgcmV0dXJuZWQgdG8gdGhlIEFQSSB1c2VyXG4gICAqXG4gICAqIEBwYXJhbSAge3R5cGV9IGVtaXR0ZXIgdGhlIEV2ZW50RW1pdHRlciB1c2VkIHRvIG5vdGlmeSB0aGUgUHJvbWlzZSBvZlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIEJsdWViaXJkIHByb21pc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb21pc2UoZW1pdHRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBlbWl0dGVyLm9uKCdyZXNvbHZlJywgcmVzcG9uc2UgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgICAgZW1pdHRlci5vbigncmVqZWN0JywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHRva2VuIG5lZWRzIGEgcmVmcmVzaCwgaWYgbm90IGVtaXRzIHRoZSBjYWNoZWQgdG9rZW4sXG4gICAqIG90aGVyd2lzZSB0cmllcyB0byBsb2FkIGEgbmV3IGFjY2VzcyB0b2tlblxuICAgKlxuICAgKiBAcGFyYW0gIHtDbGllbnR9IGNsaWVudCB0aGUgQW1hZGV1cyBDbGllbnQgdG8gbWFrZSBhbiBBUEkgY2FsbCB3aXRoXG4gICAqIEBwYXJhbSAge3R5cGV9IGVtaXR0ZXIgdGhlIEV2ZW50RW1pdHRlciB1c2VkIHRvIGVtaXQgdGhlIHRva2VuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlbWl0T3JMb2FkQWNjZXNzVG9rZW4oY2xpZW50LCBlbWl0dGVyKSB7XG4gICAgaWYgKHRoaXMubmVlZHNMb2FkT3JSZWZyZXNoKCkpIHsgdGhpcy5sb2FkQWNjZXNzVG9rZW4oY2xpZW50LCBlbWl0dGVyKTsgfVxuICAgIGVsc2UgeyBlbWl0dGVyLmVtaXQoJ3Jlc29sdmUnLCB0aGlzLmFjY2Vzc1Rva2VuKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdG9rZW4gbmVlZHMgYSByZWZyZXNoIG9yIGZpcnN0IGxvYWRcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gd2V0aGVyIHRoZSB0b2tlbiBuZWVkcyBhIHJlZnJlc2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG5lZWRzTG9hZE9yUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW4pIHsgcmV0dXJuIHRydWU7IH1cbiAgICBlbHNlIGlmICgoRGF0ZS5ub3coKSArIFRPS0VOX0JVRkZFUikgPiB0aGlzLmV4cGlyZXNBdCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBhY2Nlc3MgdG9rZW4gdXNpbmcgdGhlIGNsaWVudCwgZW1pdHMgdGhlIHRva2VuIHdoZW4gaXQncyBsb2FkZWRcbiAgICpcbiAgICogQHBhcmFtICB7Q2xpZW50fSBjbGllbnQgdGhlIEFtYWRldXMgQ2xpZW50IHRvIG1ha2UgYW4gQVBJIGNhbGwgd2l0aFxuICAgKiBAcGFyYW0gIHt0eXBlfSBlbWl0dGVyIHRoZSBFdmVudEVtaXR0ZXIgdXNlZCB0byBlbWl0IHRoZSB0b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcikge1xuICAgIGNsaWVudC51bmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCdQT1NUJywgJy92MS9zZWN1cml0eS9vYXV0aDIvdG9rZW4nLCB7XG4gICAgICAnZ3JhbnRfdHlwZScgOiAnY2xpZW50X2NyZWRlbnRpYWxzJyxcbiAgICAgICdjbGllbnRfaWQnIDogY2xpZW50LmNsaWVudElkLFxuICAgICAgJ2NsaWVudF9zZWNyZXQnIDogY2xpZW50LmNsaWVudFNlY3JldFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xuICAgICAgdGhpcy5lbWl0T3JMb2FkQWNjZXNzVG9rZW4oY2xpZW50LCBlbWl0dGVyKTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVtaXR0ZXIuZW1pdCgncmVqZWN0JywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIGxvYWRlZCBhY2Nlc3MgdG9rZW4sIGNhbGN1bGF0aW5nIHRoZSBleHBpcnkgZGF0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXNwb25zZX0gcmVzcG9uc2UgdGhlIHJlc3BvbnNlIG9iamVjdCByZWNlaXZlZCBmcm9tIHRoZSBjbGllbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0b3JlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UucmVzdWx0WydhY2Nlc3NfdG9rZW4nXTtcbiAgICB0aGlzLmV4cGlyZXNBdCA9IERhdGUubm93KCkgKyAocmVzcG9uc2UucmVzdWx0WydleHBpcmVzX2luJ10gKiAxMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2Nlc3NUb2tlbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQWtDLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFB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