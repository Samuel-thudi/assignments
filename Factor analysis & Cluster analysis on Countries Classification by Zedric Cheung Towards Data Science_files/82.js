(self.webpackChunklite=self.webpackChunklite||[]).push([[82],{26441:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var r=n(67294),i=n(47230),o=n(77355),l=n(31889),a=n(14646),c=n(14856),s=function(e){var t,n=e.buttonSize,s=void 0===n?"LARGE":n,u=e.buttonStyle,d=void 0===u?"STRONG":u,m=e.showMailIcon,p=void 0===m||m,f=e.onClick,E=e.width,b=e.buttonText,g=void 0===b?"Get this newsletter":b,h=e.redirectUrl,y=e.displayOnly,w=void 0!==y&&y,v=(0,l.F)(),x=(0,a.I)();return r.createElement(i.z,{buttonStyle:d,onClick:f,size:s,width:E,padding:"0 8px",href:h,displayOnly:w},r.createElement(o.x,{display:"flex",paddingRight:"8px",justifyContent:"center",alignItems:"center"},p&&r.createElement("span",{className:x((t=v.accentColor.background,{stroke:t})),"aria-hidden":"true"},r.createElement(c.Z,null)),g))}},92548:(e,t,n)=>{"use strict";n.d(t,{B:()=>u});var r=n(67294),i=n(77355),o=n(47230),l=n(14646),a=n(62528),c={from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},s=function(e){return function(t){return{width:"20px",height:"20px",borderRadius:"50%",borderWidth:"1px",borderStyle:"solid",borderColor:"".concat(t.baseColor.border.light," transparent ").concat(t.baseColor.border.light," ").concat(t.baseColor.border.light),animation:"".concat(e," 1s infinite linear;")}}},u=function(e){var t=e.buttonSize,n=void 0===t?"LARGE":t,u=e.buttonStyle,d=void 0===u?"STRONG":u,m=e.width,p=void 0===m?"100%":m,f=(0,l.I)(),E=function(){var e=(0,a.o)({keyframesName:c}).keyframesName;return r.createElement("div",{className:f(s(e))})},b=function(){return r.createElement(i.x,null,r.createElement(i.x,{display:"inline-block",float:"left",marginRight:"8px"},r.createElement(E,null)),r.createElement(i.x,{float:"left"},"Loading.."))};return r.createElement("div",{style:{cursor:"wait"}},r.createElement(o.z,{buttonStyle:d,onClick:function(){return null},size:n,width:p,disabled:!0},r.createElement(b,null)))}},19616:(e,t,n)=>{"use strict";n.d(t,{B:()=>A,x:()=>L});var r=n(67154),i=n.n(r),o=n(63038),l=n.n(o),a=n(28655),c=n.n(a),s=n(71439),u=n(67294),d=n(26441),m=n(61279),p=n(6443),f=n(26350),E=n(77355),b=n(1383),g=n(16793),h=n(98096),y=n(47230),w=n(93310),v=n(53058),x=n(87691),S=n(18627),T=n(66411),C=n(97217),R=n(78285),O=n(77280),k=n(43487),N=n(68894),V=n(50458),_=n(3207);function I(){var e=c()(["\n  fragment NewsletterV3SubscribeButton_newsletterV3 on NewsletterV3 {\n    id\n    name\n    slug\n    type\n    user {\n      id\n      name\n      username\n    }\n    collection {\n      slug\n      ...SusiClickable_collection\n      ...collectionDefaultBackgroundTheme_collection\n    }\n    ...SusiClickable_newsletterV3\n    ...useNewsletterV3Subscription_newsletterV3\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return I=function(){return e},e}var A=(0,s.Ps)(I(),f.Os,f.GB,_.Gi,m.DI),L=function(e){var t,n,r,o,a=e.newsletterV3,c=e.buttonLayout,s=void 0===c?"MULTI-LINE":c,I=e.helperTextColor,A=void 0===I?"LIGHTER":I,L=e.showHelperText,j=void 0===L||L,P=e.showMailIcon,B=void 0===P||P,G=e.buttonSize,U=void 0===G?"LARGE":G,D=e.buttonStyle,M=void 0===D?"STRONG":D,F=e.redirectUrl,z=e.buttonText,$=e.width,W=(0,p.H)().value,Y=a.id,H=a.collection?a.collection:void 0,q=a.user?a.user:void 0,Q=(0,R.w)(),Z=(0,O.PM)(),K=(0,T.Lk)(),X=(0,S.Av)(),J=(0,k.v9)((function(e){return e.config.productName})),ee=(0,N.O)(!1),te=l()(ee,3),ne=te[0],re=te[1],ie=te[2];switch(a.type){case C.Rr.NEWSLETTER_TYPE_COLLECTION:t=a.name,n="Get this newsletter",r="You’re signed up for ".concat(t,"."),o="newsletter_v3_promo";break;case C.Rr.NEWSLETTER_TYPE_AUTHOR:t=null==q?void 0:q.name,n="Subscribe",r="You’re subscribed to ".concat(t),o="subscribe_user"}var oe=(0,m.oT)({newsletterV3:a,newsletterName:t}),le=oe.isSubscribed,ae=oe.hasError,ce=oe.setSubscribe;u.useEffect((function(){if(Z){var e=(0,T.P7)(Z||"").susiEntry;["collection_newsletter_v3_landing","newsletter_v3_promo"].includes(void 0===e?"":e)&&le&&Q({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:t,newsletterType:a.type,unsubscribeFn:function(){return ce(!1)}}})}}),[Z,le]);var se=function(e){var t=e.children;return u.createElement(E.x,{margin:"COMPACT"===s?"10px 20px 10px 0":"",xs:{margin:"10px 0 0 0"}},t)},ue=function(e){var t=e.children;return u.createElement(E.x,{maxWidth:"COMPACT"===s?"380px":"",margin:"COMPACT"===s?"10px 0 10px 0":"10px 0 0 0"},u.createElement(x.F,{scale:"S",color:A},t))},de=function(){var e=(0,V.Zul)(Y),r={buttonSize:U,buttonStyle:M,onClick:function(){var e;W?W&&W.allowEmailAddressSharingEditorWriter?ce(!0,!1):re():null!=q&&null!==(e=q.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:q.newsletterV3.id,source:K}):null!=q&&q.id&&X.event("user.LOSubscribeClicked",{targetUserId:q.id,source:K})},showMailIcon:B,buttonText:z||n,redirectUrl:F,width:$};return u.createElement(se,null,W?u.createElement(u.Fragment,null,u.createElement(d.w,r),u.createElement(b.Q,{onConfirm:function(){return ce(!0,!0)},isVisible:ne,hide:ie,titleText:"Confirm your subscription to ".concat(t),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"By confirming, you agree to share your email address with the editors of newsletters and writers you've subscribed to so they can stay in contact with you outside of ".concat(J,". You can opt out of sharing your email address by unsubscribing in your Settings."))):u.createElement(f.R9,{operation:"register",newsletterV3:a,user:q,collection:H,actionUrl:e,susiEntry:o,redirectTo:F},u.createElement(d.w,i()({},r,{redirectUrl:void 0}))))};return u.createElement(u.Fragment,null,u.createElement(g.Z,null,(function(e){return u.createElement(h.f,{theme:(0,_.jN)(H,e)},le?u.createElement(u.Fragment,null,u.createElement(se,null,u.createElement(y.z,{buttonStyle:"SUBTLE",size:"SMALL",onClick:function(){return ce(!1)}},"Unsubscribe")),j&&u.createElement(ue,null,r)):u.createElement(T.cW,{source:{newsletterV3Id:a.id},extendSource:!0},u.createElement(de,null),j&&W&&u.createElement(ue,null,"Emails will be sent to ",W.email,".",u.createElement(f.R9,{operation:"login",newsletterV3:a,collection:H,susiEntry:o},u.createElement(w.r,{display:"block",onClick:function(){},linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Not you?")))))})),ae&&u.createElement(v.F,{toastStyle:"RETRYABLE_ERROR",isVisible:ae,hide:function(){}}))}},83302:(e,t,n)=>{"use strict";n.d(t,{QL:()=>M,Ae:()=>F,Lh:()=>z});var r,i,o=n(28655),l=n.n(o),a=n(63038),c=n.n(a),s=n(59713),u=n.n(s),d=n(46829),m=n(71439),p=n(67294),f=n(26441),E=n(92548),b=n(93717),g=n(18839),h=n(76109),y=n(12890),w=n(98096),v=n(77355),x=n(93310),S=n(21755),T=n(87691),C=n(66411),R=n(31889),O=n(40980),k=n(97217),N=n(43487),V=n(6855),_=n(17583),I=n(50458),A=n(68216),L=n(3207);function j(){var e=l()(["\n  fragment NewsletterV3SubscribeByEmail_newsletterV3 on NewsletterV3 {\n    id\n    slug\n    type\n    user {\n      id\n      name\n      username\n    }\n    collection {\n      ...collectionDefaultBackgroundTheme_collection\n      ...collectionUrl_collection\n    }\n  }\n  ","\n  ","\n"]);return j=function(){return e},e}function P(){var e=l()(["\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);return P=function(){return e},e}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=(r={},u()(r,S.j.xl,425),u()(r,S.j.lg,425),u()(r,S.j.md,375),u()(r,S.j.sm,475),u()(r,S.j.xs,250),r),D=(i={},u()(i,S.j.xl,375),u()(i,S.j.lg,375),u()(i,S.j.md,325),u()(i,S.j.sm,450),u()(i,S.j.xs,200),i),M=function(e){var t=e.centerContent,n=void 0!==t&&t,r=e.newsletterV3,i=e.isVertical,o=e.handleClick,l=(0,R.F)(),a=(0,C.pK)(),s=(0,C.hp)(),u=(0,N.v9)((function(e){return e.config.authDomain})),m=(0,N.v9)((function(e){return e.navigation.currentLocation})),A=(0,N.v9)((function(e){return e.config.productName})),j=p.useState(""),P=c()(j,2),B=P[0],M=P[1],z=p.useState(""),$=c()(z,2),W=$[0],Y=$[1],H=p.useState(!1),q=c()(H,2),Q=q[0],Z=q[1],K=p.useState(!1),X=c()(K,2),J=X[0],ee=X[1],te=p.useState(!1),ne=c()(te,2),re=ne[0],ie=ne[1],oe=p.useState(!1),le=c()(oe,2),ae=le[0],ce=le[1],se=p.useState(""),ue=c()(se,2),de=ue[0],me=ue[1],pe="register",fe=r.type===k.Rr.NEWSLETTER_TYPE_AUTHOR?"Subscribe":"Get this newsletter",Ee=null==m.match("http[s]?://[^/]*".concat(u)),be=r.collection,ge=r.id,he=r.slug,ye=r.user,we=(0,I.Zul)(ge),ve=be?(0,I.iBn)(he,u,be,(null==ye?void 0:ye.username)||""):m;(0,d.useQuery)(h.qz,{fetchPolicy:"no-cache",skip:!we||Ee,onCompleted:function(e){var t=e.accountToken;return t&&me((0,g.hQ)(ve,a,s,we,t))}});var xe=function(e){M(e),Z(!0),setTimeout((function(){return Z(!1)}),y.zn),ee(!1),ie(!1)},Se=function(){(0,V.J)(W)?(ie(!0),ee(!0)):xe("Enter a valid email address.")},Te=function(){xe("We couldn't process your request. Try again, or contact our support team.")},Ce=(0,d.useMutation)(F,{onCompleted:function(e){switch(e.sendNewsletterSubscriptionAcctAuthEmail.__typename){case"SusiMethod":Y(W),ce(!0),o&&o();break;case"BadRequest":xe("Enter a valid email address.");break;case"FailedChallenge":case"NotFound":default:Te()}},onError:Te}),Re=c()(Ce,1)[0],Oe={newsletterV3Id:ge,email:W,operation:pe,redirect:de},ke=(0,_.s)()||S.j.lg,Ne=r.type===k.Rr.NEWSLETTER_TYPE_AUTHOR?U:D;return p.createElement(w.f,{theme:(0,L.jN)(be,l)},p.createElement(v.x,{alignItems:n?"center":"flex-start",display:"flex",flexDirection:"column",justifyContent:n?"center":"flex-start"},p.createElement(b.k,{callback:function(e){Re({variables:G({captchaValue:e},Oe)})},shouldExecuteRecaptcha:J}),p.createElement(v.x,{display:ae?"none":"inline"},p.createElement(v.x,{alignItems:i?"flex-start":"center",display:"flex",justifyContent:"space-between",flexDirection:i?"column":"row",sm:{alignItems:n?"center":"flex-start",flexDirection:"column",paddingTop:"16px"}},p.createElement(v.x,{marginTop:B&&"25px",sm:{marginTop:"0"}},p.createElement(y.II,{errorMessage:B,handleInputChange:function(e){Y(e.target.value.trim())},handleSubmit:Se,input:W,inputType:y.n$.EMAIL,isAnimating:Q,textAlign:"start",placeholder:"Your email",width:i?"250px":"".concat(Ne[ke],"px")})),p.createElement(v.x,{marginBottom:"auto",marginLeft:i?"0":"15px",sm:{marginLeft:"0px",marginTop:"15px"},marginTop:i?"20px":void 0},re?p.createElement(E.B,{newsletterV3Id:ge}):p.createElement(O.$,{eventData:{operation:pe}},p.createElement(f.w,{onClick:Se,buttonText:fe})))),p.createElement(v.x,{marginTop:B?"10px":"25px",sm:{marginTop:"25px"}},p.createElement(T.F,{color:"DARKER",scale:"XS"},"By signing up, you will create a ",A," account if you don’t already have one. Review our"," ",p.createElement(x.r,{href:(0,I.wob)(),linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Privacy Policy")," ","for more information about our privacy practices."))),p.createElement(v.x,{display:ae?"inline":"none",marginBottom:"15px",marginTop:"5px",height:"75px"},p.createElement(T.F,{color:"DARKER",scale:"M"},A," sent you an email at ",W," to complete your subscription."))))},F=(0,m.Ps)(P()),z=(0,m.Ps)(j(),L.Gi,A.nf)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/82.e1c0faca.chunk.js.map