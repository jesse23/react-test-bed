# Facts
- We have data.dispatch to update the state inside a component
- User is OK to pass it down to the child component by prop
- We have eventBus.publish and ctx.update which is a legal and convenient way to update state across the component

# Definition:
- state: local variable => useState
- props: way to pass down local variable
- context: variable in scope => useScope
  - updateCtx: will update the closest scope if we don't define a new scope (which will be global by default)

# Jotai
- When I define it, I blindly use useAtom when I need the state to be shared
- When I use it, I can put ScopeProvider to 'scope' the shared state

# Reference
https://jotai.org/docs/extensions/scope
