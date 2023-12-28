"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _urls = _interopRequireDefault(require("./reference_data/urls"));
var _locations = _interopRequireDefault(require("./reference_data/locations"));
var _location = _interopRequireDefault(require("./reference_data/location"));
var _airlines = _interopRequireDefault(require("./reference_data/airlines"));
var _recommended_locations = _interopRequireDefault(require("./reference_data/recommended_locations"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A namespaced client for the
 * `/v2/reference-data` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
var ReferenceData = /*#__PURE__*/function () {
  function ReferenceData(client) {
    _classCallCheck(this, ReferenceData);
    this.client = client;
    this.urls = new _urls["default"](client);
    this.locations = new _locations["default"](client);
    this.airlines = new _airlines["default"](client);
    this.recommendedLocations = new _recommended_locations["default"](client);
  }

  /**
   * The namespace for the Location APIs - accessing a specific location
   *
   * @param  {string} [locationId]  The ID of the location to search for
   * @return {Location}
   **/
  _createClass(ReferenceData, [{
    key: "location",
    value: function location(locationId) {
      return new _location["default"](this.client, locationId);
    }
  }]);
  return ReferenceData;
}();
var _default = ReferenceData;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXJscyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvY2F0aW9ucyIsIl9sb2NhdGlvbiIsIl9haXJsaW5lcyIsIl9yZWNvbW1lbmRlZF9sb2NhdGlvbnMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJOdW1iZXIiLCJSZWZlcmVuY2VEYXRhIiwiY2xpZW50IiwidXJscyIsIlVybHMiLCJsb2NhdGlvbnMiLCJMb2NhdGlvbnMiLCJhaXJsaW5lcyIsIkFpcmxpbmVzIiwicmVjb21tZW5kZWRMb2NhdGlvbnMiLCJSZWNvbW1lbmRlZExvY2F0aW9ucyIsInZhbHVlIiwibG9jYXRpb24iLCJsb2NhdGlvbklkIiwiTG9jYXRpb24iLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9yZWZlcmVuY2VfZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXJscyAgICAgIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvdXJscyc7XG5pbXBvcnQgTG9jYXRpb25zIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zJztcbmltcG9ydCBMb2NhdGlvbiAgZnJvbSAnLi9yZWZlcmVuY2VfZGF0YS9sb2NhdGlvbic7XG5pbXBvcnQgQWlybGluZXMgZnJvbSAnLi9yZWZlcmVuY2VfZGF0YS9haXJsaW5lcyc7XG5pbXBvcnQgUmVjb21tZW5kZWRMb2NhdGlvbnMgZnJvbSAnLi9yZWZlcmVuY2VfZGF0YS9yZWNvbW1lbmRlZF9sb2NhdGlvbnMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi9yZWZlcmVuY2UtZGF0YWAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0FtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEudXJscztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7VXJsc30gdXJsc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBSZWZlcmVuY2VEYXRhIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICAgPSBjbGllbnQ7XG4gICAgdGhpcy51cmxzICAgICAgPSBuZXcgVXJscyhjbGllbnQpO1xuICAgIHRoaXMubG9jYXRpb25zID0gbmV3IExvY2F0aW9ucyhjbGllbnQpO1xuICAgIHRoaXMuYWlybGluZXMgID0gbmV3IEFpcmxpbmVzKGNsaWVudCk7XG4gICAgdGhpcy5yZWNvbW1lbmRlZExvY2F0aW9ucyA9IG5ldyBSZWNvbW1lbmRlZExvY2F0aW9ucyhjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lc3BhY2UgZm9yIHRoZSBMb2NhdGlvbiBBUElzIC0gYWNjZXNzaW5nIGEgc3BlY2lmaWMgbG9jYXRpb25cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBbbG9jYXRpb25JZF0gIFRoZSBJRCBvZiB0aGUgbG9jYXRpb24gdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJuIHtMb2NhdGlvbn1cbiAgICoqL1xuICBsb2NhdGlvbihsb2NhdGlvbklkKSB7XG4gICAgcmV0dXJuIG5ldyBMb2NhdGlvbih0aGlzLmNsaWVudCwgbG9jYXRpb25JZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlRGF0YTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsS0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsVUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsU0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsU0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksc0JBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUEwRSxTQUFBRCx1QkFBQU0sR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsUUFBQUYsR0FBQSxzQ0FBQUUsT0FBQSx3QkFBQUMsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFKLEdBQUEsa0JBQUFBLEdBQUEsZ0JBQUFBLEdBQUEsV0FBQUEsR0FBQSx5QkFBQUcsTUFBQSxJQUFBSCxHQUFBLENBQUFLLFdBQUEsS0FBQUYsTUFBQSxJQUFBSCxHQUFBLEtBQUFHLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQU4sR0FBQSxLQUFBRSxPQUFBLENBQUFGLEdBQUE7QUFBQSxTQUFBTyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FBQUEsU0FBQUMsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBZixXQUFBLEVBQUFnQixVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZCxpQkFBQSxDQUFBRixXQUFBLENBQUFILFNBQUEsRUFBQW1CLFVBQUEsT0FBQUMsV0FBQSxFQUFBZixpQkFBQSxDQUFBRixXQUFBLEVBQUFpQixXQUFBLEdBQUFOLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWixXQUFBLGlCQUFBVSxRQUFBLG1CQUFBVixXQUFBO0FBQUEsU0FBQWEsZUFBQUssR0FBQSxRQUFBSixHQUFBLEdBQUFLLFlBQUEsQ0FBQUQsR0FBQSxvQkFBQXpCLE9BQUEsQ0FBQXFCLEdBQUEsaUJBQUFBLEdBQUEsR0FBQU0sTUFBQSxDQUFBTixHQUFBO0FBQUEsU0FBQUssYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUE3QixPQUFBLENBQUE0QixLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBM0IsTUFBQSxDQUFBOEIsV0FBQSxPQUFBRCxJQUFBLEtBQUFFLFNBQUEsUUFBQUMsR0FBQSxHQUFBSCxJQUFBLENBQUFJLElBQUEsQ0FBQU4sS0FBQSxFQUFBQyxJQUFBLG9CQUFBN0IsT0FBQSxDQUFBaUMsR0FBQSx1QkFBQUEsR0FBQSxZQUFBekIsU0FBQSw0REFBQXFCLElBQUEsZ0JBQUFGLE1BQUEsR0FBQVEsTUFBQSxFQUFBUCxLQUFBO0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1RLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFoQyxlQUFBLE9BQUErQixhQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFNQSxNQUFNO0lBQ3ZCLElBQUksQ0FBQ0MsSUFBSSxHQUFRLElBQUlDLGdCQUFJLENBQUNGLE1BQU0sQ0FBQztJQUNqQyxJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJQyxxQkFBUyxDQUFDSixNQUFNLENBQUM7SUFDdEMsSUFBSSxDQUFDSyxRQUFRLEdBQUksSUFBSUMsb0JBQVEsQ0FBQ04sTUFBTSxDQUFDO0lBQ3JDLElBQUksQ0FBQ08sb0JBQW9CLEdBQUcsSUFBSUMsaUNBQW9CLENBQUNSLE1BQU0sQ0FBQztFQUM5RDs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRWYsWUFBQSxDQUFBYyxhQUFBO0lBQUFmLEdBQUE7SUFBQXlCLEtBQUEsRUFNQSxTQUFBQyxTQUFTQyxVQUFVLEVBQUU7TUFDbkIsT0FBTyxJQUFJQyxvQkFBUSxDQUFDLElBQUksQ0FBQ1osTUFBTSxFQUFFVyxVQUFVLENBQUM7SUFDOUM7RUFBQztFQUFBLE9BQUFaLGFBQUE7QUFBQTtBQUFBLElBQUFjLFFBQUEsR0FHWWQsYUFBYTtBQUFBZSxPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9