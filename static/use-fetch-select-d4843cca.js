import{a as e,V as l,b as a,h as o,i as n,w as t,l as s,ao as u,z as i,f as d,o as c,F as r,p,j as m,am as v}from"./index-39ba4f33.js";function f(a){const{api:o}=a,n=e(!1),t=e([]),s=e("");return l((()=>{n.value=!0,t.value=[],o().then((e=>{t.value=e.data})).finally((()=>{n.value=!1}))})),{loading:n,options:t,value:s}}const h={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"};function V(){return new Promise(((e,l)=>{setTimeout((()=>{Math.random()<.8?e(h):l(new Error("接口发生错误"))}),2e3)}))}const b={class:"app-container"},g=i("h4",null,"该示例是演示：通过 hook 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件",-1),S=i("h5",null,"Select 示例",-1),w=i("h5",null,"Select V2 示例（如果数据量过多，可以选择该组件）",-1),_=a({__name:"use-fetch-select",setup(e){const{loading:l,options:a,value:i}=f({api:V});return(e,f)=>{const h=d("el-option"),V=d("el-select"),_=d("el-select-v2");return c(),o("div",b,[g,S,n(V,{loading:s(l),modelValue:s(i),"onUpdate:modelValue":f[0]||(f[0]=e=>u(i)?i.value=e:null),filterable:""},{default:t((()=>[(c(!0),o(r,null,p(s(a),((e,l)=>(c(),m(h,v(e,{key:l,placeholder:"请选择"}),null,16)))),128))])),_:1},8,["loading","modelValue"]),w,n(_,{loading:s(l),modelValue:s(i),"onUpdate:modelValue":f[1]||(f[1]=e=>u(i)?i.value=e:null),options:s(a),filterable:"",placeholder:"请选择"},null,8,["loading","modelValue","options"])])}}});export{_ as default};
