"use strict";
exports.__esModule = true;
exports.Colors = void 0;
var Colors = /** @class */ (function () {
    function Colors(name, hexcode) {
        this.name = name;
        this.hexcode = hexcode;
    }
    Colors.prototype.showDiv = function () {
        return "<div style=\"background-color:\n        " + this.hexcode + ";\"></div>";
    };
    return Colors;
}());
exports.Colors = Colors;
