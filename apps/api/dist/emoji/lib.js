"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagePath = exports.getEmojiData = void 0;
const emoji_datasource_1 = require("emoji-datasource");
const lodash_1 = require("lodash");
const EmojiData = emoji_datasource_1.default.filter((emoji) => emoji.has_img_apple);
const EmojiDataByShortname = (0, lodash_1.keyBy)(EmojiData, 'short_name');
const getEmojiData = (shortName) => {
    return EmojiDataByShortname[shortName];
};
exports.getEmojiData = getEmojiData;
const getImagePath = (shortName) => {
    const { image } = (0, exports.getEmojiData)(shortName);
    return image;
};
exports.getImagePath = getImagePath;
//# sourceMappingURL=lib.js.map