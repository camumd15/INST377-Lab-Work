(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[74],{"2zZe":function(e,n,t){"use strict"
t.d(n,"a",(function(){return j}))
var r=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var o=t("Ji7U")
var c=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var p=t("17x9")
var u=t.n(p)
var d=t("cClk")
var g=t("dpqJ")
var f=t("sTNg")
var h=t("UCAh")
var b=t("oXx0")
var v=t("4Awi")
var m=t("E+IV")
var R=t("jtGx")
var y=t("tCl5")
var O=t("BTe1")
var _=t("Oioo")
var k=function(e){Object(o["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(i["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return null}}])
t.displayName="Option"
return t}(s["Component"])
k.propTypes={id:u.a.string.isRequired,value:u.a.string.isRequired,isDisabled:u.a.bool,renderBeforeLabel:u.a.oneOfType([u.a.node,u.a.func]),renderAfterLabel:u.a.oneOfType([u.a.node,u.a.func]),children:u.a.string}
k.defaultProps={isDisabled:false,renderBeforeLabel:void 0,renderAfterLabel:void 0,children:null}
var B=function(e){Object(o["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(i["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return null}}])
t.displayName="Group"
return t}(s["Component"])
B.propTypes={renderLabel:u.a.oneOfType([u.a.node,u.a.func]).isRequired,children:g["a"].oneOf([k])}
B.defaultProps={children:null}
var w,S,G,C
var j=(w=Object(b["a"])(),w(S=(C=G=function(e){Object(o["a"])(t,e)
var n=Object(c["a"])(t)
function t(e){var r
Object(i["a"])(this,t)
r=n.call(this,e)
r._emptyOptionId=Object(O["a"])("Select-EmptyOption")
r.handleRef=function(e){r._select=e}
r.handleBlur=function(e){r.setState({highlightedOptionId:null})
r.props.onBlur(e)}
r.handleShowOptions=function(e){r.setState({isShowingOptions:true})
r.props.onShowOptions(e)}
r.handleHideOptions=function(e){r.setState((function(e){var n=r.getOption("id",e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:n?n.props.children:""}}))
r.props.onHideOptions(e)}
r.handleHighlightOption=function(e,n){var t=n.id
if(t===r._emptyOptionId)return
var i=r.getOption("id",t)
var a=i.props.children
var o="keydown"===e.type?a:r.state.inputValue
r.setState({highlightedOptionId:t,inputValue:o})}
r.handleSelectOption=function(e,n){var t=n.id
if(t===r._emptyOptionId){r.setState({isShowingOptions:false})
return}var i=r.getOption("id",t)
var a=i&&i.props.value
r.isControlled?r.setState({isShowingOptions:false}):r.setState((function(e){return{isShowingOptions:false,selectedOptionId:t,inputValue:i?i.props.children:e.inputValue}}))
i&&r.props.onChange(e,{value:a,id:t})
r.props.onHideOptions(e)}
var a=r.getInitialOption(e)
r.state={inputValue:a?a.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:a?a.props.id:null}
return r}Object(a["a"])(t,[{key:"focus",value:function(){this._select&&this._select.focus()}},{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var n=this.getOption("value",this.props.value)
"undefined"===typeof this.props.value&&(n=this.getOption("value",e.value))
this.setState({inputValue:n?n.props.children:"",selectedOptionId:n?n.props.id:""})}}},{key:"getInitialOption",value:function(e){var n=e.value,t=e.defaultValue
var r=n||t
if("string"===typeof r)return this.getOption("value",r)
return this.getOptionByIndex(0)}},{key:"getOptionLabelById",value:function(e){var n=this.getOption("id",e)
return n?n.props.children:""}},{key:"getOptionByIndex",value:function(e){var n=s["Children"].toArray(this.props.children)
var t=null
for(var r=0;r<n.length;r++){var i=n[r]
Object(v["a"])(i,[k])?t=i:Object(v["a"])(i,[B])&&(t=s["Children"].toArray(i.props.children)[0])
if(t)break}return t}},{key:"getOption",value:function(e,n){var t=s["Children"].toArray(this.props.children)
var r=null
for(var i=0;i<t.length;++i){var a=t[i]
if(Object(v["a"])(a,[k]))a.props[e]===n&&(r=a)
else if(Object(v["a"])(a,[B])){var o=s["Children"].toArray(a.props.children)
for(var c=0;c<o.length;++c){var l=o[c]
if(l.props[e]===n){r=l
break}}}if(r)break}return r}},{key:"renderChildren",value:function(){var e=this
var n=s["Children"].toArray(this.props.children)
n=s["Children"].map(n,(function(n){if(Object(v["a"])(n,[k]))return e.renderOption(n)
if(Object(v["a"])(n,[B]))return e.renderGroup(n)
return null})).filter((function(e){return!!e}))
if(0===n.length)return this.renderEmptyOption()
return n}},{key:"renderEmptyOption",value:function(){return l.a.createElement(_["a"].Option,{id:this._emptyOptionId,isHighlighted:false,isSelected:false},Object(m["a"])(this.props.renderEmptyOption))}},{key:"renderOption",value:function(e){var n=e.props,t=n.id,i=n.value,a=n.children,o=n.renderBeforeLabel,c=n.renderAfterLabel,s=Object(r["a"])(n,["id","value","children","renderBeforeLabel","renderAfterLabel"])
return l.a.createElement(_["a"].Option,Object.assign({id:t,value:i,key:e.key||t,isHighlighted:t===this.state.highlightedOptionId,isSelected:t===this.state.selectedOptionId,isDisabled:e.props.isDisabled,renderBeforeLabel:o,renderAfterLabel:c},Object(R["b"])(s)),a)}},{key:"renderGroup",value:function(e){var n=this
var t=e.props,i=t.id,a=t.renderLabel,o=t.children,c=Object(r["a"])(t,["id","renderLabel","children"])
return l.a.createElement(_["a"].Group,Object.assign({renderLabel:a,key:e.key||i},Object(R["b"])(c)),s["Children"].map(o,(function(e){return n.renderOption(e)})))}},{key:"render",value:function(){var e=this.props,n=e.renderLabel,t=(e.value,e.defaultValue,e.id),i=e.size,a=e.assistiveText,o=e.placeholder,c=(e.interaction,e.isRequired),s=e.isInline,p=e.width,u=e.optionsMaxWidth,d=e.visibleOptionsCount,g=e.messages,f=e.placement,h=e.constrain,b=e.mountNode,v=e.inputRef,m=e.listRef,y=(e.renderEmptyOption,e.renderBeforeInput),O=e.renderAfterInput,k=e.onFocus,B=(e.onBlur,e.onShowOptions,e.onHideOptions,e.children),w=Object(r["a"])(e,["renderLabel","value","defaultValue","id","size","assistiveText","placeholder","interaction","isRequired","isInline","width","optionsMaxWidth","visibleOptionsCount","messages","placement","constrain","mountNode","inputRef","listRef","renderEmptyOption","renderBeforeInput","renderAfterInput","onFocus","onBlur","onShowOptions","onHideOptions","children"])
return l.a.createElement(_["a"],Object.assign({renderLabel:n,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,id:t,size:i,assistiveText:a,placeholder:o,interaction:this.interaction,isRequired:c,isInline:s,width:p,optionsMaxWidth:u,visibleOptionsCount:d,messages:g,placement:f,constrain:h,mountNode:b,ref:this.handleRef,inputRef:v,listRef:m,renderBeforeInput:y,renderAfterInput:O,onFocus:k,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},Object(R["b"])(w)),this.renderChildren(B))}},{key:"focused",get:function(){return this._select&&this._select.focused}},{key:"id",get:function(){return this._select&&this._select.id}},{key:"isControlled",get:function(){return"undefined"!==typeof this.props.value}},{key:"interaction",get:function(){return Object(y["a"])({props:this.props})}}])
t.displayName="SimpleSelect"
return t}(s["Component"]),G.Option=k,G.Group=B,G.propTypes={renderLabel:u.a.oneOfType([u.a.node,u.a.func]).isRequired,value:Object(d["a"])(u.a.string,"onChange"),defaultValue:u.a.string,id:u.a.string,size:u.a.oneOf(["small","medium","large"]),assistiveText:u.a.string,placeholder:u.a.string,interaction:u.a.oneOf(["enabled","disabled","readonly"]),isRequired:u.a.bool,isInline:u.a.bool,width:u.a.string,optionsMaxWidth:u.a.string,visibleOptionsCount:u.a.number,messages:u.a.arrayOf(f["d"].message),placement:h["a"].placement,constrain:h["a"].constrain,mountNode:h["a"].mountNode,onChange:u.a.func,onFocus:u.a.func,onBlur:u.a.func,onShowOptions:u.a.func,onHideOptions:u.a.func,inputRef:u.a.func,listRef:u.a.func,renderEmptyOption:u.a.oneOfType([u.a.node,u.a.func]),renderBeforeInput:u.a.oneOfType([u.a.node,u.a.func]),renderAfterInput:u.a.oneOfType([u.a.node,u.a.func]),children:g["a"].oneOf([B,k])},G.defaultProps={value:void 0,defaultValue:void 0,id:void 0,size:"medium",assistiveText:void 0,placeholder:null,interaction:void 0,isRequired:false,isInline:false,width:void 0,optionsMaxWidth:void 0,visibleOptionsCount:8,messages:void 0,placement:"bottom stretch",mountNode:void 0,constrain:"window",onChange:function(e,n){},onFocus:function(e){},onBlur:function(e){},onShowOptions:function(e){},onHideOptions:function(e){},inputRef:function(e){},listRef:function(e){},renderEmptyOption:"---",renderBeforeInput:null,renderAfterInput:null,children:null},C))||S)},"5ynn":function(e,n,t){"use strict"
t.d(n,"a",(function(){return c}))
t.d(n,"b",(function(){return s}))
var r=t("An8g")
var i=t("L+/K")
var a=t("q1tI")
var o=t.n(a)
const c=o.a.createContext({setOnFailure:()=>{},setOnSuccess:()=>{}})
class s extends o.a.Component{constructor(...e){super(...e)
this.state={alertStatus:null,alertMessage:null,key:0,successScreenReaderOnly:true}
this.closeAlert=()=>{this.setState({alertMessage:null,alertStatus:null,successScreenReaderOnly:true})}
this.setOnFailure=e=>{this.setState(n=>({alertMessage:e,alertStatus:"error",key:n.key+1}))}
this.setOnSuccess=(e,n=true)=>{this.setState(t=>({alertMessage:e,alertStatus:"success",key:t.key+1,successScreenReaderOnly:n}))}}renderAlert(){const e=5e3
if("success"===this.state.alertStatus)return Object(r["a"])(i["a"],{variant:"success",liveRegion:()=>document.getElementById("flash_screenreader_holder"),onDismiss:this.closeAlert,screenReaderOnly:this.state.successScreenReaderOnly,timeout:e},void 0,this.state.alertMessage)
if("error"===this.state.alertStatus)return Object(r["a"])(i["a"],{liveRegion:()=>document.getElementById("flash_screenreader_holder"),margin:"small",onDismiss:this.closeAlert,timeout:e,variant:"error"},void 0,this.state.alertMessage)}render(){const e={left:"300px",maxWidth:"1125px",position:"fixed",right:"120px",top:"80px",zIndex:"101"}
return Object(r["a"])(c.Provider,{value:{setOnFailure:this.setOnFailure,setOnSuccess:this.setOnSuccess}},void 0,this.state.alertStatus&&Object(r["a"])("div",{style:e},this.state.key,this.renderAlert()),this.props.children)}}},"7hyl":function(e,n,t){"use strict"
t.d(n,"a",(function(){return c}))
var r=t("An8g")
var i=t("thjO")
t("q1tI")
var a=t("uSnb")
var o=t("n12J")
function c(){return Object(r["a"])(o["a"],{as:"div",height:"100%",width:"100%",textAlign:"center"},void 0,Object(r["a"])(a["a"],{renderTitle:i["a"].t("Loading"),size:"large",margin:"0 0 0 medium"}))}},BrAc:function(e,n,t){"use strict"
var r=t("vDqi")
var i=t.n(r)
i.a.defaults.xsrfCookieName="_csrf_token"
i.a.defaults.xsrfHeaderName="X-CSRF-Token"
const a=i.a.defaults.headers.common.Accept
i.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+a
i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
n["a"]=i.a},ZbFs:function(e,n,t){"use strict"
t.d(n,"a",(function(){return d}))
var r=t("VTBJ")
var i=t("1OyB")
var a=t("vuIU")
var o=t("Ji7U")
var c=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var p=t("hPGw")
var u=l.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var d=function(e){Object(o["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(i["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){return l.a.createElement(p["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconCheckSolid"
return t}(s["Component"])
d.glyphName="check"
d.variant="Solid"
d.propTypes=Object(r["a"])({},p["a"].propTypes)},ZbPE:function(e,n,t){"use strict"
t.d(n,"a",(function(){return w}))
var r=t("rePB")
var i=t("1OyB")
var a=t("vuIU")
var o=t("Ji7U")
var c=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var p=t("17x9")
var u=t.n(p)
var d=t("TSYQ")
var g=t.n(d)
var f=t("J2CL")
var h=t("KgFQ")
var b=t("jtGx")
var v=t("nAyT")
var m=t("VTBJ")
function R(e){var n=e.typography,t=e.colors,r=e.spacing
return Object(m["a"])({},n,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(r.medium," 0")})}R.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,O,_,k
var B={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var w=(y=Object(f["l"])(R,B),y(O=(k=_=function(e){Object(o["a"])(t,e)
var n=Object(c["a"])(t)
function t(){Object(i["a"])(this,t)
return n.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var e
var n=this.props,i=n.wrap,a=n.weight,o=n.fontStyle,c=n.size,s=n.lineHeight,p=n.letterSpacing,u=n.transform,d=n.color,f=n.children
var v=Object(h["a"])(t,this.props)
return l.a.createElement(v,Object.assign({},Object(b["b"])(this.props),{className:g()((e={},Object(r["a"])(e,B.root,true),Object(r["a"])(e,B[c],c),Object(r["a"])(e,B["wrap-".concat(i)],i),Object(r["a"])(e,B["weight-".concat(a)],a),Object(r["a"])(e,B["style-".concat(o)],o),Object(r["a"])(e,B["transform-".concat(u)],u),Object(r["a"])(e,B["lineHeight-".concat(s)],s),Object(r["a"])(e,B["letterSpacing-".concat(p)],p),Object(r["a"])(e,B["color-".concat(d)],d),e)),ref:this.props.elementRef}),f)}}])
t.displayName="Text"
return t}(s["Component"]),_.propTypes={as:u.a.elementType,children:u.a.node,color:v["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},_.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||O)},bZJi:function(e,n,t){"use strict"
t.d(n,"a",(function(){return T}))
var r=t("Ff2n")
var i=t("VTBJ")
var a=t("1OyB")
var o=t("vuIU")
var c=t("Ji7U")
var s=t("LK+K")
var l=t("q1tI")
var p=t.n(l)
var u=t("17x9")
var d=t.n(u)
var g=t("nAyT")
var f=t("KgFQ")
var h=t("jtGx")
var b=t("sQ3t")
var v=t("E+IV")
var m=t("UCAh")
var R=t("BTe1")
var y=t("J2CL")
var O=t("oXx0")
var _=t("jsCG")
var k=t("AdN2")
var B=function(e){var n=e.typography,t=e.spacing
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,fontSize:n.fontSizeSmall,padding:t.small}}
var w,S,G,C,j,x
var I={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var T=(w=Object(g["a"])("8.0.0",{tip:"renderTip",variant:"color"}),S=Object(O["a"])(),G=Object(y["l"])(B,I),w(C=S(C=G(C=(x=j=function(e){Object(c["a"])(t,e)
var n=Object(s["a"])(t)
function t(){var e
Object(a["a"])(this,t)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=n.call.apply(n,[this].concat(i))
e._id=Object(R["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(n){e.setState({hasFocus:true})}
e.handleBlur=function(n){e.setState({hasFocus:false})}
return e}Object(o["a"])(t,[{key:"renderTrigger",value:function(){var e=this.props,n=e.children,r=e.as
var a=this.state.hasFocus
var o={"aria-describedby":this._id}
if(r){var c=Object(f["a"])(t,this.props)
var s=Object(h["a"])(this.props,t.propTypes)
return p.a.createElement(c,Object.assign({},s,o),n)}return"function"===typeof n?n({focused:a,getTriggerProps:function(e){return Object(i["a"])({},o,{},e)}}):Object(b["a"])(this.props.children,o)}},{key:"render",value:function(){var e=this
var n=this.props,t=n.renderTip,i=n.isShowingContent,a=n.defaultIsShowingContent,o=n.on,c=n.placement,s=n.mountNode,l=n.constrain,u=n.offsetX,d=n.offsetY,g=n.positionTarget,f=n.onShowContent,b=n.onHideContent,m=n.tip,R=(n.variant,Object(r["a"])(n,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return p.a.createElement(_["a"],Object.assign({},Object(h["b"])(R),{isShowingContent:i,defaultIsShowingContent:a,on:o,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===y?"primary-inverse":"primary",mountNode:s,constrain:l,shadow:"none",offsetX:u,offsetY:d,positionTarget:g,renderTrigger:function(){return e.renderTrigger()},onShowContent:f,onHideContent:b,onFocus:this.handleFocus,onBlur:this.handleBlur}),p.a.createElement("span",{id:this._id,className:I.root,role:"tooltip"},t?Object(v["a"])(t):m))}}])
t.displayName="Tooltip"
return t}(l["Component"]),j.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]).isRequired,renderTip:d.a.oneOfType([d.a.node,d.a.func]),isShowingContent:d.a.bool,defaultIsShowingContent:d.a.bool,as:d.a.elementType,on:d.a.oneOfType([d.a.oneOf(["click","hover","focus"]),d.a.arrayOf(d.a.oneOf(["click","hover","focus"]))]),color:d.a.oneOf(["primary","primary-inverse"]),placement:m["a"].placement,mountNode:m["a"].mountNode,constrain:m["a"].constrain,offsetX:d.a.oneOfType([d.a.string,d.a.number]),offsetY:d.a.oneOfType([d.a.string,d.a.number]),positionTarget:d.a.oneOfType([k["a"],d.a.func]),onShowContent:d.a.func,onHideContent:d.a.func,tip:d.a.node,variant:d.a.oneOf(["default","inverse"])},j.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,n){n.documentClick}},x))||C)||C)||C)},dKDz:function(e,n,t){"use strict"
var r=/["'&<>]/
e.exports=i
function i(e){var n=""+e
var t=r.exec(n)
if(!t)return n
var i
var a=""
var o=0
var c=0
for(o=t.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:i="&quot;"
break
case 38:i="&amp;"
break
case 39:i="&#39;"
break
case 60:i="&lt;"
break
case 62:i="&gt;"
break
default:continue}c!==o&&(a+=n.substring(c,o))
c=o+1
a+=i}return c!==o?a+n.substring(c,o):a}}}])

//# sourceMappingURL=74-c-74e38843cf.js.map