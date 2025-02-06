"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4282],{94282:(w,g,c)=>{c.r(g),c.d(g,{InputTextDemoModule:()=>S});var f=c(96814),p=c(60095),r=c(4873),h=c(38616),m=c(93189),s=c(97673),e=c(14769);let v=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,s.a,r.j,p.u5,p.UX,m.V,h.kK,m.V]}),i})();var x=c(42129),d=c(38454);let y=(()=>{var t;class i{constructor(){this.code={basic:'\n<input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value" />',html:'\n<div class="card flex justify-content-center">\n    <input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value" />\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-disabled-demo',\n    templateUrl: './input-text-disabled-demo.html'\n})\nexport class InputTextDisabledDemo {\n    value: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["disabled-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:5,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],["id","disabled-input","type","text","pInputText","",3,"disabled","ngModel","ngModelChange"],["selector","input-text-disabled-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"When "),e.TgZ(4,"i"),e._uU(5,"disabled"),e.qZA(),e._uU(6," is present, the element cannot be edited and focused."),e.qZA()(),e.TgZ(7,"div",2)(8,"input",3),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(9,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("disabled",!0)("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),T=(()=>{var t;class i{constructor(){this.code={basic:'\n<span class="p-float-label">\n    <input pInputText id="username" [(ngModel)]="value" />\n    <label htmlFor="username">Username</label>\n</span>',html:'\n<div class="card flex justify-content-center">\n    <span class="p-float-label">\n        <input pInputText id="username" [(ngModel)]="value" />\n        <label htmlFor="username">Username</label>\n    </span>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-floatlabel-demo',\n    templateUrl: './input-text-floatlabel-demo.html'\n})\nexport class InputTextFloatlabelDemo {\n    value: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["floatlabel-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[1,"p-float-label"],["pInputText","","id","username",3,"ngModel","ngModelChange"],["htmlFor","username"],["selector","input-text-floatlabel-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"A floating label appears on top of the input field when focused."),e.qZA()(),e.TgZ(4,"div",2)(5,"span",3)(6,"input",4),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA(),e.TgZ(7,"label",5),e._uU(8,"Username"),e.qZA()()(),e._UZ(9,"app-code",6),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(5),e.Q6J("ngModel",n.value),e.xp6(3),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),Z=(()=>{var t;class i{constructor(){this.code={basic:'\n<div class="flex flex-column gap-2">\n    <label htmlFor="username">Username</label>\n    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />\n    <small id="username-help">Enter your username to reset your password.</small>\n</div>',html:'\n<div class="card flex justify-content-center">\n    <div class="flex flex-column gap-2">\n        <label htmlFor="username">Username</label>\n        <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />\n        <small id="username-help">Enter your username to reset your password.</small>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-help-text-demo',\n    templateUrl: './input-text-help-text-demo.html'\n})\nexport class InputTextHelpTextDemo {\n    value: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["helptext-doc"]],inputs:{id:"id",title:"title"},decls:15,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[1,"flex","flex-column","gap-2"],["htmlFor","username"],["pInputText","","id","username","aria-describedby","username-help",3,"ngModel","ngModelChange"],["id","username-help"],["selector","input-text-help-text-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"An advisory text can be defined with the semantic "),e.TgZ(4,"i"),e._uU(5,"small"),e.qZA(),e._uU(6," tag."),e.qZA()(),e.TgZ(7,"div",2)(8,"div",3)(9,"label",4),e._uU(10,"Username"),e.qZA(),e.TgZ(11,"input",5),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA(),e.TgZ(12,"small",6),e._uU(13,"Enter your username to reset your password."),e.qZA()()(),e._UZ(14,"app-code",7),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(10),e.Q6J("ngModel",n.value),e.xp6(3),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),_=(()=>{var t;class i{constructor(){this.code={basic:'\n<span class="p-input-icon-left">\n    <i class="pi pi-search"></i>\n    <input type="text" pInputText [(ngModel)]="value" />\n</span>',html:'\n<div class="card flex flex-wrap justify-content-center gap-3">\n    <span class="p-input-icon-left">\n        <i class="pi pi-search"></i>\n        <input type="text" pInputText [(ngModel)]="value" />\n    </span>\n    \n    <span class="p-input-icon-right">\n        <i class="pi pi-spin pi-spinner"></i>\n        <input type="text" pInputText [(ngModel)]="value2" />\n    </span>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-icons-demo',\n    templateUrl: './input-text-icons-demo.html'\n})\nexport class InputTextIconsDemo {\n    value: string | undefined;\n    \n    value2: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["icons-doc"]],inputs:{id:"id",title:"title"},decls:18,vars:5,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","flex-wrap","justify-content-center","gap-3"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"p-input-icon-right"],[1,"pi","pi-spin","pi-spinner"],["selector","input-text-icons-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either "),e.TgZ(4,"i"),e._uU(5,".p-input-icon-left"),e.qZA(),e._uU(6," or "),e.TgZ(7,"i"),e._uU(8,"p-input-icon-right"),e.qZA(),e._uU(9," class."),e.qZA()(),e.TgZ(10,"div",2)(11,"span",3),e._UZ(12,"i",4),e.TgZ(13,"input",5),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e.TgZ(14,"span",6),e._UZ(15,"i",7),e.TgZ(16,"input",5),e.NdJ("ngModelChange",function(a){return n.value2=a}),e.qZA()()(),e._UZ(17,"app-code",8),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(12),e.Q6J("ngModel",n.value),e.xp6(3),e.Q6J("ngModel",n.value2),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),b=(()=>{var t;class i{constructor(){this.code={typescript:"import { InputTextModule } from 'primeng/inputtext';"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:6,consts:[[1,"py-4"],[3,"title","id"],[3,"hideToggleCode","hideStackBlitz","hideCodeSandbox","code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1)(2,"app-code",2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(1),e.Q6J("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0)("code",n.code))},dependencies:[s.h,d.c],encapsulation:2}),i})(),I=(()=>{var t;class i{constructor(){this.code={basic:'\n<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />',html:'\n<div class="card flex justify-content-center">\n    <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-invalid-demo',\n    templateUrl: './input-text-invalid-demo.html'\n})\nexport class InputTextInvalidDemo {\n    value: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["invalid-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],["pInputText","",1,"ng-invalid","ng-dirty",3,"ngModel","ngModelChange"],["selector","input-text-invalid-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Invalid state style is added using the "),e.TgZ(4,"i"),e._uU(5,"ng-invalid"),e.qZA(),e._uU(6," and "),e.TgZ(7,"i"),e._uU(8,"ng-dirty"),e.qZA(),e._uU(9," class to indicate a failed validation."),e.qZA()(),e.TgZ(10,"div",2)(11,"input",3),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(12,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(10),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),M=(()=>{var t;class i{constructor(){this.code={basic:'\n<input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value" />\n<input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />\n<input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />',html:'\n<div class="card flex flex-column align-items-center gap-3 ">\n    <input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value" />\n    <input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />\n    <input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-sizes-demo',\n    templateUrl: './input-text-sizes-demo.html'\n})\nexport class InputTextSizesDemo {\n    value: string | undefined;\n    value2: string | undefined;\n    value3: string | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sizes-doc"]],inputs:{id:"id",title:"title"},decls:15,vars:6,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","flex-column","align-items-center","gap-3"],["pInputText","","type","text","placeholder","Small",1,"p-inputtext-sm",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Normal",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Large",1,"p-inputtext-lg",3,"ngModel","ngModelChange"],["selector","input-text-sizes-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Apply "),e.TgZ(4,"i"),e._uU(5,".p-inputtext-sm"),e.qZA(),e._uU(6," to reduce the size of the input element or "),e.TgZ(7,"i"),e._uU(8,".p-inputtext-lg"),e.qZA(),e._uU(9," to enlarge it."),e.qZA()(),e.TgZ(10,"div",2)(11,"input",3),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA(),e.TgZ(12,"input",4),e.NdJ("ngModelChange",function(a){return n.value2=a}),e.qZA(),e.TgZ(13,"input",5),e.NdJ("ngModelChange",function(a){return n.value3=a}),e.qZA()(),e._UZ(14,"app-code",6),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(10),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("ngModel",n.value2),e.xp6(1),e.Q6J("ngModel",n.value3),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})(),D=(()=>{var t;class i{constructor(){this.code={basic:'<label for="firstname">Firstname</label>\n<input pInputText id="firstname" />\n\n<span id="lastname">Lastname</span>\n<input pInputText aria-labelledby="lastname" />\n\n<input pInputText aria-label="Age" />'}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:36,vars:6,consts:[[3,"title","id"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"div")(1,"app-docsectiontext",0)(2,"h3"),e._uU(3,"Screen Reader"),e.qZA(),e.TgZ(4,"p"),e._uU(5," InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),e.TgZ(6,"i"),e._uU(7,"label"),e.qZA(),e._uU(8," tag combined with "),e.TgZ(9,"i"),e._uU(10,"id"),e.qZA(),e._uU(11," prop or using "),e.TgZ(12,"i"),e._uU(13,"aria-labelledby"),e.qZA(),e._uU(14,", "),e.TgZ(15,"i"),e._uU(16,"aria-label"),e.qZA(),e._uU(17," props. "),e.qZA()(),e._UZ(18,"app-code",1),e.TgZ(19,"h3"),e._uU(20,"Keyboard Support"),e.qZA(),e.TgZ(21,"div",2)(22,"table",3)(23,"thead")(24,"tr")(25,"th"),e._uU(26,"Key"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Function"),e.qZA()()(),e.TgZ(29,"tbody")(30,"tr")(31,"td")(32,"i"),e._uU(33,"tab"),e.qZA()(),e.TgZ(34,"td"),e._uU(35,"Moves focus to the input."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(17),e.Q6J("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[s.h,d.c],encapsulation:2}),i})(),U=(()=>{var t;class i{constructor(){this.code={basic:'\n<input type="text" pInputText [(ngModel)]="value" />',html:'\n<div class="card flex justify-content-center">\n    <input type="text" pInputText [(ngModel)]="value" />\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-basic-demo',\n    templateUrl: './input-text-basic-demo.html'\n})\nexport class InputTextBasicDemo {\n    value: string;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],["type","text","pInputText","",3,"ngModel","ngModelChange"],["selector","input-text-basic-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"InputText is used as a controlled input with "),e.TgZ(4,"i"),e._uU(5,"ngModel"),e.qZA(),e._uU(6," properties."),e.qZA()(),e.TgZ(7,"div",2)(8,"input",3),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(9,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c],encapsulation:2}),i})();var C=c(24009);let A=(()=>{var t;class i{constructor(){this.code={basic:'\n<input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />',html:'\n<div class="card flex justify-content-center">\n    <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'input-text-key-filter-demo',\n    templateUrl: './input-text-key-filter-demo.html'\n})\nexport class InputTextKeyFilterDemo {\n    value: number | undefined;\n}"}}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["key-filter-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[1,"py-4"],[3,"title","id"],["href","/keyfilter"],[1,"card","flex","justify-content-center"],["pInputText","","pKeyFilter","int","placeholder","Integers",3,"ngModel","ngModelChange"],["selector","inputtext-key-filter-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"InputText has built-in key filtering support to block certain keys, refer to "),e.TgZ(4,"a",2),e._uU(5,"keyfilter"),e.qZA(),e._uU(6," page for more information."),e.qZA()(),e.TgZ(7,"div",3)(8,"input",4),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(9,"app-code",5),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p.Fj,p.JJ,p.On,d.c,C.Fr],encapsulation:2}),i})(),J=(()=>{var t;class i{constructor(){this.code={basic:'\n<input type="text" pInputText formControlName="text"/>',html:'\n<div class="card flex justify-content-center">\n    <input type="text" pInputText formControlName="text"/>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'input-text-reactive-forms-demo',\n    templateUrl: './input-text-reactive-forms-demo.html'\n})\nexport class InputTextReactiveFormsDemo implements OnInit {\n    formGroup: FormGroup | undefined;\n\n    ngOnInit() {\n        this.formGroup = new FormGroup({\n            text: new FormControl<string | null>(null)\n        });\n    }\n}"}}ngOnInit(){this.formGroup=new p.cw({text:new p.NI(null)})}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["reactive-forms-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"formGroup"],["type","text","pInputText","","formControlName","text"],["selector","input-text-reactive-forms-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"InputText can also be used with reactive forms. In this case, the "),e.TgZ(4,"i"),e._uU(5,"formControlName"),e.qZA(),e._uU(6," property is used to bind the component to a form control."),e.qZA()(),e.TgZ(7,"div",2)(8,"form",3),e._UZ(9,"input",4),e.qZA()(),e._UZ(10,"app-code",5),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("formGroup",n.formGroup),e.xp6(2),e.Q6J("code",n.code))},dependencies:[s.h,r.o,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,d.c],encapsulation:2}),i})(),F=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:2,consts:[[1,"py-4"],[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1),e.TgZ(2,"div",2)(3,"table",3)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Element"),e.qZA()()(),e.TgZ(10,"tbody")(11,"tr")(12,"td"),e._uU(13,"p-inputtext"),e.qZA(),e.TgZ(14,"td"),e._uU(15,"Input element"),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[d.c],encapsulation:2}),i})();var q=c(89867);let Q=(()=>{var t;class i{constructor(){this.docs=[{id:"import",label:"Import",component:b},{id:"basic",label:"Basic",component:U},{id:"reactive-forms",label:"Reactive Forms",component:J},{id:"icons",label:"Icons",component:_},{id:"keyfilter",label:"Key Filter",component:A},{id:"sizes",label:"Sizes",component:M},{id:"helptext",label:"Help Text",component:Z},{id:"floatlabel",label:"Float Label",component:T},{id:"invalid",label:"Invalid",component:I},{id:"disabled",label:"Disabled",component:y},{id:"style",label:"Style",component:F},{id:"accessibility",label:"Accessibility",component:D}]}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular InputText Component","header","InputText","description","InputText is an extension to standard input element with theming and keyfiltering.",3,"docs"]],template:function(o,n){1&o&&e._UZ(0,"app-doc",0),2&o&&e.Q6J("docs",n.docs)},dependencies:[q.x],styles:[".sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:last-child{margin-bottom:0}.field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}"]}),i})(),j=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[x.Bz.forChild([{path:"",component:Q,data:{doc:!0}}]),x.Bz]}),i})(),S=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ez,j,p.u5,r.j,v,m.V]}),i})()}}]);