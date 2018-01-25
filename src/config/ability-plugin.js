export default function abilitiesPlugin(Vue, ability) {
  const watcher = new Vue({
    data: {
      rules: []
    }
  })

  const update = ability.update
  ability.update = function updateAndNotify(rules) {
    watcher.rules = rules
    return update.call(this, rules)
  }

  Vue.mixin({
    methods: {
      $can(...args) {
        watcher.rules // create dependency
        return ability.can(...args)
      }
    }
  })
}
