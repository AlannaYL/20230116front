import{ad as b,u as x,ac as w,r as p,a as h,k as C,ae as S,o as k,c as q,b as a,w as r,V as B,d as o,h as u,af as d,e as N,ag as R,f as U,i as _,j as f,$}from"./index.c94478a5.js";import{V as j}from"./VOverlay.67e3e25b.js";import{V as D,a as F}from"./VTextField.108cbc58.js";const M={id:"product"},T={class:"text-center"},E={class:"pre"},I=u("h1",{class:"text-red"},"\u5DF2\u4E0B\u67B6",-1),G={__name:"ProductView",setup(O){const V=b(),c=x(),v=w(),{editCart:g}=v,i=p(!1),n=p(0),m={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>=0}},e=h({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),y=()=>{!i.value||g({_id:e._id,quantity:n.value})};return(async()=>{try{const{data:t}=await C.get("/products/"+V.params.id);e._id=t.result._id,e.name=t.result.name,e.price=t.result.price,e.description=t.result.description,e.image=t.result.image,e.sell=t.result.sell,e.category=t.result.category,document.title="\u8CFC\u7269\u7DB2 | "+e.name}catch{S.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),c.go(-1)}})(),(t,s)=>(k(),q("div",M,[a(B,null,{default:r(()=>[a(o,{cols:"12"},{default:r(()=>[u("h1",T,d(e.name),1)]),_:1}),a(N),a(o,{cols:"12"},{default:r(()=>[a(R,{src:e.image},null,8,["src"])]),_:1}),a(o,{cols:"12"},{default:r(()=>[u("p",null,"$"+d(e.price),1),u("p",E,d(e.description),1)]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(D,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=l=>i.value=l),onSubmit:U(y,["prevent"])},{default:r(()=>[a(F,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[m.required,m.number]},null,8,["modelValue","rules"]),a(_,{type:"submit",color:"primary"},{default:r(()=>[f("\u52A0\u5165\u8CFC\u7269\u8ECA")]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}),a(j,{class:"align-center justify-center text-center","model-value":!e.sell,persistent:""},{default:r(()=>[I,a(_,{onClick:s[2]||(s[2]=l=>$(c).go(-1))},{default:r(()=>[f("\u56DE\u4E0A\u9801")]),_:1})]),_:1},8,["model-value"])]))}};export{G as default};
