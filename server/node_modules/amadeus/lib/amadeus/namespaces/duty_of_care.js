"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _diseases = _interopRequireDefault(require("./duty_of_care/diseases"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/duty-of-care` endpoint
 *
 * Access via the {@link Amadeus} object
 *
 * @param {Client} client
 * @property {Diseases} diseases
 */
var DutyOfCare = /*#__PURE__*/_createClass(function DutyOfCare(client) {
  _classCallCheck(this, DutyOfCare);
  this.client = client;
  this.diseases = new _diseases["default"](client);
});
var _default = DutyOfCare;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGlzZWFzZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIlR5cGVFcnJvciIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiRHV0eU9mQ2FyZSIsImNsaWVudCIsImRpc2Vhc2VzIiwiRGlzZWFzZXMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9kdXR5X29mX2NhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc2Vhc2VzIGZyb20gJy4vZHV0eV9vZl9jYXJlL2Rpc2Vhc2VzJztcbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL2R1dHktb2YtY2FyZWAgZW5kcG9pbnRcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtEaXNlYXNlc30gZGlzZWFzZXNcbiAqL1xuY2xhc3MgRHV0eU9mQ2FyZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgPSBjbGllbnQ7XG4gICAgdGhpcy5kaXNlYXNlcyA9IG5ldyBEaXNlYXNlcyhjbGllbnQpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHV0eU9mQ2FyZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUErQyxTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLEdBQUEsUUFBQU4sR0FBQSxHQUFBTyxZQUFBLENBQUFELEdBQUEsb0JBQUFFLE9BQUEsQ0FBQVIsR0FBQSxpQkFBQUEsR0FBQSxHQUFBUyxNQUFBLENBQUFULEdBQUE7QUFBQSxTQUFBTyxhQUFBRyxLQUFBLEVBQUFDLElBQUEsUUFBQUgsT0FBQSxDQUFBRSxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBRyxNQUFBLENBQUFDLFdBQUEsT0FBQUYsSUFBQSxLQUFBRyxTQUFBLFFBQUFDLEdBQUEsR0FBQUosSUFBQSxDQUFBSyxJQUFBLENBQUFQLEtBQUEsRUFBQUMsSUFBQSxvQkFBQUgsT0FBQSxDQUFBUSxHQUFBLHVCQUFBQSxHQUFBLFlBQUFFLFNBQUEsNERBQUFQLElBQUEsZ0JBQUFGLE1BQUEsR0FBQVUsTUFBQSxFQUFBVCxLQUFBO0FBQUEsU0FBQVUsZ0JBQUFDLFFBQUEsRUFBQW5CLFdBQUEsVUFBQW1CLFFBQUEsWUFBQW5CLFdBQUEsZUFBQWdCLFNBQUE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFTTUksVUFBVSxnQkFBQXJCLFlBQUEsQ0FDZCxTQUFBcUIsV0FBWUMsTUFBTSxFQUFFO0VBQUFILGVBQUEsT0FBQUUsVUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBS0EsTUFBTTtFQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxvQkFBUSxDQUFDRixNQUFNLENBQUM7QUFDdEMsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FJWUosVUFBVTtBQUFBSyxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9