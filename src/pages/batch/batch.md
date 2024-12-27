# Adjustment to Automatic Batching in React18 Concurrent Mode
- in React 18, Render/Dispatch will be batched automatically
- If existing code flow has assumption on the sequence of Dispatch, it needs to be adjusted

## Principle
- Dependency on dispatch is wrong without using useEffect
- `Post Action` is not an ideal/accurate statement - `State Observation` is more appropriate. The former represents a proactive, step-based approach, while the latter focuses on passive state updates, akin to a state machine.
- Overall, 'Data Fetching' procedure could proactive(with multiple steps), while 'Data Binding' should be passive (by a state dependency flow). 

## Architecture
- Minimum solution should be at least v2, the best solution is v4. `v4 > v3 > v2 >> v1`.
- `useEffect` has no guarantee on the sequence; `useEffect` should have a clear watch list as possible.

## Description to Each Approaches
### V1 - DeferJobQueue Polyfill (buggy version, current solution)
#### Approach
- Expose 2 hooks, one for schedule and one for execute.
- Before then 2nd hook is called, we could call schedule to push job to the queue (for sync flow)
- The execute hook is done by a simple useEffect without watcher

#### Pros
- All the scheduled 'job' will be 'triggered' at the end of post render
- If we put the useEffect as the last it will be executed as last step of the render cycle

#### Cons
- The job is not state driven or 'dependency driven'.
- The job queue is not state driven. Overall the whole solution has no difference with the setTimeout
  - Async schedule will be ignored since the queue array is not a state
- It is not following react best practice (keep useEffect independent)
- There are many other minor design issues that can be improved

### V2 - DeferJobQueue Polyfill (clean version)
#### Approach
- Expose one hook and put the job queue in the state

#### Pros
- Use state to drive the job queue
- Simplify it to one hook

#### Cons
- Still the react useEffect sequence is not guaranteed
- Not providing consistent behavior between debug mode and production mode
- Extra render cycle (not an issue since it is the react best practice)

### V3 - Build State Dependency Tree properly
#### Approach
- use `useEffect` to run the actual `post action`, based on the accurate watcher

#### Pros
- Pure state driven, best practice

#### Cons
- Some extreme use case might still need v2
- High order usage will be trickly and need to be step at init

### V4 - Agnostic State
#### Approach
- ensure state is up to date except Value (not Ref) by prop, which will provide the flexibility to post action style of practice

#### Pros
- Complete Client Framework Agnostic

#### Cons
- Tricky to props especially to complex props
- May not be able to cover all the use cases

## MISC
### All issues of V1 (and the usage in the actual MR)
#### Service Implementation (12)
- [ ] The approach is not related to event at all, the file naming `declEventProcessing` is wrong.
- [ ] The usage, behavior of the service is undefined and not clear.
- [ ] Assuming the useEffect hook has order and almost force user to put the 2nd hook at the end of all the hooks.
- [ ] Async schedulePostDispatchEvents is undefined behavior
- [ ] `schedulerId`, `type`, `context` and `unschedule` is unnecessary and not used in Job contract.
- [ ] No error handling for each job.
- [ ] The unschedule logic is not needed.
- [ ] Two hook design is not a clear contact, it adds unnecessary constraints in the usage. (due to the caveat of how we use useEffect)
- [ ] The type filtering logic will cause undefined error. (it is safe for now since the type logic is not used)
- [ ] useCallback - some variables are missing in the watch list.
- [ ] useEffect - clean up code should be in the `return () => {}` block to handle unmount.
- [ ] No unit test is provided.
#### Service Usage (9)
- [ ] Push dummy job is not necessary, we can use undefine check
- [ ] Some of the `typeof === 'function'` is not necessary
- [ ] Some of the unclear magic change (like `vmo` -> `rowElem.vmo`)
- [ ] newVmc = _.clone(vmc) should be either `newVmc = new VMC(current, newAttr)` or `newVmc = {...vmc, ...newAttr }`
- [ ] High order function is not needed for postProcessing assignment
- [ ] If `action.postProcessing` is needed, we need to define it rather than just insert it as  adhoc attribute.
- [ ] `schedulePostDispatchEvents` -> remove 's' if we can only schedule one job at a time
- [ ] `notySchedulerQueue` try not to use `noty` (minor naming issue)
- [ ] `return { schedulePostDispatchEvents, queue:getSchedulerQueue };` -> 'queue' is ambiguous to present a getter

### How to refactor all existing usages to schedulePostDispatchEvents
- all use cases related to selection ( 3 instances ) can be convert to useEffect directly
- all use cases related to data provider (around 4):
  - _treePostProcessing (1 instance) -> could be converted to useEffect on viewModelCollection, most of the logic is just fire eventBus
    - 1st of all how could we guarantee the state of the input is up to date?
    - again how do we know delay one render cycle is good enough?
  - notifyModelObjectsUpdate (3 instances) -> could be converted to a watch since it is a post action of dispatcher directly
  - other many places we put dummy callback as () => {}, which we could put null to save some execution