import actions from './actions'

/**
 * 动作管理器
 * @memberof Nekopara
 */
class ActionManager {
  /**
   * 关联的 Object 对象。
   * @param  {Object} obj
   */
  constructor(obj) {
    this._obj = obj
    this._actions = []
  }

  /**
   * 添加一个动作。
   * @param  {String} name 动作名。
   * @param  {Object} param 动作参数。
   * @return {Number} 动作的序列。
   */
  addAction(name, param) {
    let action = actions.get(name)
    if(action == void 0) {
      throw new Error()
    }
    return this._actions.push(new action(param))
  }

  /**
   * 删除一个动作。
   * @param {Number} index 动作的序列。
   */
  deleteAction(index) {
    this._actions.splice(index, 1)
  }

  /**
   * 更新函数，每帧执行。
   */
  update() {
    if(this._actions != []) {
      this._actions.forEach(function(action, index) {
        if(action.isAlive) {
          action.index -= 1
          if(action.index <= 0) {
            action.update(this._obj)
            action.index = action.speed
          }
        } else {
          this._actions.splice(index, 1)
        }
      }, this);
    }
  }

}

export default ActionManager