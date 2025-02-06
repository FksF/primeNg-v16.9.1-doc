"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[524],{524:(x,d,n)=>{n.r(d),n.d(d,{AccessibilityDemoModule:()=>k});var p=n(96814),h=n(60095),l=n(42129),m=n(73258),u=n(93189),r=n(97673),e=n(14769);let g=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,r.a,u.V,l.Bz,h.u5,m.nD,u.V]}),o})();var c=n(38454);let b=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["colors-doc"]],inputs:{id:"id",title:"title"},decls:39,vars:2,consts:[[1,"py-4"],[3,"title","id"],[1,"flex"],[1,"h-8rem","w-8rem","flex","justify-content-center","align-items-center","mr-5","font-bold","bg-blue-600",2,"border-radius","10px"],[1,"text-white"],[1,"h-8rem","w-8rem","flex","justify-content-center","align-items-center","mr-5","font-bold","bg-blue-400",2,"border-radius","10px"],[1,"h-8rem","w-8rem","flex","justify-content-center","align-items-center","mr-5","font-bold","bg-pink-500",2,"border-radius","10px"],[1,"text-blue-500"],[1,"h-8rem","w-8rem","flex","flex-column","justify-content-center","align-items-center","mr-5","font-bold","bg-gray-900",2,"border-radius","10px"],[1,"text-indigo-500"],[1,"text-indigo-500","pi","pi-times-circle","mt-3","text-xl"],[1,"text-indigo-200"],[1,"text-indigo-200","pi","pi-check-circle","mt-3","text-xl"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Colors on a web page should aim a contrast ratio of at least "),e.TgZ(4,"strong"),e._uU(5,"4.5:1"),e.qZA(),e._uU(6," and consider a selection of colors that do not cause vibration."),e.qZA(),e.TgZ(7,"h3"),e._uU(8,"Good Contrast"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples."),e.qZA(),e.TgZ(11,"div",2)(12,"div",3)(13,"span",4),e._uU(14,"GOOD"),e.qZA()(),e.TgZ(15,"div",5)(16,"span",4),e._uU(17,"BAD"),e.qZA()()(),e.TgZ(18,"h3"),e._uU(19,"Vibration"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration."),e.qZA(),e.TgZ(22,"div",2)(23,"div",6)(24,"span",7),e._uU(25,"VIBRATE"),e.qZA()()(),e.TgZ(26,"h3"),e._uU(27,"Dark Mode"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred."),e.qZA(),e.TgZ(30,"div",2)(31,"div",8)(32,"span",9),e._uU(33,"Indigo 500"),e.qZA(),e._UZ(34,"i",10),e.qZA(),e.TgZ(35,"div",8)(36,"span",11),e._uU(37,"Indigo 200"),e.qZA(),e._UZ(38,"i",12),e.qZA()()()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id))},dependencies:[c.c],encapsulation:2}),o})(),f=(()=>{var t;class o{constructor(){this.code1={html:'<button (click)="onButtonClick($event)">Click></button>'},this.code2={html:'<div class="fancy-button" (click)="onButtonClick($event)">Click</div>'},this.code3={html:'<div class="fancy-button" (click)="onButtonClick($event)" (keydown)="onKeyDown($event)" tabIndex="0">Click</div>'},this.code4={html:'<label htmlFor="myinput">Username:</label>\n<input id="myinput" type="text" name="username" />'}}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["form-controls-doc"]],inputs:{id:"id",title:"title"},decls:21,vars:10,consts:[[1,"py-4"],[3,"title","id"],[3,"code","hideToggleCode"],[1,"doc-section-description"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3," Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be used with space key as well to trigger. "),e.qZA(),e._UZ(4,"app-code",2),e.TgZ(5,"p",3),e._uU(6,"On the other hand, a fancy css based button using a div has no keyboard or screen reader support."),e.qZA(),e._UZ(7,"app-code",2),e.TgZ(8,"p",3)(9,"i"),e._uU(10,"tabindex"),e.qZA(),e._uU(11," is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native form controls should be preferred. "),e.qZA(),e._UZ(12,"app-code",2),e.TgZ(13,"h3"),e._uU(14,"Relations"),e.qZA(),e.TgZ(15,"p",3),e._uU(16,"Form components must be related to another element that describes what the form element is used for. This is usually achieved with the "),e.TgZ(17,"i"),e._uU(18,"label"),e.qZA(),e._uU(19," element."),e.qZA(),e._UZ(20,"app-code",2),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id),e.xp6(3),e.Q6J("code",a.code1)("hideToggleCode",!0),e.xp6(3),e.Q6J("code",a.code2)("hideToggleCode",!0),e.xp6(5),e.Q6J("code",a.code3)("hideToggleCode",!0),e.xp6(8),e.Q6J("code",a.code4)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),o})(),A=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["introduction-doc"]],inputs:{id:"id",title:"title"},decls:44,vars:2,consts:[[1,"py-4"],[3,"title","id"],[1,"line-height-3","bg-indigo-600","text-white","p-3","text-lg",2,"border-radius","10px"],["href","https://www.primetek.com.tr",1,"text-white"],["href","https://www.primetek.com.tr",1,"hover:underline","text-white","font-bold"],["href","https://www.nvaccess.org","alt","NVDA Reader"],["href","https://www.freedomscientific.com/Products/software/JAWS/","alt","JAWS Reader"],["href","https://www.chromevox.com","alt","ChromeVox Reader"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p",2),e._uU(3," Accessibility is a major concern of the Prime UI libraries and PrimeNG is no exception. "),e.TgZ(4,"a",3),e._uU(5,"PrimeTek"),e.qZA(),e._uU(6," teams have initiated a significant process to review and enhance the accessibility features of the components. This guide documents the foundation of the general guidelines that PrimeNG will follow and each component documentation will have a separate "),e.TgZ(7,"b"),e._uU(8,"Accessibility"),e.qZA(),e._uU(9," section that states the keyboard support, screen reader compatibility, the implementation details along with tips to achieve WCAG compliancy. This work has been completed for "),e.TgZ(10,"a",4),e._uU(11,"PrimeVue"),e.qZA(),e._uU(12," as the reference implementation and it will be ported to PrimeNG in Q2 2023. "),e.qZA(),e.TgZ(13,"p"),e._uU(14," According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are crucial to ensure content can be consumed by anyone. "),e.qZA(),e.TgZ(15,"h3"),e._uU(16,"Disabilities"),e.qZA(),e.TgZ(17,"p"),e._uU(18,"Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories;"),e.qZA(),e.TgZ(19,"h3"),e._uU(20,"Visual Impairments"),e.qZA(),e.TgZ(21,"p"),e._uU(22," Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers, page developers are required to make sure content is readable by the readers. Popular readers are "),e.TgZ(23,"a",5),e._uU(24,"NVDA"),e.qZA(),e._uU(25,", "),e.TgZ(26,"a",6),e._uU(27,"JAWS"),e.qZA(),e._uU(28," and "),e.TgZ(29,"a",7),e._uU(30,"ChromeVox"),e.qZA(),e._uU(31,". "),e.qZA(),e.TgZ(32,"h3"),e._uU(33,"Hearing Impairments"),e.qZA(),e.TgZ(34,"p"),e._uU(35," Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is providing textual alternatives, transcripts and captions for content with audio. "),e.qZA(),e.TgZ(36,"h3"),e._uU(37,"Mobility Impairments"),e.qZA(),e.TgZ(38,"p"),e._uU(39," People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or a trackpad remain as solutions for people who are not able to utilize a mouse. "),e.qZA(),e.TgZ(40,"h3"),e._uU(41,"Cognitive Impairments"),e.qZA(),e.TgZ(42,"p"),e._uU(43," Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for cognitive impairments result in better design for any user. "),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id))},dependencies:[c.c],encapsulation:2}),o})(),Z=(()=>{var t;class o{constructor(){this.code1={html:'<div class="header"/>\n    <div class="header-text">Header></div>\n</div>\n\n<div class="nav"></div>\n\n<div class="main">\n    <div class="content"></div>\n    <div class="sidebar"></div>\n</div>\n\n<div class="footer"></div>'},this.code2={html:"<header>\n    <h1>Header</h1>\n</header>\n\n<nav></nav>\n\n<main>\n    <article></article>\n    <aside></aside>\n</main>\n\n<footer></footer>"}}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["semantic-html-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:6,consts:[[1,"py-4"],[3,"title","id"],[3,"code","hideToggleCode"],[1,"doc-section-description"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3," HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular "),e.TgZ(4,"i"),e._uU(5,"div"),e.qZA(),e._uU(6," elements with classes are used. Consider the following example that do not mean too much for readers. "),e.qZA(),e._UZ(7,"app-code",2),e.TgZ(8,"p",3),e._uU(9,"Same layout can be achieved using the semantic elements with screen reader support built-in."),e.qZA(),e._UZ(10,"app-code",2),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id),e.xp6(6),e.Q6J("code",a.code1)("hideToggleCode",!0),e.xp6(3),e.Q6J("code",a.code2)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),o})();var y=n(29702);let v=(()=>{var t;class o{constructor(){this.code1={basic:'<input type="checkbox" value="Prime" name="ui" checked/>'},this.code2={basic:'<div class="fancy-checkbox">\n    <i *ngIf="checked" class="checked-icon"></i>\n</div>'},this.code3={basic:'<span id="chk-label">Remember Me></span>\n<div class="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label" (click)="toggle()" (keydown)="onKeyDown($event)">\n    <i *ngIf="checked" class="checked-icon"></i>\n</div>'},this.code4={basic:'<label for="chkbox">Remember Me></label>\n<div class="fancy-checkbox" (click)="toggle()">\n    <input class="p-sr-only" type="checkbox" id="chkbox" (focus)="updateParentVisuals()" (blur)="updateParentVisuals()" (keydown)="$event.keyCode === 32 && updateParentVisuals()">\n    <i *ngIf="checked" class="checked-icon"></i>\n</div>'}}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["wai-aria-doc"]],inputs:{id:"id",title:"title"},decls:57,vars:11,consts:[[1,"py-4"],[3,"title","id"],[3,"code","hideToggleCode"],[1,"doc-section-description"],[1,"card","flex","align-items-center"],["htmlFor","binary",1,"mr-2"],["inputId","binary",3,"binary"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,' ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeNG. These types of components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized. '),e.qZA(),e.TgZ(4,"p"),e._uU(5," ARIA consists of roles, properties and attributes. "),e.TgZ(6,"b"),e._uU(7,"Roles"),e.qZA(),e._uU(8," define what the element is mainly used for e.g. "),e.TgZ(9,"i"),e._uU(10,"checkbox"),e.qZA(),e._uU(11,", "),e.TgZ(12,"i"),e._uU(13,"dialog"),e.qZA(),e._uU(14,", "),e.TgZ(15,"i"),e._uU(16,"tablist"),e.qZA(),e._uU(17," whereas "),e.TgZ(18,"b"),e._uU(19,"States"),e.qZA(),e._uU(20," and "),e.TgZ(21,"b"),e._uU(22,"Properties"),e.qZA(),e._uU(23," define the metadata of the element like "),e.TgZ(24,"i"),e._uU(25,"aria-checked"),e.qZA(),e._uU(26,", "),e.TgZ(27,"i"),e._uU(28,"aria-disabled"),e.qZA(),e._uU(29,". "),e.qZA(),e.TgZ(30,"p"),e._uU(31,"Consider the following case of a native checkbox. It has built-in keyboard and screen reader support."),e.qZA(),e._UZ(32,"app-code",2),e.TgZ(33,"p",3),e._uU(34," A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and cannot be read by a reader. "),e.qZA(),e._UZ(35,"app-code",2),e.TgZ(36,"p",3),e._uU(37,"One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of "),e.TgZ(38,"i"),e._uU(39,"aria-labelledby"),e.qZA(),e._uU(40," as a replacement of the "),e.TgZ(41,"i"),e._uU(42,"label"),e.qZA(),e._uU(43," tag with htmlFor."),e.qZA(),e._UZ(44,"app-code",2),e.TgZ(45,"p",3),e._uU(46," However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the usage of "),e.TgZ(47,"i"),e._uU(48,"p-sr-only"),e.qZA(),e._uU(49," that hides the elements from the user but not from the screen reader. "),e.qZA(),e._UZ(50,"app-code",2),e.TgZ(51,"p",3),e._uU(52,"A working sample is the PrimeNG checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox."),e.qZA(),e.TgZ(53,"div",4)(54,"label",5),e._uU(55,"Remember Me"),e.qZA(),e._UZ(56,"p-checkbox",6),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id),e.xp6(31),e.Q6J("code",a.code1)("hideToggleCode",!0),e.xp6(3),e.Q6J("code",a.code2)("hideToggleCode",!0),e.xp6(9),e.Q6J("code",a.code3)("hideToggleCode",!0),e.xp6(6),e.Q6J("code",a.code4)("hideToggleCode",!0),e.xp6(6),e.Q6J("binary",!0))},dependencies:[r.h,c.c,y.XZ],encapsulation:2}),o})(),w=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["wcag-doc"]],inputs:{id:"id",title:"title"},decls:17,vars:2,consts:[[1,"py-4"],[3,"title","id"],["href","https://www.w3.org/WAI/standards-guidelines/wcag/","alt","WCAG Website"],["href","https://www.section508.gov/manage/laws-and-policies/"],["href","https://digital-strategy.ec.europa.eu/en/policies/web-accessibility"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p")(3,"a",2),e._uU(4,"WCAG"),e.qZA(),e._uU(5," refers to "),e.TgZ(6,"strong"),e._uU(7,"Web Content Accessibility Guideline"),e.qZA(),e._uU(8,", a standard managed by the WAI (Web Accessibility Initiative) of W3C (World Wide Web Consortium). WCAG consists of recommendations for making the web content more accessible. PrimeNG components aim high level of WCAG compliancy in the near future. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," Various countries around the globe have governmental policies regarding web accessibility as well. Most well known of these are "),e.TgZ(11,"a",3),e._uU(12,"Section 508"),e.qZA(),e._uU(13," in the US and "),e.TgZ(14,"a",4),e._uU(15,"Web Accessibility Directive"),e.qZA(),e._uU(16," of the European Union. "),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("title",a.title)("id",a.id))},dependencies:[c.c],encapsulation:2}),o})();var U=n(89867);let T=(()=>{var t;class o{constructor(){this.docs=[{id:"introduction",label:"Introduction",component:A},{id:"wcag",label:"WCAG",component:w},{id:"form-controls",label:"Form Controls",component:f},{id:"semantic-html",label:"Semantic HTML",component:Z},{id:"wai-aria",label:"WAI-ARIA",component:v},{id:"colors",label:"Colors",component:b}]}}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility"]],decls:1,vars:1,consts:[["docTitle","Accessibility - PrimeNG","header","Accessibility","description","An introduction to accessibility and how it translates to Angular UI Components.",3,"docs"]],template:function(i,a){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",a.docs)},dependencies:[U.x],encapsulation:2}),o})(),_=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild([{path:"",component:T}]),l.Bz]}),o})(),k=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,_,g]}),o})()}}]);