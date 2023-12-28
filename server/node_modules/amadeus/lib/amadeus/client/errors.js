"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnknownError = exports.ServerError = exports.ResponseError = exports.ParserError = exports.NotFoundError = exports.NetworkError = exports.ClientError = exports.AuthenticationError = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The error that is passed to the Promise when the API call fails.
 *
 * @param {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {string} code a unique code for this type of error. Options include
 *  `NetworkError`, `ParserError`, `ResponseError`, `ServerError`,
 *  `AuthenticationError`, `NotFoundError` and `UnknownError`
 *  from the  {@link Response}'s parsed data
 */
var ResponseError = /*#__PURE__*/function () {
  function ResponseError(response) {
    _classCallCheck(this, ResponseError);
    this.response = response;
    this.determineDescription();
  }

  // PRIVATE
  _createClass(ResponseError, [{
    key: "determineDescription",
    value: function determineDescription() {
      if (!this.response || !this.response.parsed) {
        this.description = null;
        return;
      }
      var result = this.response.result;
      if (result && result.errors) {
        this.description = result.errors;
      } else if (result) {
        this.description = result;
      }
      return;
    }
  }]);
  return ResponseError;
}(); // Protected
exports.ResponseError = ResponseError;
var NetworkError = /*#__PURE__*/function (_ResponseError) {
  _inherits(NetworkError, _ResponseError);
  var _super = _createSuper(NetworkError);
  function NetworkError() {
    var _this;
    _classCallCheck(this, NetworkError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.code = 'NetworkError';
    return _this;
  }
  return _createClass(NetworkError);
}(ResponseError);
exports.NetworkError = NetworkError;
var ParserError = /*#__PURE__*/function (_ResponseError2) {
  _inherits(ParserError, _ResponseError2);
  var _super2 = _createSuper(ParserError);
  function ParserError() {
    var _this2;
    _classCallCheck(this, ParserError);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.code = 'ParserError';
    return _this2;
  }
  return _createClass(ParserError);
}(ResponseError);
exports.ParserError = ParserError;
var ServerError = /*#__PURE__*/function (_ResponseError3) {
  _inherits(ServerError, _ResponseError3);
  var _super3 = _createSuper(ServerError);
  function ServerError() {
    var _this3;
    _classCallCheck(this, ServerError);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this3 = _super3.call.apply(_super3, [this].concat(args));
    _this3.code = 'ServerError';
    return _this3;
  }
  return _createClass(ServerError);
}(ResponseError);
exports.ServerError = ServerError;
var ClientError = /*#__PURE__*/function (_ResponseError4) {
  _inherits(ClientError, _ResponseError4);
  var _super4 = _createSuper(ClientError);
  function ClientError() {
    var _this4;
    _classCallCheck(this, ClientError);
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    _this4 = _super4.call.apply(_super4, [this].concat(args));
    _this4.code = 'ClientError';
    return _this4;
  }
  return _createClass(ClientError);
}(ResponseError);
exports.ClientError = ClientError;
var AuthenticationError = /*#__PURE__*/function (_ResponseError5) {
  _inherits(AuthenticationError, _ResponseError5);
  var _super5 = _createSuper(AuthenticationError);
  function AuthenticationError() {
    var _this5;
    _classCallCheck(this, AuthenticationError);
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    _this5 = _super5.call.apply(_super5, [this].concat(args));
    _this5.code = 'AuthenticationError';
    return _this5;
  }
  return _createClass(AuthenticationError);
}(ResponseError);
exports.AuthenticationError = AuthenticationError;
var NotFoundError = /*#__PURE__*/function (_ResponseError6) {
  _inherits(NotFoundError, _ResponseError6);
  var _super6 = _createSuper(NotFoundError);
  function NotFoundError() {
    var _this6;
    _classCallCheck(this, NotFoundError);
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    _this6 = _super6.call.apply(_super6, [this].concat(args));
    _this6.code = 'NotFoundError';
    return _this6;
  }
  return _createClass(NotFoundError);
}(ResponseError);
exports.NotFoundError = NotFoundError;
var UnknownError = /*#__PURE__*/function (_ResponseError7) {
  _inherits(UnknownError, _ResponseError7);
  var _super7 = _createSuper(UnknownError);
  function UnknownError() {
    var _this7;
    _classCallCheck(this, UnknownError);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this7 = _super7.call.apply(_super7, [this].concat(args));
    _this7.code = 'UnknownError';
    return _this7;
  }
  return _createClass(UnknownError);
}(ResponseError);
exports.UnknownError = UnknownError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZXNwb25zZUVycm9yIiwicmVzcG9uc2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJkZXRlcm1pbmVEZXNjcmlwdGlvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicGFyc2VkIiwiZGVzY3JpcHRpb24iLCJyZXN1bHQiLCJlcnJvcnMiLCJleHBvcnRzIiwiTmV0d29ya0Vycm9yIiwiX1Jlc3BvbnNlRXJyb3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwiY29kZSIsIlBhcnNlckVycm9yIiwiX1Jlc3BvbnNlRXJyb3IyIiwiX3N1cGVyMiIsIl90aGlzMiIsIl9sZW4yIiwiX2tleTIiLCJTZXJ2ZXJFcnJvciIsIl9SZXNwb25zZUVycm9yMyIsIl9zdXBlcjMiLCJfdGhpczMiLCJfbGVuMyIsIl9rZXkzIiwiQ2xpZW50RXJyb3IiLCJfUmVzcG9uc2VFcnJvcjQiLCJfc3VwZXI0IiwiX3RoaXM0IiwiX2xlbjQiLCJfa2V5NCIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJfUmVzcG9uc2VFcnJvcjUiLCJfc3VwZXI1IiwiX3RoaXM1IiwiX2xlbjUiLCJfa2V5NSIsIk5vdEZvdW5kRXJyb3IiLCJfUmVzcG9uc2VFcnJvcjYiLCJfc3VwZXI2IiwiX3RoaXM2IiwiX2xlbjYiLCJfa2V5NiIsIlVua25vd25FcnJvciIsIl9SZXNwb25zZUVycm9yNyIsIl9zdXBlcjciLCJfdGhpczciLCJfbGVuNyIsIl9rZXk3Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L2Vycm9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVGhlIGVycm9yIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBQcm9taXNlIHdoZW4gdGhlIEFQSSBjYWxsIGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIHRoZSB7QGxpbmsgUmVzcG9uc2V9IG9iamVjdCBjb250YWluaW5nIHRoZSByYXdcbiAqICBodHRwIHJlc3BvbnNlIGFuZCB0aGUge0BsaW5rIFJlcXVlc3R9IGluc3RhbmNlIHRoYXQgbWFkZSB0aGUgQVBJIGNhbGwuXG4gKiBAcHJvcGVydHkge1Jlc3BvbnNlfSByZXNwb25zZSB0aGUge0BsaW5rIFJlc3BvbnNlfSBvYmplY3QgY29udGFpbmluZyB0aGUgcmF3XG4gKiAgaHR0cCByZXNwb25zZSBhbmQgdGhlIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZSB0aGF0IG1hZGUgdGhlIEFQSSBjYWxsLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNvZGUgYSB1bmlxdWUgY29kZSBmb3IgdGhpcyB0eXBlIG9mIGVycm9yLiBPcHRpb25zIGluY2x1ZGVcbiAqICBgTmV0d29ya0Vycm9yYCwgYFBhcnNlckVycm9yYCwgYFJlc3BvbnNlRXJyb3JgLCBgU2VydmVyRXJyb3JgLFxuICogIGBBdXRoZW50aWNhdGlvbkVycm9yYCwgYE5vdEZvdW5kRXJyb3JgIGFuZCBgVW5rbm93bkVycm9yYFxuICogIGZyb20gdGhlICB7QGxpbmsgUmVzcG9uc2V9J3MgcGFyc2VkIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0aGlzLmRldGVybWluZURlc2NyaXB0aW9uKCk7XG4gIH1cblxuICAvLyBQUklWQVRFXG5cbiAgZGV0ZXJtaW5lRGVzY3JpcHRpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJlc3BvbnNlIHx8ICF0aGlzLnJlc3BvbnNlLnBhcnNlZCkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB0aGlzLnJlc3BvbnNlLnJlc3VsdDtcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcnMpIHsgdGhpcy5kZXNjcmlwdGlvbiA9IHJlc3VsdC5lcnJvcnM7IH1cbiAgICBlbHNlIGlmIChyZXN1bHQpIHsgdGhpcy5kZXNjcmlwdGlvbiA9IHJlc3VsdDsgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBQcm90ZWN0ZWRcblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtFcnJvciBleHRlbmRzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb2RlID0gJ05ldHdvcmtFcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlckVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnUGFyc2VyRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJFcnJvciBleHRlbmRzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb2RlID0gJ1NlcnZlckVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xpZW50RXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdDbGllbnRFcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdBdXRoZW50aWNhdGlvbkVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90Rm91bmRFcnJvciBleHRlbmRzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb2RlID0gJ05vdEZvdW5kRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdVbmtub3duRXJyb3InO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSxJQVlhQSxhQUFhO0VBQ3hCLFNBQUFBLGNBQVlDLFFBQVEsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGFBQUE7SUFDcEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDRSxvQkFBb0IsQ0FBQyxDQUFDO0VBQzdCOztFQUVBO0VBQUFDLFlBQUEsQ0FBQUosYUFBQTtJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFFQSxTQUFBSCxxQkFBQSxFQUF1QjtNQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDRixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sTUFBTSxFQUFFO1FBQzNDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUk7UUFDdkI7TUFDRjtNQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ1EsTUFBTTtNQUNqQyxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO1FBQUUsSUFBSSxDQUFDRixXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTTtNQUFFLENBQUMsTUFDN0QsSUFBSUQsTUFBTSxFQUFFO1FBQUUsSUFBSSxDQUFDRCxXQUFXLEdBQUdDLE1BQU07TUFBRTtNQUM5QztJQUNGO0VBQUM7RUFBQSxPQUFBVCxh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