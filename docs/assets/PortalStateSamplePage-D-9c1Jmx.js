import{r as s,j as t,d as a}from"./index-BK2RadcX.js";function i({parentCount:e,setParentCount:n}){const[o,r]=s.useState(0);return t.jsxs("div",{children:[t.jsxs("p",{children:["Parent State: ",e]}),t.jsx("button",{onClick:()=>n(e+1),children:"Plus Portal State"}),t.jsxs("p",{children:["Portal State: ",o]}),t.jsx("button",{onClick:()=>r(o+1),children:"Plus Portal State"})]})}function c({children:e,enablePortal:n,parentElemId:o}){return n?document.getElementById(o)&&a.createPortal(e,document.getElementById(o)||document.body):e}function d({enablePortal:e,parentElemId:n}){const[o,r]=s.useState(0);return t.jsx(c,{enablePortal:e,parentElemId:n,children:t.jsx(i,{parentCount:o,setParentCount:r})})}function u(){const[e,n]=s.useState(!1);return t.jsxs("div",{children:[t.jsx("h1",{children:"React Portal State Preservation"}),t.jsxs("button",{onClick:()=>n(!e),children:["Move Portal to ",e?"First":"Second"," Container"]}),t.jsx("div",{id:"first-container",style:{border:"1px solid black",padding:"10px"},children:t.jsx("p",{children:"First Container"})}),t.jsx("div",{id:"second-container",style:{border:"1px solid red",padding:"10px"},children:t.jsx("p",{children:"Second Container"})}),t.jsx(d,{enablePortal:!0,parentElemId:e?"second-container":"first-container"})]})}export{u as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9ydGFsU3RhdGVTYW1wbGVQYWdlLUQtOWMxSm14LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvUG9ydGFsU3RhdGVTYW1wbGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuXG5cbmZ1bmN0aW9uIENoaWxkQ29tcG9uZW50KHtcbiAgcGFyZW50Q291bnQsXG4gIHNldFBhcmVudENvdW50LFxufToge1xuICBwYXJlbnRDb3VudDogbnVtYmVyO1xuICBzZXRQYXJlbnRDb3VudDogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+UGFyZW50IFN0YXRlOiB7cGFyZW50Q291bnR9PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYXJlbnRDb3VudChwYXJlbnRDb3VudCArIDEpfT5cbiAgICAgICAgUGx1cyBQb3J0YWwgU3RhdGVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHA+UG9ydGFsIFN0YXRlOiB7Y291bnR9PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5QbHVzIFBvcnRhbCBTdGF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBjaGlsZCBjb21wb25lbnQgd2lsbCBsb3N0IHRoZSBzdGF0ZVxuZnVuY3Rpb24gVGVzdFBvcnRhbCh7XG4gIGNoaWxkcmVuLFxuICBlbmFibGVQb3J0YWwsXG4gIHBhcmVudEVsZW1JZCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZW5hYmxlUG9ydGFsOiBib29sZWFuO1xuICBwYXJlbnRFbGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIGVuYWJsZVBvcnRhbFxuICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbUlkKSAmJlxuICAgICAgICBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudEVsZW1JZCkgYXMgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIClcbiAgICA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBQYXJlbnRDb21wb25lbnQoe1xuICBlbmFibGVQb3J0YWwsXG4gIHBhcmVudEVsZW1JZCxcbn06IHtcbiAgZW5hYmxlUG9ydGFsOiBib29sZWFuO1xuICBwYXJlbnRFbGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxUZXN0UG9ydGFsIGVuYWJsZVBvcnRhbD17ZW5hYmxlUG9ydGFsfSBwYXJlbnRFbGVtSWQ9e3BhcmVudEVsZW1JZH0+XG4gICAgICA8Q2hpbGRDb21wb25lbnQgcGFyZW50Q291bnQ9e2NvdW50fSBzZXRQYXJlbnRDb3VudD17c2V0Q291bnR9IC8+XG4gICAgPC9UZXN0UG9ydGFsPlxuICApO1xufVxuXG5mdW5jdGlvbiBQb3J0YWxTdGF0ZVNhbXBsZVBhZ2UoKSB7XG4gIGNvbnN0IFt0b1NlY0NvbnRhaW5lciwgc2V0VG9TZWNDb250YWluZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWFjdCBQb3J0YWwgU3RhdGUgUHJlc2VydmF0aW9uPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VG9TZWNDb250YWluZXIoIXRvU2VjQ29udGFpbmVyKX0+XG4gICAgICAgIE1vdmUgUG9ydGFsIHRvIHt0b1NlY0NvbnRhaW5lciA/IFwiRmlyc3RcIiA6IFwiU2Vjb25kXCJ9IENvbnRhaW5lclxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiZmlyc3QtY29udGFpbmVyXCJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fVxuICAgICAgPlxuICAgICAgICA8cD5GaXJzdCBDb250YWluZXI8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJzZWNvbmQtY29udGFpbmVyXCJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIiwgcGFkZGluZzogXCIxMHB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgPHA+U2Vjb25kIENvbnRhaW5lcjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhcmVudENvbXBvbmVudFxuICAgICAgICBlbmFibGVQb3J0YWw9e3RydWV9XG4gICAgICAgIHBhcmVudEVsZW1JZD17dG9TZWNDb250YWluZXIgPyBcInNlY29uZC1jb250YWluZXJcIiA6IFwiZmlyc3QtY29udGFpbmVyXCJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxTdGF0ZVNhbXBsZVBhZ2U7XG4iXSwibmFtZXMiOlsiQ2hpbGRDb21wb25lbnQiLCJwYXJlbnRDb3VudCIsInNldFBhcmVudENvdW50IiwiY291bnQiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwianN4cyIsImpzeCIsIlRlc3RQb3J0YWwiLCJjaGlsZHJlbiIsImVuYWJsZVBvcnRhbCIsInBhcmVudEVsZW1JZCIsIlJlYWN0RE9NIiwiUGFyZW50Q29tcG9uZW50IiwiUG9ydGFsU3RhdGVTYW1wbGVQYWdlIiwidG9TZWNDb250YWluZXIiLCJzZXRUb1NlY0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6InNEQUtBLFNBQVNBLEVBQWUsQ0FDdEIsWUFBQUMsRUFDQSxlQUFBQyxDQUNGLEVBR0csQ0FDRCxLQUFNLENBQUNDLEVBQU9DLENBQVEsRUFBSUMsV0FBUyxDQUFDLEVBRXBDLGNBQ0csTUFDQyxDQUFBLFNBQUEsQ0FBQUMsT0FBQyxJQUFFLENBQUEsU0FBQSxDQUFBLGlCQUFlTCxDQUFBLEVBQVksRUFDOUJNLE1BQUMsVUFBTyxRQUFTLElBQU1MLEVBQWVELEVBQWMsQ0FBQyxFQUFHLFNBRXhELG9CQUFBLFNBQ0MsSUFBRSxDQUFBLFNBQUEsQ0FBQSxpQkFBZUUsQ0FBQSxFQUFNLEVBQ3hCSSxNQUFDLFVBQU8sUUFBUyxJQUFNSCxFQUFTRCxFQUFRLENBQUMsRUFBRyxTQUFpQixvQkFBQSxDQUMvRCxDQUFBLENBQUEsQ0FFSixDQUdBLFNBQVNLLEVBQVcsQ0FDbEIsU0FBQUMsRUFDQSxhQUFBQyxFQUNBLGFBQUFDLENBQ0YsRUFJRyxDQUNELE9BQU9ELEVBQ0gsU0FBUyxlQUFlQyxDQUFZLEdBQ2xDQyxFQUFTLGFBQ1BILEVBQ0MsU0FBUyxlQUFlRSxDQUFZLEdBQ25DLFNBQVMsSUFFZixFQUFBRixDQUNOLENBRUEsU0FBU0ksRUFBZ0IsQ0FDdkIsYUFBQUgsRUFDQSxhQUFBQyxDQUNGLEVBR0csQ0FDRCxLQUFNLENBQUNSLEVBQU9DLENBQVEsRUFBSUMsV0FBUyxDQUFDLEVBR2xDLE9BQUFFLEVBQUFBLElBQUNDLEVBQVcsQ0FBQSxhQUFBRSxFQUE0QixhQUFBQyxFQUN0QyxTQUFBSixFQUFBLElBQUNQLEdBQWUsWUFBYUcsRUFBTyxlQUFnQkMsQ0FBVSxDQUFBLENBQ2hFLENBQUEsQ0FFSixDQUVBLFNBQVNVLEdBQXdCLENBQy9CLEtBQU0sQ0FBQ0MsRUFBZ0JDLENBQWlCLEVBQUlYLFdBQVMsRUFBSyxFQUUxRCxjQUNHLE1BQ0MsQ0FBQSxTQUFBLENBQUFFLEVBQUFBLElBQUMsTUFBRyxTQUErQixpQ0FBQSxDQUFBLFNBQ2xDLFNBQU8sQ0FBQSxRQUFTLElBQU1TLEVBQWtCLENBQUNELENBQWMsRUFBRyxTQUFBLENBQUEsa0JBQ3pDQSxFQUFpQixRQUFVLFNBQVMsWUFBQSxFQUN0RCxFQUNBUixFQUFBLElBQUMsTUFBQSxDQUNDLEdBQUcsa0JBQ0gsTUFBTyxDQUFFLE9BQVEsa0JBQW1CLFFBQVMsTUFBTyxFQUVwRCxTQUFBQSxFQUFBQSxJQUFDLEtBQUUsU0FBZSxpQkFBQSxDQUFBLENBQUEsQ0FDcEIsRUFDQUEsRUFBQSxJQUFDLE1BQUEsQ0FDQyxHQUFHLG1CQUNILE1BQU8sQ0FBRSxPQUFRLGdCQUFpQixRQUFTLE1BQU8sRUFFbEQsU0FBQUEsRUFBQUEsSUFBQyxLQUFFLFNBQWdCLGtCQUFBLENBQUEsQ0FBQSxDQUNyQixFQUNBQSxFQUFBLElBQUNNLEVBQUEsQ0FDQyxhQUFjLEdBQ2QsYUFBY0UsRUFBaUIsbUJBQXFCLGlCQUFBLENBQ3RELENBQ0YsQ0FBQSxDQUFBLENBRUoifQ==
