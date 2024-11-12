/*
 * @Author: Bin
 * @Date: 2024-11-12
 * @FilePath: /gutenye_ocr/packages/models/index.js
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _nodePath = _interopRequireDefault(require("node:path"));
var _nodeUrl = require("node:url");
var _default = exports["default"] = {
    detectionPath: resolve('./assets/ch_PP-OCRv4_det_infer.onnx'),
    recognitionPath: resolve('./assets/ch_PP-OCRv4_rec_infer.onnx'),
    dictionaryPath: resolve('./assets/ppocr_keys_v1.txt')
};
function resolve(path) {
    return _nodePath["default"].resolve(_nodePath["default"].dirname((0, _nodeUrl.fileURLToPath)(require('url').pathToFileURL(__filename).toString())), path);
}
