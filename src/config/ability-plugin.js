export default function abilitiesPlugin(Vue, ability) {
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
      this.$forceUpdate = this.$forceUpdate.bind(this)
      bus.$on('ability:update', this.$forceUpdate)
    },
    beforeDestroy() {
      bus.$off('ability:update', this.$forceUpdate)
    }
  })
}
