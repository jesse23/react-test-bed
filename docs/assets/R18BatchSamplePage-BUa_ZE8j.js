var p=Object.defineProperty;var S=(e,t,c)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c;var a=(e,t,c)=>S(e,typeof t!="symbol"?t+"":t,c);import{r as l,j as s,d as m,e as C}from"./index-BK2RadcX.js";function E({options:e,onChange:t}){const[c,n]=l.useState(e[0]);return e.map(o=>s.jsxs("label",{children:[s.jsx("input",{type:"radio",value:o,checked:c===o,onChange:u=>{n(u.target.value),t(u.target.value)}}),o]},o))}const d=e=>{const t=l.useRef(e),[c,n]=l.useState(e);return t.current=c,{getData:()=>t.current,setData:n}};function v(){const{getData:e,setData:t}=d({selected:6}),[c,n]=l.useState(e().selected);return s.jsxs("div",{children:[s.jsx("h3",{children:"Sample V0 (No fix, show the symptom)"}),s.jsxs("div",{children:["Current selection (by state): ",e().selected]}),s.jsxs("div",{children:["Current selection (by action): ",c]}),s.jsx("button",{onClick:()=>{Promise.resolve().then(()=>{t({selected:0}),n(e().selected)})},children:"Select None"})]})}const R=function(e){let t=l.useRef([]);const c=()=>t.current;return{schedulePostDispatchEvents:l.useCallback(({execute:o,context:u={}})=>{let r=c();const i={schedulerId:Math.floor(Math.random()*1e5),execute:o,type:e,context:u,unschedule:function(){let h=r.findIndex(j=>j.schedulerId===this.schedulerId);h!==-1&&r.splice(h,1)}};return r.push(i),t.current=r,i},[e]),queue:c}},D=(e,t)=>{const c=l.useCallback(n=>{const o=e();if(o.length===0)return;o.filter(r=>r.type===n).map(r=>(r.execute(),console.log(`useProcessJobQueue: job ${r.schedulerId} executed`),r)).forEach(r=>{r.unschedule.bind(r)()})},[e]);l.useEffect(function(){console.log(`useProcessJobQueue: Executing jobs for ${t}`),c(t)})};function g(){const{getData:e,setData:t}=d({selected:6}),[c,n]=l.useState(e().selected),{schedulePostDispatchEvents:o,queue:u}=R("test");return D(u,"test"),s.jsxs("div",{children:[s.jsx("h3",{children:"Sample V1 (by DeferJobQueue Polyfill)"}),s.jsxs("div",{children:["Current selection (by state): ",e().selected]}),s.jsxs("div",{children:["Current selection (by action): ",c]}),s.jsx("button",{onClick:()=>{Promise.resolve().then(()=>{t({selected:0}),o({execute:()=>{n(e().selected)}})}),setTimeout(()=>o({execute:()=>{console.log("Job2 (schedule in use effect) executed")}}),2e3)},children:"Select None"})]})}const _=()=>{const[e,t]=l.useState([]),c=l.useCallback(n=>{t(o=>[...o,n])},[]);return l.useEffect(()=>{e.length>0&&(e.forEach(n=>{try{n.execute()}catch(o){console.error("useDeferredEffect: Error executing callback:",o)}}),t([]))},[e]),{defer:c}};function y(){const{getData:e,setData:t}=d({selected:6}),[c,n]=l.useState(e().selected),{defer:o}=_();return s.jsxs("div",{children:[s.jsx("h3",{children:"Sample V2 (by fixed DeferJobQueue Polyfill)"}),s.jsxs("div",{children:["Current selection (by state): ",e().selected]}),s.jsxs("div",{children:["Current selection (by action): ",c]}),s.jsx("button",{onClick:()=>{Promise.resolve().then(()=>{t({selected:0}),o({execute:()=>{n(e().selected)}})}),setTimeout(()=>o({execute:()=>{console.log("Job2 (schedule in use effect) executed")}}),2e3)},children:"Select None"})]})}function V(){const{getData:e,setData:t}=d({selected:6}),[c,n]=l.useState(e().selected);return l.useEffect(()=>{n(e().selected)},[e]),s.jsxs("div",{children:[s.jsx("h3",{children:"Sample V3 (by state update)"}),s.jsxs("div",{children:["Current selection (by state): ",e().selected]}),s.jsxs("div",{children:["Current selection (by action): ",c]}),s.jsx("button",{onClick:()=>{Promise.resolve().then(()=>{t({selected:0})})},children:"Select None"})]})}const P=e=>{const t=l.useRef(e),[c,n]=l.useState(e);return{getData:()=>t.current,setData:o=>{t.current=o,n(o)}}};function k(){const{getData:e,setData:t}=P({selected:6}),[c,n]=l.useState(e().selected);return s.jsxs("div",{children:[s.jsx("h3",{children:"Sample V4 (by agnostic state)"}),s.jsxs("div",{children:["Current selection (by state): ",e().selected]}),s.jsxs("div",{children:["Current selection (by action): ",c]}),s.jsx("button",{onClick:()=>{Promise.resolve().then(()=>{t({selected:0}),n(e().selected)})},children:"Select None"})]})}const f="r18-batch-sample-loader-element";function x(){const[e,t]=l.useState("V0");return s.jsxs("div",{children:[s.jsx("h1",{children:"React18 Batch Adjustment Sample"}),s.jsx(E,{options:["V0","V1","V2","V3","V4"],onChange:c=>t(c)}),e==="V0"&&s.jsx(v,{}),e==="V1"&&s.jsx(g,{}),e==="V2"&&s.jsx(y,{}),e==="V3"&&s.jsx(V,{}),e==="V4"&&s.jsx(k,{})]})}customElements.define(f,class extends HTMLElement{constructor(){super(...arguments);a(this,"_root",null);a(this,"_reactRootElem",null)}_unmountReactComponent(){this._root?(this._root.unmount(),this._root=null):m.unmountComponentAtNode(this._reactRootElem)}_mountReactComponent(t){t?m.render(l.createElement(x),this._reactRootElem):(this._root=C.createRoot(this._reactRootElem),this._root.render(l.createElement(x)))}connectedCallback(){const t=document.createElement("input");t.type="checkbox",t.checked=!1,t.addEventListener("change",()=>{this._unmountReactComponent(),this._mountReactComponent(t.checked)}),this.appendChild(t),this.appendChild(document.createTextNode("Compatible Mode"));const c=document.createElement("div");this.appendChild(c),this._reactRootElem=c,this._mountReactComponent(!1)}disconnectedCallback(){this._unmountReactComponent(),this._reactRootElem=null,this._root=null}});function N(){return l.createElement(f)}export{N as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUjE4QmF0Y2hTYW1wbGVQYWdlLUJVYV9aRThqLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvYmF0Y2gvUmFkaW9CdXR0b25Hcm91cC50c3giLCIuLi8uLi9zcmMvcGFnZXMvYmF0Y2gvRGF0YVByb3ZpZGVyLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2JhdGNoL1NhbXBsZVYwLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9iYXRjaC9saWJzL3YxLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2JhdGNoL1NhbXBsZVYxLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9iYXRjaC9saWJzL3YyLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2JhdGNoL1NhbXBsZVYyLnRzeCIsIi4uLy4uL3NyYy9wYWdlcy9iYXRjaC9TYW1wbGVWMy50c3giLCIuLi8uLi9zcmMvcGFnZXMvYmF0Y2gvbGlicy92NC50cyIsIi4uLy4uL3NyYy9wYWdlcy9iYXRjaC9TYW1wbGVWNC50c3giLCIuLi8uLi9zcmMvcGFnZXMvUjE4QmF0Y2hTYW1wbGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUmFkaW9CdXR0b25Hcm91cCh7XG4gIG9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxufToge1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgb25DaGFuZ2U6IChvcHRpb246IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShvcHRpb25zWzBdKTtcbiAgcmV0dXJuIG9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICA8bGFiZWwga2V5PXtvcHRpb259PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkID09PSBvcHRpb259XG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZChldi50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIG9uQ2hhbmdlKGV2LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAge29wdGlvbn1cbiAgICA8L2xhYmVsPlxuICApKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25Hcm91cDtcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBTaW1wbGlmaWVkIHZlcnNpb24gb2YgRGF0YVByb3ZpZGVyIHN0YXRlXG4gKiBcbiAqIEBwYXJhbSBpbml0VmFsIGluaXRpYWwgc3RhdGVcbiAqIEByZXR1cm5zIGdldERhdGEgYW5kIHNldERhdGEgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVByb3ZpZGVyIHtcbiAgc2VsZWN0ZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZURhdGFQcm92aWRlciA9IChpbml0VmFsOiBEYXRhUHJvdmlkZXIpID0+IHtcbiAgY29uc3Qgc3RhdGVSZWYgPSB1c2VSZWYoaW5pdFZhbCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdFZhbCk7XG5cbiAgLy8gd3JvbmcgaW1wbCB0byBtaW1pYyByZWFjdCBzdGF0ZSB1cGRhdGUgc2lkZSBlZmZlY3RcbiAgc3RhdGVSZWYuY3VycmVudCA9IHN0YXRlO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YTogKCkgPT4gc3RhdGVSZWYuY3VycmVudCxcbiAgICBzZXREYXRhOiBzZXRTdGF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VEYXRhUHJvdmlkZXJWMiA9IChpbml0VmFsOiBEYXRhUHJvdmlkZXIpID0+IHtcbiAgY29uc3Qgc3RhdGVSZWYgPSB1c2VSZWYoaW5pdFZhbCk7XG4gIGNvbnN0IFtfLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0VmFsKTtcblxuICByZXR1cm4ge1xuICAgIGdldERhdGE6ICgpID0+IHN0YXRlUmVmLmN1cnJlbnQsXG4gICAgc2V0RGF0YTogKG5ld1N0YXRlOiBEYXRhUHJvdmlkZXIpID0+IHtcbiAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBuZXdTdGF0ZTtcbiAgICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG4gIH07XG59OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9EYXRhUHJvdmlkZXJcIjtcblxuLy8gcjE3XG4vLyAtIGFsbCBzZXRTdGF0ZSB3aWxsIGJlIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG4vLyByMTggY29tcGF0aWJsZSBtb2RlXG4vLyAtIHNldFN0YXRlIGluIHN5bmMgbW9kZSB3aWxsIGJlIGJhdGNoZWRcbi8vIC0gc2V0U3RhdGUgaW4gYXN5bmMgbW9kZSB3aWxsIGJlIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG4vLyByMTggY29uY3VycmVudCBtb2RlXG4vLyAtIGFsbCBzZXRTdGF0ZSB3aWxsIGJlIGJhdGNoZWRcblxuZXhwb3J0IGZ1bmN0aW9uIFNhbXBsZVYwKCkge1xuICBjb25zdCB7IGdldERhdGEsIHNldERhdGEgfSA9IHVzZURhdGFQcm92aWRlcih7IHNlbGVjdGVkOiA2IH0pO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGdldERhdGEoKS5zZWxlY3RlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlNhbXBsZSBWMCAoTm8gZml4LCBzaG93IHRoZSBzeW1wdG9tKTwvaDM+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBzdGF0ZSk6IHtnZXREYXRhKCkuc2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBhY3Rpb24pOiB7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldERhdGEoeyBzZWxlY3RlZDogMCB9KTtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGdldERhdGEoKS5zZWxlY3RlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNlbGVjdCBOb25lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlVjA7XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEpvYiB7XG4gIHNjaGVkdWxlcklkOiBudW1iZXI7XG4gIGV4ZWN1dGU6IEZ1bmN0aW9uO1xuICB0eXBlOiBzdHJpbmc7XG4gIGNvbnRleHQ6IGFueTtcbiAgdW5zY2hlZHVsZTogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTY2hlZHVsZXIgPSBmdW5jdGlvbiAodHlwZTogc3RyaW5nKSB7XG4gIGxldCBzY2hlZHVsZXJRdWV1ZVJlZmVyZW5jZSA9IHVzZVJlZihbXSBhcyBKb2JbXSk7XG4gIGNvbnN0IGdldFNjaGVkdWxlclF1ZXVlID0gKCkgPT4gc2NoZWR1bGVyUXVldWVSZWZlcmVuY2UuY3VycmVudDtcbiAgY29uc3Qgc2NoZWR1bGVQb3N0RGlzcGF0Y2hFdmVudHMgPSB1c2VDYWxsYmFjayhcbiAgICAoeyBleGVjdXRlLCBjb250ZXh0ID0ge30gfTogeyBleGVjdXRlOiBGdW5jdGlvbjsgY29udGV4dD86IGFueSB9KSA9PiB7XG4gICAgICBsZXQgbm90eVNjaGVkdWxlclF1ZXVlID0gZ2V0U2NoZWR1bGVyUXVldWUoKTtcbiAgICAgIGxldCBqb2JJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gICAgICBjb25zdCBzY2hlZHVsZWRKb2I6IEpvYiA9IHtcbiAgICAgICAgc2NoZWR1bGVySWQ6IGpvYklkLFxuICAgICAgICBleGVjdXRlLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB1bnNjaGVkdWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gbm90eVNjaGVkdWxlclF1ZXVlLmZpbmRJbmRleChcbiAgICAgICAgICAgIChldmVudDogSm9iKSA9PiBldmVudC5zY2hlZHVsZXJJZCA9PT0gdGhpcy5zY2hlZHVsZXJJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaW5kZXggIT09IC0xICYmIG5vdHlTY2hlZHVsZXJRdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIG5vdHlTY2hlZHVsZXJRdWV1ZS5wdXNoKHNjaGVkdWxlZEpvYik7XG4gICAgICBzY2hlZHVsZXJRdWV1ZVJlZmVyZW5jZS5jdXJyZW50ID0gbm90eVNjaGVkdWxlclF1ZXVlO1xuICAgICAgcmV0dXJuIHNjaGVkdWxlZEpvYjtcbiAgICB9LFxuICAgIFt0eXBlXVxuICApO1xuXG4gIHJldHVybiB7IHNjaGVkdWxlUG9zdERpc3BhdGNoRXZlbnRzLCBxdWV1ZTogZ2V0U2NoZWR1bGVyUXVldWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VQcm9jZXNzSm9iUXVldWUgPSAoXG4gIGdldFNjaGVkdWxlclF1ZXVlOiAoKSA9PiBKb2JbXSxcbiAgdHlwZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgZm4gPSB1c2VDYWxsYmFjayhcbiAgICAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBxdWV1ZSA9IGdldFNjaGVkdWxlclF1ZXVlKCk7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBqb2JzVG9VbnNjaGVkdWxlID0gcXVldWVcbiAgICAgICAgLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSB0eXBlKVxuICAgICAgICAubWFwKChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LmV4ZWN1dGUoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdXNlUHJvY2Vzc0pvYlF1ZXVlOiBqb2IgJHtldmVudC5zY2hlZHVsZXJJZH0gZXhlY3V0ZWRgKTtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgICAgam9ic1RvVW5zY2hlZHVsZS5mb3JFYWNoKChldmVudDogSm9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2NoZWR1bGUgPSBldmVudC51bnNjaGVkdWxlLmJpbmQoZXZlbnQpO1xuICAgICAgICB1bnNjaGVkdWxlKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtnZXRTY2hlZHVsZXJRdWV1ZV1cbiAgKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gZXZlbnRQcm9jZXNzaW5nUXVldWUoKSB7XG4gICAgY29uc29sZS5sb2coYHVzZVByb2Nlc3NKb2JRdWV1ZTogRXhlY3V0aW5nIGpvYnMgZm9yICR7dHlwZX1gKTtcbiAgICBmbih0eXBlKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURhdGFQcm92aWRlciB9IGZyb20gXCIuL0RhdGFQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlUHJvY2Vzc0pvYlF1ZXVlLCB1c2VTY2hlZHVsZXIgfSBmcm9tIFwiLi9saWJzL3YxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTYW1wbGVWMSgpIHtcbiAgY29uc3QgeyBnZXREYXRhLCBzZXREYXRhIH0gPSB1c2VEYXRhUHJvdmlkZXIoeyBzZWxlY3RlZDogNiB9KTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShnZXREYXRhKCkuc2VsZWN0ZWQpO1xuICBjb25zdCB7IHNjaGVkdWxlUG9zdERpc3BhdGNoRXZlbnRzLCBxdWV1ZSB9ID0gdXNlU2NoZWR1bGVyKFwidGVzdFwiKTtcblxuICB1c2VQcm9jZXNzSm9iUXVldWUocXVldWUsIFwidGVzdFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+U2FtcGxlIFYxIChieSBEZWZlckpvYlF1ZXVlIFBvbHlmaWxsKTwvaDM+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBzdGF0ZSk6IHtnZXREYXRhKCkuc2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBhY3Rpb24pOiB7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldERhdGEoeyBzZWxlY3RlZDogMCB9KTtcbiAgICAgICAgICAgIHNjaGVkdWxlUG9zdERpc3BhdGNoRXZlbnRzKHtcbiAgICAgICAgICAgICAgZXhlY3V0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGdldERhdGEoKS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBpc3N1ZSBmb3IgdjE6IHRoaXMgc2NoZWR1bGUgd2lsbCBub3QgYmUgZXhlY3V0ZWRcbiAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgc2NoZWR1bGVQb3N0RGlzcGF0Y2hFdmVudHMoe1xuICAgICAgICAgICAgICAgIGV4ZWN1dGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9iMiAoc2NoZWR1bGUgaW4gdXNlIGVmZmVjdCkgZXhlY3V0ZWRcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAyMDAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU2VsZWN0IE5vbmVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVWMTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSm9iIHtcbiAgZXhlY3V0ZTogRnVuY3Rpb247XG4gIGpvYklkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgaG9vayB0byBkZWZlciB0YXNrcyB1bnRpbCBuZXh0IHN0YXRlIHVwZGF0ZS5cbiAqIFxuICogLSBUYXNrIGNvdWxkIGJlIHN5bmMgb3IgYXN5bmMsIGJ1dCBpdCB3aWxsIGJlIGp1c3Qgc2ltcGx5IHRyaWdnZXJlZC5cbiAqIC0gVGFzayBjb3VsZCBiZSBhZGRlZCBieSBzeW5jIG9yIGFzeW5jLCBidXQgaXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgbmV4dCBzdGF0ZSB1cGRhdGUsIGFuZCB0aGUgb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQgZXNwZWNpYWxseSBmb3IgdGhlIHRhc2sgYWRkZWQgYnkgYXN5bmMuXG4gKiBcbiAqIE5PVEU6IE5vdCBmb3IgcHJvZHVjdGlvbiB1c2Ugc2luY2UgQVBJIGlzIG5vdCBzdGFibGUuXG4gKiBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gZGVmZXIgLSBBIGZ1bmN0aW9uIHRvIGRlZmVyIGEgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VEZWZlckpvYlF1ZXVlID0gKCkgPT4ge1xuICBjb25zdCBbam9iUXVldWUsIHNldEpvYlF1ZXVlXSA9IHVzZVN0YXRlKFtdIGFzIEpvYltdKTtcblxuICAvKipcbiAgICogQWRkcyBhIGNhbGxiYWNrIHRvIHRoZSBxdWV1ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZGVmZXIuXG4gICAqL1xuICBjb25zdCBhZGRKb2IgPSB1c2VDYWxsYmFjaygoam9iOiBKb2IpID0+IHtcbiAgICAgIHNldEpvYlF1ZXVlKChwcmV2UXVldWUpID0+IFsuLi5wcmV2UXVldWUsIGpvYl0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoam9iUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgam9iUXVldWUuZm9yRWFjaCgoam9iKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgam9iLmV4ZWN1dGUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCd1c2VEZWZlcnJlZEVmZmVjdDogRXJyb3IgZXhlY3V0aW5nIGNhbGxiYWNrOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRKb2JRdWV1ZShbXSk7IC8vIENsZWFyIHRoZSBxdWV1ZSBhZnRlciBleGVjdXRpb25cbiAgICB9XG4gIH0sIFtqb2JRdWV1ZV0pO1xuXG4gIHJldHVybiB7IGRlZmVyOiBhZGRKb2IgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vRGF0YVByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VEZWZlckpvYlF1ZXVlIH0gZnJvbSBcIi4vbGlicy92MlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2FtcGxlVjIoKSB7XG4gIGNvbnN0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9ID0gdXNlRGF0YVByb3ZpZGVyKHsgc2VsZWN0ZWQ6IDYgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZ2V0RGF0YSgpLnNlbGVjdGVkKTtcbiAgY29uc3QgeyBkZWZlciB9ID0gdXNlRGVmZXJKb2JRdWV1ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5TYW1wbGUgVjIgKGJ5IGZpeGVkIERlZmVySm9iUXVldWUgUG9seWZpbGwpPC9oMz5cbiAgICAgIDxkaXY+Q3VycmVudCBzZWxlY3Rpb24gKGJ5IHN0YXRlKToge2dldERhdGEoKS5zZWxlY3RlZH08L2Rpdj5cbiAgICAgIDxkaXY+Q3VycmVudCBzZWxlY3Rpb24gKGJ5IGFjdGlvbik6IHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0RGF0YSh7IHNlbGVjdGVkOiAwIH0pO1xuICAgICAgICAgICAgZGVmZXIoe1xuICAgICAgICAgICAgICBleGVjdXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZ2V0RGF0YSgpLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGlzc3VlIGZvciB2MTogdGhpcyBzY2hlZHVsZSB3aWxsIG5vdCBiZSBleGVjdXRlZFxuICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICBkZWZlcih7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2IyIChzY2hlZHVsZSBpbiB1c2UgZWZmZWN0KSBleGVjdXRlZFwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDIwMDBcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTZWxlY3QgTm9uZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVYyO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vRGF0YVByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VEeW5hbWljRWZmZWN0IH0gZnJvbSBcIi4vbGlicy92M1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2FtcGxlVjMoKSB7XG4gIGNvbnN0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9ID0gdXNlRGF0YVByb3ZpZGVyKHsgc2VsZWN0ZWQ6IDYgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZ2V0RGF0YSgpLnNlbGVjdGVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkKGdldERhdGEoKS5zZWxlY3RlZCk7XG4gIH0sIFtnZXREYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlNhbXBsZSBWMyAoYnkgc3RhdGUgdXBkYXRlKTwvaDM+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBzdGF0ZSk6IHtnZXREYXRhKCkuc2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBhY3Rpb24pOiB7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldERhdGEoeyBzZWxlY3RlZDogMCB9KTtcbiAgICAgICAgICAgIC8vIHNldFNlbGVjdGVkKGdldERhdGEoKS5zZWxlY3RlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNlbGVjdCBOb25lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNhbXBsZVYzSGlnaE9yZGVyVmVyc2lvbigpIHtcbiAgY29uc3QgeyBnZXREYXRhLCBzZXREYXRhIH0gPSB1c2VEYXRhUHJvdmlkZXIoeyBzZWxlY3RlZDogNiB9KTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShnZXREYXRhKCkuc2VsZWN0ZWQpO1xuICBjb25zdCB7IGFkZEVmZmVjdCwgcmVtb3ZlRWZmZWN0IH0gPSB1c2VEeW5hbWljRWZmZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlNhbXBsZSBWMyAoYnkgc3RhdGUgdXBkYXRlKTwvaDM+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBzdGF0ZSk6IHtnZXREYXRhKCkuc2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8ZGl2PkN1cnJlbnQgc2VsZWN0aW9uIChieSBhY3Rpb24pOiB7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldERhdGEoeyBzZWxlY3RlZDogMCB9KTtcbiAgICAgICAgICAgIC8vIE5PVEU6IHRoaXMgaXMganVzdCBmb3IgbWltaWMgdjIgYmVoYXZpb3IsIGl0IGlzIG5vdCB0aGUgaWRlYWwgc29sdXRpb25cbiAgICAgICAgICAgIC8vIGlmIHdlIHJlYWxseSBuZWVkIGhpZ2ggb3JkZXIgdmVyc2lvbiwgd2Ugc2hvdWxkIGRvIGl0IGF0IGluaXRpYWxpemF0aW9uIGJ5IGp1c3Qgb25lIHRpbWUuXG4gICAgICAgICAgICAvLyA5OSUgb2YgdGhlIHRpbWUsIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhpcy5cbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGFkZEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkKGdldERhdGEoKS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWZmZWN0KGVmZmVjdCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBbZ2V0RGF0YV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTZWxlY3QgTm9uZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVYzOyIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gXCIuLi9EYXRhUHJvdmlkZXJcIjtcblxuLyoqXG4gKiBTaW1wbGlmaWVkIHZlcnNpb24gb2YgRGF0YVByb3ZpZGVyIHN0YXRlXG4gKiBcbiAqIEBwYXJhbSBpbml0VmFsIGluaXRpYWwgc3RhdGVcbiAqIEByZXR1cm5zIGdldERhdGEgYW5kIHNldERhdGEgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VEYXRhUHJvdmlkZXIgPSAoaW5pdFZhbDogRGF0YVByb3ZpZGVyKSA9PiB7XG4gIGNvbnN0IHN0YXRlUmVmID0gdXNlUmVmKGluaXRWYWwpO1xuICBjb25zdCBbXywgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdFZhbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREYXRhOiAoKSA9PiBzdGF0ZVJlZi5jdXJyZW50LFxuICAgIHNldERhdGE6IChuZXdTdGF0ZTogRGF0YVByb3ZpZGVyKSA9PiB7XG4gICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gbmV3U3RhdGU7XG4gICAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vbGlicy92NFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2FtcGxlVjQoKSB7XG4gIGNvbnN0IHsgZ2V0RGF0YSwgc2V0RGF0YSB9ID0gdXNlRGF0YVByb3ZpZGVyKHsgc2VsZWN0ZWQ6IDYgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZ2V0RGF0YSgpLnNlbGVjdGVkKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+U2FtcGxlIFY0IChieSBhZ25vc3RpYyBzdGF0ZSk8L2gzPlxuICAgICAgPGRpdj5DdXJyZW50IHNlbGVjdGlvbiAoYnkgc3RhdGUpOiB7Z2V0RGF0YSgpLnNlbGVjdGVkfTwvZGl2PlxuICAgICAgPGRpdj5DdXJyZW50IHNlbGVjdGlvbiAoYnkgYWN0aW9uKToge3NlbGVjdGVkfTwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXREYXRhKHsgc2VsZWN0ZWQ6IDAgfSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZChnZXREYXRhKCkuc2VsZWN0ZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTZWxlY3QgTm9uZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVY0O1xuIiwiaW1wb3J0IFJlYWN0RE9NQ2xpZW50IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tIFwiLi9iYXRjaC9SYWRpb0J1dHRvbkdyb3VwXCI7XG5pbXBvcnQgeyBTYW1wbGVWMCB9IGZyb20gXCIuL2JhdGNoL1NhbXBsZVYwXCI7XG5pbXBvcnQgeyBTYW1wbGVWMSB9IGZyb20gXCIuL2JhdGNoL1NhbXBsZVYxXCI7XG5pbXBvcnQgeyBTYW1wbGVWMiB9IGZyb20gXCIuL2JhdGNoL1NhbXBsZVYyXCI7XG5pbXBvcnQgeyBTYW1wbGVWMyB9IGZyb20gXCIuL2JhdGNoL1NhbXBsZVYzXCI7XG5pbXBvcnQgeyBTYW1wbGVWNCB9IGZyb20gXCIuL2JhdGNoL1NhbXBsZVY0XCI7XG5cbmNvbnN0IFIxOF9CQVRDSF9TQU1QTEVfTE9BREVSID0gXCJkZWZlci1zYW1wbGUtbG9hZGVyLWVsZW1lbnRcIjtcblxuZnVuY3Rpb24gUjE4QmF0Y2hTYW1wbGUoKSB7XG4gIGNvbnN0IFt2ZXJzaW9uLCBzZXRWZXJzaW9uXSA9IHVzZVN0YXRlKFwiVjBcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWFjdDE4IEJhdGNoIEFkanVzdG1lbnQgU2FtcGxlPC9oMT5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgIG9wdGlvbnM9e1tcIlYwXCIsIFwiVjFcIiwgXCJWMlwiLCBcIlYzXCIsIFwiVjRcIl19XG4gICAgICAgIG9uQ2hhbmdlPXsodjogc3RyaW5nKSA9PiBzZXRWZXJzaW9uKHYpfVxuICAgICAgLz5cbiAgICAgIHt2ZXJzaW9uID09PSBcIlYwXCIgJiYgPFNhbXBsZVYwIC8+fVxuICAgICAge3ZlcnNpb24gPT09IFwiVjFcIiAmJiA8U2FtcGxlVjEgLz59XG4gICAgICB7dmVyc2lvbiA9PT0gXCJWMlwiICYmIDxTYW1wbGVWMiAvPn1cbiAgICAgIHt2ZXJzaW9uID09PSBcIlYzXCIgJiYgPFNhbXBsZVYzIC8+fVxuICAgICAge3ZlcnNpb24gPT09IFwiVjRcIiAmJiA8U2FtcGxlVjQgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIGN1c3RvbSBlbGVtZW50IGxvYWRlciB0byBzdXBwb3J0IHN3aXRjaGluZyBiZXR3ZWVuIGNvbXBhdGlibGUgbW9kZSBhbmQgY29uY3VycmVudCBtb2RlXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoUjE4X0JBVENIX1NBTVBMRV9MT0FERVIsIGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBwcml2YXRlIF9yb290OiBSZWFjdERPTUNsaWVudC5Sb290IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3JlYWN0Um9vdEVsZW06IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgX3VubW91bnRSZWFjdENvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5fcm9vdCkge1xuICAgICAgdGhpcy5fcm9vdC51bm1vdW50KCk7XG4gICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9yZWFjdFJvb3RFbGVtISk7XG4gICAgfVxuICB9XG5cbiAgX21vdW50UmVhY3RDb21wb25lbnQoY29tcGF0aWJsZU1vZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoY29tcGF0aWJsZU1vZGUpIHtcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgY3JlYXRlRWxlbWVudChSMThCYXRjaFNhbXBsZSksXG4gICAgICAgIHRoaXMuX3JlYWN0Um9vdEVsZW0hXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290ID0gUmVhY3RET01DbGllbnQuY3JlYXRlUm9vdCh0aGlzLl9yZWFjdFJvb3RFbGVtISk7XG4gICAgICB0aGlzLl9yb290LnJlbmRlcihjcmVhdGVFbGVtZW50KFIxOEJhdGNoU2FtcGxlKSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gQ3JlYXRlIG1vZGUgb3B0aW9uIGNoZWNrIGJveFxuICAgIGNvbnN0IG1vZGVPcHRpb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1vZGVPcHRpb25FbGVtLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgbW9kZU9wdGlvbkVsZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIG1vZGVPcHRpb25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fdW5tb3VudFJlYWN0Q29tcG9uZW50KCk7XG4gICAgICB0aGlzLl9tb3VudFJlYWN0Q29tcG9uZW50KG1vZGVPcHRpb25FbGVtLmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQobW9kZU9wdGlvbkVsZW0pO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb21wYXRpYmxlIE1vZGVcIikpO1xuXG4gICAgLy8gQ3JlYXRlIHJlYWN0IHJvb3QgZWxlbWVudFxuICAgIGNvbnN0IHJlYWN0Um9vdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQocmVhY3RSb290RWxlbSk7XG4gICAgdGhpcy5fcmVhY3RSb290RWxlbSA9IHJlYWN0Um9vdEVsZW07XG5cbiAgICAvLyBNb3VudCByZWFjdCBjb21wb25lbnRcbiAgICB0aGlzLl9tb3VudFJlYWN0Q29tcG9uZW50KGZhbHNlKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX3VubW91bnRSZWFjdENvbXBvbmVudCgpO1xuICAgIHRoaXMuX3JlYWN0Um9vdEVsZW0gPSBudWxsO1xuICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICB9XG59KTtcblxuLy8gcmVhY3QgbG9hZGVyXG5mdW5jdGlvbiBSMThCYXRjaFNhbXBsZVBhZ2UoKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFIxOF9CQVRDSF9TQU1QTEVfTE9BREVSKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUjE4QmF0Y2hTYW1wbGVQYWdlOyJdLCJuYW1lcyI6WyJSYWRpb0J1dHRvbkdyb3VwIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwib3B0aW9uIiwianN4IiwiZXYiLCJ1c2VEYXRhUHJvdmlkZXIiLCJpbml0VmFsIiwic3RhdGVSZWYiLCJ1c2VSZWYiLCJzdGF0ZSIsInNldFN0YXRlIiwiU2FtcGxlVjAiLCJnZXREYXRhIiwic2V0RGF0YSIsInVzZVNjaGVkdWxlciIsInR5cGUiLCJzY2hlZHVsZXJRdWV1ZVJlZmVyZW5jZSIsImdldFNjaGVkdWxlclF1ZXVlIiwidXNlQ2FsbGJhY2siLCJleGVjdXRlIiwiY29udGV4dCIsIm5vdHlTY2hlZHVsZXJRdWV1ZSIsInNjaGVkdWxlZEpvYiIsImluZGV4IiwiZXZlbnQiLCJ1c2VQcm9jZXNzSm9iUXVldWUiLCJmbiIsInF1ZXVlIiwiZSIsInVzZUVmZmVjdCIsIlNhbXBsZVYxIiwic2NoZWR1bGVQb3N0RGlzcGF0Y2hFdmVudHMiLCJ1c2VEZWZlckpvYlF1ZXVlIiwiam9iUXVldWUiLCJzZXRKb2JRdWV1ZSIsImFkZEpvYiIsImpvYiIsInByZXZRdWV1ZSIsImVycm9yIiwiU2FtcGxlVjIiLCJkZWZlciIsIlNhbXBsZVYzIiwiXyIsIm5ld1N0YXRlIiwiU2FtcGxlVjQiLCJSMThfQkFUQ0hfU0FNUExFX0xPQURFUiIsIlIxOEJhdGNoU2FtcGxlIiwidmVyc2lvbiIsInNldFZlcnNpb24iLCJ2IiwiX19wdWJsaWNGaWVsZCIsIlJlYWN0RE9NIiwiY29tcGF0aWJsZU1vZGUiLCJjcmVhdGVFbGVtZW50IiwiUmVhY3RET01DbGllbnQiLCJtb2RlT3B0aW9uRWxlbSIsInJlYWN0Um9vdEVsZW0iLCJSMThCYXRjaFNhbXBsZVBhZ2UiXSwibWFwcGluZ3MiOiJpT0FFTyxTQUFTQSxFQUFpQixDQUMvQixRQUFBQyxFQUNBLFNBQUFDLENBQ0YsRUFHRyxDQUNELEtBQU0sQ0FBQ0MsRUFBVUMsQ0FBVyxFQUFJQyxFQUFTLFNBQUFKLEVBQVEsQ0FBQyxDQUFDLEVBQ25ELE9BQU9BLEVBQVEsSUFBS0ssVUFDakIsUUFDQyxDQUFBLFNBQUEsQ0FBQUMsRUFBQSxJQUFDLFFBQUEsQ0FDQyxLQUFLLFFBQ0wsTUFBT0QsRUFDUCxRQUFTSCxJQUFhRyxFQUN0QixTQUFXRSxHQUFPLENBQ0pKLEVBQUFJLEVBQUcsT0FBTyxLQUFLLEVBQ2xCTixFQUFBTSxFQUFHLE9BQU8sS0FBSyxDQUMxQixDQUFBLENBQ0YsRUFDQ0YsQ0FBQSxDQUFBLEVB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
