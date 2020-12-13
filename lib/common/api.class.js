"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickUp = void 0;
var attachments_1 = require("../endpoints/attachments");
var checklists_1 = require("../endpoints/checklists");
var comments_1 = require("../endpoints/comments");
var custom_fields_1 = require("../endpoints/custom-fields");
var dependencies_1 = require("../endpoints/dependencies");
var folders_1 = require("../endpoints/folders");
var lists_1 = require("../endpoints/lists");
var request_class_1 = require("./request.class");
var ClickUp = /** @class */ (function () {
    function ClickUp() {
        this.root = "https://api.clickup.com/api/v2/";
        this.request = new request_class_1.Request(this.root);
        this.updateRequest();
    }
    ClickUp.prototype.updateRequest = function () {
        this._attachments = new attachments_1.Attachments(this.request);
        this._checklists = new checklists_1.Checklists(this.request);
        this._comments = new comments_1.Comments(this.request);
        this._customFields = new custom_fields_1.CustomFields(this.request);
        this._dependencies = new dependencies_1.Dependencies(this.request);
        this._folders = new folders_1.Folders(this.request);
        this._lists = new lists_1.Lists(this.request);
    };
    ClickUp.prototype.setPersonalApiKey = function (key) {
        this.request.setApiKey(key);
        this.updateRequest();
    };
    ClickUp.prototype.setOauthToken = function (token) {
        this.request.setApiKey(token);
        this.updateRequest();
    };
    Object.defineProperty(ClickUp.prototype, "Attachments", {
        get: function () {
            return this._attachments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "Checklists", {
        get: function () {
            return this._checklists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "Comments", {
        get: function () {
            return this._comments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "CustomFields", {
        get: function () {
            return this._customFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "Dependencies", {
        get: function () {
            return this._dependencies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "Folders", {
        get: function () {
            return this._folders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClickUp.prototype, "Lists", {
        get: function () {
            return this._lists;
        },
        enumerable: false,
        configurable: true
    });
    return ClickUp;
}());
exports.ClickUp = ClickUp;
var api = new ClickUp();
