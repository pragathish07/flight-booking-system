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
 * A helper library for handling pagination.
 *
 * @param {Client} client the client to make the API calls against
 * @protected
 */
var Pagination = /*#__PURE__*/function () {
  function Pagination(client) {
    _classCallCheck(this, Pagination);
    this.client = client;
  }

  /**
   * Fetch the page for the given page name, and make the next API call based on
   * the previous request made.
   *
   * @param  {type} pageName the name of the page to fetch, should be available
   *    as a link in the meta links in the response
   * @param  {type} response the response containing the links to the next pages,
   *   and the request used to make the previous call
   * @return {Promise.<Response,ResponseError>} a Bluebird Promise
   * @protected
   */
  _createClass(Pagination, [{
    key: "page",
    value: function page(pageName, response) {
      var pageNumber = this.pageNumber(response, pageName);
      if (pageNumber) {
        return this.call(response.request, pageNumber);
      } else {
        return this.nullPromise();
      }
    }

    // PRIVATE

    /**
     * Makes a new call for the new page number
     *
     * @param  {type} request    the request used to make the previous call
     * @param  {type} pageNumber the page number to fetch
     * @return {Promise.<Response,ResponseError>} a Bluebird Promise
     * @private
     */
  }, {
    key: "call",
    value: function call(request, pageNumber) {
      var params = request.params || {};
      params['page'] = params['page'] || {};
      params['page']['offset'] = pageNumber;
      return this.client.request(request.verb, request.path, params);
    }

    /**
     * Tries to determine the page number from the page name. If not present, it
     * just returns null
     *
     * @param  {type} response the response containing the links to the next pages
     * @param  {type} pageName the name of the page to fetch
     * @return {number}
     * @private
     */
  }, {
    key: "pageNumber",
    value: function pageNumber(response, pageName) {
      try {
        return response.result['meta']['links'][pageName].split('page%5Boffset%5D=')[1].split('&')[0];
      } catch (TypeError) {
        return null;
      }
    }

    /**
     * Returns a Promise that always resolves to null
     *
     * @return {Promise} a Promise that always resolves to null
     * @private
     */
  }, {
    key: "nullPromise",
    value: function nullPromise() {
      return new Promise(function (resolve) {
        resolve(null);
      });
    }
  }]);
  return Pagination;
}();
var _default = Pagination;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwYWdlIiwicGFnZU5hbWUiLCJyZXNwb25zZSIsInBhZ2VOdW1iZXIiLCJjYWxsIiwicmVxdWVzdCIsIm51bGxQcm9taXNlIiwicGFyYW1zIiwidmVyYiIsInBhdGgiLCJyZXN1bHQiLCJzcGxpdCIsIlR5cGVFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9wYWdpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBoZWxwZXIgbGlicmFyeSBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgdG8gbWFrZSB0aGUgQVBJIGNhbGxzIGFnYWluc3RcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgUGFnaW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSBwYWdlIGZvciB0aGUgZ2l2ZW4gcGFnZSBuYW1lLCBhbmQgbWFrZSB0aGUgbmV4dCBBUEkgY2FsbCBiYXNlZCBvblxuICAgKiB0aGUgcHJldmlvdXMgcmVxdWVzdCBtYWRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaCwgc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgKiAgICBhcyBhIGxpbmsgaW4gdGhlIG1ldGEgbGlua3MgaW4gdGhlIHJlc3BvbnNlXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlcyxcbiAgICogICBhbmQgdGhlIHJlcXVlc3QgdXNlZCB0byBtYWtlIHRoZSBwcmV2aW91cyBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIEJsdWViaXJkIFByb21pc2VcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcGFnZShwYWdlTmFtZSwgcmVzcG9uc2UpIHtcbiAgICBsZXQgcGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcihyZXNwb25zZSwgcGFnZU5hbWUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGwocmVzcG9uc2UucmVxdWVzdCwgcGFnZU51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm51bGxQcm9taXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgbmV3IGNhbGwgZm9yIHRoZSBuZXcgcGFnZSBudW1iZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gcmVxdWVzdCAgICB0aGUgcmVxdWVzdCB1c2VkIHRvIG1ha2UgdGhlIHByZXZpb3VzIGNhbGxcbiAgICogQHBhcmFtICB7dHlwZX0gcGFnZU51bWJlciB0aGUgcGFnZSBudW1iZXIgdG8gZmV0Y2hcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgQmx1ZWJpcmQgUHJvbWlzZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsbChyZXF1ZXN0LCBwYWdlTnVtYmVyKSB7XG4gICAgbGV0IHBhcmFtcyA9IHJlcXVlc3QucGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtc1sncGFnZSddID0gcGFyYW1zWydwYWdlJ10gfHwge307XG4gICAgcGFyYW1zWydwYWdlJ11bJ29mZnNldCddID0gcGFnZU51bWJlcjtcblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KFxuICAgICAgcmVxdWVzdC52ZXJiLFxuICAgICAgcmVxdWVzdC5wYXRoLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBkZXRlcm1pbmUgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHBhZ2UgbmFtZS4gSWYgbm90IHByZXNlbnQsIGl0XG4gICAqIGp1c3QgcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlc1xuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwYWdlTnVtYmVyKHJlc3BvbnNlLCBwYWdlTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0WydtZXRhJ11bJ2xpbmtzJ11bcGFnZU5hbWVdXG4gICAgICAgIC5zcGxpdCgncGFnZSU1Qm9mZnNldCU1RD0nKVsxXS5zcGxpdCgnJicpWzBdO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG51bGxQcm9taXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUobnVsbCk7IH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBLElBTU1BLFVBQVU7RUFDZCxTQUFBQSxXQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRUUsWUFBQSxDQUFBSCxVQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQVdBLFNBQUFDLEtBQUtDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO01BQ3ZCLElBQUlDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsQ0FBQ0QsUUFBUSxFQUFFRCxRQUFRLENBQUM7TUFFcEQsSUFBSUUsVUFBVSxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLEVBQUVGLFVBQVUsQ0FBQztNQUNoRCxDQUFDLE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQ0csV0FBVyxDQUFDLENBQUM7TUFDM0I7SUFDRjs7SUFFQTs7SUFHQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQVIsR0FBQTtJQUFBQyxLQUFBLEVBUUEsU0FBQUssS0FBS0MsT0FBTyxFQUFFRixVQUFVLEVBQUU7TUFDeEIsSUFBSUksTUFBTSxHQUFHRixPQUFPLENBQUNFLE1BQU0sSUFBSSxDQUFDLENBQUM7TUFDakNBLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNyQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHSixVQUFVO01BRXJDLE9BQU8sSUFBSSxDQUFDUixNQUFNLENBQUNVLE9BQU8sQ0FDeEJBLE9BQU8sQ0FBQ0csSUFBSSxFQUNaSCxPQUFPLENBQUNJLElBQUksRUFDWkYsTUFDRixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUkU7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBU0EsU0FBQUksV0FBV0QsUUFBUSxFQUFFRCxRQUFRLEVBQUU7TUFDN0IsSUFBSTtRQUNGLE9BQU9DLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDVCxRQUFRLENBQUMsQ0FDOUNVLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hELENBQUMsQ0FBQyxPQUFPQyxTQUFTLEVBQUU7UUFDbEIsT0FBTyxJQUFJO01BQ2I7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBTyxZQUFBLEVBQWM7TUFDWixPQUFPLElBQUlPLE9BQU8sQ0FBQyxVQUFTQyxPQUFPLEVBQUU7UUFBRUEsT0FBTyxDQUFDLElBQUksQ0FBQztNQUFFLENBQUMsQ0FBQztJQUMxRDtFQUFDO0VBQUEsT0FBQXBCLFVBQUE7QUFBQTtBQUFBLElBQUFxQixRQUFBLEdBR1lyQixVQUFVO0FBQUFzQixPQUFBLGNBQUFELFFBQUE7QUFBQUUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSJ9