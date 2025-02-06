"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1040],{81040:(G,g,a)=>{a.r(g),a.d(g,{MenuDemoModule:()=>R});var r=a(96814),u=a(42129),v=a(90601),h=a(3208),Z=a(61323),b=a(13009),y=a(6542),f=a(93189),p=a(97673),e=a(14769);let U=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,p.a,u.Bz,b.$9,y.EV,Z.hJ,v.F,f.V,h.TX,f.V]}),o})();var c=a(76027),l=a(38454);let A=(()=>{var t;class o{constructor(){this.code={basic:'\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-basic-demo',\n    templateUrl: './menu-basic-demo.html'\n})\nexport class MenuBasicDemo implements OnInit {\n    items: MenuItem[] | undefined;\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'New',\n                icon: 'pi pi-fw pi-plus',\n            },\n            {\n                label: 'Delete',\n                icon: 'pi pi-fw pi-trash'\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Delete",icon:"pi pi-fw pi-trash"}]}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-basic-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Menu requires a collection of menuitems as its "),e.TgZ(4,"i"),e._uU(5,"model"),e.qZA(),e._uU(6,"."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"p-menu",3),e.qZA(),e._UZ(9,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(7),e.Q6J("model",s.items),e.xp6(1),e.Q6J("code",s.code))},dependencies:[p.h,c.v2,l.c],encapsulation:2}),o})();var T=a(38712),D=a(22481);function _(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw().$implicit;e.Tol(n.shortcutClass),e.xp6(1),e.Oqu(n.shortcut)}}function M(t,o){if(1&t&&e._UZ(0,"p-badge",9),2&t){const n=e.oxw().$implicit;e.Q6J("value",n.badge)("severity",n.badgeSeverity)}}function q(t,o){if(1&t&&(e.TgZ(0,"a",6)(1,"div"),e._UZ(2,"span"),e.TgZ(3,"span"),e._uU(4),e.qZA()(),e.TgZ(5,"div"),e.YNc(6,_,2,3,"span",7),e.YNc(7,M,1,2,"p-badge",8),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Tol(n.icon),e.xp6(2),e.hij(" ",n.label,""),e.xp6(2),e.Q6J("ngIf",n.shortcut),e.xp6(1),e.Q6J("ngIf",n.badge)}}let x=(()=>{var t;class o{constructor(){this.code={basic:'\n<p-menu [model]="items">\n    <ng-template pTemplate="item" let-item>\n        <a class="p-menuitem-link flex justify-content-between align-items-center p-3">\n            <div>\n                <span [class]="item.icon"></span>\n                <span> {{ item.label }}</span>\n            </div>\n            <div>\n                <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>\n                <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>\n            </div>\n        </a>\n    </ng-template>\n</p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items">\n        <ng-template pTemplate="item" let-item>\n            <a class="p-menuitem-link flex justify-content-between align-items-center p-3">\n                <div>\n                    <span [class]="item.icon"></span>\n                    <span> {{ item.label }}</span>\n                </div>\n                <div>\n                    <span *ngIf="item.shortcut" [class]="item.shortcutClass">{{ item.shortcut }}</span>\n                    <p-badge *ngIf="item.badge" [value]="item.badge" [severity]="item.badgeSeverity"></p-badge>\n                </div>\n            </a>\n        </ng-template>\n    </p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-custom-content-demo',\n    templateUrl: './menu-custom-content-demo.html'\n})\nexport class MenuCustomContentDemo implements OnInit {\n    items: MenuItem[] | undefined;\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: '<span class=\"text-xl font-bold\">Refresh</span>',\n                        escape: false,\n                        icon: 'pi pi-refresh',\n                        iconClass: 'text-xl'\n                    },\n                    {\n                        label: '<span class=\"text-xl font-bold\">Delete</span>',\n                        escape: false,\n                        icon: 'pi pi-times',\n                        iconClass: 'text-xl'\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh",shortcut:"\u2318+U",shortcutClass:"p-1 font-medium border-round text-sm surface-ground"},{label:"Delete",icon:"pi pi-times",shortcut:"\u2318+B",shortcutClass:"p-1 font-medium border-round text-sm surface-ground"}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",badge:"2",badgeSeverity:"success",url:"http://angular.io"},{label:"File Upload",icon:"pi pi-upload",routerLink:"/fileupload",badge:"2"}]}]}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["custom-content-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["pTemplate","item"],["selector","menu-custom-content-demo",3,"code"],[1,"p-menuitem-link","flex","justify-content-between","align-items-center","p-3"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[3,"value","severity"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Label of a menuitem both supports simple strings and html values as well. By default, html values are escaped, use "),e.TgZ(4,"i"),e._uU(5,"escape"),e.qZA(),e._uU(6," property to allow html."),e.qZA()(),e.TgZ(7,"div",2)(8,"p-menu",3),e.YNc(9,q,8,5,"ng-template",4),e.qZA()(),e._UZ(10,"app-code",5),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(7),e.Q6J("model",s.items),e.xp6(2),e.Q6J("code",s.code))},dependencies:[r.O5,p.h,c.v2,T.jx,l.c,D.Ct],encapsulation:2}),o})();var m=a(68938),d=a(99341);let I=(()=>{var t;class o{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-command-demo',\n    templateUrl: './menu-command-demo.html',\n    providers: [MessageService]\n})\nexport class MenuCommandDemo implements OnInit {\n    items: MenuItem[] | undefined;\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Update',\n                icon: 'pi pi-refresh',\n                command: () => {\n                    this.update();\n                }\n            },\n            {\n                label: 'Delete',\n                icon: 'pi pi-times',\n                command: () => {\n                    this.delete();\n                }\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["command-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:11,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-command-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"The function to invoke when an item is clicked is defined using the "),e.TgZ(4,"i"),e._uU(5,"command"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"p-toast")(9,"p-menu",3),e.qZA(),e._UZ(10,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(8),e.Q6J("model",s.items),e.xp6(1),e.Q6J("code",s.code))},dependencies:[p.h,c.v2,d.FN,l.c],encapsulation:2}),o})(),C=(()=>{var t;class o{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-toast></p-toast>\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-group-demo',\n    templateUrl: './menu-group-demo.html',\n    providers: [MessageService]\n})\nexport class MenuGroupDemo implements OnInit {\n    items: MenuItem[] | undefined;\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: 'Update',\n                        icon: 'pi pi-refresh',\n                        command: () => {\n                            this.update();\n                        }\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-times',\n                        command: () => {\n                            this.delete();\n                        }\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["menu-group-demo"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:11,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-group-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Menu supports one level of nesting by defining children with "),e.TgZ(4,"i"),e._uU(5,"items"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"p-toast")(9,"p-menu",3),e.qZA(),e._UZ(10,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(8),e.Q6J("model",s.items),e.xp6(1),e.Q6J("code",s.code))},dependencies:[p.h,c.v2,d.FN,l.c],encapsulation:2}),o})(),S=(()=>{var t;class o{constructor(){this.code={typescript:"import { MenuModule } from 'primeng/menu';"}}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[1,"py-4"],[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1)(2,"app-code",2),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(1),e.Q6J("code",s.code)("hideToggleCode",!0))},dependencies:[p.h,l.c],encapsulation:2}),o})(),w=(()=>{var t;class o{constructor(){this.code={basic:'\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-navigation-demo',\n    templateUrl: './menu-navigation-demo.html'\n})\nexport class MenuNavigationDemo implements OnInit {\n    items: MenuItem[] | undefined;\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},\n                {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},\n                {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}\n            ]\n        }];\n    }\n}"}}ngOnInit(){this.items=[{label:"File",items:[{label:"New",icon:"pi pi-plus",url:"https://primeng.org"},{label:"Open",icon:"pi pi-download",routerLink:["/menu"]},{label:"Recent Files",icon:"pi pi-download",routerLink:["/pagename"],queryParams:{recent:"true"}}]}]}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["navigation-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:4,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-navigation-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3," Navigation is specified using url property for external links and with "),e.TgZ(4,"i"),e._uU(5,"routerLink"),e.qZA(),e._uU(6," for internal ones. If a menuitem has an active route, "),e.TgZ(7,"i"),e._uU(8,"p-menuitem-link-active"),e.qZA(),e._uU(9," style class is added as an indicator. Active route link can be configured with "),e.TgZ(10,"i"),e._uU(11,"routerLinkActiveOptions"),e.qZA(),e._uU(12," property of MenuItem API. "),e.qZA()(),e.TgZ(13,"div",2),e._UZ(14,"p-menu",3),e.qZA(),e._UZ(15,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(13),e.Q6J("model",s.items),e.xp6(1),e.Q6J("code",s.code))},dependencies:[p.h,c.v2,l.c],encapsulation:2}),o})();var O=a(49906);let J=(()=>{var t;class o{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu #menu [model]="items" [popup]="true"></p-menu>\n<button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>',html:'\n<div class="card flex justify-content-center">\n    <p-toast></p-toast>\n    <p-menu #menu [model]="items" [popup]="true"></p-menu>\n    <button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-popup-demo',\n    templateUrl: './menu-popup-demo.html',\n    providers: [MessageService]\n})\nexport class MenuPopupDemo implements OnInit {\n    items: MenuItem[] | undefined;\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: 'Update',\n                        icon: 'pi pi-refresh',\n                        command: () => {\n                            this.update();\n                        }\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-times',\n                        command: () => {\n                            this.delete();\n                        }\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["popup-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:19,vars:5,consts:[[1,"py-4"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model","popup"],["menu",""],["pButton","","type","button","icon","pi pi-bars","label","Show",3,"click"],["selector","menu-popup-demo",3,"code"]],template:function(i,s){if(1&i){const z=e.EpF();e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Popup mode is enabled by setting "),e.TgZ(4,"i"),e._uU(5,"popup"),e.qZA(),e._uU(6," property to "),e.TgZ(7,"i"),e._uU(8,"true"),e.qZA(),e._uU(9," and calling "),e.TgZ(10,"i"),e._uU(11,"toggle"),e.qZA(),e._uU(12," method with an event of the target."),e.qZA()(),e.TgZ(13,"div",2),e._UZ(14,"p-toast")(15,"p-menu",3,4),e.TgZ(17,"button",5),e.NdJ("click",function(P){e.CHM(z);const X=e.MAs(16);return e.KtG(X.toggle(P))}),e.qZA()(),e._UZ(18,"app-code",6),e.qZA()}2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(14),e.Q6J("model",s.items)("popup",!0),e.xp6(3),e.Q6J("code",s.code))},dependencies:[p.h,c.v2,d.FN,O.Hq,l.c],encapsulation:2}),o})();const Q=function(){return["/theming"]};let F=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:41,vars:4,consts:[[1,"py-4"],[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",2),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",3)(8,"table",4)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-menu"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-menu-list"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"List element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-menuitem"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Menuitem element."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-menuitem-text"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Label of a menuitem."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-menuitem-icon"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Icon of a menuitem."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,Q)))},dependencies:[u.rH,l.c],encapsulation:2}),o})(),N=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:112,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){1&i&&(e.TgZ(0,"div")(1,"app-docsectiontext",0)(2,"h3"),e._uU(3,"Screen Reader"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Menu component uses the "),e.TgZ(6,"i"),e._uU(7,"menu"),e.qZA(),e._uU(8," role and the value to describe the menu can either be provided with "),e.TgZ(9,"i"),e._uU(10,"aria-labelledby"),e.qZA(),e._uU(11," or "),e.TgZ(12,"i"),e._uU(13,"aria-label"),e.qZA(),e._uU(14," props. Each list item has a "),e.TgZ(15,"i"),e._uU(16,"presentation"),e.qZA(),e._uU(17," role whereas anchor elements have a "),e.TgZ(18,"i"),e._uU(19,"menuitem"),e.qZA(),e._uU(20," role with "),e.TgZ(21,"i"),e._uU(22,"aria-label"),e.qZA(),e._uU(23," referring to the label of the item and "),e.TgZ(24,"i"),e._uU(25,"aria-disabled"),e.qZA(),e._uU(26," defined if the item is disabled. A submenu within a Menu uses the "),e.TgZ(27,"i"),e._uU(28,"group"),e.qZA(),e._uU(29," role with an "),e.TgZ(30,"i"),e._uU(31,"aria-labelledby"),e.qZA(),e._uU(32," defined as the id of the submenu root menuitem label. "),e.qZA(),e.TgZ(33,"p"),e._uU(34,"In popup mode, the component implicitly manages the "),e.TgZ(35,"i"),e._uU(36,"aria-expanded"),e.qZA(),e._uU(37,", "),e.TgZ(38,"i"),e._uU(39,"aria-haspopup"),e.qZA(),e._uU(40," and "),e.TgZ(41,"i"),e._uU(42,"aria-controls"),e.qZA(),e._uU(43," attributes of the target element to define the relation between the target and the popup."),e.qZA(),e.TgZ(44,"h3"),e._uU(45,"Keyboard Support"),e.qZA(),e.TgZ(46,"div",1)(47,"table",2)(48,"thead")(49,"tr")(50,"th"),e._uU(51,"Key"),e.qZA(),e.TgZ(52,"th"),e._uU(53,"Function"),e.qZA()()(),e.TgZ(54,"tbody")(55,"tr")(56,"td")(57,"i"),e._uU(58,"tab"),e.qZA()(),e.TgZ(59,"td"),e._uU(60,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),e.qZA()(),e.TgZ(61,"tr")(62,"td")(63,"i"),e._uU(64,"shift"),e.qZA(),e._uU(65," + "),e.TgZ(66,"i"),e._uU(67,"tab"),e.qZA()(),e.TgZ(68,"td"),e._uU(69,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),e.qZA()(),e.TgZ(70,"tr")(71,"td")(72,"i"),e._uU(73,"enter"),e.qZA()(),e.TgZ(74,"td"),e._uU(75,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(76,"tr")(77,"td")(78,"i"),e._uU(79,"space"),e.qZA()(),e.TgZ(80,"td"),e._uU(81,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(82,"tr")(83,"td")(84,"i"),e._uU(85,"escape"),e.qZA()(),e.TgZ(86,"td"),e._uU(87,"If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(88,"tr")(89,"td")(90,"i"),e._uU(91,"down arrow"),e.qZA()(),e.TgZ(92,"td"),e._uU(93,"Moves focus to the next menuitem."),e.qZA()(),e.TgZ(94,"tr")(95,"td")(96,"i"),e._uU(97,"up arrow"),e.qZA()(),e.TgZ(98,"td"),e._uU(99,"Moves focus to the previous menuitem."),e.qZA()(),e.TgZ(100,"tr")(101,"td")(102,"i"),e._uU(103,"home"),e.qZA()(),e.TgZ(104,"td"),e._uU(105,"Moves focus to the first menuitem."),e.qZA()(),e.TgZ(106,"tr")(107,"td")(108,"i"),e._uU(109,"end"),e.qZA()(),e.TgZ(110,"td"),e._uU(111,"Moves focus to the last menuitem."),e.qZA()()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id))},dependencies:[l.c],encapsulation:2}),o})();var j=a(89867);const B=function(){return["Menu","MenuItem"]};let k=(()=>{var t;class o{constructor(){this.docs=[{id:"import",label:"Import",component:S},{id:"basic",label:"Basic",component:A},{id:"group",label:"Group",component:C},{id:"popup",label:"Popup",component:J},{id:"custom",label:"Custom Content",component:x},{id:"navigation",label:"Navigation",component:w},{id:"command",label:"Command",component:I},{id:"style",label:"Style",component:F},{id:"accessibility",label:"Accessibility",component:N}]}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Menu Component","header","Menu","description","Menu is a navigation / command component that supports dynamic and static positioning.",3,"docs","apiDocs"]],template:function(i,s){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",s.docs)("apiDocs",e.DdM(2,B))},dependencies:[j.x],encapsulation:2}),o})(),L=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:k}]),u.Bz]}),o})(),R=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,L,U]}),o})()}}]);