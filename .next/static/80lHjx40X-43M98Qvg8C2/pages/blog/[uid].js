(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7frN":function(a,e,s){"use strict";s.r(e);var n=s("q1tI"),l=s.n(n),c=s("YFqc"),t=s.n(c),i=(s("2i9h"),l.a.createElement);e.default=function(){return i("div",{className:"footerMother"},i("div",{className:"footerMain"},i("div",{className:"footerBar"},i("div",{className:"footerLinks"},i("div",{className:"companyArea"},i("h3",{className:"companyHead"},"Company"),i(t.a,{href:"/blog/all"},i("a",null,i("p",{className:"companyPara"},"Blog")))),i("div",{className:"careersArea"},i("h3",{className:"careersHead"}," Careers"),i(t.a,{href:"/jobs"},i("a",null,i("p",{className:"careersPara"},"Search Jobs")))),i("div",{className:"connectArea"},i("h3",{className:"connectHead"},"Connect With Us"),i("p",{className:"connectPara"},"704-999-9999"),i("a",{href:"mailto:h3staffing@gmail.com?Subject=Website%20Inquiry"},i("p",{className:"connectPara"},"h3staffing@gmail.com")),i("div",{className:"socialsArea"},i("p",null,"O"),i("p",null,"O"),i("p",null,"O")))),i("hr",null),i("div",{className:"legalDiv"},i("p",{className:"legalPara"},"All Rights Reserved \xa9 2020 | H3 Staffing")))))}},AQhL:function(a,e,s){"use strict";s.r(e);var n=s("q1tI"),l=s.n(n),c=s("Kb3M"),t=s("vDqi"),i=s.n(t),r=s("nOHt"),o=s("JAUf"),u=s("7frN"),m=(s("1ZdS"),l.a.createElement);e.default=function(){var a=Object(r.useRouter)().query.uid,e=Object(n.useState)({}),s=e[0],l=e[1],t=Object(c.useEnv)();return Object(n.useEffect)((function(){i.a.get("".concat(t,"/api/blog/").concat(a)).then((function(a){return l(a.data[0])})).catch((function(a){return console.log(a)}))}),[a]),m("div",null,m(o.default,null),m("div",{className:"singleMother"},m("div",{className:"singleMain"},void 0===s?m("h1",null,"Loading"):m("div",{className:"singlePostContainer"},m("h1",{className:"singleTitle"},s.title),m("p",{className:"singleText"},s.blog_text),m("hr",{className:"singleHr"}),m("div",{className:"dateTimeSingle"},m("p",{className:"singleTime"},s.time_created),m("p",{className:"singleDate"},s.date_created))))),m(u.default,null))}},Ojzb:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[uid]",function(){return s("AQhL")}])}},[["Ojzb",0,1,2,3,5,6,7,4]]]);