"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3485],{3485:(C,m,r)=>{r.r(m),r.d(m,{LoginPageModule:()=>k});var v=r(177),s=r(4341),i=r(4742),d=r(8986),f=r(467),h=r(4319),n=r(3953),p=r(3077),y=r(1889),P=r(3426);const L=[{path:"",component:(()=>{var o;class l{constructor(e,g,t,c,a){this.ls=e,this.router=g,this.hs=t,this.fb=c,this.gs=a,this.form=new s.gE({}),this.ls.clearAuthData(),this.form=this.fb.group({user_login:["exp2",s.k0.required],user_password:["12345678",s.k0.required]})}login(){var e=this;return(0,f.A)(function*(){console.log("test"),e.hs.postDataWithoutToken(h.Y.API_LOGIN,e.form.value).then(function(){var g=(0,f.A)(function*(t){var c,a;return"success"===(null==t?void 0:t.result)?(yield e.ls.set("token",null==t||null===(c=t.data[0])||void 0===c?void 0:c.user_token),yield e.ls.set("UserLogin",null==t||null===(a=t.data[0])||void 0===a?void 0:a.user_login),yield e.ls.set("userdata",null==t?void 0:t.data[0]),yield e.ls.set("connected",!0),e.router.navigate(["/dashboard"]).then(U=>console.log("Authorized, Redirected to Home Page")),!0):(yield e.gs.toastMessage("Utilisateur ou mot de passe incorrect!"),!1)});return function(t){return g.apply(this,arguments)}}())})()}}return(o=l).\u0275fac=function(e){return new(e||o)(n.rXU(p.s),n.rXU(d.Ix),n.rXU(y.s),n.rXU(s.ok),n.rXU(P.O))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:25,vars:2,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["src","../../assets/logo_dark.svg","alt","logo","id","logo"],["color","dark"],[3,"keyup.enter","ngSubmit","formGroup"],["id","sec2"],["size","10"],["placeholder","Email","formControlName","user_login"],["type","password","enterkeyhint","go","placeholder","Mot de passe","formControlName","user_password",3,"keyup.enter"],["id","sec3"],["size","12"],["color","dark","expand","block","type","submit"]],template:function(e,g){1&e&&(n.j41(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),n.EFF(4,"Login"),n.k0s()()(),n.j41(5,"ion-grid")(6,"ion-row")(7,"ion-col"),n.nrm(8,"img",3),n.j41(9,"ion-text",4)(10,"h5"),n.EFF(11,"Se connecter avec votre compte"),n.k0s()()()()(),n.j41(12,"form",5),n.bIt("keyup.enter",function(){return g.login()})("ngSubmit",function(){return g.login()}),n.j41(13,"ion-grid",6)(14,"ion-row")(15,"ion-col",7)(16,"ion-item"),n.nrm(17,"ion-input",8),n.k0s(),n.j41(18,"ion-item")(19,"ion-input",9),n.bIt("keyup.enter",function(){return g.login()}),n.k0s()()()()(),n.j41(20,"ion-grid",10)(21,"ion-row")(22,"ion-col",11)(23,"ion-button",12),n.EFF(24,"Se connecter"),n.k0s()()()()()()),2&e&&(n.Y8G("fullscreen",!0),n.R7$(12),n.Y8G("formGroup",g.form))},dependencies:[s.qT,s.BC,s.cb,i.Jm,i.hU,i.W9,i.lO,i.eU,i.$w,i.uz,i.ln,i.IO,i.BC,i.ai,i.Gw,s.j4,s.JD],styles:["ion-col[_ngcontent-%COMP%]{text-align:center;justify-content:center;align-content:center}ion-row[_ngcontent-%COMP%]{text-align:center;justify-content:center;align-content:center}#logo[_ngcontent-%COMP%]{margin-top:25vh;margin-bottom:50px;width:140px}#sec2[_ngcontent-%COMP%], #sec3[_ngcontent-%COMP%]{margin-top:20px}"]}),l})()}];let M=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[d.iI.forChild(L),d.iI]}),l})(),k=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[v.MD,s.YN,i.bv,M,s.X1]}),l})()}}]);