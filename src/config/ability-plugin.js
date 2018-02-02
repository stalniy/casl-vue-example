export default function abilitiesPlugin(Vue, ability) {
  const watcher = new Vue({
    data: {
      rules: []
    }
  })

  ability.on('update', ({ rules }) => watcher.rules = rules)

  Vue.mixin({
    methods: {
      $can(...args) {
        watcher.rules // create dependency
        return ability.can(...args)
      }
    }
  })
}
