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
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post(JSON.stringify({}), 12345);;
 * ```
 *
 * @param {Client} client
 */
var Cancellation = /*#__PURE__*/function () {
  function Cancellation(client, orderId) {
    _classCallCheck(this, Cancellation);
    this.client = client;
    this.orderId = orderId;
  }

  /**
   * To cancel a transfer order based on its id
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a transfer order with ID 'XXX' and confirmation number '12345'
   *
   * ```js
   * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post(JSON.stringify({}), 12345);;
   * ```
   */
  _createClass(Cancellation, [{
    key: "post",
    value: function post(body, confirmNbr) {
      return this.client.post("/v1/ordering/transfer-orders/".concat(this.orderId, "/transfers/cancellation?confirmNbr=").concat(confirmNbr), body);
    }
  }]);
  return Cancellation;
}();
var _default = Cancellation;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYW5jZWxsYXRpb24iLCJjbGllbnQiLCJvcmRlcklkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwiYm9keSIsImNvbmZpcm1OYnIiLCJjb25jYXQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzL2NhbmNlbGxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnMvWFhYL3RyYW5zZmVycy9jYW5jZWxsYXRpb25gIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3QoSlNPTi5zdHJpbmdpZnkoe30pLCAxMjM0NSk7O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBDYW5jZWxsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIG9yZGVySWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGNhbmNlbCBhIHRyYW5zZmVyIG9yZGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGNhbmNlbCBhIHRyYW5zZmVyIG9yZGVyIHdpdGggSUQgJ1hYWCcgYW5kIGNvbmZpcm1hdGlvbiBudW1iZXIgJzEyMzQ1J1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXIoJ1hYWCcpLnRyYW5zZmVycy5jYW5jZWxsYXRpb24ucG9zdChKU09OLnN0cmluZ2lmeSh7fSksIDEyMzQ1KTs7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChib2R5LCBjb25maXJtTmJyKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoXG4gICAgICBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycy8ke3RoaXMub3JkZXJJZH0vdHJhbnNmZXJzL2NhbmNlbGxhdGlvbj9jb25maXJtTmJyPSR7Y29uZmlybU5icn1gLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxsYXRpb247Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFlBQVk7RUFDaEIsU0FBQUEsYUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxZQUFBO0lBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3hCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBVEVFLFlBQUEsQ0FBQUosWUFBQTtJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFVQSxTQUFBQyxLQUFLQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTtNQUNyQixPQUFPLElBQUksQ0FBQ1IsTUFBTSxDQUFDTSxJQUFJLGlDQUFBRyxNQUFBLENBQ1csSUFBSSxDQUFDUixPQUFPLHlDQUFBUSxNQUFBLENBQXNDRCxVQUFVLEdBQUlELElBQUksQ0FBQztJQUN6RztFQUFDO0VBQUEsT0FBQVIsWUFBQTtBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUdZWCxZQUFZO0FBQUFZLE9BQUEsY0FBQUQsUUFBQTtBQUFBRSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIn0=