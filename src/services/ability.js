import { Ability } from 'casl'
import Vue from 'vue'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export { AbilityBuilder } from 'casl'

export class ReactiveAbility extends Ability {
  constructor(rules, options) {
    super(rules, { ...options, subjectName });
    Vue.set(this, '__reactiveDependency', 0)
  }

  update(...args) {
    this.__reactiveDependency++
    return super.update(...args)
  }

  can(...args) {
    this.__reactiveDependency
    return super.can(...args)
  }
}
