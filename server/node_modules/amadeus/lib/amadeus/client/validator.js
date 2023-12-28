"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _https = _interopRequireDefault(require("https"));
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HOSTS = {
  'test': 'test.api.amadeus.com',
  'production': 'api.amadeus.com'
};
var RECOGNIZED_OPTIONS = ['clientId', 'clientSecret', 'logger', 'logLevel', 'hostname', 'host', 'customAppId', 'customAppVersion', 'http', 'ssl', 'port'];

/**
 * Helper class for validating parameters
 * @protected
 */
var Validator = /*#__PURE__*/function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }
  _createClass(Validator, [{
    key: "validateAndInitialize",
    value:
    /**
     * Initialise the client's default value, ensuring the required values are
     * present
     *
     * @param  {Client} client the client object to set the defaults for
     * @param  {Object} options the associative array of options passed to the
     *  client on initialization
     */
    function validateAndInitialize(client, options) {
      this.initializeClientCredentials(client, options);
      this.initializeLogger(client, options);
      this.initializeHost(client, options);
      this.initializeCustomApp(client, options);
      this.initializeHttp(client, options);
      this.warnOnUnrecognizedOptions(options, client, RECOGNIZED_OPTIONS);
    }

    // PRIVATE
  }, {
    key: "initializeClientCredentials",
    value: function initializeClientCredentials(client, options) {
      client.clientId = this.initRequired('clientId', options);
      client.clientSecret = this.initRequired('clientSecret', options);
    }
  }, {
    key: "initializeLogger",
    value: function initializeLogger(client, options) {
      client.logger = this.initOptional('logger', options, console);
      client.logLevel = this.initOptional('logLevel', options, 'silent');
    }
  }, {
    key: "initializeHost",
    value: function initializeHost(client, options) {
      var hostname = this.initOptional('hostname', options, 'test');
      client.host = this.initOptional('host', options, HOSTS[hostname]);
      client.port = this.initOptional('port', options, 443);
      client.ssl = this.initOptional('ssl', options, true);
    }
  }, {
    key: "initializeCustomApp",
    value: function initializeCustomApp(client, options) {
      client.customAppId = this.initOptional('customAppId', options);
      client.customAppVersion = this.initOptional('customAppVersion', options);
    }
  }, {
    key: "initializeHttp",
    value: function initializeHttp(client, options) {
      var network = client.ssl ? _https["default"] : _http["default"];
      client.http = this.initOptional('http', options, network);
    }
  }, {
    key: "initRequired",
    value: function initRequired(key, options) {
      var result = this.initOptional(key, options);
      if (!result) throw new ArgumentError("Missing required argument: ".concat(key));
      return result;
    }
  }, {
    key: "initOptional",
    value: function initOptional(key, options) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var value = options[key];
      //Env variables names expected to be in SNAKE_CASE and uppercase
      var envKey = "AMADEUS_".concat(key.replace(/[A-Z]/g, function (c) {
        return "_".concat(c.toLowerCase());
      }).toUpperCase());
      if (value == undefined) {
        value = options[key];
      }
      if (value == undefined) {
        value = process.env[envKey];
      }
      if (value == undefined) {
        value = fallback;
      }
      return value;
    }
  }, {
    key: "warnOnUnrecognizedOptions",
    value: function warnOnUnrecognizedOptions(options, client, recognizedOptions) {
      Object.keys(options).forEach(function (key) {
        if (recognizedOptions.indexOf(key) === -1 && client.warn()) {
          client.logger.log("Unrecognized option: ".concat(key));
        }
      });
      return null;
    }
  }]);
  return Validator;
}(); // PRIVATE
var ArgumentError = /*#__PURE__*/function (_Error) {
  _inherits(ArgumentError, _Error);
  var _super = _createSuper(ArgumentError);
  function ArgumentError(message) {
    var _this;
    _classCallCheck(this, ArgumentError);
    _this = _super.call(this, message);
    _this.name = 'ArgumentError';
    return _this;
  }
  return _createClass(ArgumentError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var _default = Validator;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaHR0cHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9odHRwIiwib2JqIiwiX19lc01vZHVsZSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVByb3BlcnR5IiwiX3NldFByb3RvdHlwZU9mIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJfdHlwZW9mIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiX3dyYXBOYXRpdmVTdXBlciIsIkNsYXNzIiwiX2NhY2hlIiwiTWFwIiwidW5kZWZpbmVkIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJoYXMiLCJnZXQiLCJzZXQiLCJXcmFwcGVyIiwiX2NvbnN0cnVjdCIsImVudW1lcmFibGUiLCJQYXJlbnQiLCJhcmdzIiwiYmluZCIsImEiLCJwdXNoIiwiQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsImluc3RhbmNlIiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJlIiwiZm4iLCJ0b1N0cmluZyIsImluZGV4T2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZ2V0UHJvdG90eXBlT2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiSE9TVFMiLCJSRUNPR05JWkVEX09QVElPTlMiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZUFuZEluaXRpYWxpemUiLCJjbGllbnQiLCJvcHRpb25zIiwiaW5pdGlhbGl6ZUNsaWVudENyZWRlbnRpYWxzIiwiaW5pdGlhbGl6ZUxvZ2dlciIsImluaXRpYWxpemVIb3N0IiwiaW5pdGlhbGl6ZUN1c3RvbUFwcCIsImluaXRpYWxpemVIdHRwIiwid2Fybk9uVW5yZWNvZ25pemVkT3B0aW9ucyIsImNsaWVudElkIiwiaW5pdFJlcXVpcmVkIiwiY2xpZW50U2VjcmV0IiwibG9nZ2VyIiwiaW5pdE9wdGlvbmFsIiwiY29uc29sZSIsImxvZ0xldmVsIiwiaG9zdG5hbWUiLCJob3N0IiwicG9ydCIsInNzbCIsImN1c3RvbUFwcElkIiwiY3VzdG9tQXBwVmVyc2lvbiIsIm5ldHdvcmsiLCJodHRwcyIsImh0dHAiLCJBcmd1bWVudEVycm9yIiwiY29uY2F0IiwiZmFsbGJhY2siLCJlbnZLZXkiLCJyZXBsYWNlIiwiYyIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJwcm9jZXNzIiwiZW52IiwicmVjb2duaXplZE9wdGlvbnMiLCJrZXlzIiwiZm9yRWFjaCIsIndhcm4iLCJsb2ciLCJfRXJyb3IiLCJfc3VwZXIiLCJtZXNzYWdlIiwiX3RoaXMiLCJuYW1lIiwiRXJyb3IiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L3ZhbGlkYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cHMgICAgIGZyb20gJ2h0dHBzJztcbmltcG9ydCBodHRwICAgICAgZnJvbSAnaHR0cCc7XG5cbmNvbnN0IEhPU1RTID0ge1xuICAndGVzdCcgICAgICAgOiAndGVzdC5hcGkuYW1hZGV1cy5jb20nLFxuICAncHJvZHVjdGlvbicgOiAnYXBpLmFtYWRldXMuY29tJ1xufTtcblxuY29uc3QgUkVDT0dOSVpFRF9PUFRJT05TID0gW1xuICAnY2xpZW50SWQnLFxuICAnY2xpZW50U2VjcmV0JyxcbiAgJ2xvZ2dlcicsXG4gICdsb2dMZXZlbCcsXG4gICdob3N0bmFtZScsXG4gICdob3N0JyxcbiAgJ2N1c3RvbUFwcElkJyxcbiAgJ2N1c3RvbUFwcFZlcnNpb24nLFxuICAnaHR0cCcsXG4gICdzc2wnLFxuICAncG9ydCdcbl07XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIGZvciB2YWxpZGF0aW5nIHBhcmFtZXRlcnNcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcblxuICAvKipcbiAgICogSW5pdGlhbGlzZSB0aGUgY2xpZW50J3MgZGVmYXVsdCB2YWx1ZSwgZW5zdXJpbmcgdGhlIHJlcXVpcmVkIHZhbHVlcyBhcmVcbiAgICogcHJlc2VudFxuICAgKlxuICAgKiBAcGFyYW0gIHtDbGllbnR9IGNsaWVudCB0aGUgY2xpZW50IG9iamVjdCB0byBzZXQgdGhlIGRlZmF1bHRzIGZvclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgdGhlIGFzc29jaWF0aXZlIGFycmF5IG9mIG9wdGlvbnMgcGFzc2VkIHRvIHRoZVxuICAgKiAgY2xpZW50IG9uIGluaXRpYWxpemF0aW9uXG4gICAqL1xuICB2YWxpZGF0ZUFuZEluaXRpYWxpemUoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5pbml0aWFsaXplQ2xpZW50Q3JlZGVudGlhbHMoY2xpZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLmluaXRpYWxpemVMb2dnZXIoY2xpZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLmluaXRpYWxpemVIb3N0KGNsaWVudCwgb3B0aW9ucyk7XG4gICAgdGhpcy5pbml0aWFsaXplQ3VzdG9tQXBwKGNsaWVudCwgb3B0aW9ucyk7XG4gICAgdGhpcy5pbml0aWFsaXplSHR0cChjbGllbnQsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy53YXJuT25VbnJlY29nbml6ZWRPcHRpb25zKG9wdGlvbnMsIGNsaWVudCwgUkVDT0dOSVpFRF9PUFRJT05TKTtcbiAgfVxuXG4gIC8vIFBSSVZBVEVcblxuICBpbml0aWFsaXplQ2xpZW50Q3JlZGVudGlhbHMoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgY2xpZW50LmNsaWVudElkID0gdGhpcy5pbml0UmVxdWlyZWQoJ2NsaWVudElkJywgb3B0aW9ucyk7XG4gICAgY2xpZW50LmNsaWVudFNlY3JldCA9IHRoaXMuaW5pdFJlcXVpcmVkKCdjbGllbnRTZWNyZXQnLCBvcHRpb25zKTtcbiAgfVxuXG4gIGluaXRpYWxpemVMb2dnZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgY2xpZW50LmxvZ2dlciAgICA9IHRoaXMuaW5pdE9wdGlvbmFsKCdsb2dnZXInLCBvcHRpb25zLCBjb25zb2xlKTtcbiAgICBjbGllbnQubG9nTGV2ZWwgPSB0aGlzLmluaXRPcHRpb25hbCgnbG9nTGV2ZWwnLCBvcHRpb25zLCAnc2lsZW50Jyk7XG4gIH1cblxuICBpbml0aWFsaXplSG9zdChjbGllbnQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaG9zdG5hbWUgPSB0aGlzLmluaXRPcHRpb25hbCgnaG9zdG5hbWUnLCBvcHRpb25zLCAndGVzdCcpO1xuICAgIGNsaWVudC5ob3N0ICA9IHRoaXMuaW5pdE9wdGlvbmFsKCdob3N0Jywgb3B0aW9ucywgSE9TVFNbaG9zdG5hbWVdKTtcbiAgICBjbGllbnQucG9ydCAgPSB0aGlzLmluaXRPcHRpb25hbCgncG9ydCcsIG9wdGlvbnMsIDQ0Myk7XG4gICAgY2xpZW50LnNzbCAgID0gdGhpcy5pbml0T3B0aW9uYWwoJ3NzbCcsIG9wdGlvbnMsIHRydWUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUN1c3RvbUFwcChjbGllbnQsIG9wdGlvbnMpIHtcbiAgICBjbGllbnQuY3VzdG9tQXBwSWQgPSB0aGlzLmluaXRPcHRpb25hbCgnY3VzdG9tQXBwSWQnLCBvcHRpb25zKTtcbiAgICBjbGllbnQuY3VzdG9tQXBwVmVyc2lvbiA9IHRoaXMuaW5pdE9wdGlvbmFsKCdjdXN0b21BcHBWZXJzaW9uJywgb3B0aW9ucyk7XG4gIH1cblxuICBpbml0aWFsaXplSHR0cChjbGllbnQsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmV0d29yayA9IGNsaWVudC5zc2wgPyBodHRwcyA6IGh0dHA7XG4gICAgY2xpZW50Lmh0dHAgPSB0aGlzLmluaXRPcHRpb25hbCgnaHR0cCcsIG9wdGlvbnMsIG5ldHdvcmspO1xuICB9XG5cbiAgaW5pdFJlcXVpcmVkKGtleSwgb3B0aW9ucykge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmluaXRPcHRpb25hbChrZXksIG9wdGlvbnMpO1xuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgQXJndW1lbnRFcnJvcihgTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDogJHtrZXl9YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGluaXRPcHRpb25hbChrZXksIG9wdGlvbnMsIGZhbGxiYWNrID0gbnVsbCkge1xuICAgIGxldCB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcbiAgICAvL0VudiB2YXJpYWJsZXMgbmFtZXMgZXhwZWN0ZWQgdG8gYmUgaW4gU05BS0VfQ0FTRSBhbmQgdXBwZXJjYXNlXG4gICAgbGV0IGVudktleSA9IGBBTUFERVVTXyR7a2V5LnJlcGxhY2UoL1tBLVpdL2csIGMgPT4gYF8ke2MudG9Mb3dlckNhc2UoKX1gKS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkgeyB2YWx1ZSA9IG9wdGlvbnNba2V5XTsgfVxuICAgIGlmICh2YWx1ZSA9PSB1bmRlZmluZWQpIHsgdmFsdWUgPSBwcm9jZXNzLmVudltlbnZLZXldOyB9XG4gICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkgeyB2YWx1ZSA9IGZhbGxiYWNrOyB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgd2Fybk9uVW5yZWNvZ25pemVkT3B0aW9ucyhvcHRpb25zLCBjbGllbnQsIHJlY29nbml6ZWRPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAocmVjb2duaXplZE9wdGlvbnMuaW5kZXhPZihrZXkpID09PSAtMSAmJiBjbGllbnQud2FybigpKSB7XG4gICAgICAgIGNsaWVudC5sb2dnZXIubG9nKGBVbnJlY29nbml6ZWQgb3B0aW9uOiAke2tleX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBQUklWQVRFXG5cbmNsYXNzIEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnQXJndW1lbnRFcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBNkIsU0FBQUQsdUJBQUFHLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLFVBQUFDLFFBQUEsRUFBQUMsVUFBQSxlQUFBQSxVQUFBLG1CQUFBQSxVQUFBLHVCQUFBQyxTQUFBLDBEQUFBRixRQUFBLENBQUFHLFNBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFKLFVBQUEsSUFBQUEsVUFBQSxDQUFBRSxTQUFBLElBQUFHLFdBQUEs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