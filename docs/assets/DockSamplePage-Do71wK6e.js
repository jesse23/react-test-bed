import{r as i,j as t,d as a}from"./index-D2LhNYug.js";function l({parentCount:n,setParentCount:r}){const[s,e]=i.useState(0);return t.jsxs("div",{children:[t.jsxs("p",{children:["Parent State: ",n]}),t.jsx("button",{onClick:()=>r(n+1),children:"Plus Portal State"}),t.jsxs("p",{children:["Portal State: ",s]}),t.jsx("button",{onClick:()=>e(s+1),children:"Plus Portal State"})]})}function d({children:n,enablePortal:r,parentElemId:s}){const[e,c]=i.useState(null);return i.useEffect(()=>(c(document.createElement("div")),()=>{var o;e&&((o=e.parentElement)==null||o.removeChild(e)),c(null)}),[]),i.useEffect(()=>{if(e){const o=document.getElementById(s);return o==null||o.appendChild(e),()=>{o==null||o.removeChild(e)}}},[e,s]),r?e&&a.createPortal(n,e):n}function u({enablePortal:n,parentElemId:r}){const[s,e]=i.useState(0);return i.useEffect(()=>{},[r]),t.jsx(d,{enablePortal:n,parentElemId:r,children:t.jsx(l,{parentCount:s,setParentCount:e})})}function C(){const[n,r]=i.useState(!1);return t.jsxs("div",{children:[t.jsx("h1",{children:"React Portal State Preservation"}),t.jsxs("button",{onClick:()=>r(!n),children:["Move Portal to ",n?"First":"Second"," Container"]}),t.jsx("div",{id:"first-container",style:{border:"1px solid black",padding:"10px"},children:t.jsx("p",{children:"First Container"})}),t.jsx("div",{id:"second-container",style:{border:"1px solid red",padding:"10px"},children:t.jsx("p",{children:"Second Container"})}),t.jsx(u,{enablePortal:!0,parentElemId:n?"second-container":"first-container"})]})}export{C as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9ja1NhbXBsZVBhZ2UtRG83MXdLNmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9Eb2NrU2FtcGxlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZnVuY3Rpb24gQ2hpbGRDb21wb25lbnQoe1xuICBwYXJlbnRDb3VudCxcbiAgc2V0UGFyZW50Q291bnQsXG59OiB7XG4gIHBhcmVudENvdW50OiBudW1iZXI7XG4gIHNldFBhcmVudENvdW50OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5QYXJlbnQgU3RhdGU6IHtwYXJlbnRDb3VudH08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhcmVudENvdW50KHBhcmVudENvdW50ICsgMSl9PlxuICAgICAgICBQbHVzIFBvcnRhbCBTdGF0ZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8cD5Qb3J0YWwgU3RhdGU6IHtjb3VudH08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9PlBsdXMgUG9ydGFsIFN0YXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIGNoaWxkIGNvbXBvbmVudCB3aWxsIHJldGFpbiB0aGUgc3RhdGVcbmZ1bmN0aW9uIFRlc3REb2NrKHtcbiAgY2hpbGRyZW4sXG4gIGVuYWJsZVBvcnRhbCxcbiAgcGFyZW50RWxlbUlkLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBlbmFibGVQb3J0YWw6IGJvb2xlYW47XG4gIHBhcmVudEVsZW1JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCBbY29udGFpbmVyRWxlbSwgc2V0Q29udGFpbmVyRWxlbV0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyRWxlbShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYoY29udGFpbmVyRWxlbSkge1xuICAgICAgICBjb250YWluZXJFbGVtLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsZW0pO1xuICAgICAgfVxuICAgICAgc2V0Q29udGFpbmVyRWxlbShudWxsKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250YWluZXJFbGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbUlkKTtcbiAgICAgIHBhcmVudEVsZW0/LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW0pO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBwYXJlbnRFbGVtPy5yZW1vdmVDaGlsZChjb250YWluZXJFbGVtKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbY29udGFpbmVyRWxlbSwgcGFyZW50RWxlbUlkXSk7XG5cbiAgcmV0dXJuIGVuYWJsZVBvcnRhbFxuICAgID8gY29udGFpbmVyRWxlbSAmJiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGNvbnRhaW5lckVsZW0pXG4gICAgOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gUGFyZW50Q29tcG9uZW50KHtcbiAgZW5hYmxlUG9ydGFsLFxuICBwYXJlbnRFbGVtSWQsXG59OiB7XG4gIGVuYWJsZVBvcnRhbDogYm9vbGVhbjtcbiAgcGFyZW50RWxlbUlkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbcGFyZW50RWxlbUlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGVzdERvY2sgZW5hYmxlUG9ydGFsPXtlbmFibGVQb3J0YWx9IHBhcmVudEVsZW1JZD17cGFyZW50RWxlbUlkfT5cbiAgICAgIDxDaGlsZENvbXBvbmVudCBwYXJlbnRDb3VudD17Y291bnR9IHNldFBhcmVudENvdW50PXtzZXRDb3VudH0gLz5cbiAgICA8L1Rlc3REb2NrPlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2NrU2FtcGxlUGFnZSgpIHtcbiAgY29uc3QgW3RvU2VjQ29udGFpbmVyLCBzZXRUb1NlY0NvbnRhaW5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJlYWN0IFBvcnRhbCBTdGF0ZSBQcmVzZXJ2YXRpb248L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUb1NlY0NvbnRhaW5lcighdG9TZWNDb250YWluZXIpfT5cbiAgICAgICAgTW92ZSBQb3J0YWwgdG8ge3RvU2VjQ29udGFpbmVyID8gXCJGaXJzdFwiIDogXCJTZWNvbmRcIn0gQ29udGFpbmVyXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJmaXJzdC1jb250YWluZXJcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIHBhZGRpbmc6IFwiMTBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxwPkZpcnN0IENvbnRhaW5lcjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cInNlY29uZC1jb250YWluZXJcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIHJlZFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fVxuICAgICAgPlxuICAgICAgICA8cD5TZWNvbmQgQ29udGFpbmVyPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGFyZW50Q29tcG9uZW50XG4gICAgICAgIGVuYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgcGFyZW50RWxlbUlkPXt0b1NlY0NvbnRhaW5lciA/IFwic2Vjb25kLWNvbnRhaW5lclwiIDogXCJmaXJzdC1jb250YWluZXJcIn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY2tTYW1wbGVQYWdlO1xuIl0sIm5hbWVzIjpbIkNoaWxkQ29tcG9uZW50IiwicGFyZW50Q291bnQiLCJzZXRQYXJlbnRDb3VudCIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsImpzeHMiLCJqc3giLCJUZXN0RG9jayIsImNoaWxkcmVuIiwiZW5hYmxlUG9ydGFsIiwicGFyZW50RWxlbUlkIiwiY29udGFpbmVyRWxlbSIsInNldENvbnRhaW5lckVsZW0iLCJ1c2VFZmZlY3QiLCJfYSIsInBhcmVudEVsZW0iLCJSZWFjdERPTSIsIlBhcmVudENvbXBvbmVudCIsIkRvY2tTYW1wbGVQYWdlIiwidG9TZWNDb250YWluZXIiLCJzZXRUb1NlY0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6InNEQUdBLFNBQVNBLEVBQWUsQ0FDdEIsWUFBQUMsRUFDQSxlQUFBQyxDQUNGLEVBR0csQ0FDRCxLQUFNLENBQUNDLEVBQU9DLENBQVEsRUFBSUMsV0FBUyxDQUFDLEVBRXBDLGNBQ0csTUFDQyxDQUFBLFNBQUEsQ0FBQUMsT0FBQyxJQUFFLENBQUEsU0FBQSxDQUFBLGlCQUFlTCxDQUFBLEVBQVksRUFDOUJNLE1BQUMsVUFBTyxRQUFTLElBQU1MLEVBQWVELEVBQWMsQ0FBQyxFQUFHLFNBRXhELG9CQUFBLFNBQ0MsSUFBRSxDQUFBLFNBQUEsQ0FBQSxpQkFBZUUsQ0FBQSxFQUFNLEVBQ3hCSSxNQUFDLFVBQU8sUUFBUyxJQUFNSCxFQUFTRCxFQUFRLENBQUMsRUFBRyxTQUFpQixvQkFBQSxDQUMvRCxDQUFBLENBQUEsQ0FFSixDQUdBLFNBQVNLLEVBQVMsQ0FDaEIsU0FBQUMsRUFDQSxhQUFBQyxFQUNBLGFBQUFDLENBQ0YsRUFJRyxDQUNELEtBQU0sQ0FBQ0MsRUFBZUMsQ0FBZ0IsRUFBSVIsV0FBNkIsSUFBSSxFQUUzRVMsT0FBQUEsRUFBQUEsVUFBVSxLQUNTRCxFQUFBLFNBQVMsY0FBYyxLQUFLLENBQUMsRUFDdkMsSUFBTSxPQUNSRCxLQUNhRyxFQUFBSCxFQUFBLGdCQUFBLE1BQUFHLEVBQWUsWUFBWUgsSUFFM0NDLEVBQWlCLElBQUksQ0FBQSxHQUV0QixDQUFFLENBQUEsRUFFTEMsRUFBQUEsVUFBVSxJQUFNLENBQ2QsR0FBSUYsRUFBZSxDQUNYLE1BQUFJLEVBQWEsU0FBUyxlQUFlTCxDQUFZLEVBQ3ZELE9BQUFLLEdBQUEsTUFBQUEsRUFBWSxZQUFZSixHQUVqQixJQUFNLENBQ1hJLEdBQUEsTUFBQUEsRUFBWSxZQUFZSixFQUFhLENBRXpDLENBQUEsRUFDQyxDQUFDQSxFQUFlRCxDQUFZLENBQUMsRUFFekJELEVBQ0hFLEdBQWlCSyxFQUFTLGFBQWFSLEVBQVVHLENBQWEsRUFDOURILENBQ04sQ0FFQSxTQUFTUyxFQUFnQixDQUN2QixhQUFBUixFQUNBLGFBQUFDLENBQ0YsRUFHRyxDQUNELEtBQU0sQ0FBQ1IsRUFBT0MsQ0FBUSxFQUFJQyxXQUFTLENBQUMsRUFFcENTLE9BQUFBLEVBQUFBLFVBQVUsSUFBTSxDQUFBLEVBQUksQ0FBQ0gsQ0FBWSxDQUFDLEVBR2hDSixFQUFBQSxJQUFDQyxFQUFTLENBQUEsYUFBQUUsRUFBNEIsYUFBQUMsRUFDcEMsU0FBQUosRUFBQSxJQUFDUCxHQUFlLFlBQWFHLEVBQU8sZUFBZ0JDLENBQVUsQ0FBQSxDQUNoRSxDQUFBLENBRUosQ0FFQSxTQUFTZSxHQUFpQixDQUN4QixLQUFNLENBQUNDLEVBQWdCQyxDQUFpQixFQUFJaEIsV0FBUyxFQUFLLEVBRTFELGNBQ0csTUFDQyxDQUFBLFNBQUEsQ0FBQUUsRUFBQUEsSUFBQyxNQUFHLFNBQStCLGlDQUFBLENBQUEsU0FDbEMsU0FBTyxDQUFBLFFBQVMsSUFBTWMsRUFBa0IsQ0FBQ0QsQ0FBYyxFQUFHLFNBQUEsQ0FBQSxrQkFDekNBLEVBQWlCLFFBQVUsU0FBUyxZQUFBLEVBQ3RELEVBQ0FiLEVBQUEsSUFBQyxNQUFBLENBQ0MsR0FBRyxrQkFDSCxNQUFPLENBQUUsT0FBUSxrQkFBbUIsUUFBUyxNQUFPLEVBRXBELFNBQUFBLEVBQUFBLElBQUMsS0FBRSxTQUFlLGlCQUFBLENBQUEsQ0FBQSxDQUNwQixFQUNBQSxFQUFBLElBQUMsTUFBQSxDQUNDLEdBQUcsbUJBQ0gsTUFBTyxDQUFFLE9BQVEsZ0JBQWlCLFFBQVMsTUFBTyxFQUVsRCxTQUFBQSxFQUFBQSxJQUFDLEtBQUUsU0FBZ0Isa0JBQUEsQ0FBQSxDQUFBLENBQ3JCLEVBQ0FBLEVBQUEsSUFBQ1csRUFBQSxDQUNDLGFBQWMsR0FDZCxhQUFjRSxFQUFpQixtQkFBcUIsaUJBQUEsQ0FDdEQsQ0FDRixDQUFBLENBQUEsQ0FFSiJ9
