 const actionList = new Map()

/**
 * @param  {String} name
 * @param  {Function} actionClass
 * @param  {Object} conf
 */
function register(name, actionClass, conf) {
  actionList.set(name, [actionClass, conf])
}

import Breath from './actions/breath'
register('breath', Breath, {})

// import Breath from './actions/breath'
// register('breath', Breath, {})
// import Breath from './actions/breath'
// register('breath', Breath, {})
// import Breath from './actions/breath'
// register('breath', Breath, {})
// import Breath from './actions/breath'
// register('breath', Breath, {})

export { actionList, register }