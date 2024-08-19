"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8805],{8805:(g,p,a)=>{a.r(p),a.d(p,{ion_spinner:()=>u});var o=a(4261),d=a(333),f=a(9483),m=a(7895);const u=class{constructor(e){(0,o.r)(this,e),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const e=this.name||f.c.get("spinner"),r=(0,f.b)(this);return e||("ios"===r?"lines":"circular")}render(){var e;const r=this,l=(0,f.b)(r),i=r.getName(),n=null!==(e=m.S[i])&&void 0!==e?e:m.S.lines,k="number"==typeof r.duration&&r.duration>10?r.duration:n.dur,y=[];if(void 0!==n.circles)for(let c=0;c<n.circles;c++)y.push(s(n,k,c,n.circles));else if(void 0!==n.lines)for(let c=0;c<n.lines;c++)y.push(t(n,k,c,n.lines));return(0,o.h)(o.f,{key:"50cbaed55eeab15292447d106a80b93db4cb40de",class:(0,d.c)(r.color,{[l]:!0,[`spinner-${i}`]:!0,"spinner-paused":r.paused||f.c.getBoolean("_testing")}),role:"progressbar",style:n.elmDuration?{animationDuration:k+"ms"}:{}},y)}},s=(e,r,l,i)=>{const n=e.fn(r,l,i);return n.style["animation-duration"]=r+"ms",(0,o.h)("svg",{viewBox:n.viewBox||"0 0 64 64",style:n.style},(0,o.h)("circle",{transform:n.transform||"translate(32,32)",cx:n.cx,cy:n.cy,r:n.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},t=(e,r,l,i)=>{const n=e.fn(r,l,i);return n.style["animation-duration"]=r+"ms",(0,o.h)("svg",{viewBox:n.viewBox||"0 0 64 64",style:n.style},(0,o.h)("line",{transform:"translate(32,32)",y1:n.y1,y2:n.y2}))};u.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},333:(g,p,a)=>{a.d(p,{c:()=>f,g:()=>b,h:()=>d,o:()=>u});var o=a(467);const d=(s,t)=>null!==t.closest(s),f=(s,t)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},t):t,b=s=>{const t={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(s).forEach(e=>t[e]=!0),t},h=/^[a-z][a-z0-9+\-.]*:/,u=function(){var s=(0,o.A)(function*(t,e,r,l){if(null!=t&&"#"!==t[0]&&!h.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,r,l)}return!1});return function(e,r,l,i){return s.apply(this,arguments)}}()}}]);