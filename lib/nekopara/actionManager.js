'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 动作管理器
 * @memberof Nekopara
 */
var ActionManager = function () {
  /**
   * 关联的 Object 对象。
   * @param  {Object} obj
   */
  function ActionManager(obj) {
    _classCallCheck(this, ActionManager);

    this._obj = obj;
    this._actions = [];
  }

  /**
   * 添加一个动作。
   * @param  {String} name 动作名。
   * @param  {Object} param 动作参数。
   * @return {Number} 动作的序列。
   */


  _createClass(ActionManager, [{
    key: 'addAction',
    value: function addAction(name, param) {
      var action = _actions2.default.get(name);
      if (action == void 0) {
        throw new Error();
      }
      return this._actions.push(new action(param));
    }

    /**
     * 删除一个动作。
     * @param {Number} index 动作的序列。
     */

  }, {
    key: 'deleteAction',
    value: function deleteAction(index) {
      this._actions.splice(index, 1);
    }

    /**
     * 更新函数，每帧执行。
     */

  }, {
    key: 'update',
    value: function update() {
      if (this._actions != []) {
        this._actions.forEach(function (action, index) {
          if (action.isAlive) {
            action.index -= 1;
            if (action.index <= 0) {
              action.update(this._obj);
              action.index = action.speed;
            }
          } else {
            this._actions.splice(index, 1);
          }
        }, this);
      }
    }
  }]);

  return ActionManager;
}();

exports.default = ActionManager;