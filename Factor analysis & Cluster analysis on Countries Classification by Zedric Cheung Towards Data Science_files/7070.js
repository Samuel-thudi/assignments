(self.webpackChunklite=self.webpackChunklite||[]).push([[7070],{69948:(e,t,n)=>{"use strict";n.d(t,{rz:()=>d,Fm:()=>u,ik:()=>g});var r=n(319),i=n.n(r),a=n(6436),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ParagraphStyleGrouping_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodyParagraph_highlight"}}]}}].concat(i()(a.Jj.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ParagraphStyleGrouping_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodyParagraph_privateNote"}}]}}].concat(i()(a._V.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ParagraphLayoutGrouping_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphStyleGrouping_highlight"}}]}}].concat(i()(o.definitions))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ParagraphLayoutGrouping_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphStyleGrouping_privateNote"}}]}}].concat(i()(c.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBodySection_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodyParagraph_paragraph"}}]}}].concat(i()(a.tD.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBodySection_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphLayoutGrouping_highlight"}}]}}].concat(i()(s.definitions))},g={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBodySection_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphLayoutGrouping_privateNote"}}]}}].concat(i()(l.definitions))}},41135:(e,t,n)=>{"use strict";n.d(t,{b:()=>C});var r=n(59713),i=n.n(r),a=n(67294),o=n(33380),c=n(46484),s=n(319),l=n.n(s),u=n(28655),d=n.n(u),g=n(71439),p=n(58622),f=n(55260),m=n(96370),h=n(14646),v=n(97217),y=n(32342);function k(){var e=d()(["\n  fragment ParagraphLayoutGrouping_privateNote on Note {\n    ...ParagraphStyleGrouping_privateNote\n  }\n  ","\n"]);return k=function(){return e},e}function E(){var e=d()(["\n  fragment ParagraphLayoutGrouping_highlight on Quote {\n    ...ParagraphStyleGrouping_highlight\n  }\n  ","\n"]);return E=function(){return e},e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={clear:"both"},S={clear:"both",width:"100%"},x=function(e){var t,n,r=e.layoutGroup,i=e.postBodyInserts,o=e.isEmbedded,c=(0,h.I)(),s=r.styleGroups[0].paragraphViewModels[0].richTextStyle,l=r.styleGroups.map((function(e,t){var n=a.createElement(f.ZQ,{key:t,styleGroup:e,postBodyInserts:i,richTextStyle:s});return"FULL_PAGE"===s&&t<3||"INLINE"===s?a.createElement(p.R,{key:t},n):n}));if((0,y.jH)(s)||o||"INLINE"===s)return a.createElement(a.Fragment,null,l);switch(r.effectiveLayout){case"OUTSET_CENTER":case"OUTSET_ROW":return a.createElement("div",{className:c(P)},a.createElement(m.P,{size:{xs:"full",sm:"full",md:"full",lg:"outset",xl:"outset"}},l));case"FULL_WIDTH":return a.createElement("div",{className:c(S)},l);default:return"FULL_PAGE"===s?a.createElement(m.P,{size:"inset"},l):a.createElement("div",{className:c((t=r.effectiveLayout,n={boxSizing:"border-box",margin:"0 auto",width:"100%"},"INSET_CENTER"===t?N(N({},n),{},{maxWidth:"700px",padding:"0 1.25em"}):n))},l)}},O=a.memo(x),w=((0,g.Ps)(E(),f.PL),(0,g.Ps)(k(),f.NR),function(e,t){switch(t){case v.ms.INSET_LEFT:case v.ms.OUTSET_LEFT:return"IMG"===e||"IFRAME"===e?v.ms.INSET_CENTER:t;case v.ms.OUTSET_ROW_CONTINUE:return v.ms.OUTSET_ROW;default:return t||v.ms.INSET_CENTER}}),_=n(98096),I=n(31889),T=n(97489),F={":after":{display:"block",content:'""',clear:"both"}},B=n(46696),L=n(3207);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){return{display:"table-cell",paddingBottom:"32px",verticalAlign:"bottom"}};function j(e){var t,n,r,i,c=e.bgImage,s=e.children,l=e.isFullPage,u=e.paragraphName,d=(0,h.I)(),g=(0,I.F)();return c&&c.id&&l?a.createElement(o.TA,{name:u,type:"bgimage"},a.createElement("div",{className:d((t=c,n=t.id,r=t.originalWidth,i=t.originalHeight,function(){var e=[400,600,800,1e3,1200,1400,1600,1800,2e3],t={miroId:n,strategy:B._S.Resample,verticalGradient:{start:29,end:81,opacity:40}},a=e.reduce((function(n,a,o){var c=(0,B.W6)(D(D({},t),{},{width:a,height:a/r*i}));return o===e.length-1?(n.backgroundImage="url(".concat(c,")"),n):(n["@media (min-width: ".concat(a,"px)")]={backgroundImage:"url(".concat(c,")")},n)}),{});return D({backgroundColor:"rgba(0, 0, 0, 0.9)",backgroundPosition:"50% 50%",backgroundSize:"cover",display:"table",minHeight:"100vh",width:"100%"},a)}))},a.createElement("div",{className:d(G)},a.createElement(_.f,{theme:(0,L.GV)(g)},s)))):s}var C=function(e){var t=e.paragraphViewModels,n=e.postBodyInserts,r=e.section,o=a.useContext(c.M),s=(0,h.I)();if(0===t.length)return null;var u,d=function(e){var t=[],n=[];e.forEach((function(e){var r=w(e.paragraphStyle,e.paragraph.layout),i=t[t.length-1];if(i&&i.effectiveLayout===r)n.push(e);else{if(i){var a,o=(0,f.lD)(n);(a=i.styleGroups).push.apply(a,l()(o))}n.length=0,n.push(e),t.push({styleGroups:[],effectiveLayout:r})}}));var r=t[t.length-1];if(r){var i,a=(0,f.lD)(n);(i=r.styleGroups).push.apply(i,l()(a))}return t}(t),g=(u=t[0].richTextStyle,function(e){switch(u){case"SERIES":return{paddingTop:"32px",paddingBottom:"32px",margin:"auto 0",width:"100%"};case"STREAM":case"CARD":case"FULL_PAGE":case"INLINE":return{wordBreak:"break-word",wordWrap:"break-word"};case"SHORTFORM_CARD":return i()({wordBreak:"break-word",wordWrap:"break-word",position:"relative",overflow:"hidden",height:"340px"},T.md(e),{height:"218px"});default:return{}}});return a.createElement("div",{className:s([g,F])},a.createElement(j,{bgImage:r.backgroundImage,isFullPage:"FULL_PAGE"===t[0].richTextStyle,paragraphName:t[0].paragraph.name},d.map((function(e,t){return a.createElement(O,{key:t,layoutGroup:e,postBodyInserts:n,isEmbedded:o})}))))}},37070:(e,t,n)=>{"use strict";n.d(t,{yO:()=>ge,Pk:()=>pe,v:()=>me,XV:()=>fe,w6:()=>he});var r=n(28655),i=n.n(r),a=n(67154),o=n.n(a),c=n(319),s=n.n(c),l=n(71439),u=n(67294),d=n(33380),g=n(14646),p={display:"flex",justifyContent:"center",marginTop:"32px",marginBottom:"14px",paddingTop:"24px",paddingBottom:"10px"},f=function(e){return{backgroundColor:e.baseColor.text.darker,borderRadius:"50%",display:"inline-block",height:"3px",width:"3px"}},m={marginRight:"20px"};function h(){var e=(0,g.I)();return u.createElement("div",{className:e(p),role:"separator"},u.createElement("span",{className:e([f,m])}),u.createElement("span",{className:e([f,m])}),u.createElement("span",{className:e(f)}))}var v=n(41135),y=n(69948),k=n(63038),E=n.n(k),b=n(50008),N=n.n(b),P=n(23450),S=n.n(P),x=n(17193),O=n(27048),w=n(77355),_=n(8431),I=n(31889),T=n(34135);function F(){var e=i()(["\n  fragment PostNotesDetails_user on User {\n    id\n    imageId\n    name\n    username\n    ...UserAvatar_user\n  }\n  ","\n"]);return F=function(){return e},e}function B(e){var t=e.grid.xStep;return{padding:"".concat(3*t,"px ").concat(4*t,"px ").concat(3*t,"px"),width:"400px"}}function L(e){var t=e.close,n=e.users,r=(0,g.I)(),i=u.useRef(null),a=(0,I.F)(),o=a.grid.xStep;return u.useEffect((function(){function e(){var e=i.current;if(e&&e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=n.bottom,o=n.top<0||r>window.innerHeight,c=window.innerWidth<a.breakpoints.xl;(o||c)&&t()}}return T.V6.on("scroll_end",e),T.V6.on("resize_throttled",e),function(){T.V6.off("scroll_end",e),T.V6.off("resize_throttled",e)}}),[]),u.createElement("section",{ref:i,className:r(B)},u.createElement(w.x,{borderBottom:"BASE_LIGHTER",marginBottom:"-".concat(o,"px"),paddingBottom:"".concat(2*o,"px")},u.createElement(_.Lh,null,"Highlights (".concat(n.length,")"))),u.createElement(w.x,{marginLeft:"3px"},n.length&&n.map((function(e){return u.createElement(w.x,{display:"inline-block",key:e.id,marginTop:"".concat(5*o,"px"),marginRight:"".concat(5*o,"px"),width:"".concat(8*o,"px")},u.createElement(x.Yt,{hasPopover:!0,link:!0,user:e,scale:"XS"}))}))))}var R=u.memo(L),D=(0,l.Ps)(F(),O.W),G=n(83363),j=n(69217),C=n(60748),M=n(25267),A=n(75880),H=n(66227),U=n(87691),W=n(29746),z=n(39202);function V(){var e=i()(["\n  fragment PostNotesMarkers_creator on User {\n    id\n    name\n  }\n"]);return V=function(){return e},e}function Y(){var e=i()(["\n  fragment PostNotesMarkers_highlight on Quote {\n    id\n    endOffset\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    userId\n    user {\n      id\n      name\n      ...PostNotesDetails_user\n    }\n  }\n  ","\n"]);return Y=function(){return e},e}function Q(){return{border:"none",cursor:"pointer",display:"block",padding:"0px",textAlign:"left",width:"100%"}}function X(){return{left:"100%",position:"absolute",top:0}}function Z(e,t){return{marginTop:"6px",maxWidth:"100%",position:"absolute",top:"".concat(e-(t||0),"px"),whiteSpace:"nowrap",width:"100%"}}function J(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"".concat((0,W.G)(e,8,!0),"px"),position:"relative"}}function q(){return{display:"inline-block",maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}function K(e,t){return"number"==typeof e.startOffset&&"number"==typeof t.startOffset?e.startOffset<t.startOffset?-1:1:-1}function $(e,t){var n=t.startOffset,r=t.endOffset,i=t.paragraphs[0].name;if(!i||"number"!=typeof n||"number"!=typeof r)return e;var a=!1,o=e[i]||[];return o.length&&(o=o.map((function(e){var i=n<=e.endOffset+1,o=e.startOffset,c=e.endOffset;return i&&(a=!0,e.highlights.push(t),c=Math.max(r,e.endOffset),o=Math.min(n,e.startOffset)),{highlights:e.highlights,endOffset:c,startOffset:o}}))),a||o.push({highlights:[t],endOffset:r,startOffset:n}),e[i]=o,e}function ee(e){var t=e.children,n=e.highlightString,r=e.toggle,i=(0,g.I)();return"Top highlight"===n?u.createElement(u.Fragment,null,t):u.createElement("button",{className:i(Q),onClick:function(){return r()},onMouseDown:function(e){return e.preventDefault()}},t)}function te(e){var t=e.creator,n=e.positionMap,r=e.yPosOffset,i=e.viewerEdge,a=(0,g.I)();if("number"!=typeof r)return null;var o=Array.from(n.entries());return u.createElement(M.I,{nonBlocking:!0},(function(e){return u.createElement(u.Fragment,null,o.map((function(n,o){var c=E()(n,2),s=c[0],l=c[1],d=function(e,t,n,r){var i=null==r?void 0:r.isFollowing;if(1===e.length){if("anon"===e[0].userId)return"Top highlight";if(!t)return null;if(n&&n.id===e[0].userId&&t.id!==n.id&&!i)return null;if(t&&t.id===e[0].userId)return"You highlighted";if(e[0].user&&e[0].user.name)return e[0].user.name}var a=[];if(e.forEach((function(e){if(e.user){var r=t&&t.id===e.userId,o=e.user.name,c=n&&n.id===e.userId&&(!t||t.id!==n.id&&!i);r?a.length&&"You"===a[0]||a.unshift("You"):c||!o||a.includes(o)||a.push(o)}})),!a.length)return"Top highlight";if(1===a.length)return"You"===a[0]?"You highlighted":a[0];if(2===a.length)return"".concat(a[0]," and ").concat(a[1]);var o=a.slice(0,2),c=a.length-o.length;return"".concat(o[0],", ").concat(o[1],", and ").concat(c," ").concat(S()("other",c))}(l,e,t,i);return d?u.createElement("div",{className:a(Z(s,r)),key:o},u.createElement(H.B,null,(function(e){var t=e.isVisible,n=e.hide,r=e.toggle;return u.createElement(u.Fragment,null,u.createElement(ee,{toggle:r,highlightString:d},u.createElement(U.F,{scale:"S"},u.createElement("span",{className:a(q)},d))),t&&u.createElement(j.G,{boundariesElement:"document",isVisible:!0,hide:n,placement:"right",popoverRenderFn:function(){var e=new Set,t=l.map((function(t){var n=t.user;return n&&n.id&&!e.has(n.id)?(e.add(n.id),n):null})).filter(z.b);return u.createElement(R,{close:n,users:t})}},u.createElement(u.Fragment,null)))}))):null})))}))}var ne=u.forwardRef((function(e,t){var n=e.creator,r=e.highlights,i=u.useContext(G.Vc).highlightSegments,a=u.useRef(null),o=u.useState(null),c=E()(o,2),l=c[0],d=c[1],p=(0,g.I)(),f=(0,I.F)(),m=u.useState(null),h=E()(m,2),v=h[0],y=h[1],k=u.useState(null),b=E()(k,2),P=b[0],S=b[1],x=(0,A.Pd)(n).viewerEdge;return u.useEffect((function(){var e=function(){var e=function(e,t,n){var r=new Map;if(e.size&&t.length){var i=function(e){var t=s()(e).sort(K).reduce($,{});return Object.values(t).reduce((function(e,t){return t&&"object"===N()(t)&&t.length?(e.push.apply(e,s()(t)),e):e}),[])}(t),a=[];i.forEach((function(t){var i=t.highlights[0],o=i.paragraphs[0].name;if(i&&"number"==typeof i.startOffset&&o){var c=e.get("".concat(o,"_").concat(i.startOffset));if(c&&c.ref&&c.ref.current){var s,l=c.ref.current.getBoundingClientRect().top+window.pageYOffset;a.length&&(s=a.find((function(e){return l<e+n.newFonts.body.lineHeight.M&&l>e||l>e-n.newFonts.body.lineHeight.M&&l<e})));var u=s||l,d=r.get(u)||[];d.length||a.push(u);var g=d.concat(t.highlights);g.length&&r.set(u,g)}}}))}return r}(i,r,f);if(d(e),"function"!=typeof t&&null!=t&&t.current&&S(t.current.offsetTop),null!=a&&a.current){var n=a.current.getBoundingClientRect().left,o=window.innerWidth-n-8*f.grid.xStep;y(o)}};T.V6.on("resize_throttled",e);var n=(0,C.x)((function(t){"iframe.resize"!==t.context&&"player.js"!==t.context||e()})).destructor;return e(),function(){T.V6.off("resize_throttled",e),n()}}),[r,i]),u.createElement("div",{className:p(J)},u.createElement(w.x,{display:"block",xs:{display:"none"},sm:{display:"none"},md:{display:"none"},lg:{display:"none"}},u.createElement("aside",{className:p(X),ref:a,style:{width:v?"".concat(v,"px"):void 0}},l&&u.createElement(te,{creator:n,highlights:r,positionMap:l,yPosOffset:P,width:v,viewerEdge:x}))))})),re=u.memo(ne),ie=(0,l.Ps)(Y(),D),ae=(0,l.Ps)(V()),oe=n(75119),ce=n(32342);function se(){var e=i()(["\n  fragment PostBody_privateNote on Note {\n    ...normalizedBodyModel_privateNote\n    ...PostBodySection_privateNote\n  }\n  ","\n  ","\n"]);return se=function(){return e},e}function le(){var e=i()(["\n  fragment PostBody_creator on User {\n    ...PostNotesMarkers_creator\n  }\n  ","\n"]);return le=function(){return e},e}function ue(){var e=i()(["\n  fragment PostBody_highlight on Quote {\n    paragraphs {\n      id\n    }\n    ...normalizedBodyModel_highlight\n    ...PostBodySection_highlight\n    ...PostNotesMarkers_highlight\n  }\n  ","\n  ","\n  ","\n"]);return ue=function(){return e},e}function de(){var e=i()(["\n  fragment PostBody_bodyModel on RichText {\n    sections {\n      name\n      startIndex\n      textLayout\n      imageLayout\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      videoLayout\n      backgroundVideo {\n        videoId\n        originalHeight\n        originalWidth\n        previewImageId\n      }\n    }\n    paragraphs {\n      id\n      ...PostBodySection_paragraph\n    }\n    ...normalizedBodyModel_richText\n  }\n  ","\n  ","\n"]);return de=function(){return e},e}var ge=u.forwardRef((function(e,t){var n,r,i=e.bodyModel,a=e.creator,c=e.highlights,l=e.isAuroraPostPageEnabled,p=e.privateNotes,f=e.postBodyInserts,m=e.richTextStyle,y=void 0===m?"FULL_PAGE":m,k=e.shouldHideHighlightAnnotations,E=void 0!==k&&k,b=(0,g.I)(),N=u.createRef(),P=null===(n=u.useContext(d.u6).watchedBounds.get("byline"))||void 0===n||null===(r=n.ref)||void 0===r?void 0:r.current,S=P?P.offsetTop-48:100,x={position:"absolute",left:0,top:"calc(100vh + ".concat(S,"px)"),bottom:"calc(100vh + ".concat(100,"px)"),width:"10px",pointerEvents:"none"},O=(0,oe.Zx)().privateNoteSelection,w=u.useMemo((function(){return c&&O?[].concat(s()(c),[O]):c}),[c,O]),_=f?function(e){var t;return Object.keys(e).some((function(n){return!!e[n].find((function(e){return"BYLINE"===e.insertType}))&&(t=n,!0)})),t}(f):void 0,I=u.useMemo((function(){return(0,ce.fj)(i,{bylineParagraphName:_,highlights:w,isAuroraPostPageEnabled:l,isPostPage:!0,privateNotes:p,richTextStyle:y})}),[i,w,p,y]),T=f&&f.first;return u.createElement("section",{ref:t},u.createElement("div",{ref:N},u.createElement(u.Fragment,null,u.createElement(d.TA,{name:"ghost-track",type:"ghost",className:b(x)}),"FULL_PAGE"===y&&c&&c.length>0&&!E&&u.createElement(re,{creator:a,highlights:s()(c),ref:t}),!!T&&T.map((function(e,t){return e.component?u.createElement("div",{key:"postBodyInsertFirst_".concat(t)},e.component):null}))),I.map((function(e,t){if("HR"===e){var n,r,i=I[t-1],a=I[t+1],c="HR"!==i&&(null==i||null===(n=i.section)||void 0===n?void 0:n.backgroundImage),s="HR"!==a&&(null==a||null===(r=a.section)||void 0===r?void 0:r.backgroundImage);return c||s?null:u.createElement(h,{key:t})}return u.createElement(v.b,o()({key:e.section.name||t,postBodyInserts:f},e))}))))})),pe=(0,l.Ps)(de(),ce.gd,y.Fm),fe=(0,l.Ps)(ue(),ce.Cn,y.rz,ie),me=(0,l.Ps)(le(),ae),he=(0,l.Ps)(se(),ce.EH,y.ik)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7070.088d513c.chunk.js.map