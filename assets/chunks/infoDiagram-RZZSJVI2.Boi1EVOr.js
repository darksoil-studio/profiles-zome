import{_ as a,l as o,H as i,k as n,I as p}from"../app.CVMaGO26.js";import{p as m}from"./gitGraph-YCYPL57B.-3ce7pXB.js";import"./framework.BbRsG_Ut.js";import"./commonjsHelpers.D6yTTuv9.js";import"./theme.CS54b5Dn.js";import"./baseUniq.VEZTqhcX.js";import"./isSymbol.DnU6SLKZ.js";import"./basePickBy.DZUTxJBm.js";import"./toFinite.CFYyTVp8.js";import"./clone.Bb9boOLt.js";var g={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},v={version:p},d=a(()=>v.version,"getVersion"),c={getVersion:d},l=a((r,t,s)=>{o.debug(`rendering info diagram
`+r);const e=i(t);n(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},I={parser:g,db:c,renderer:f};export{I as diagram};