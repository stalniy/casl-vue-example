import { ReactiveAbility, AbilityBuilder } from '../services/ability'

function defineRules() {
  const { rules, can } = AbilityBuilder.extract()

  can('read', 'Todo')
  can('manage', 'Todo', { assignee: 'me' })

  return rules
}

export const ability = new ReactiveAbility(defineRules())

export function abilitiesPlugin(Vue) {
  Object.defineProperty(Vue.prototype, '$can', {
    value: ability.can.bind(ability)
  })
}

window.ability = ability
