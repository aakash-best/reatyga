(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{110:function(e,n,t){},111:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(88),l=t.n(i),o=t(3),c=t(4),u=t(30),s=t(33),m=t(92),d=t(93),p=t(112);function b(){var e=Object(o.a)(["\ncolor: white;\n    font-family: ;\n    min-width: 100%;\n    text-align: center;\n    font-family: cursive;\n    font-size: 2rem;\n"]);return b=function(){return e},e}function f(){var e=Object(o.a)(["\ndisplay:flex;\njustify-content:space-around;\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(["\nbackground-color: black;\ncolor:white;\ndisplay:flex;\njustify-content:space-between;\npadding:1%;\nwidth:100%;\n\n"]);return g=function(){return e},e}function v(){var e=Object(o.a)(["\nbackground-color:rgb(255 234 105);\ndisplay:none;\nheight:10vh;\nwidth:100vw;\n\njustify-content:space-between;\nalign-items:center;\nposition: fixed;\nfont-size:2rem;\ntop:0;\nleft:0;\n@media screen and (max-width:570px)\n{\n    \n    z-index:2;\n    margin-bottom:12%;\ndisplay:flex;\n\n}\n\n\n"]);return v=function(){return e},e}var E=c.a.div(v());function h(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,r.a.createElement(m.a,{onClick:function(){return i(!t)},className:"icon"}),r.a.createElement(p.a.div,{drag:!0,className:"mobilelogo"},"FRONTVIEW")),r.a.createElement("div",{className:t?"nav-menus":" nav-menu",onClick:function(){return i(!t)}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{className:"icons"})),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/project"},"ABOUT")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/contact"},"CONTACT")))))}c.a.div(g()),c.a.ul(f()),c.a.div(b());var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"navbar"},r.a.createElement(p.a.div,{drag:!0,dragConstraints:{left:0,top:0,bottom:0,right:0},dragElastic:1,class:"logo"},"FrontView"),r.a.createElement("div",{class:"link"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/project"},"ABOUT")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/contact"},"CONTACT"))))),r.a.createElement(h,null))},x=t(94),O=t.n(x);function j(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n@media screen and (max-width:570px){\n   text-align: center;\n    }\n\nspan{\ncolor:blue;\n\n}\n\n\n\n\n"]);return j=function(){return e},e}function w(){var e=Object(o.a)(["\n@media screen and (min-width:570px){\nwidth:100%;\n}\n"]);return w=function(){return e},e}function k(){var e=Object(o.a)(["\nflex-basis:50% ;\ntext-align: center;\nimg{\nwidth:100%;\nheight:90%;\n\n}\n\n\n\n\n"]);return k=function(){return e},e}function S(){var e=Object(o.a)(["\nflex-direction: column;\nflex-basis:50% ;\ndisplay:flex;\njustify-content:center;\nalign-items: center;\n\n"]);return S=function(){return e},e}function C(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(252 255 214);\nheight: 100vh;\ndisplay: flex;\n\n@media screen and (max-width:570px)\n{\n    margin-top: 17%;\ndisplay:block;\n\n}\nbutton{\nmargin:2% 0%;\nheight:50px;\nwidth:200px;\nbackground-color:transparent;\ncursor:pointer;\nborder: none;\nborder: 5px solid blue;\nborder-radius:20px;\n}\n\n\n"]);return C=function(){return e},e}var U=c.a.div(C()),N=c.a.div(S()),R=c.a.div(k()),F=c.a.div(w()),B=Object(c.a)(p.a.h1)(j());var M=function(){var e={hidden:{y:200,opacity:0},show:{y:0,opacity:1,transition:{duration:1,type:"spring",stiffness:90}},hover:{scale:1.2,textshadow:" 0px 0px 8px rgb(255, 255, 255)",boxshadow:" 0px 0px 8px rgb(255, 255, 255)",transition:{yoyo:1/0}}},n={hidden:{y:-20},show:{y:0,transition:{yoyo:1/0,duration:1}}},t={ani:{x:[-80,80],y:[120,0],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25}}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,r.a.createElement(N,null,r.a.createElement("div",{className:"dotbox"},r.a.createElement(p.a.div,{className:"dot",variants:t,animate:"ani"})),r.a.createElement(F,null,r.a.createElement(B,{variants:e},"Are you looking for",r.a.createElement("br",null)," ",r.a.createElement("span",null,"FrontEnd Developer"))),r.a.createElement(p.a.p,{variants:e},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus a magnam suscipit minus? Ab nesciunt fugit quidem dolore sunt eligendi dolorem repellendus distinctio voluptatem quaerat, impedit vitae ipsam minima sapiente.   "),r.a.createElement(F,null,r.a.createElement(p.a.button,{variants:e,whileHover:"hover"},"Contact Us"))),r.a.createElement(R,null,r.a.createElement(p.a.img,{variants:n,src:O.a,alt:"image"}))))},L=t(115),z=t(57);function I(){var e=Object(o.a)(["\nfont-size: 3rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n"]);return I=function(){return e},e}function H(){var e=Object(o.a)(["\nflex-basis:15rem;\nbackground-color:#f9f7c2;\nmin-height:50px;\ncursor:pointer;\nflex-grow:1;\nmargin: 4%;\npadding:3%;\n:hover{\n    opacity:0.6;\n}\n\n\n\np{\n    text-align: center;\n}\n\n\n\n"]);return H=function(){return e},e}function T(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(254 255 240);\noverflow-x: hidden;\nmin-width:100vw;\n"]);return T=function(){return e},e}function q(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(252 255 214);\njustify-content:space-between;\ndisplay: flex;\nflex-wrap:wrap;\n"]);return q=function(){return e},e}function A(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\ntext-align: center;\nmargin-top:12%;\nspan{\ncolor:blue;\n}\n"]);return A=function(){return e},e}var P=c.a.h1(A()),_=Object(c.a)(p.a.div)(q()),G=Object(c.a)(p.a.div)(T()),W=c.a.div(H()),D=c.a.div(I());var J=function(){var e=Object(z.a)({threshold:.5}),n=Object(u.a)(e,2),t=n[0],a=n[1],i=Object(L.a)();return console.log(a),a?i.start("show"):i.start("hidden"),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{variants:{hidden:{scale:.5,opacity:0},show:{scale:1,opacity:1,Transition:{duration:1}}},animate:i,initial:"hidden",ref:t},r.a.createElement(P,null,"Why ",r.a.createElement("span",null,"Us")),r.a.createElement(_,null,r.a.createElement(W,null,r.a.createElement(D,null,"Time"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur.")),r.a.createElement(W,null,r.a.createElement(D,null,"Cost"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectume.")),r.a.createElement(W,null,r.a.createElement(D,null,"Experience"),r.a.createElement("p",null,"Lorem ipsum, vita ducimus nobis veniam a!")),r.a.createElement(W,null,r.a.createElement(D,null,"Team Work"),r.a.createElement("p",null,"Lorem ipsum, vita ducimus nobis veniam a!")),r.a.createElement(W,null,r.a.createElement(D,null,"Trust"),r.a.createElement("p",null,"Lorem ipsum, vita ducimus nobis veniam a!")))))},V=t(95),X=t.n(V),Q=t(96),K=t.n(Q),Y=t(97),Z=t.n(Y);function $(){var e=Object(o.a)(["\nflex-basis:16rem;\nflex-grow:1;\nbackground-color:#f9f7c2;\ncursor:pointer;\ntext-align:center;\n\nimg{\n    \nwidth:80%;\nheight:80%;\nmargin:2%;\n}\n\n\n"]);return $=function(){return e},e}function ee(){var e=Object(o.a)(["\nfont-size: 1rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\n"]);return ee=function(){return e},e}function ne(){var e=Object(o.a)(["\nfont-size: 3rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n"]);return ne=function(){return e},e}function te(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\ntext-align: center;\nmargin-top:12%;\nspan{\ncolor:blue;\n}\n"]);return te=function(){return e},e}function ae(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(252 255 214);\njustify-content:space-between;\ndisplay: flex;\nflex-wrap:wrap;\n\n"]);return ae=function(){return e},e}function re(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(254 255 240);\noverflow-x: hidden;\n    \n   \n\n"]);return re=function(){return e},e}var ie=Object(c.a)(p.a.div)(re()),le=c.a.div(ae()),oe=c.a.h1(te()),ce=(c.a.div(ne()),c.a.div(ee())),ue=c.a.div($());var se=function(){var e=Object(z.a)({threshold:.5}),n=Object(u.a)(e,2),t=n[0],a=n[1],i=Object(L.a)();return console.log(a),a?i.start("show"):i.start("hidden"),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{variants:{hidden:{scale:.5,opacity:0},show:{scale:1,opacity:1,Transition:{duration:1}}},animate:i,initial:"hidden",ref:t},r.a.createElement(oe,null,"Our ",r.a.createElement("span",null,"Teams")),r.a.createElement(le,null,r.a.createElement(ue,null,r.a.createElement(ce,null,"PROGRAMMER"),r.a.createElement("img",{src:X.a,alt:""})),r.a.createElement(ue,null,r.a.createElement(ce,null,"PROGRAMMER"),r.a.createElement("img",{src:K.a,alt:""})),r.a.createElement(ue,null,r.a.createElement(ce,null,"PROGRAMMER"),r.a.createElement("img",{src:Z.a,alt:""})))))};var me=function(){return r.a.createElement(p.a.div,{exit:"exit",variants:{hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:1,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,y:300,transition:{duration:.75}}},initial:"hidden",animate:"show"},r.a.createElement(M,null),r.a.createElement(J,null),r.a.createElement(se,null))},de=t(113);function pe(){var e=Object(o.a)(["\ntext-align: center;\npadding:2%;\n\n"]);return pe=function(){return e},e}function be(){var e=Object(o.a)(["\nmargin:2%;\ncursor:pointer;\npadding:2%;\nh4{\nfont-size:2rem;\n}\n"]);return be=function(){return e},e}var fe=Object(c.a)(p.a.div)(be()),ge=Object(c.a)(p.a.h4)(pe());var ve=function(e){var n=e.children,t=e.title,i=Object(a.useState)(!1),l=Object(u.a)(i,2),o=l[0],c=l[1];return r.a.createElement(fe,{layout:!0,onClick:function(){return c(!o)}},r.a.createElement(ge,{layout:!0},t),o?n:"",r.a.createElement("hr",null))};function Ee(){var e=Object(o.a)(["\npadding:2%;\np{\n    text-align: center;\n    padding:2%;\n\n}\n"]);return Ee=function(){return e},e}function he(){var e=Object(o.a)(["\nfont-size: 3rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n"]);return he=function(){return e},e}function ye(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(254 255 240);\n@media screen and (max-width:570px)\n{\nmargin-top: 17%;\n}\n"]);return ye=function(){return e},e}function xe(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(252 255 214);\n\n\n"]);return xe=function(){return e},e}function Oe(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\ntext-align: center;\n\nspan{\ncolor:blue;\n}\n"]);return Oe=function(){return e},e}var je=c.a.h1(Oe()),we=c.a.div(xe()),ke=c.a.div(ye()),Se=(c.a.div(he()),c.a.div(Ee()));var Ce=function(){return r.a.createElement(p.a.div,{exit:"exit",variants:{hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:1,type:"spring",stiffness:90}},exit:{opacity:0,y:300,transition:{duration:.75}}},initial:"hidden",animate:"show"},r.a.createElement(ke,null,r.a.createElement(je,null,"Any ",r.a.createElement("span",null,"Question")),r.a.createElement(we,null,r.a.createElement(de.a,null,r.a.createElement(ve,{title:"1. Lorem ipsum dolor sit amet, consectetur adipisicing elit."},r.a.createElement(Se,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?"))),r.a.createElement(ve,{title:"2. Lorem ipsum dolor sit amet, consectetur adipisicing elit."},r.a.createElement(Se,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?"))),r.a.createElement(ve,{title:"3. Lorem ipsum dolor sit amet, consectetur adipisicing elit."},r.a.createElement(Se,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?"))),r.a.createElement(ve,{title:"4. Lorem ipsum dolor sit amet, consectetur adipisicing elit."},r.a.createElement(Se,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?"))),r.a.createElement(ve,{title:"5. Lorem ipsum dolor sit amet, consectetur adipisicing elit."},r.a.createElement(Se,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed consequatur quidem eius iusto sunt magni dolorum molestiae, libero temporibus rerum enim ad eveniet vel labore? Eveniet culpa ratione consectetur?")))))))};function Ue(){var e=Object(o.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth:60%;\ninput{\n    background:transparent;\n    border:none;\n    border-bottom:2px solid white;\n    padding:30px;\n    color:blue;\n    \n}\ninput:hover{\n    background-color:rgb(255 246 189);\n    \n    }\n\n\nbutton{\n    margin-top:20px;\n    height:40px;\n    width:120px;\n    color:gray;\n    background:rgb(255 234 105);\n    border:none;\n    cursor:pointer;\n    border:6px solid rgb(255 246 189);\n    }\n\n    @media screen and (max-width:570px){\n      width:100%;\n      input{\n\n        text-align: center;\n      \n      }\n\n\n\n    }\n\n\n"]);return Ue=function(){return e},e}function Ne(){var e=Object(o.a)(["\nwidth:50%;\n@media screen and (max-width:570px){\n  width:100%;\n}\ntext-align: center;\n"]);return Ne=function(){return e},e}function Re(){var e=Object(o.a)(["\nfont-size: 1rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n\n"]);return Re=function(){return e},e}function Fe(){var e=Object(o.a)(["\nfont-size: 3rem;\ntext-align: center;\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n"]);return Fe=function(){return e},e}function Be(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\ntext-align: center;\n\nspan{\ncolor:blue;\n}\n"]);return Be=function(){return e},e}function Me(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(252 255 214);\ndisplay:flex;\nheight:88vh;\n@media screen and (max-width:570px){\n  height:100vh;\n  display: block;\n  \n}\n"]);return Me=function(){return e},e}function Le(){var e=Object(o.a)(["\npadding:2%;\nbackground-color:rgb(254 255 240);\n@media screen and (max-width:570px)\n{\nmargin-top: 17%;\n}\n"]);return Le=function(){return e},e}var ze=c.a.div(Le()),Ie=c.a.div(Me()),He=c.a.h1(Be()),Te=c.a.div(Fe()),qe=(c.a.div(Re()),Object(c.a)(p.a.div)(Ne())),Ae=c.a.div(Ue());var Pe=function(){var e={hidden:{opacity:0,scale:0},show:{opacity:1,scale:1,when:"beforeChildren",transition:{duration:2}}};return r.a.createElement(p.a.div,{exit:"exit",variants:{hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:1,type:"spring",stiffness:90}},exit:{opacity:0,y:300,transition:{duration:.75}}},initial:"hidden",animate:"show"},r.a.createElement(ze,null,r.a.createElement(He,null,"Contact ",r.a.createElement("span",null,"US")),r.a.createElement(Ie,null,r.a.createElement(qe,{variants:e,initial:"hidden",animate:"show"},r.a.createElement("div",{class:"main_header"},r.a.createElement(Te,null,"Login")),r.a.createElement(Ae,null,r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("input",{type:"password",placeholder:"Password"}),r.a.createElement("div",{class:"button_part"},r.a.createElement("button",null,"Submit")))),r.a.createElement("hr",null),r.a.createElement(qe,{variants:e,initial:"hidden",animate:"show"},r.a.createElement("div",{class:"main_header"},r.a.createElement(Te,null,"Register")),r.a.createElement(Ae,null,r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("input",{type:"email",placeholder:"Email"}),r.a.createElement("input",{type:"number",placeholder:"Phone Number"}),r.a.createElement("div",{class:"button_part"},r.a.createElement("button",null,"Submit")))))))};function _e(){var e=Object(o.a)(["\ndisplay: flex;\njustify-content: space-between;\nwidth:100%;\n\nbutton{\nwidth:60px;\nheight:30px;\ncursor:pointer;\nborder:none;\nborder-radius:10px; \nbackground-color:rgb(255 234 105);\nborder:6px solid rgb(255 246 189);\ncolor:blue;\n}\n\n"]);return _e=function(){return e},e}function Ge(){var e=Object(o.a)(["\n display:flex;\n flex-direction:column;\n input{\n     background:transparent;\n     border:none;\n     border-bottom:2px solid white;\n     padding:30px;\n     color:blue;\n     text-align: center;\n }\n input:hover{\n     background-color:rgb(255 246 189);\n     \n     }\n     text-align: center;\n \n button{\n     margin-top:20px;\n     height:40px;\n     width:120px;\n     color:gray;\n     background:rgb(255 234 105);\n     border:none;\n     cursor:pointer;\n     border:6px solid rgb(255 246 189);\n    border-radius:10px; \n    }\n \n \n \n \n "]);return Ge=function(){return e},e}function We(){var e=Object(o.a)(["\n width:50%;\n height:50%;\nbackground-color:rgb(255 234 105);\nborder-radius:20px;\npadding:2%;\ndisplay: inline;\nbox-shadow: 2px 2px 30px 5px black;\ntransition:2;\n "]);return We=function(){return e},e}function De(){var e=Object(o.a)(["\n positon:fixed;\n top:0;\n left:0;\n min-width:100%;\n min-height:87vh;\n background-color: rgb(252 255 214);\ntransition:3;\noverflow:hidden;\ndisplay: flex;\njustify-content:center;\nalign-items:center;\ntransition:2;\n\n"]);return De=function(){return e},e}function Je(){var e=Object(o.a)(["\nfont-size: 3rem;\n\n  color:blue;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n"]);return Je=function(){return e},e}function Ve(){var e=Object(o.a)(["\n\nbackground-color:rgb(254 255 240);\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(o.a)(["\nbackground-color:rgb(252 255 214);\nheight:88vh;\ndisplay:flex;\njustify-content:center;\nalign-items: center;\n\nbutton{\nwidth: 120px;\nmargin:2%;\nheight:60Px;\ncursor:pointer;\nborder:none;\nbackground-color: rgb(247, 245, 150);\ncolor:blue;\nfont-size:1rem;\n}\n"]);return Xe=function(){return e},e}function Qe(){var e=Object(o.a)(["\nfont-size: 3rem;\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\ntext-align: center;\n\nspan{\ncolor:blue;\n}\n"]);return Qe=function(){return e},e}c.a.h1(Qe());var Ke=c.a.div(Xe()),Ye=c.a.div(Ve()),Ze=c.a.div(Je()),$e=c.a.div(De()),en=c.a.div(We()),nn=c.a.div(Ge()),tn=c.a.div(_e());var an=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1],l=Object(a.useState)(!1),o=Object(u.a)(l,2),c=o[0],s=o[1];return console.log(t),console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null,t&&r.a.createElement($e,null,r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement(Ze,null,"Login"),r.a.createElement("button",{onClick:function(){return i(!t)}},"EXIT")),r.a.createElement(nn,null,r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("input",{type:"password",placeholder:"Password"}),r.a.createElement("div",{class:"button_part"},r.a.createElement("button",null,"Submit"))))),c&&r.a.createElement($e,null,r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement(Ze,null,"Register"),r.a.createElement("button",{onClick:function(){return s(!c)}},"EXIT")),r.a.createElement(nn,null,r.a.createElement("input",{type:"text",placeholder:"Name"}),r.a.createElement("input",{type:"email",placeholder:"Email"}),r.a.createElement("input",{type:"number",placeholder:"Phone Number"}),r.a.createElement("div",{class:"button_part"},r.a.createElement("button",null,"Submit"))))),!c&&!t&&r.a.createElement(Ke,null,r.a.createElement("button",{onClick:function(){return i(!t)}},"Login"),r.a.createElement("button",{onClick:function(){return s(!c)}},"Register"))))},rn=t(9),ln=t(114);function on(){var e=Object(o.a)(["\n\nover-flow:hidden;\n"]);return on=function(){return e},e}function cn(){var e=Object(o.a)(["\n\ncolor:red;\n"]);return cn=function(){return e},e}c.a.h1(cn()),c.a.div(on());var un=function(){var e=Object(rn.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(ln.a,{exitBeforeEnter:!0},r.a.createElement(rn.c,{location:e,key:e.pathname},r.a.createElement(rn.a,{path:"/",exact:!0},r.a.createElement(me,null)),r.a.createElement(rn.a,{path:"/project"},r.a.createElement(Ce,null)),r.a.createElement(rn.a,{path:"/contact"},r.a.createElement(Pe,null)),r.a.createElement(rn.a,{path:"/test"},r.a.createElement(an,null)))))};t(110);l.a.render(r.a.createElement(s.a,null,r.a.createElement(un,null)),document.getElementById("root"))},94:function(e,n,t){e.exports=t.p+"static/media/front.59127ac1.jpeg"},95:function(e,n,t){e.exports=t.p+"static/media/sai.c389ecc3.jpg"},96:function(e,n,t){e.exports=t.p+"static/media/genos.e0b1d25e.jpg"},97:function(e,n,t){e.exports=t.p+"static/media/king.2d6544d3.jpg"},99:function(e,n,t){e.exports=t(111)}},[[99,1,2]]]);
//# sourceMappingURL=main.ec352309.chunk.js.map