import actions from './actions'
class ActionManager {

  constructor(obj) {
    this._obj = obj
    this._actions = []
  }

  addAction(name, param) {
    let action = new actions[name](param)
    this._actions.push(action);
  }

  update() {

  }

}