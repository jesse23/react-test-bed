import{r as d,u as j,j as t,p as u,s as w,b as S}from"./index-_tx9xK7K.js";const p=new WeakMap,b=(e,s)=>{const n={init:e,read:i=>i(n),write:(i,o,l)=>{typeof l=="function"?o(n,l(i(n))):o(n,l)}};return n},a=e=>{let s=p.get(e);return s||(s={value:e.init,listeners:new Set,dependents:new Set},p.set(e,s)),s},h=e=>{const s=a(e),n=o=>o===e?s.value:(a(o).dependents.add(e),h(o)),i=e.read(n);return s.value=i,i},C=e=>{const s=a(e);s.dependents.forEach(n=>{n!==e&&C(n)}),s.listeners.forEach(n=>n())},v=(e,s)=>{var l;const n=a(e),i=r=>a(r).value,o=(r,c)=>{if(r===e){n.value=c,C(e);return}v(r,c)};(l=e.write)==null||l.call(e,i,o,s)},y=e=>{const[s,n]=d.useState();return d.useEffect(()=>{const o=()=>n(h(e)),l=a(e);return l.listeners.add(o),o(),()=>{l.listeners.delete(o)}},[e]),[s,o=>{v(e,o)}]},g=b(""),f=({scopeId:e})=>{const[s,n]=d.useState(""),[i,o]=d.useState(""),[l,r]=y(g);return d.useEffect(()=>{const c=w({topic:"update.LeafComponent",channel:e,handler:m=>{o(m)}});return()=>{S(c)}},[]),t.jsxs("div",{style:{border:"1px solid white",margin:"10px",padding:"10px",width:"100%"},children:[t.jsxs("div",{children:["Ctx: '",l,"'"]}),t.jsxs("div",{children:["Data: '",s,"'"]}),t.jsxs("div",{children:["Event: '",i,"'"]}),t.jsx("button",{onClick:()=>u({topic:"update.LeafComponent",channel:e,payload:`event from ${e}`}),children:"Update Event"}),t.jsx("button",{onClick:()=>r("Hello"),children:"Update Ctx"}),t.jsx("button",{onClick:()=>n("Hello"),children:"Update State"})]})},x=({scopeId:e})=>t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[t.jsx(f,{scopeId:`${e}:leftCell`}),t.jsx(f,{scopeId:"rightCell"})]}),E=()=>t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[t.jsx(x,{scopeId:"firstRow"}),t.jsx(x,{scopeId:"secondRow"})]}),A=()=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",border:"1px solid white",margin:"10px",padding:"10px"},children:[t.jsx("button",{onClick:()=>u({topic:"update.LeafComponent",channel:"firstRow:leftCell",payload:"event from firstRow:leftCell"}),children:"Event to firstRow:leftCell"}),t.jsx("button",{onClick:()=>u({topic:"update.LeafComponent",channel:"rightCell",payload:"event from rightCell"}),children:"Event to rightCell"})]}),D=()=>(j("./OpsSamplePage.css","dynamic-css"),t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[t.jsx(A,{}),t.jsx(E,{})]}));export{D as CtxSamplePage,D as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3R4U2FtcGxlUGFnZS1Cc2JvSEZERS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvYXRvbS9pbmRleC50cyIsIi4uLy4uL3NyYy9wYWdlcy9DdHhTYW1wbGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEF0b208VD4gPSB7XG4gIGluaXQ/OiBUO1xuICByZWFkOiAoZ2V0OiAoYTogQXRvbTxhbnk+KSA9PiBhbnkpID0+IFQ7XG4gIHdyaXRlPzogKGdldDogKGE6IEF0b208YW55PikgPT4gYW55LCBzZXQ6IChhOiBBdG9tPGFueT4sIHY6IGFueSkgPT4gdm9pZCwgdmFsdWU6IGFueSkgPT4gdm9pZDtcbn07XG5cbnR5cGUgQXRvbVN0YXRlPFQ+ID0ge1xuICB2YWx1ZTogVDtcbiAgbGlzdGVuZXJzOiBTZXQ8KCkgPT4gdm9pZD47XG4gIGRlcGVuZGVudHM6IFNldDxBdG9tPGFueT4+O1xufTtcblxuY29uc3QgYXRvbVN0YXRlTWFwID0gbmV3IFdlYWtNYXA8QXRvbTxhbnk+LCBBdG9tU3RhdGU8YW55Pj4oKTtcblxuZXhwb3J0IGNvbnN0IGF0b20gPSA8VD4ocmVhZDogKChnZXQ6IChhOiBBdG9tPGFueT4pID0+IGFueSkgPT4gVCkgfCBULCB3cml0ZT86IChnZXQ6IChhOiBBdG9tPGFueT4pID0+IGFueSwgc2V0OiAoYTogQXRvbTxhbnk+LCB2OiBhbnkpID0+IHZvaWQsIHZhbHVlOiBhbnkpID0+IHZvaWQpOiBBdG9tPFQ+ID0+IHtcbiAgaWYgKHR5cGVvZiByZWFkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHsgcmVhZDogcmVhZCBhcyAoZ2V0OiAoYTogQXRvbTxhbnk+KSA9PiBhbnkpID0+IFQsIHdyaXRlIH07XG4gIH1cbiAgY29uc3QgY29uZmlnOiBBdG9tPFQ+ID0ge1xuICAgIGluaXQ6IHJlYWQgYXMgVCxcbiAgICByZWFkOiAoZ2V0KSA9PiBnZXQoY29uZmlnKSxcbiAgICB3cml0ZTogd3JpdGUgfHwgKChnZXQsIHNldCwgYXJnKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzZXQoY29uZmlnLCBhcmcoZ2V0KGNvbmZpZykpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldChjb25maWcsIGFyZyk7XG4gICAgICB9XG4gICAgfSksXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59O1xuXG5jb25zdCBnZXRBdG9tU3RhdGUgPSA8VD4oYXRvbTogQXRvbTxUPik6IEF0b21TdGF0ZTxUPiA9PiB7XG4gIGxldCBhdG9tU3RhdGUgPSBhdG9tU3RhdGVNYXAuZ2V0KGF0b20pO1xuICBpZiAoIWF0b21TdGF0ZSkge1xuICAgIGF0b21TdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAoYXRvbSBhcyBhbnkpLmluaXQsXG4gICAgICBsaXN0ZW5lcnM6IG5ldyBTZXQoKSxcbiAgICAgIGRlcGVuZGVudHM6IG5ldyBTZXQoKSxcbiAgICB9O1xuICAgIGF0b21TdGF0ZU1hcC5zZXQoYXRvbSwgYXRvbVN0YXRlKTtcbiAgfVxuICByZXR1cm4gYXRvbVN0YXRlO1xufTtcblxuY29uc3QgcmVhZEF0b20gPSA8VD4oYXRvbTogQXRvbTxUPik6IFQgPT4ge1xuICBjb25zdCBhdG9tU3RhdGUgPSBnZXRBdG9tU3RhdGUoYXRvbSk7XG4gIGNvbnN0IGdldCA9IChhOiBBdG9tPGFueT4pID0+IHtcbiAgICBpZiAoYSA9PT0gYXRvbSkge1xuICAgICAgcmV0dXJuIGF0b21TdGF0ZS52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYVN0YXRlID0gZ2V0QXRvbVN0YXRlKGEpO1xuICAgIGFTdGF0ZS5kZXBlbmRlbnRzLmFkZChhdG9tKTtcbiAgICByZXR1cm4gcmVhZEF0b20oYSk7XG4gIH07XG4gIGNvbnN0IHZhbHVlID0gYXRvbS5yZWFkKGdldCk7XG4gIGF0b21TdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBub3RpZnkgPSAoYXRvbTogQXRvbTxhbnk+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGF0b21TdGF0ZSA9IGdldEF0b21TdGF0ZShhdG9tKTtcbiAgYXRvbVN0YXRlLmRlcGVuZGVudHMuZm9yRWFjaCgoZCkgPT4ge1xuICAgIGlmIChkICE9PSBhdG9tKSBub3RpZnkoZCk7XG4gIH0pO1xuICBhdG9tU3RhdGUubGlzdGVuZXJzLmZvckVhY2goKGwpID0+IGwoKSk7XG59O1xuXG5jb25zdCB3cml0ZUF0b20gPSA8VD4oYXRvbTogQXRvbTxUPiwgdmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICBjb25zdCBhdG9tU3RhdGUgPSBnZXRBdG9tU3RhdGUoYXRvbSk7XG5cbiAgY29uc3QgZ2V0ID0gKGE6IEF0b208YW55PikgPT4ge1xuICAgIGNvbnN0IGFTdGF0ZSA9IGdldEF0b21TdGF0ZShhKTtcbiAgICByZXR1cm4gYVN0YXRlLnZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChhOiBBdG9tPGFueT4sIHY6IGFueSkgPT4ge1xuICAgIGlmIChhID09PSBhdG9tKSB7XG4gICAgICBhdG9tU3RhdGUudmFsdWUgPSB2O1xuICAgICAgbm90aWZ5KGF0b20pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3cml0ZUF0b20oYSwgdik7XG4gIH07XG5cbiAgYXRvbS53cml0ZT8uKGdldCwgc2V0LCB2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXRvbSA9IDxUPihhdG9tOiBBdG9tPFQ+KTogW1QgfCB1bmRlZmluZWQsIChuZXh0VmFsdWU6IGFueSkgPT4gdm9pZF0gPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiBzZXRWYWx1ZShyZWFkQXRvbShhdG9tKSk7XG4gICAgY29uc3QgYXRvbVN0YXRlID0gZ2V0QXRvbVN0YXRlKGF0b20pO1xuICAgIGF0b21TdGF0ZS5saXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgICBjYWxsYmFjaygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhdG9tU3RhdGUubGlzdGVuZXJzLmRlbGV0ZShjYWxsYmFjaylcbiAgICB9O1xuICB9LCBbYXRvbV0pO1xuICBjb25zdCBzZXRBdG9tID0gKG5leHRWYWx1ZTogYW55KSA9PiB7XG4gICAgd3JpdGVBdG9tKGF0b20sIG5leHRWYWx1ZSk7XG4gIH07XG4gIHJldHVybiBbdmFsdWUsIHNldEF0b21dO1xufTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdG9tLCBldmVudEJ1cywgdXNlQXRvbSwgdXNlRHluYW1pY0NzcyB9IGZyb20gXCIuLi9saWJzXCI7XG5cbmNvbnN0IHNvbWVTaGFyZWRTdGF0ZUFzQXRvbSA9IGF0b20oXCJcIik7XG5cbmNvbnN0IExlYWZDb21wb25lbnQgPSAoeyBzY29wZUlkIH06IHsgc2NvcGVJZDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtldmVudFZhbHVlLCBzZXRFdmVudFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXRvbVZhbHVlLCBzZXRBdG9tVmFsdWVdID0gdXNlQXRvbShzb21lU2hhcmVkU3RhdGVBc0F0b20pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3VicyA9IGV2ZW50QnVzLnN1YnNjcmliZSh7XG4gICAgICB0b3BpYzogXCJ1cGRhdGUuTGVhZkNvbXBvbmVudFwiLFxuICAgICAgY2hhbm5lbDogc2NvcGVJZCxcbiAgICAgIGhhbmRsZXI6ICh2YWwpID0+IHtcbiAgICAgICAgc2V0RXZlbnRWYWx1ZSh2YWwpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZXZlbnRCdXMudW5zdWJzY3JpYmUoc3Vicyk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCB3aGl0ZVwiLFxuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2PkN0eDogJ3thdG9tVmFsdWV9JzwvZGl2PlxuICAgICAgPGRpdj5EYXRhOiAne2RhdGF9JzwvZGl2PlxuICAgICAgPGRpdj5FdmVudDogJ3tldmVudFZhbHVlfSc8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBldmVudEJ1cy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHRvcGljOiBcInVwZGF0ZS5MZWFmQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBjaGFubmVsOiBzY29wZUlkLFxuICAgICAgICAgICAgcGF5bG9hZDogYGV2ZW50IGZyb20gJHtzY29wZUlkfWAsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBVcGRhdGUgRXZlbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBdG9tVmFsdWUoXCJIZWxsb1wiKX0+VXBkYXRlIEN0eDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREYXRhKFwiSGVsbG9cIil9PlVwZGF0ZSBTdGF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGVhZkNvbXBvbmVudFJvdyA9ICh7IHNjb3BlSWQgfTogeyBzY29wZUlkOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiBjb21wb25lbnQgdGhhdCBJIHdhbnQgdG8gcmV1c2UgKi99XG4gICAgICA8TGVhZkNvbXBvbmVudCBzY29wZUlkPXtgJHtzY29wZUlkfTpsZWZ0Q2VsbGB9IC8+XG4gICAgICB7LyogY29tcG9uZW50IHRoYXQgSSBkb24ndCB3YW50IHRvIHJldXNlICovfVxuICAgICAgPExlYWZDb21wb25lbnQgc2NvcGVJZD1cInJpZ2h0Q2VsbFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMZWFmQ29tcG9uZW50R3JpZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TGVhZkNvbXBvbmVudFJvdyBzY29wZUlkPVwiZmlyc3RSb3dcIiAvPlxuICAgICAgPExlYWZDb21wb25lbnRSb3cgc2NvcGVJZD1cInNlY29uZFJvd1wiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBHbG9iYWxQYW5lbCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCB3aGl0ZVwiLFxuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGV2ZW50QnVzLnB1Ymxpc2goe1xuICAgICAgICAgICAgdG9waWM6IFwidXBkYXRlLkxlYWZDb21wb25lbnRcIixcbiAgICAgICAgICAgIGNoYW5uZWw6IFwiZmlyc3RSb3c6bGVmdENlbGxcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IGBldmVudCBmcm9tIGZpcnN0Um93OmxlZnRDZWxsYCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIEV2ZW50IHRvIGZpcnN0Um93OmxlZnRDZWxsXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBldmVudEJ1cy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHRvcGljOiBcInVwZGF0ZS5MZWFmQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBjaGFubmVsOiBcInJpZ2h0Q2VsbFwiLFxuICAgICAgICAgICAgcGF5bG9hZDogYGV2ZW50IGZyb20gcmlnaHRDZWxsYCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIEV2ZW50IHRvIHJpZ2h0Q2VsbFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQ3R4U2FtcGxlUGFnZSA9ICgpID0+IHtcbiAgdXNlRHluYW1pY0NzcyhcIi4vT3BzU2FtcGxlUGFnZS5jc3NcIiwgXCJkeW5hbWljLWNzc1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHbG9iYWxQYW5lbCAvPlxuICAgICAgPExlYWZDb21wb25lbnRHcmlkIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdHhTYW1wbGVQYWdlO1xuIl0sIm5hbWVzIjpbImF0b21TdGF0ZU1hcCIsImF0b20iLCJyZWFkIiwid3JpdGUiLCJjb25maWciLCJnZXQiLCJzZXQiLCJhcmciLCJnZXRBdG9tU3RhdGUiLCJhdG9tU3RhdGUiLCJyZWFkQXRvbSIsImEiLCJ2YWx1ZSIsIm5vdGlmeSIsImQiLCJsIiwid3JpdGVBdG9tIiwidiIsInVzZUF0b20iLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJuZXh0VmFsdWUiLCJzb21lU2hhcmVkU3RhdGVBc0F0b20iLCJMZWFmQ29tcG9uZW50Iiwic2NvcGVJZCIsImRhdGEiLCJzZXREYXRhIiwiZXZlbnRWYWx1ZSIsInNldEV2ZW50VmFsdWUiLCJhdG9tVmFsdWUiLCJzZXRBdG9tVmFsdWUiLCJzdWJzIiwiZXZlbnRCdXMuc3Vic2NyaWJlIiwidmFsIiwiZXZlbnRCdXMudW5zdWJzY3JpYmUiLCJqc3hzIiwianN4IiwiZXZlbnRCdXMucHVibGlzaCIsIkxlYWZDb21wb25lbnRSb3ciLCJMZWFmQ29tcG9uZW50R3JpZCIsIkdsb2JhbFBhbmVsIiwiQ3R4U2FtcGxlUGFnZSIsInVzZUR5bmFtaWNDc3MiXSwibWFwcGluZ3MiOiIyRUFjQSxNQUFNQSxNQUFtQixRQUVaQyxFQUFPLENBQUlDLEVBQStDQyxJQUEyRyxDQUloTCxNQUFNQyxFQUFrQixDQUN0QixLQUFNRixFQUNOLEtBQU9HLEdBQVFBLEVBQUlELENBQU0sRUFDekIsTUFBaUIsQ0FBQ0MsRUFBS0MsRUFBS0MsSUFBUSxDQUM5QixPQUFPQSxHQUFRLFdBQ2pCRCxFQUFJRixFQUFRRyxFQUFJRixFQUFJRCxDQUFNLENBQUMsQ0FBQyxFQUU1QkUsRUFBSUYsRUFBUUcsQ0FBRyxDQUNqQixDQUNGLEVBRUssT0FBQUgsQ0FDVCxFQUVNSSxFQUFtQlAsR0FBZ0MsQ0FDbkQsSUFBQVEsRUFBWVQsRUFBYSxJQUFJQyxDQUFJLEVBQ3JDLE9BQUtRLElBQ1NBLEVBQUEsQ0FDVixNQUFRUixFQUFhLEtBQ3JCLGNBQWUsSUFDZixlQUFn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
