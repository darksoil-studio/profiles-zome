import{b as ye,n as E,s as X,c as Y,S as te,t as Z,p as ve}from"./context.DzK0tg0I.js";import{i as O,x as L,c as se,e as N,r as F,j as me,k as ge}from"./lit-element.DEsU9Zn3.js";import{_ as M}from"./tslib.es6.kHcLnhpD.js";import{f as ce,S as we,_ as $,e as U,r as K,s as le,g as ue,L as be,n as ie,h as _e,j as xe,m as z,l as pe,w as q,D as Ae,E as oe}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import"./create-profile.Cl3dOsbG.js";import"./chunk.G6R7BW5E.B41jhnUh.js";import{o as Ce,h as Pe}from"./style-map.Co6E1u6x.js";import{n as Q,a as $e}from"./edit-profile.DWI8hDUf.js";import{a as De}from"./display-error.BiYNJWRJ.js";import"./chunk.AYM4DUFB.BpqAQD3r.js";import"./chunk.H5RLO2CN.BjICY543.js";import"./chunk.IEJHVVJE.DFTAdcJa.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DbTSaKL5.js";import"./if-defined.BPuz0jc1.js";const re=ye("linked_devices/store"),Ee=60*1e3;function Le(){return Math.floor(Math.random()*10)}function ne(l){const u=[];for(let h=0;h<l;h++)u.push(Le());return u}var ze=O`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,S=class extends ue{constructor(){super(...arguments),this.localize=new be(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let l=this.value;if(this.from){const u=this.getRootNode(),h=this.from.includes("."),b=this.from.includes("[")&&this.from.includes("]");let g=this.from,_="";h?[g,_]=this.from.trim().split("."):b&&([g,_]=this.from.trim().replace(/\]$/,"").split("["));const A="getElementById"in u?u.getElementById(g):null;A?b?l=A.getAttribute(_)||"":h?l=A[_]||"":l=A.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!l)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(l),this.showStatus("success"),this.emit("sl-copy",{detail:{value:l}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(l){const u=this.copyLabel||this.localize.term("copy"),h=this.successLabel||this.localize.term("copied"),b=this.errorLabel||this.localize.term("error"),g=l==="success"?this.successIcon:this.errorIcon,_=ie(this,"copy.in",{dir:"ltr"}),A=ie(this,"copy.out",{dir:"ltr"});this.tooltip.content=l==="success"?h:b,await this.copyIcon.animate(A.keyframes,A.options).finished,this.copyIcon.hidden=!0,this.status=l,g.hidden=!1,await g.animate(_.keyframes,_.options).finished,setTimeout(async()=>{await g.animate(A.keyframes,A.options).finished,g.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(_.keyframes,_.options).finished,this.tooltip.content=u,this.isCopying=!1},this.feedbackDuration)}render(){const l=this.copyLabel||this.localize.term("copy");return L`
      <sl-tooltip
        class=${_e({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${l}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};S.styles=[ce,ze];S.dependencies={"sl-icon":we,"sl-tooltip":De};$([U('slot[name="copy-icon"]')],S.prototype,"copyIcon",2);$([U('slot[name="success-icon"]')],S.prototype,"successIcon",2);$([U('slot[name="error-icon"]')],S.prototype,"errorIcon",2);$([U("sl-tooltip")],S.prototype,"tooltip",2);$([K()],S.prototype,"isCopying",2);$([K()],S.prototype,"status",2);$([E()],S.prototype,"value",2);$([E()],S.prototype,"from",2);$([E({type:Boolean,reflect:!0})],S.prototype,"disabled",2);$([E({attribute:"copy-label"})],S.prototype,"copyLabel",2);$([E({attribute:"success-label"})],S.prototype,"successLabel",2);$([E({attribute:"error-label"})],S.prototype,"errorLabel",2);$([E({attribute:"feedback-duration",type:Number})],S.prototype,"feedbackDuration",2);$([E({attribute:"tooltip-placement"})],S.prototype,"tooltipPlacement",2);$([E({type:Boolean})],S.prototype,"hoist",2);le("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});le("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});S.define("sl-copy-button");var Se=O`
  :host {
    display: inline-block;
  }
`;let de=null;class he{}he.render=function(l,u){de(l,u)};self.QrCreator=he;(function(l){function u(x,i,r,d){var e={},t=l(r,i);t.u(x),t.J(),d=d||0;var n=t.h(),o=t.h()+2*d;return e.text=x,e.level=i,e.version=r,e.O=o,e.a=function(c,w){return c-=d,w-=d,0>c||c>=n||0>w||w>=n?!1:t.a(c,w)},e}function h(x,i,r,d,e,t,n,o,c,w){function D(p,f,s,a,v,C,P){p?(x.lineTo(f+C,s+P),x.arcTo(f,s,a,v,t)):x.lineTo(f,s)}n?x.moveTo(i+t,r):x.moveTo(i,r),D(o,d,r,d,e,-t,0),D(c,d,e,i,e,0,-t),D(w,i,e,i,r,t,0),D(n,i,r,d,r,0,t)}function b(x,i,r,d,e,t,n,o,c,w){function D(p,f,s,a){x.moveTo(p+s,f),x.lineTo(p,f),x.lineTo(p,f+a),x.arcTo(p,f,p+s,f,t)}n&&D(i,r,t,t),o&&D(d,r,-t,t),c&&D(d,e,-t,-t),w&&D(i,e,t,-t)}function g(x,i){var r=i.fill;if(typeof r=="string")x.fillStyle=r;else{var d=r.type,e=r.colorStops;if(r=r.position.map(n=>Math.round(n*i.size)),d==="linear-gradient")var t=x.createLinearGradient.apply(x,r);else if(d==="radial-gradient")t=x.createRadialGradient.apply(x,r);else throw Error("Unsupported fill");e.forEach(([n,o])=>{t.addColorStop(n,o)}),x.fillStyle=t}}function _(x,i){e:{var r=i.text,d=i.v,e=i.N,t=i.K,n=i.P;for(e=Math.max(1,e||1),t=Math.min(40,t||40);e<=t;e+=1)try{var o=u(r,d,e,n);break e}catch{}o=void 0}if(!o)return null;for(r=x.getContext("2d"),i.background&&(r.fillStyle=i.background,r.fillRect(i.left,i.top,i.size,i.size)),d=o.O,t=i.size/d,r.beginPath(),n=0;n<d;n+=1)for(e=0;e<d;e+=1){var c=r,w=i.left+e*t,D=i.top+n*t,p=n,f=e,s=o.a,a=w+t,v=D+t,C=p-1,P=p+1,m=f-1,y=f+1,T=Math.floor(Math.min(.5,Math.max(0,i.R))*t),I=s(p,f),R=s(C,m),H=s(C,f);C=s(C,y);var V=s(p,y);y=s(P,y),f=s(P,f),P=s(P,m),p=s(p,m),w=Math.round(w),D=Math.round(D),a=Math.round(a),v=Math.round(v),I?h(c,w,D,a,v,T,!H&&!p,!H&&!V,!f&&!V,!f&&!p):b(c,w,D,a,v,T,H&&p&&R,H&&V&&C,f&&V&&y,f&&p&&P)}return g(r,i),r.fill(),x}var A={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};de=function(x,i){var r={};Object.assign(r,A,x),r.N=r.minVersion,r.K=r.maxVersion,r.v=r.ecLevel,r.left=r.left,r.top=r.top,r.size=r.size,r.fill=r.fill,r.background=r.background,r.text=r.text,r.R=r.radius,r.P=r.quiet,i instanceof HTMLCanvasElement?((i.width!==r.size||i.height!==r.size)&&(i.width=r.size,i.height=r.size),i.getContext("2d").clearRect(0,0,i.width,i.height),_(i,r)):(x=document.createElement("canvas"),x.width=r.size,x.height=r.size,r=_(x,r),i.appendChild(r))}})(function(){function l(i){var r=h.s(i);return{S:function(){return 4},b:function(){return r.length},write:function(d){for(var e=0;e<r.length;e+=1)d.put(r[e],8)}}}function u(){var i=[],r=0,d={B:function(){return i},c:function(e){return(i[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n+=1)d.m((e>>>t-n-1&1)==1)},f:function(){return r},m:function(e){var t=Math.floor(r/8);i.length<=t&&i.push(0),e&&(i[t]|=128>>>r%8),r+=1}};return d}function h(i,r){function d(p,f){for(var s=-1;7>=s;s+=1)if(!(-1>=p+s||o<=p+s))for(var a=-1;7>=a;a+=1)-1>=f+a||o<=f+a||(n[p+s][f+a]=0<=s&&6>=s&&(a==0||a==6)||0<=a&&6>=a&&(s==0||s==6)||2<=s&&4>=s&&2<=a&&4>=a)}function e(p,f){for(var s=o=4*i+17,a=Array(s),v=0;v<s;v+=1){a[v]=Array(s);for(var C=0;C<s;C+=1)a[v][C]=null}for(n=a,d(0,0),d(o-7,0),d(0,o-7),s=_.G(i),a=0;a<s.length;a+=1)for(v=0;v<s.length;v+=1){C=s[a];var P=s[v];if(n[C][P]==null)for(var m=-2;2>=m;m+=1)for(var y=-2;2>=y;y+=1)n[C+m][P+y]=m==-2||m==2||y==-2||y==2||m==0&&y==0}for(s=8;s<o-8;s+=1)n[s][6]==null&&(n[s][6]=s%2==0);for(s=8;s<o-8;s+=1)n[6][s]==null&&(n[6][s]=s%2==0);for(s=_.w(t<<3|f),a=0;15>a;a+=1)v=!p&&(s>>a&1)==1,n[6>a?a:8>a?a+1:o-15+a][8]=v,n[8][8>a?o-a-1:9>a?15-a:14-a]=v;if(n[o-8][8]=!p,7<=i){for(s=_.A(i),a=0;18>a;a+=1)v=!p&&(s>>a&1)==1,n[Math.floor(a/3)][a%3+o-8-3]=v;for(a=0;18>a;a+=1)v=!p&&(s>>a&1)==1,n[a%3+o-8-3][Math.floor(a/3)]=v}if(c==null){for(p=x.I(i,t),s=u(),a=0;a<w.length;a+=1)v=w[a],s.put(4,4),s.put(v.b(),_.f(4,i)),v.write(s);for(a=v=0;a<p.length;a+=1)v+=p[a].j;if(s.f()>8*v)throw Error("code length overflow. ("+s.f()+">"+8*v+")");for(s.f()+4<=8*v&&s.put(0,4);s.f()%8!=0;)s.m(!1);for(;!(s.f()>=8*v)&&(s.put(236,8),!(s.f()>=8*v));)s.put(17,8);var T=0;for(v=a=0,C=Array(p.length),P=Array(p.length),m=0;m<p.length;m+=1){var I=p[m].j,R=p[m].o-I;for(a=Math.max(a,I),v=Math.max(v,R),C[m]=Array(I),y=0;y<C[m].length;y+=1)C[m][y]=255&s.B()[y+T];for(T+=I,y=_.C(R),I=b(C[m],y.b()-1).l(y),P[m]=Array(y.b()-1),y=0;y<P[m].length;y+=1)R=y+I.b()-P[m].length,P[m][y]=0<=R?I.c(R):0}for(y=s=0;y<p.length;y+=1)s+=p[y].o;for(s=Array(s),y=T=0;y<a;y+=1)for(m=0;m<p.length;m+=1)y<C[m].length&&(s[T]=C[m][y],T+=1);for(y=0;y<v;y+=1)for(m=0;m<p.length;m+=1)y<P[m].length&&(s[T]=P[m][y],T+=1);c=s}for(p=c,s=-1,a=o-1,v=7,C=0,f=_.F(f),P=o-1;0<P;P-=2)for(P==6&&--P;;){for(m=0;2>m;m+=1)n[a][P-m]==null&&(y=!1,C<p.length&&(y=(p[C]>>>v&1)==1),f(a,P-m)&&(y=!y),n[a][P-m]=y,--v,v==-1&&(C+=1,v=7));if(a+=s,0>a||o<=a){a-=s,s=-s;break}}}var t=g[r],n=null,o=0,c=null,w=[],D={u:function(p){p=l(p),w.push(p),c=null},a:function(p,f){if(0>p||o<=p||0>f||o<=f)throw Error(p+","+f);return n[p][f]},h:function(){return o},J:function(){for(var p=0,f=0,s=0;8>s;s+=1){e(!0,s);var a=_.D(D);(s==0||p>a)&&(p=a,f=s)}e(!1,f)}};return D}function b(i,r){if(typeof i.length>"u")throw Error(i.length+"/"+r);var d=function(){for(var t=0;t<i.length&&i[t]==0;)t+=1;for(var n=Array(i.length-t+r),o=0;o<i.length-t;o+=1)n[o]=i[o+t];return n}(),e={c:function(t){return d[t]},b:function(){return d.length},multiply:function(t){for(var n=Array(e.b()+t.b()-1),o=0;o<e.b();o+=1)for(var c=0;c<t.b();c+=1)n[o+c]^=A.i(A.g(e.c(o))+A.g(t.c(c)));return b(n,0)},l:function(t){if(0>e.b()-t.b())return e;for(var n=A.g(e.c(0))-A.g(t.c(0)),o=Array(e.b()),c=0;c<e.b();c+=1)o[c]=e.c(c);for(c=0;c<t.b();c+=1)o[c]^=A.i(A.g(t.c(c))+n);return b(o,0).l(t)}};return e}h.s=function(i){for(var r=[],d=0;d<i.length;d++){var e=i.charCodeAt(d);128>e?r.push(e):2048>e?r.push(192|e>>6,128|e&63):55296>e||57344<=e?r.push(224|e>>12,128|e>>6&63,128|e&63):(d++,e=65536+((e&1023)<<10|i.charCodeAt(d)&1023),r.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|e&63))}return r};var g={L:1,M:0,Q:3,H:2},_=function(){function i(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t}var r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(e){for(var t=e<<10;0<=i(t)-i(1335);)t^=1335<<i(t)-i(1335);return(e<<10|t)^21522},A:function(e){for(var t=e<<12;0<=i(t)-i(7973);)t^=7973<<i(t)-i(7973);return e<<12|t},G:function(e){return r[e-1]},F:function(e){switch(e){case 0:return function(t,n){return(t+n)%2==0};case 1:return function(t){return t%2==0};case 2:return function(t,n){return n%3==0};case 3:return function(t,n){return(t+n)%3==0};case 4:return function(t,n){return(Math.floor(t/2)+Math.floor(n/3))%2==0};case 5:return function(t,n){return t*n%2+t*n%3==0};case 6:return function(t,n){return(t*n%2+t*n%3)%2==0};case 7:return function(t,n){return(t*n%3+(t+n)%2)%2==0};default:throw Error("bad maskPattern:"+e)}},C:function(e){for(var t=b([1],0),n=0;n<e;n+=1)t=t.multiply(b([1,A.i(n)],0));return t},f:function(e,t){if(e!=4||1>t||40<t)throw Error("mode: "+e+"; type: "+t);return 10>t?8:16},D:function(e){for(var t=e.h(),n=0,o=0;o<t;o+=1)for(var c=0;c<t;c+=1){for(var w=0,D=e.a(o,c),p=-1;1>=p;p+=1)if(!(0>o+p||t<=o+p))for(var f=-1;1>=f;f+=1)0>c+f||t<=c+f||(p!=0||f!=0)&&D==e.a(o+p,c+f)&&(w+=1);5<w&&(n+=3+w-5)}for(o=0;o<t-1;o+=1)for(c=0;c<t-1;c+=1)w=0,e.a(o,c)&&(w+=1),e.a(o+1,c)&&(w+=1),e.a(o,c+1)&&(w+=1),e.a(o+1,c+1)&&(w+=1),(w==0||w==4)&&(n+=3);for(o=0;o<t;o+=1)for(c=0;c<t-6;c+=1)e.a(o,c)&&!e.a(o,c+1)&&e.a(o,c+2)&&e.a(o,c+3)&&e.a(o,c+4)&&!e.a(o,c+5)&&e.a(o,c+6)&&(n+=40);for(c=0;c<t;c+=1)for(o=0;o<t-6;o+=1)e.a(o,c)&&!e.a(o+1,c)&&e.a(o+2,c)&&e.a(o+3,c)&&e.a(o+4,c)&&!e.a(o+5,c)&&e.a(o+6,c)&&(n+=40);for(c=w=0;c<t;c+=1)for(o=0;o<t;o+=1)e.a(o,c)&&(w+=1);return n+=Math.abs(100*w/t/t-50)/5*10}};return d}(),A=function(){for(var i=Array(256),r=Array(256),d=0;8>d;d+=1)i[d]=1<<d;for(d=8;256>d;d+=1)i[d]=i[d-4]^i[d-5]^i[d-6]^i[d-8];for(d=0;255>d;d+=1)r[i[d]]=d;return{g:function(e){if(1>e)throw Error("glog("+e+")");return r[e]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return i[e]}}}(),x=function(){function i(e,t){switch(t){case g.L:return r[4*(e-1)];case g.M:return r[4*(e-1)+1];case g.Q:return r[4*(e-1)+2];case g.H:return r[4*(e-1)+3]}}var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(e,t){var n=i(e,t);if(typeof n>"u")throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);e=n.length/3,t=[];for(var o=0;o<e;o+=1)for(var c=n[3*o],w=n[3*o+1],D=n[3*o+2],p=0;p<c;p+=1){var f=D,s={};s.o=w,s.j=f,t.push(s)}return t}};return d}();return h}());const ke=QrCreator;var k=class extends ue{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ke.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var l;return L`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((l=this.label)==null?void 0:l.length)>0?this.label:this.value}
        style=${Ce({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};k.styles=[ce,Se];$([U("canvas")],k.prototype,"canvas",2);$([E()],k.prototype,"value",2);$([E()],k.prototype,"label",2);$([E({type:Number})],k.prototype,"size",2);$([E()],k.prototype,"fill",2);$([E()],k.prototype,"background",2);$([E({type:Number})],k.prototype,"radius",2);$([E({attribute:"error-correction"})],k.prototype,"errorCorrection",2);$([xe(["background","errorCorrection","fill","radius","size","value"])],k.prototype,"generate",1);k.define("sl-qr-code");async function Te(l){return fe(`plugin:${l}|request_permissions`)}async function fe(l,u={},h){return window.__TAURI_INTERNALS__.invoke(l,u,h)}var ee;(function(l){l.QRCode="QR_CODE",l.UPC_A="UPC_A",l.UPC_E="UPC_E",l.EAN8="EAN_8",l.EAN13="EAN_13",l.Code39="CODE_39",l.Code93="CODE_93",l.Code128="CODE_128",l.Codabar="CODABAR",l.ITF="ITF",l.Aztec="AZTEC",l.DataMatrix="DATA_MATRIX",l.PDF417="PDF_417"})(ee||(ee={}));async function Ie(l){return await fe("plugin:barcode-scanner|scan",{...l})}async function Me(){return await Te("barcode-scanner").then(l=>l.camera)}function ae(){return!!window.__TAURI_INTERNALS__}const Re=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);async function Be(){return await Me(),(await Ie({windowed:!1,formats:[ee.QRCode]})).content}let J=class extends te(F){async attemptDiscoverAgent(u){try{await this.store.client.attemptDiscoverAgent(u),this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:u}}))}catch(h){throw Q(z("Error discovering agent.")),h}}async scanAndDiscover(){const u=se(await Be());try{await this.attemptDiscoverAgent(u)}catch(h){console.error(h),await this.scanAndDiscover()}}async firstUpdated(){if(await this.store.client.prepareDiscoverAgent(),this.store.client.onSignal(u=>{u.type==="AgentDiscovered"&&this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:u.agent}}))}),ae()&&Re)try{await this.scanAndDiscover()}catch{Q(z("Error discovering agent. Please try again.")),this.dispatchEvent(new CustomEvent("link-devices-cancelled",{bubbles:!0,composed:!0}))}}renderQrcode(){return L`
			<div class="column" style="gap: 8px; flex: 1;">
				<span style="align-self: center"
					>${z("Scan this code with your other device.")}
				</span>
				<sl-qr-code
					value="${N(this.store.client.client.myPubKey)}"
					style="align-self: center"
					size="240"
				>
				</sl-qr-code>
			</div>

			<span style="align-self: center">${z("OR")} </span>
		`}render(){return L`
			<div class="column" style="gap: 32px; flex: 1;">
				${ae()?this.renderQrcode():L``}
				<div class="column" style="gap: 16px">
					<div class="column" style="gap: 8px">
						<span>${z("Send this code to your other device...")} </span>
						<div class="row" style="align-items: center; gap: 8px">
							<sl-tag style="flex: 1"
								>${N(this.store.client.client.myPubKey)}
							</sl-tag>
							<sl-copy-button
								value="${N(this.store.client.client.myPubKey)}"
							></sl-copy-button>
						</div>
					</div>

					<div class="column" style=" gap: 8px">
						<span style="word-break: break-word;"
							>${z("... and enter here the code from your other device.")}
						</span>

						<sl-input
							@sl-input=${async u=>{const h=u.target;if(N(this.store.client.client.myPubKey)===h.value){Q(z("Please enter the code from your other device.")),h.value="";return}const b=se(h.value);try{await this.attemptDiscoverAgent(b)}catch{h.value=""}}}
						>
						</sl-input>
					</div>
				</div>
			</div>
		`}};J.styles=[...X,O`
			sl-tag::part(base) {
				font-size: 12px;
			}
		`];M([Y({context:re,subscribe:!0}),E()],J.prototype,"store",void 0);J=M([pe(),Z("discover-agent")],J);let W=class extends F{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var u;(u=this.shadowRoot.getElementById("input-0"))===null||u===void 0||u.focus()})}get passcode(){const u=Array.from(this.shadowRoot.querySelectorAll("sl-input")),h=Array.from(Array(this.passcodeLength)).map(()=>{});for(let b=0;b<u.length;b++){if(u[b].value==="")return;const g=parseInt(u[b].value,10);if(g>9)return;h[b]=g}return h}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(h=>h.value=""),setTimeout(()=>{var h;(h=this.shadowRoot.getElementById("input-0"))===null||h===void 0||h.focus()})}maybeDispatchEvent(){const u=this.passcode;u&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:u}}))}render(){return L`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((u,h)=>L`<sl-input
							id="input-${h}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${b=>{if(b.key==="Backspace"){if(b.target.value===""){const _=this.shadowRoot.getElementById(`input-${h-1}`);_&&(_.value=""),setTimeout(()=>{const A=this.shadowRoot.getElementById(`input-${h-1}`);A&&A.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${b=>{const g=b.target;if(!g.value.match(/^[0-9]$/g)){g.value="";return}const _=this.shadowRoot.getElementById(`input-${h+1}`);_&&_.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};W.styles=[X,O`
			sl-input::part(input) {
				text-align: center;
			}
		`];M([E()],W.prototype,"passcodeLength",void 0);W=M([Z("passcode-input")],W);let j=class extends te(F){constructor(){super(...arguments),this.initialized=!1}async firstUpdated(){setTimeout(()=>{var u;(u=this.shadowRoot.getElementById("input-0"))===null||u===void 0||u.focus()}),this.store.client.onSignal(u=>{this.recipient&&(u.type!=="LinkCreated"||u.link_type!=="AgentToLinkedDevices"||N(me(u.action.hashed.content.target_address,ge.AGENT))===N(this.recipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.recipient}})),$e(z("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async prepareLinkDevices(u){this.requestorPasscode=ne(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.requestorPasscode=ne(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRequestor(u,this.requestorPasscode)},Ee),await this.store.client.prepareLinkDevicesRequestor(u,this.requestorPasscode)}renderNumber(){return L`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${z("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorPasscode.join("")}</span>
		</div>`}render(){return this.recipient?this.initialized?this.renderNumber():L`
				<div
					class="column"
					style="gap: 12px; align-items: center; justify-content: center; flex: 1"
				>
					<span>${z("Enter the pass code from your other device:")} </span>
					<passcode-input
						.passcodeLength=${this.store.config.linkDevicePasscodeLength}
						@passcode-change=${async u=>{try{await this.store.client.requestLinkDevices(this.recipient,u.detail.passcode),this.initialized=!0}catch(h){console.error(h),Q(z("Error linking devices. Please try again")),this.recipient=void 0}}}
					>
					</passcode-input>
				</div>
			`:L`
				<discover-agent
					@agent-discovered=${async u=>{this.recipient=u.detail.agentPubKey;try{await this.prepareLinkDevices(this.recipient)}catch(h){Q(z("Error linking devices. Please try again.")),console.error(h),this.recipient=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};j.styles=[X,O`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];M([Y({context:re,subscribe:!0}),E()],j.prototype,"store",void 0);M([E(Pe("recipient"))],j.prototype,"recipient",void 0);M([K()],j.prototype,"initialized",void 0);j=M([Z("link-device-requestor")],j);var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,G=(l,u,h,b)=>{for(var g=b>1?void 0:b?je(u,h):u,_=l.length-1,A;_>=0;_--)(A=l[_])&&(g=(b?A(u,h,g):A(g))||g);return b&&g&&Ne(u,h,g),g};let B=class extends te(F){constructor(){super(...arguments),this.view="question",this.linkingDevices=!1}async createProfileForLinkedDevices(l){if(!this.linkingDevices){this.linkingDevices=!0;try{const u=await this.store.client.getProfileForAgent(l);if(u.length>0){const b=u.sort((g,_)=>_.timestamp-g.timestamp)[0].target;await this.store.client.linkMyAgentToProfile(b)}}catch{}this.linkingDevices=!1}}renderContent(){if(!this.linkedDevicesStore)return L` <create-profile></create-profile> `;const l=this.linkedDevicesStore.myLinkedDevices.get();switch(l.status){case"pending":return L`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return L`<display-error
					.headline=${z("Error fetching your linked devices.")}
					.error=${l.error}
				></display-error>`;case"completed":return l.value.length>0?(this.createProfileForLinkedDevices(l.value[0]),L`<div
						class="column"
						style="flex: 1; justify-content: center; align-items: center; gap: 16px"
					>
						<sl-icon
							style="font-size: 64px"
							.src=${q(Ae)}
						></sl-icon>
						<span
							>${z("Synchronizing profile with your other devices...")}
						</span>
					</div>`):this.view==="create-profile"?L`
						<div class="column" style="align-items: start">
							<sl-button
								variant="text"
								@click=${()=>{this.view="question"}}
								style="margin-bottom: 12px"
							>
								<sl-icon
									slot="prefix"
									.src=${q(oe)}
								></sl-icon>
								${z("Back")}</sl-button
							>
							<create-profile></create-profile>
						</div>
					`:this.view==="link-device"?L` <div class="column" style="align-items: start">
						<sl-button
							variant="text"
							@click=${()=>{this.view="question"}}
							style="margin-bottom: 12px"
						>
							<sl-icon
								slot="prefix"
								.src=${q(oe)}
							></sl-icon>
							${z("Back")}</sl-button
						>
						<sl-card>
							<link-device-requestor
								@device-linked=${async u=>{const h=u.detail.agentPubKey;this.createProfileForLinkedDevices(h)}}
							></link-device-requestor>
						</sl-card>
					</div>`:L`
					<sl-card>
						<div class="column" style="gap: 12px">
							<span class="title"> ${z("Profile Setup")} </span>
							<span>
								${z("Have you already created a profile in this app?")}
							</span>

							<div class="row" style="gap: 12px">
								<sl-button @click=${()=>this.view="create-profile"}
									>${z("No, create a new profile")}
								</sl-button>
								<sl-button
									variant="primary"
									@click=${()=>this.view="link-device"}
									>${z("Yes! Link this device")}
								</sl-button>
							</div>
						</div>
					</sl-card>
				`}}renderPrompt(l){return l?L`<slot></slot>`:L`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const l=this.store.myProfile.get();switch(l.status){case"pending":return L`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return L`<display-error
					.headline=${z("Error fetching your profile.")}
					.error=${l.error}
				></display-error>`;case"completed":return this.renderPrompt(l.value!==void 0)}}};B.styles=[X,O`
			:host {
				display: flex;
				flex: 1;
			}
		`];G([Y({context:ve,subscribe:!0}),E()],B.prototype,"store",2);G([Y({context:re,subscribe:!0}),E()],B.prototype,"linkedDevicesStore",2);G([K()],B.prototype,"view",2);G([K()],B.prototype,"linkingDevices",2);B=G([pe(),Z("profile-prompt")],B);export{B as ProfilePrompt};
