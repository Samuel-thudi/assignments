(self.webpackChunklite=self.webpackChunklite||[]).push([[1888,8916],{69100:(e,n,i)=>{var t=i(99489),a=i(57067);function r(n,i,l){return a()?e.exports=r=Reflect.construct:e.exports=r=function(e,n,i){var a=[null];a.push.apply(a,n);var r=new(Function.bind.apply(e,a));return i&&t(r,i.prototype),r},r.apply(null,arguments)}e.exports=r},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,i)=>{var t=i(29754),a=i(99489),r=i(70430),l=i(69100);function o(n){var i="function"==typeof Map?new Map:void 0;return e.exports=o=function(e){if(null===e||!r(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,n)}function n(){return l(e,arguments,t(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},o(n)}e.exports=o},42130:(e,n,i)=>{"use strict";i.d(n,{Z:()=>l});var t=i(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var r=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z",fill:"#000"});const l=function(e){return t.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),r)}},76972:(e,n,i)=>{"use strict";i.d(n,{Z:()=>l});var t=i(59910),a=i(13882),r=36e5;function l(e,n){(0,a.Z)(2,arguments);var i=(0,t.Z)(e,n)/r;return i>0?Math.floor(i):Math.ceil(i)}},67762:e=>{e.exports=function(e,n){for(var i,t=-1,a=e.length;++t<a;){var r=n(e[t]);void 0!==r&&(i=void 0===i?r:i+r)}return i}},12297:(e,n,i)=>{var t=i(67762),a=i(6557);e.exports=function(e){return e&&e.length?t(e,a):0}},23450:function(e){e.exports=function(){var e=[],n=[],i={},t={},a={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function l(e,n){return e===n?n:e===e.toUpperCase()?n.toUpperCase():e[0]===e[0].toUpperCase()?n.charAt(0).toUpperCase()+n.substr(1).toLowerCase():n.toLowerCase()}function o(e,n){return e.replace(/\$(\d{1,2})/g,(function(e,i){return n[i]||""}))}function d(e,n){return e.replace(n[0],(function(i,t){var a=o(n[1],arguments);return l(""===i?e[t-1]:i,a)}))}function s(e,n,t){if(!e.length||i.hasOwnProperty(e))return n;for(var a=t.length;a--;){var r=t[a];if(r[0].test(n))return d(n,r)}return n}function u(e,n,i){return function(t){var a=t.toLowerCase();return n.hasOwnProperty(a)?l(t,a):e.hasOwnProperty(a)?l(t,e[a]):s(a,t,i)}}function m(e,n,i,t){return function(t){var a=t.toLowerCase();return!!n.hasOwnProperty(a)||!e.hasOwnProperty(a)&&s(a,a,i)===a}}function c(e,n,i){return(i?n+" ":"")+(1===n?c.singular(e):c.plural(e))}return c.plural=u(a,t,e),c.isPlural=m(a,t,e),c.singular=u(t,a,n),c.isSingular=m(t,a,n),c.addPluralRule=function(n,i){e.push([r(n),i])},c.addSingularRule=function(e,i){n.push([r(e),i])},c.addUncountableRule=function(e){"string"!=typeof e?(c.addPluralRule(e,"$0"),c.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},c.addIrregularRule=function(e,n){n=n.toLowerCase(),e=e.toLowerCase(),a[e]=n,t[n]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach((function(e){return c.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return c.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return c.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(c.addUncountableRule),c}()},91575:(e,n,i)=>{"use strict";i.r(n),i.d(n,{RightColumnContent:()=>h,useLoader:()=>f});var t=i(46829),a=i(67294),r=i(36682),l=i(319),o=i.n(l),d=i(9273),s=i(15013),u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecircSidebarQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recirc"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}]}},{kind:"Argument",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RexRecircItem"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPresentationTracker_post"}}]}},{kind:"Field",name:{kind:"Name",value:"feedId"}}]}}]}}]}}]}}].concat(o()(d.Q.definitions),o()(s.h.definitions))},m=i(94986),c=i(50458),k=i(27628),p=i(10774),v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostPageRightColumnQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostRightColumn_post"}}]}}]}}]}}].concat(o()(k.i.definitions),o()(p.w.definitions))},f=function(e){var n=(0,a.useMemo)((function(){return(0,c.mrd)({params:e})}),[e.postId]),i=(0,t.useQuery)(v,{variables:{postId:n||""},skip:!n}),r=(0,t.useQuery)(u,{variables:{postId:n},skip:!n});return(0,a.useMemo)((function(){return{loading:i.loading||r.loading,postRightColumnQueryResult:i,recircSidebarQueryResult:r}}),[i,r])},h=function(e){var n,i=e.postRightColumnQueryResult,t=e.recircSidebarQueryResult,l=null===(n=i.data)||void 0===n?void 0:n.postResult,o=t.data,d=t.refetch;return(0,m.rK)(l)?null:a.createElement(r.J,{post:l,recircData:o,recircRefetch:d})}},52439:(e,n,i)=>{"use strict";i.d(n,{q:()=>m});var t,a=i(67294),r=i(77355),l=i(93310),o=i(87691),d=i(18627),s=i(43487),u=i(50458);!function(e){e[e.Homepage=0]="Homepage",e[e.Topics=1]="Topics",e[e.Profile=2]="Profile"}(t||(t={}));var m=function(e){var n=e.sidebar,i=void 0===n?t.Homepage:n,m=e.isCompactStyle,c=void 0!==m&&m,k=(0,d.Av)(),p=(0,s.v9)((function(e){return e.config.authDomain})),v=(0,s.v9)((function(e){return e.config.productName}));return a.createElement(r.x,{padding:"24px 0",display:"flex",flexDirection:"row",flexWrap:"wrap"},function(e){switch(e){case t.Profile:return["Help","PartnerProgram","Gifting","Careers","Privacy","Terms","StartABlog","Knowable"];default:return["Help","Status","Writers","Blog","Careers","Privacy","Terms","About","Knowable"]}}(i).map((function(e){var n=function(e,n,i){switch(e){case"Help":return{name:"Help",href:(0,u.XpN)(),onClickEventName:null};case"Status":return{name:"Status",href:(0,u.PUj)(),onClickEventName:null};case"Writers":return{name:"Writers",href:(0,u.GMb)(n,i),onClickEventName:"homepage.footer.creatorsClicked"};case"Blog":return{name:"Blog",href:(0,u.OVp)(n),onClickEventName:null};case"Careers":return{name:"Careers",href:(0,u.jZp)(),onClickEventName:null};case"Privacy":return{name:"Privacy",href:(0,u.wob)(),onClickEventName:null};case"Terms":return{name:"Terms",href:(0,u.oHy)(),onClickEventName:null};case"About":return{name:"About",href:(0,u.jQk)({authDomain:n}),onClickEventName:"homepage.footer.aboutClicked"};case"Knowable":return{name:"Knowable",href:"https://knowable.fyi",onClickEventName:null};case"PartnerProgram":return{name:"Partner Program",href:(0,u.GMb)(n,i),onClickEventName:null};case"Gifting":return{name:"Gifting",href:(0,u.Ekm)(n),onClickEventName:null};case"StartABlog":return{name:"Start a blog",href:(0,u.OVp)(n),onClickEventName:null};default:return null}}(e,p,v);return n&&a.createElement(r.x,{key:"rc-footer-link-".concat(n.name),marginRight:c?"6px":"26px",marginBottom:c?void 0:"8px"},a.createElement(l.r,{href:n.href,onClick:function(){null!=n&&n.onClickEventName&&k.event(n.onClickEventName,{})}},a.createElement(o.F,{scale:c?"XS":"M",color:"LIGHTER"},n.name)))})))}},10974:(e,n,i)=>{"use strict";i.d(n,{N:()=>k});var t=i(67294),a=i(6443),r=i(77355),l=i(47230),o=i(21755),d=i(18627),s=i(66411),u=i(90924),m=i(92661),c=i(17583),k=function(e){var n=e.removeSpacing,i=void 0!==n&&n,k=(0,a.H)(),p=k.value,v=k.loading,f=(0,d.Av)(),h=(0,s.Lk)(),g=function(){f.event("upsell.clicked",{dimension:null==h?void 0:h.dimension,locationId:null==h?void 0:h.dimension})},S=(0,m.qt)("ShowPay",{}),N=(0,c.s)()!==o.j.xs;return p||v?null!=p&&p.mediumMemberAt?null:t.createElement(r.x,{paddingTop:i?"0px":"40px",textAlign:"center"},t.createElement(s.cW,{extendSource:!0,source:{name:"upgrade_membership",dimension:"nav_full"}},t.createElement(u.M,null,!N||null!=p&&p.hasPastMemberships?t.createElement(l.z,{href:S,buttonStyle:"BRAND",loading:v,width:"100%",onClick:g},null!=p&&p.hasPastMemberships?"Resume Membership":"Upgrade"):t.createElement(l.z,{href:S,buttonStyle:"BRAND",loading:v,width:"100%",onClick:g},"Get unlimited access")))):null}},14603:(e,n,i)=>{"use strict";i.d(n,{x:()=>u});var t=i(319),a=i.n(t),r=i(61243),l=i(37205),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowerCount_publisher"}}]}}].concat(a()(l.j.definitions))},d=i(1279),s=i(84492),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(a()(r.qy.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),a()(o.definitions),a()(d.m.definitions),a()(s.i.definitions),a()(r.FB.definitions))}},10774:(e,n,i)=>{"use strict";i.d(n,{w:()=>l});var t=i(319),a=i.n(t),r=i(14603),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostRightColumn_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorInfo_user"}}]}}]}}].concat(a()(r.x.definitions))}},36682:(e,n,i)=>{"use strict";i.d(n,{J:()=>N});var t=i(67294),a=i(40358),r=i(44947),l=i(986),o=i(59855),d=i(77355),s=i(97217),u=i(57189),m=i(25550),c=i(49608),k=i(20113),p=i(66411),v=i(18305),f=i(43487),h=function(e){var n,i=e.postId,a=e.recircData,r=e.recircRefetch,l=(0,m.r)(),o=l.viewerId,s=l.loading,h=(0,f.v9)((function(e){return e.config.productName}));(0,t.useEffect)((function(){!s&&(0,c.Q)(o||"")&&r&&r()}),[s,r]);var g=null==a||null===(n=a.recirc)||void 0===n?void 0:n.items;if(null==g||!g.length||!r)return null;var S=g.slice(0,4);return t.createElement(d.x,null,t.createElement(d.x,{marginTop:"40px",marginBottom:"24px"},t.createElement(k.X6,{scale:"XS"},"More from ",h)),t.createElement(d.x,null,S.map((function(e,n){return null!=e&&e.post?t.createElement(p.cW,{source:{name:"read_next_recirc",index:n,feedId:e.feedId||void 0},key:"post-page-read-next-recirc".concat(i,"-").concat(n)},t.createElement(v.o,{post:e.post,presentationContext:"POST_PREVIEW"},t.createElement(u.N,{post:e.post,withFixedWidth:!1}))):null}))))},g=t.memo(h),S=["post"],N=function(e){var n=e.post,i=e.recircData,u=e.recircRefetch;return t.createElement(l.c,null,t.createElement(d.x,{backgroundColor:"BACKGROUND"},t.createElement(a.E,null),t.createElement(d.x,{padding:"40px 0"},t.createElement(o.f,{algoliaIndexes:S,algoliaQueryContext:"post"}),t.createElement(d.x,{marginTop:"40px"}),n.creator&&t.createElement(r.d,{user:n.creator}),!!n.firstPublishedAt&&n.visibility!==s.Wn.UNLISTED&&t.createElement(d.x,{marginTop:"32px"},t.createElement(g,{postId:n.id,recircData:i,recircRefetch:u})))))}},986:(e,n,i)=>{"use strict";i.d(n,{c:()=>o});var t=i(67294),a=i(52439),r=i(77355),l=i(35010),o=function(e){var n=e.children,i=(0,t.useRef)(0),o=(0,t.useRef)(null),d=(0,t.useRef)("stickyToTop");return(0,l.L)((function(){var e=function(){if(o.current){var e=window.scrollY>i.current;i.current=window.scrollY;var n=window.innerHeight,t=o.current.offsetHeight-n;t<=20||(e?("notSticky"===d.current&&window.scrollY>=o.current.offsetTop+t&&(d.current="stickyToBottom",o.current.style.position="sticky",o.current.style.top="".concat(-t,"px")),"stickyToTop"===d.current&&(d.current="notSticky",o.current.style.position="relative",o.current.style.top="0px",o.current.style.marginTop="0px",o.current.style.marginTop="".concat(Math.max(i.current-o.current.offsetTop,0),"px"))):("notSticky"===d.current&&window.scrollY<=o.current.offsetTop&&(d.current="stickyToTop",o.current.style.position="sticky",o.current.style.top="0px",o.current.style.marginTop="0px"),"stickyToBottom"===d.current&&(d.current="notSticky",o.current.style.position="relative",o.current.style.top="0px",o.current.style.marginTop="0px",o.current.style.marginTop="".concat(i.current-t-o.current.offsetTop,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),t.createElement(r.x,{position:"sticky",top:"0",ref:o},t.createElement(r.x,{display:"flex",flexDirection:"column",minHeight:"100vh"},t.createElement(r.x,{flexGrow:"1"},n),t.createElement(a.q,{isCompactStyle:!0})))}},37205:(e,n,i)=>{"use strict";i.d(n,{j:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowerCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},61243:(e,n,i)=>{"use strict";i.d(n,{qy:()=>u,FB:()=>m});var t=i(319),a=i.n(t),r=i(89199),l=i(68216),o=i(14337),d=i(54341),s=i(77136),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(a()(r.b.definitions),a()(l.$m.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}}].concat(a()(o.v.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherSidebarFollowsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}}]}}]}}].concat(a()(d.O.definitions),a()(c.definitions),a()(s.g.definitions))},9273:(e,n,i)=>{"use strict";i.d(n,{Q:()=>u});var t=i(319),a=i.n(t),r=i(27048),l=i(68216),o=i(54341),d=i(4088),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat(a()(r.W.definitions),a()(l.$m.definitions),a()(o.O.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(a()(s.definitions),a()(l.nf.definitions),a()(d.u.definitions))}},57189:(e,n,i)=>{"use strict";i.d(n,{N:()=>S});var t=i(67294),a=i(25145),r=i(68427),l=i(84739),o=i(12643),d=i(4381),s=i(17193),u=i(28695),m=i(93310),c=i(27323),k=i(77355),p=i(26244),v=i(87691),f=i(52069),h=i(14646),g=i(46696),S=function(e){var n,i,S,N=e.post,y=e.withFixedWidth,b=void 0===y||y,F=N&&N.previewImage||{},x=F.focusPercentX,w=F.focusPercentY,$=F.id,E=F.alt,C=N.collection,P=N.creator,R=null!==(n=null==N?void 0:N.title)&&void 0!==n?n:"",D=(0,a.L)(N),T=null!==(i=null==C?void 0:C.name)&&void 0!==i?i:null,_=(0,r.B)(),I=(0,l.I)();P&&(S=I(P));var A=$?"170px":"".concat(226,"px"),U=(0,h.I)(),B=(0,t.useCallback)((function(){return P&&t.createElement(u.K,{user:P})}),[P]);return t.createElement(c.P,{href:D},t.createElement(k.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"24px"},t.createElement(k.x,{display:"flex",flexDirection:"row",justifyContent:"space-between"},t.createElement(k.x,{display:"flex",flexDirection:"column",marginRight:"24px",flexGrow:"1",flexBasis:"0%"},P&&t.createElement(k.x,{display:"flex",alignItems:"center",marginBottom:"8px"},t.createElement(k.x,{marginRight:"8px"},t.createElement(m.r,{href:S},t.createElement(s.Yt,{scale:"XXXS",user:P}))),t.createElement(k.x,{paddingRight:"4px"},t.createElement(p.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:B},t.createElement(k.x,{display:"flex"},t.createElement(m.r,{href:S},t.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},P.name))))),C&&C.name&&t.createElement(t.Fragment,null,t.createElement(k.x,{paddingRight:"4px"},t.createElement(v.F,{scale:"S",color:"LIGHTER"},"in")),t.createElement(k.x,null,t.createElement(m.r,{href:_(C)},t.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},T))))),R&&t.createElement(f.Dx,{scale:"XS",clamp:3},t.createElement("div",{className:b?U({width:A}):void 0},R))),t.createElement(k.x,{width:"56px"},$&&t.createElement(o.G,{height:1,width:1},t.createElement(d.UV,{miroId:$,alt:E||"",aspectRatio:d.Pr.Square,strategy:g._S.Crop,width:56,rules:{borderRadius:"2px"},focusPercentX:x||50,focusPercentY:w||50,freezeGifs:!0}))))))}},12643:(e,n,i)=>{"use strict";i.d(n,{G:()=>r});var t=i(67294),a=i(77355),r=t.forwardRef((function(e,n){var i=e.height,r=void 0===i?1:i,l=e.width,o=void 0===l?1:l,d=e.backgroundColor,s=void 0===d?"BASE_NORMAL":d,u=e.children,m=(o=o||1)/(r=r||1);return t.createElement(a.x,{position:"relative",margin:"auto",backgroundColor:s,ref:n},t.createElement(a.x,{paddingBottom:"".concat(100/m,"%"),height:"0"},u))}))},84492:(e,n,i)=>{"use strict";i.d(n,{i:()=>o});var t=i(319),a=i.n(t),r=i(78693),l=i(71069),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(a()(r.s.definitions),a()(l.w.definitions))}},15013:(e,n,i)=>{"use strict";i.d(n,{h:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPresentationTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.RightColumnContent.723debc8.chunk.js.map