(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(13),u=t.n(r),o=(t(19),t(2)),c=function(e){var n=e.newSearch,t=e.handleSearchChange;return l.a.createElement("div",null,l.a.createElement("form",null,"filter shown with ",l.a.createElement("input",{value:n,onChange:t})))},i=function(e){var n=e.addName,t=e.newName,a=e.newNumber,r=e.handleNameChange,u=e.handleNumberChange;return l.a.createElement("form",{onSubmit:n},l.a.createElement("div",null,"name: ",l.a.createElement("input",{value:t,onChange:r})),l.a.createElement("div",null,"number: ",l.a.createElement("input",{value:a,onChange:u})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.newSearch,a=e.deletePerson,r=[];return""===t?r=n.concat():n.forEach((function(e){e.name.toUpperCase().includes(t.toUpperCase())&&r.push(e)})),l.a.createElement("div",null,r.map((function(e,n){return l.a.createElement("li",{key:n},e.name," ",e.number,l.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))},s=t(3),d=t.n(s),h=function(){return d.a.get("/api/persons").then((function(e){return e.data}))},f=function(e){return d.a.post("/api/persons",e).then((function(e){return e.data}))},p=function(e){return d.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.message;return null===n?null:l.a.createElement("div",{className:"message"},n)},b=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),s=Object(o.a)(u,2),d=s[0],b=s[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),w=g[0],S=g[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),j=N[0],O=N[1],k=Object(a.useState)(null),y=Object(o.a)(k,2),D=y[0],P=y[1];Object(a.useEffect)((function(){h().then((function(e){r(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Phonebook"),l.a.createElement(E,{message:D}),l.a.createElement("div",null,l.a.createElement(c,{newSearch:j,handleSearchChange:function(e){console.log(e.target.value),O(e.target.value)}})),l.a.createElement("h3",null,"Add a new"),l.a.createElement(i,{addName:function(e){e.preventDefault();var n={name:d,number:w};t.some((function(e){return e.name===d}))?window.alert(d+" is already added to phonebook"):r(t.concat(n)),f(n).then((function(e){r(t.concat(e)),P("Added "+e.name),setTimeout((function(){P(null)}),5e3)})),b(""),S("")},newName:d,newNumber:w,handleNameChange:function(e){console.log(e.target.value),b(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),S(e.target.value)}}),l.a.createElement("h3",null,"Numbers"),l.a.createElement(m,{persons:t,newSearch:j,deletePerson:function(e){window.confirm("Delete "+e.name+" ?")&&p(e.id).then((function(n){r(t.filter((function(n){return n.id!==e.id}))),P("Deleted "+e.name),setTimeout((function(){P(null)}),5e3)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba4a714f.chunk.js.map