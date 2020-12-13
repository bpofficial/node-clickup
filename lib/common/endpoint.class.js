"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
var Endpoint = /** @class */ (function () {
    function Endpoint(path, request) {
        this.path = path;
        this.request = request;
    }
    Endpoint.prototype.joinPaths = function (path, queryOpts) {
        if (queryOpts) {
            var queryStr = Object.keys(queryOpts)
                .map(function (key) { return key + "=" + queryOpts[key]; })
                .join("&");
            return [[this.path, path].join("/"), queryStr].join("?");
        }
        else {
            return [this.path, path].join("/");
        }
    };
    Endpoint.prototype.get = function (path, queryOpts) {
        return this.request.get(this.joinPaths(path, queryOpts));
    };
    Endpoint.prototype.post = function (body, path, queryOpts) {
        if (path === void 0) { path = ""; }
        return this.request.post(this.joinPaths(path, queryOpts), body);
    };
    Endpoint.prototype.put = function (body, path) {
        if (path === void 0) { path = ""; }
        return this.request.put(path, body);
    };
    Endpoint.prototype.delete = function (path, queryOpts) {
        return this.request.delete(this.joinPaths(path, queryOpts));
    };
    return Endpoint;
}());
exports.Endpoint = Endpoint;
