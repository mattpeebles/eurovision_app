"use strict";
exports.__esModule = true;
var react_1 = require("react");
var flags_1 = require("../utils/flags");
require("./Song.css");
var PointFlag_1 = require("./point_flag/PointFlag");
function Song(_a) {
    var song = _a.song;
    var title = song.title, country = song.country, artist = song.artist, songUri = song.songUri, flag = song.flag;
    return (react_1["default"].createElement("div", { className: 'card' },
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", null, title),
            react_1["default"].createElement("div", { className: 'grow' }),
            react_1["default"].createElement(PointFlag_1["default"], { score: 12 })),
        react_1["default"].createElement("div", { className: 'row' }, artist),
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { className: 'flag', src: flags_1["default"](flag), alt: "logo" }),
                " ",
                country),
            react_1["default"].createElement("div", { className: 'grow' }),
            react_1["default"].createElement("div", null))));
}
exports["default"] = Song;
