'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionManager = require('./nekopara/actionManager');

var _actionManager2 = _interopRequireDefault(_actionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nekopara = {
  ActionManager: _actionManager2.default
};

exports.default = Nekopara;