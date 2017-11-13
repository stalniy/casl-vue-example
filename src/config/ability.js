import { Ability, AbilityBuilder } from 'casl'

function defineRules() {
  const { rules, can } = AbilityBuilder.extract()

  can(['read', 'create'], 'Todo')
  can(['update', 'delete'], 'Todo', { assignee: 'me' })

  return rules
}

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export const ability = new Ability(defineRules(), { subjectName })

export function abilitiesPlugin(Vue) {
  const bus = new Vue()
  const update = ability.update

  ability.update = function updateAndNotify(...args) {
    const result = update.apply(this, args)
    bus.$emit('ability:update')
    return result
  }

  Vue.mixin({
    methods: {
      $can: ability.can.bind(ability)
    },
    beforeCreate() {
      this._updateAbilities = () => this.$forceUpdate()
      bus.$on('ability:update', this._updateAbilities)
    },
    beforeDestroy() {
      bus.$off('ability:update', this._updateAbilities)
    }
  })
}

window.ability = ability
