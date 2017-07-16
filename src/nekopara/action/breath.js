import ActionBase from './actionBase'

export class Breath extends ActionBase {
  constructor(param) {
    super()

  }

  update(obj) {
    if (obj.opacity >= 255) this.order = true
    if (obj.opacity <= 100) this.order = false
    this.order ? obj.opacity -= 3 : obj.opacity += 3
  }

}