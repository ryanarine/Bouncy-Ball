(this.webpackJsonpbouncy=this.webpackJsonpbouncy||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o,i=n(0),s=n.n(i),a=n(2),l=n.n(a),u=n(3),c=n(4),r=n(6),d=n(5),v=n(7),y=10,f=function(e){return Math.min(.9*e,1e4)},p=1;function m(e){return Number(e.slice(0,e.indexOf("px")))}function x(e,t){return Math.abs(e-t)<p}var b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).handleMove=function(){var t=m(o.style.left),n=m(o.style.top),i=e.state,s=i.vx,a=i.vy,l=i.destinationx,u=i.destinationy,c=s,r=a;x(t,l)||s>0&&t>l||s<0&&t<l?(o.style.left=l,c=0):(o.style.left=s*y/100+t+"px",c=f(s)),x(n,u)||a>0&&n>u||a<0&&n<u?(o.style.top=u,r=0):(o.style.top=a*y/100+n+"px",r=f(a)),e.setState({vx:c,vy:r})},e.handleMouseMove=function(t){var n=t.clientX-m(o.style.left),i=t.clientY-m(o.style.top);e.setState({vx0:n,vx:n,vy:i,vy0:i,destinationx:t.clientX,destinationy:t.clientY,time:0})},e.state={vx:0,vy:0,destinationx:0,destinationy:0},e}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"ball"})}},{key:"componentDidMount",value:function(){var e=this;(o=document.getElementById("ball")).style.left="50px",o.style.top="50px",o.addEventListener("mousedown",(function(t){o.style.left=t.clientX+"px",o.style.top=t.clientY+"px",document.body.addEventListener("mousemove",e.handleMouseMove)})),window.addEventListener("mouseup",(function(t){document.body.removeEventListener("mousemove",e.handleMouseMove)})),setInterval(this.handleMove,y)}}]),t}(i.Component);n(13);var h=function(){return s.a.createElement(b,null)};l.a.render(s.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e957d7a0.chunk.js.map