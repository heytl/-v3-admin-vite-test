import{ap as e,b as s,h as t,i as n,w as a,z as o,E as r,f as c,o as i,A as l}from"./index-39ba4f33.js";const u={lock:!0,text:"加载中..."},d=(s,t={})=>{let n;const a=()=>{n&&n.close()},o={...u,...t};return(...t)=>{try{r=o,n=e.service(r);const c=s(...t);return c instanceof Promise?c.then((e=>e)).catch((e=>{throw e})).finally((()=>{a()})):(a(),Promise.resolve(c))}catch(c){throw a(),c}var r}},h={code:0,data:{},message:"获取成功"};function m(){return new Promise((e=>{setTimeout((()=>{e(h)}),1e3)}))}function f(){return new Promise(((e,s)=>{setTimeout((()=>{s(new Error("发生错误"))}),1e3)}))}const g={class:"app-container"},w=o("h4",null,"该示例是演示：通过将要执行的函数传递给 hook，让 hook 自动开启全屏 loading，函数执行结束后自动关闭 loading",-1),p=s({__name:"use-fullscreen-loading",setup(e){const s={text:"即将发生错误...",background:"#F56C6C20",svg:'\n  <path class="path" d="\n    M 30 15\n    L 28 17\n    M 25.61 25.61\n    A 15 15, 0, 0, 1, 15 30\n    A 15 15, 0, 1, 1, 27.99 7.5\n    L 15 15\n  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n',svgViewBox:"-10, -10, 50, 50"},o=async()=>{const e=await d(m)();r.success(e.message)},u=async()=>{try{await d(f,s)()}catch(e){r.error(e.message)}};return(e,s)=>{const r=c("el-button");return i(),t("div",g,[w,n(r,{onClick:o},{default:a((()=>[l("查询成功")])),_:1}),n(r,{onClick:u},{default:a((()=>[l("查询失败")])),_:1})])}}});export{p as default};
