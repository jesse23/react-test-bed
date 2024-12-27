import{j as t}from"./index-BK2RadcX.js";const a={text:"Not SaaS ready",status:"error",categories:[{text:"Version",status:"pass",items:[{text:"Version is correct",status:"pass"}]},{text:"Capability",status:"error",items:[{text:"OOTB Capability is correct",status:"pass"},{text:"CAD View is not supported",status:"error"}]},{text:"Integration",status:"warn",items:[{text:"SSO",status:"pass"},{text:"Export / Import",status:"warn"}]}]},e=s=>s==="pass"?"green":s==="warn"?"orange":"red",n=({reportData:s})=>t.jsxs("div",{children:[t.jsx("h2",{children:"Impact Analysis"}),t.jsx("div",{style:{backgroundColor:"lightgray",padding:"10px",marginBottom:"10px",marginTop:"10px"},children:"DASHBOARD"}),t.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[t.jsx("div",{children:"Overall status:"}),t.jsx("div",{style:{color:e(s.status),marginLeft:"10px"},children:s.status}),t.jsx("div",{style:{color:e(s.status),marginLeft:"10px"},children:s.text})]}),t.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%"},children:s.categories.map(r=>t.jsxs("div",{style:{margin:"10px",border:"1px solid black",width:"100%"},children:[t.jsx("div",{style:{backgroundColor:e(r.status),color:"white",padding:"10px"},children:r.text}),t.jsx("div",{style:{padding:"10px"},children:r.items.map(i=>t.jsxs("div",{style:{padding:"10px",flexDirection:"row"},children:[t.jsx("span",{children:i.text}),t.jsx("span",{style:{float:"right",color:e(i.status)},children:i.status})]}))})]}))})]}),o=()=>t.jsxs("div",{children:[t.jsx("h1",{children:"Column Report Sample"}),t.jsx(n,{reportData:a})]});export{o as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0U2FtcGxlUGFnZS1CYUpJR2szUS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL1JlcG9ydFNhbXBsZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJdGVtRGF0YSB7XG4gIHRleHQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cERhdGEgZXh0ZW5kcyBJdGVtRGF0YSB7XG4gIGl0ZW1zOiBJdGVtRGF0YVtdO1xufVxuXG5pbnRlcmZhY2UgUmVwb3J0RGF0YSBleHRlbmRzIEl0ZW1EYXRhIHtcbiAgY2F0ZWdvcmllczogR3JvdXBEYXRhW107XG59XG5cbmNvbnN0IFNBTVBMRV9EQVRBOiBSZXBvcnREYXRhID0ge1xuICB0ZXh0OiBcIk5vdCBTYWFTIHJlYWR5XCIsXG4gIHN0YXR1czogXCJlcnJvclwiLFxuICBjYXRlZ29yaWVzOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJWZXJzaW9uXCIsXG4gICAgICBzdGF0dXM6IFwicGFzc1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVmVyc2lvbiBpcyBjb3JyZWN0XCIsXG4gICAgICAgICAgc3RhdHVzOiBcInBhc3NcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkNhcGFiaWxpdHlcIixcbiAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiT09UQiBDYXBhYmlsaXR5IGlzIGNvcnJlY3RcIixcbiAgICAgICAgICBzdGF0dXM6IFwicGFzc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDQUQgVmlldyBpcyBub3Qgc3VwcG9ydGVkXCIsXG4gICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJJbnRlZ3JhdGlvblwiLFxuICAgICAgc3RhdHVzOiBcIndhcm5cIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNTT1wiLFxuICAgICAgICAgIHN0YXR1czogXCJwYXNzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkV4cG9ydCAvIEltcG9ydFwiLFxuICAgICAgICAgIHN0YXR1czogXCJ3YXJuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBnZXRDb2xvckJ5U3RhdHVzID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdGF0dXMgPT09IFwicGFzc1wiID8gXCJncmVlblwiIDogc3RhdHVzID09PSBcIndhcm5cIiA/IFwib3JhbmdlXCIgOiBcInJlZFwiO1xufTtcblxuY29uc3QgQ29sdW1uUmVwb3J0RGFzaGJvYXJkID0gKHsgcmVwb3J0RGF0YSB9OiB7IHJlcG9ydERhdGE6IFJlcG9ydERhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+SW1wYWN0IEFuYWx5c2lzPC9oMj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmF5XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBEQVNIQk9BUkRcbiAgICAgIDwvZGl2PlxuICAgICAgey8qIE92ZXJhbGwgU3RhdHVzICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+T3ZlcmFsbCBzdGF0dXM6PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IGdldENvbG9yQnlTdGF0dXMocmVwb3J0RGF0YS5zdGF0dXMpLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZXBvcnREYXRhLnN0YXR1c31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IGdldENvbG9yQnlTdGF0dXMocmVwb3J0RGF0YS5zdGF0dXMpLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZXBvcnREYXRhLnRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQ2FyZHMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtyZXBvcnREYXRhLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBDYXJkIFRpdGxlICovfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3JCeVN0YXR1cyhjYXRlZ29yeS5zdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiBDYXJkIENvbnRlbnQgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ2V0Q29sb3JCeVN0YXR1cyhpdGVtLnN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ29sdW1uUmVwb3J0U2FtcGxlUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNvbHVtbiBSZXBvcnQgU2FtcGxlPC9oMT5cbiAgICAgIDxDb2x1bW5SZXBvcnREYXNoYm9hcmQgcmVwb3J0RGF0YT17U0FNUExFX0RBVEF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5SZXBvcnRTYW1wbGVQYWdlO1xuIl0sIm5hbWVzIjpbIlNBTVBMRV9EQVRBIiwiZ2V0Q29sb3JCeVN0YXR1cyIsInN0YXR1cyIsIkNvbHVtblJlcG9ydERhc2hib2FyZCIsInJlcG9ydERhdGEiLCJqc3giLCJqc3hzIiwiY2F0ZWdvcnkiLCJpdGVtIiwiQ29sdW1uUmVwb3J0U2FtcGxlUGFnZSJdLCJtYXBwaW5ncyI6IndDQWFBLE1BQU1BLEVBQTBCLENBQzlCLEtBQU0saUJBQ04sT0FBUSxRQUNSLFdBQVksQ0FDVixDQUNFLEtBQU0sVUFDTixPQUFRLE9BQ1IsTUFBTyxDQUNMLENBQ0UsS0FBTSxxQkFDTixPQUFRLE1BQ1YsQ0FDRixDQUNGLEVB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
