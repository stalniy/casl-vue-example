# CASL and Vue integration example

## DEPRECATED 

The example has been moved to https://github.com/stalniy/casl-examples/tree/master/packages/vue-todo

This example shows how to integrate CASL auhorization in Vuejs2 application.
Read [Vue ACL with CASL](https://medium.com/@sergiy.stotskiy/vue-acl-with-casl-781a374b987a) for detailed explanation.

> Generate with vue-cli

**Note**: refactored to use CASL 2.0. See [@casl/ability][casl-ability] and [@casl/vue][casl-vue] for details.

## Installation

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Description

This application is a basic Todo application with possibility to specify assignee for a task. By default, all users are able to create and read all tasks but update and delete only assigned to them. Any user may create a task and assign it to other users.

Ability configuration can be found in `src/config/ability.js`, the Vue plugin for abilities is provided by `@casl/vue`. The plugin adds `$can` (references `ability.can`) method to every Vue component and make sure that all components (that use `$can`) are updated when `ability.update` method is called.

## Example

```html
<div class="view">
  <input class="toggle" type="checkbox" v-model="todo.completed" v-if="$can('update', todo)">
  <label @dblclick="$can('update', todo) && editTodo(todo)">{{ todo.title }}</label>
  <button class="destroy" v-if="$can('delete', todo)" @click="removeTodo(todo)"></button>
</div>
```

---- 

**Another example**: Example of integration [CASL with Vuex and REST API](https://github.com/stalniy/casl-vue-api-example)

[casl-ability]: https://github.com/stalniy/casl/tree/master/packages/casl-ability
[casl-vue]: https://github.com/stalniy/casl/tree/master/packages/casl-vue
