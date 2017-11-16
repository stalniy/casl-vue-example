import { AbilityBuilder } from 'casl'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export default AbilityBuilder.define({ subjectName }, can => {
  can(['read', 'create'], 'Todo')
  can(['update', 'delete'], 'Todo', { assignee: 'me' })
})
