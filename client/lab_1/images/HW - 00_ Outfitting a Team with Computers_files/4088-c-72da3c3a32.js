(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4088],{"+S/7":function(e,a,t){"use strict"
t.r(a)
var r=t("An8g")
var n=t("VTBJ")
var o=t("5ynn")
t("yXnT")
var i=t("pUPW")
t("17x9")
var s=t("b2Su")
var l=t("W5sB")
var d=t("4R5M")
var c=t("q1tI")
var u=t.n(c)
t("uqZB")
var p=t("hmuw")
var h=t.n(p)
var m=t("JGuX")
var v=t("UT5+")
var b=t("TstA")
var C=t("Zgll")
var g=t("3jGd")
var f=t("xHhu")
var D=t("T4PM")
var L=t("wOqo")
var _=t("6SzX")
var y=t("N28T")
var O=t("VZBX")
var k=t("ZbPE")
var E=t("7np9")
var S,w,j,I,x,F,P
class B extends c["Component"]{constructor(...e){super(...e)
this.state={messages:[]}
this._isMounted=false
this.getDraftAttachments=()=>this.props.submission.submissionDraft&&this.props.submission.submissionDraft.attachments?this.props.submission.submissionDraft.attachments:[]
this.handleLTIFiles=async e=>{if("LtiDeepLinkingResponse"===e.data.messageType){if(e.data.errormsg){this.context.setOnFailure(e.data.errormsg)
return}await this.handleDropAccepted(e.data.content_items)}if("A2ExternalContentReady"===e.data.messageType&&!e.data.errormsg){const a=e.data.content_items.map(e=>Object(n["a"])(Object(n["a"])({},e),{},{mediaType:""}))
await this.handleDropAccepted(a)}}
this.handleCanvasFiles=async e=>{if(!e){this.context.setOnFailure(l["a"].t("Error adding canvas file to submission draft"))
return}this.props.onCanvasFileRequested({fileID:e,onError:()=>{this.context.setOnFailure(l["a"].t("Error updating submission draft"))}})}
this.handleDropAccepted=async e=>{if(!e.length){this.context.setOnFailure(l["a"].t("Error adding files to submission draft"))
return}await this.props.onUploadRequested({files:e,onError:()=>{this.context.setOnFailure(l["a"].t("Error updating submission draft"))},onSuccess:()=>{this.context.setOnSuccess(l["a"].t("Uploading files"))}})}
this.handleWebcamPhotoUpload=async({filename:e,image:a})=>{const t=a.blob
t.name=e
await this.handleDropAccepted([t])}
this.handleDropRejected=()=>{this.setState({messages:[{text:l["a"].t("Invalid file type"),type:"error"}]})}
this.handleRemoveFile=async e=>{const a=parseInt(e.currentTarget.id,10)
const t=this.getDraftAttachments().findIndex(e=>parseInt(e._id,10)===a)
const r=this.getDraftAttachments().filter((e,a)=>a!==t)
await this.props.createSubmissionDraft({variables:{id:this.props.submission.id,activeSubmissionType:"online_upload",attempt:this.props.submission.attempt,fileIds:r.map(e=>e._id)}})
this._isMounted&&this.setState({messages:[]})
const n=0===this.getDraftAttachments().length||0===t?"inputFileDrop":this.getDraftAttachments()[t-1]._id
document.getElementById(n).focus()}
this.renderFileProgress=e=>{const a=e.name,t=e.loaded,n=e.total
return Object(r["a"])(L["a"],{formatScreenReaderValue:({valueNow:e,valueMax:a})=>Math.round(e/a*100)+" percent",meterColor:"brand",screenReaderLabel:l["a"].t("Upload progress for %{name}",{name:a}),size:"x-small",valueMax:n,valueNow:t})}
this.renderTableRow=e=>{const a=e.displayName||e.name
return Object(r["a"])(O["a"].Row,{},e._id,Object(r["a"])(O["a"].Cell,{},void 0,Object(s["b"])(e,"small")),Object(r["a"])(O["a"].Cell,{},void 0,a&&u.a.createElement(u.a.Fragment,null,Object(r["a"])("span",{"aria-hidden":true,title:a},void 0,Object(i["a"])(a)),Object(r["a"])(_["a"],{},void 0,a))),Object(r["a"])(O["a"].Cell,{},void 0,e.isLoading&&this.renderFileProgress(e)),Object(r["a"])(O["a"].Cell,{},void 0,!e.isLoading&&(S||(S=Object(r["a"])(g["a"],{color:"success"})))),Object(r["a"])(O["a"].Cell,{},void 0,!e.isLoading&&Object(r["a"])(C["a"],{id:e._id,onClick:this.handleRemoveFile,screenReaderLabel:l["a"].t("Remove %{displayName}",{displayName:a}),size:"small",withBackground:false,withBorder:false},void 0,w||(w=Object(r["a"])(f["a"],{})))))}
this.renderUploadedFiles=e=>Object(r["a"])(O["a"],{caption:l["a"].t("Uploaded files"),"data-testid":"uploaded_files_table"},void 0,Object(r["a"])(O["a"].Head,{},void 0,Object(r["a"])(O["a"].Row,{},void 0,j||(j=Object(r["a"])(O["a"].ColHeader,{id:"thumbnail",width:"1rem"})),Object(r["a"])(O["a"].ColHeader,{id:"filename"},void 0,l["a"].t("File Name")),I||(I=Object(r["a"])(O["a"].ColHeader,{id:"upload-progress",width:"30%"})),x||(x=Object(r["a"])(O["a"].ColHeader,{id:"upload-success",width:"1rem"})),F||(F=Object(r["a"])(O["a"].ColHeader,{id:"delete",width:"1rem"})))),Object(r["a"])(O["a"].Body,{},void 0,e.map(this.renderTableRow)))}componentDidMount(){this._isMounted=true
window.addEventListener("message",this.handleLTIFiles)
const e=document.getElementById("inputFileDrop")
e&&this.props.focusOnInit&&e.focus()}componentWillUnmount(){this._isMounted=false
window.removeEventListener("message",this.handleLTIFiles)}renderUploadBox(){const e=this.props.breakpoints.desktopOnly
const a=u.a.createElement(u.a.Fragment,null,e&&Object(r["a"])(_["a"],{},void 0,l["a"].t("Drag a file here, or click to select a file to upload")),Object(r["a"])(b["a"],{justifyItems:"center",margin:"small"},void 0,P||(P=Object(r["a"])(b["a"].Item,{},void 0,Object(r["a"])(D["a"],{src:h.a,size:"large"}))),Object(r["a"])(b["a"].Item,{padding:"0 0 0 small"},void 0,Object(r["a"])(b["a"],{direction:"column",textAlign:"start"},void 0,e&&Object(r["a"])(b["a"].Item,{margin:"0 0 small 0",overflowY:"visible"},void 0,Object(r["a"])(k["a"],{size:"x-large"},void 0,l["a"].t("Drag a file here, or"))),Object(r["a"])(b["a"].Item,{},void 0,Object(r["a"])(k["a"],{color:"brand",size:"medium"},void 0,l["a"].t("Choose a file to upload"))),this.props.assignment.allowedExtensions.length&&Object(r["a"])(b["a"].Item,{},void 0,l["a"].t("File permitted: %{fileTypes}",{fileTypes:this.props.assignment.allowedExtensions.map(e=>e.toUpperCase()).join(", ")}))))))
const t=this.props.assignment.allowedExtensions
const n=0===t.length||t.some(e=>"png"===e.toLowerCase())
return Object(r["a"])(y["a"].Consumer,{},void 0,e=>Object(r["a"])("div",{"data-testid":"upload-box"},void 0,Object(r["a"])(b["a"],{direction:"column",padding:"xx-small"},void 0,e.allowChangesToSubmission&&Object(r["a"])(b["a"].Item,{padding:"xx-small",textAlign:"center"},void 0,Object(r["a"])(d["a"],{assignmentID:this.props.assignment._id,courseID:this.props.assignment.env.courseId,handleCanvasFiles:this.handleCanvasFiles,handleWebcamPhotoUpload:n?this.handleWebcamPhotoUpload:null,renderCanvasFiles:true,userID:this.props.assignment.env.currentUser.id})),Object(r["a"])(b["a"].Item,{margin:"0 0 small 0",overflowY:"visible"},void 0,Object(r["a"])(v["a"],{accept:this.props.assignment.allowedExtensions.length?this.props.assignment.allowedExtensions:"",id:"inputFileDrop",interaction:e.allowChangesToSubmission?"enabled":"readonly","data-testid":"input-file-drop",margin:"xx-small",messages:this.state.messages,onDropAccepted:e=>this.handleDropAccepted(e),onDropRejected:this.handleDropRejected,renderLabel:a,shouldAllowMultiple:true,shouldEnablePreview:true})))))}render(){let e=this.getDraftAttachments()
this.props.filesToUpload.length&&(e=e.concat(this.props.filesToUpload))
return Object(r["a"])("div",{"data-testid":"upload-pane",style:{marginBottom:E["b"].variables.spacing.xxLarge}},void 0,Object(r["a"])(b["a"],{direction:"column",width:"100%",alignItems:"stretch"},void 0,Object(r["a"])(b["a"].Item,{overflowY:"visible"},void 0,this.renderUploadBox()),e.length>0&&Object(r["a"])(b["a"].Item,{},void 0,this.renderUploadedFiles(e))))}}B.contextType=o["a"]
a["default"]=Object(m["a"])(B)},"3jGd":function(e,a,t){"use strict"
t.d(a,"a",(function(){return p}))
var r=t("VTBJ")
var n=t("1OyB")
var o=t("vuIU")
var i=t("Ji7U")
var s=t("LK+K")
var l=t("q1tI")
var d=t.n(l)
var c=t("hPGw")
var u=d.a.createElement("path",{d:"M854.343529,1317.68471 L503.209412,966.550588 L583.058824,886.701176 L854.343529,1157.98588 L1374.55059,637.665882 L1454.4,717.628235 L854.343529,1317.68471 Z M960.056471,0 C430.701176,0 0.0564705882,430.644706 0.0564705882,960 C0.0564705882,1489.35529 430.701176,1920 960.056471,1920 C1489.29882,1920 1920.05647,1489.35529 1920.05647,960 C1920.05647,430.644706 1489.29882,0 960.056471,0 L960.056471,0 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(i["a"])(t,e)
var a=Object(s["a"])(t)
function t(){Object(n["a"])(this,t)
return a.apply(this,arguments)}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(c["a"],Object.assign({},this.props,{name:"IconComplete",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconCompleteSolid"
return t}(l["Component"])
p.glyphName="complete"
p.variant="Solid"
p.propTypes=Object(r["a"])({},c["a"].propTypes)},"8S//":function(e,a,t){"use strict"
t.d(a,"a",(function(){return n}))
var r="undefined"!==typeof navigator&&navigator.userAgent||""
var n=/Edge/.test(r)},"UT5+":function(e,a,t){"use strict"
t.d(a,"a",(function(){return U}))
var r=t("rePB")
var n=t("Ff2n")
var o=t("ODXe")
var i=t("1OyB")
var s=t("vuIU")
var l=t("Ji7U")
var d=t("LK+K")
var c=t("q1tI")
var u=t.n(c)
var p=t("17x9")
var h=t.n(p)
var m=t("TSYQ")
var v=t.n(m)
var b=t("3zPy")
var C=t.n(b)
var g=t("sTNg")
var f=t("n12J")
var D=t("BTe1")
var L=t("J2CL")
var _=t("oXx0")
var y=t("nAyT")
var O=t("E+IV")
var k=t("jtGx")
var E=t("tCl5")
var S=t("8S//")
function w(e,a){if(e&&a&&"application/x-moz-file"!==e.type){var t=j(a)
var r=e.type||""
var n=r.replace(/\/.*$/,"")
return t.some((function(a){if("."===a.charAt(0)){if(!e.name)return r.endsWith(a.slice(1))
return e.name.toLowerCase().endsWith(a.toLowerCase())}if(/\/\*$/.test(a))return n===a.replace(/\/.*$/,"")
return r===a}))}return true}function j(e){var a=Array.isArray(e)?e:e.split(",")
return a.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function I(e,a){var t=e.dataTransfer
if(t){if(t.files&&t.files.length)return t.files
if(t.items&&t.items.length)return t.items}else if(a&&a.files)return a.files
return[]}function x(e){var a=e.borders,t=e.colors
return{backgroundColor:t.backgroundLightest,borderRadius:a.radiusLarge,borderWidth:a.widthMedium,borderStyle:"dashed",borderColor:t.borderMedium,hoverBorderColor:t.borderBrand,acceptedColor:t.textBrand,rejectedColor:t.textDanger}}x.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
var F,P,B,z,A,R
var M={componentId:"emSEn",template:function(e){return"\n\n.emSEn_blJt,.emSEn_bGBk{position:relative}\n\n.emSEn_blJt{box-sizing:border-box;display:block}\n\n.emSEn_blJt.emSEn_JSXc{height:100%}\n\n.emSEn_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.emSEn_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .emSEn_QUBp,[dir=rtl] .emSEn_QUBp{text-align:center}\n\n.emSEn_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.emSEn_QUBp.emSEn_JSXc{height:100%}\n\n.emSEn_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.emSEn_byIz.emSEn_JSXc{height:100%}\n\n.emSEn_cbYS .emSEn_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.emSEn_cvQK .emSEn_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.emSEn_cFXB{cursor:not-allowed;pointer-events:none}\n\n.emSEn_eXzv{opacity:0.5}")},label:"emSEn_blJt",root:"emSEn_bGBk",withHeight:"emSEn_JSXc",input:"emSEn_cwos",labelContent:"emSEn_QUBp",layout:"emSEn_byIz",dragAccepted:"emSEn_cbYS",dragRejected:"emSEn_cvQK",functionallyDisabled:"emSEn_cFXB",visuallyDisabled:"emSEn_eXzv"}
function T(e){return e.keyCode===C.a.codes.space||e.keyCode===C.a.codes.enter}function J(){var e=false
try{e=document.documentMode||S["a"]}catch(e){}return e}var W=J()
var U=(F=Object(y["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),P=Object(_["a"])(),B=Object(L["l"])(x,M),F(z=P(z=B(z=(R=A=function(e){Object(l["a"])(t,e)
var a=Object(d["a"])(t)
function t(e){var r
Object(i["a"])(this,t)
r=a.call(this,e)
r.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
r.enterCounter=0
r.fileInputEl=null
r.defaultId=null
r.handleDragEnter=function(e){e.preventDefault()
r.enterCounter+=1
if(r.enterCounter>1)return
var a=r.allFilesAccepted(r.getDataTransferItems(e))
r.setState({isDragAccepted:a,isDragRejected:!a})
r.props.onDragEnter(e)}
r.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var a=e
a.dataTransfer.dropEffect="copy"}catch(e){}r.props.onDragOver(e)
return false}
r.handleDragLeave=function(e){e.preventDefault()
r.enterCounter-=1
if(r.enterCounter>0)return
r.setState({isDragAccepted:false,isDragRejected:false})
r.props.onDragLeave(e)}
r.handleChange=function(e){var a=r.props,t=a.onDrop,n=a.onDropAccepted,i=a.onDropRejected
var s=r.getDataTransferItems(e,r.shouldEnablePreview)
var l=r.parseFiles(s),d=Object(o["a"])(l,2),c=d[0],u=d[1]
e.preventDefault()
r.enterCounter=0
t(c,u,e)
u.length>0&&i(u,e)
c.length>0&&n(c,e)
r.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
r.fileAccepted=function(e){return w(e,r.props.accept)}
r.handleRef=function(e){r.fileInputEl=e}
r.handleBlur=function(){r.setState({isFocused:false,isFileBrowserDisplayed:false})}
r.handleFocus=function(){r.setState({isFocused:true,isFileBrowserDisplayed:false})}
r.handleClick=function(e){r.fileInputEl.value&&r.shouldAllowRepeats&&(r.fileInputEl.value=null)
r.fileInputEl.focus()
r.props.onClick(e)
r.setState({isFileBrowserDisplayed:true})}
r.handleKeyDown=function(e){if(r.state.isFocused&&T(e)){r.shouldAllowRepeats&&(r.fileInputEl.value=null)
if(W){e.stopPropagation()
e.preventDefault()
r.fileInputEl.click()}}}
r.handleKeyUp=function(e){if(e.keyCode===C.a.codes.esc&&r.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
r.setState({isFileBrowserDisplayed:false})}}
r.defaultId=Object(D["a"])("FileDrop")
r.messagesId=Object(D["a"])("FileDrop-messages")
return r}Object(s["a"])(t,[{key:"getDataTransferItems",value:function(e,a){var t=Array.from(I(e,this.fileInputEl))
t.length>1&&(t=this.shouldAllowMultiple?t:[t[0]])
if(a)return t.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return t}},{key:"parseFiles",value:function(e){var a=this
var t=[]
var r=[]
e.forEach((function(e){a.fileAccepted(e)&&a.fileMatchSize(e)?t.push(e):r.push(e)}))
return[t,r]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?j(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,a=e.label,t=e.renderLabel
return Object(O["a"])(a||t,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e,a,t
var o=this.props,i=o.display,s=o.height,l=o.width,d=o.minWidth,c=o.maxWidth,p=o.margin,h=(o.onDropAccepted,o.onDropRejected,Object(n["a"])(o,["display","height","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var m=this.props.id||this.defaultId
var b="disabled"===this.interaction||"readonly"===this.interaction
var C=this.state.isDragRejected||this.invalid?"danger":void 0
var D=(e={},Object(r["a"])(e,M.label,true),Object(r["a"])(e,M.functionallyDisabled,b),Object(r["a"])(e,M.visuallyDisabled,"disabled"===this.interaction),Object(r["a"])(e,M.dragRejected,this.state.isDragRejected||this.invalid),Object(r["a"])(e,M.dragAccepted,this.state.isDragAccepted),Object(r["a"])(e,M.withHeight,s),e)
return u.a.createElement(f["a"],{display:i,position:"relative",width:l,minWidth:d,maxWidth:c,margin:p,height:s},u.a.createElement("label",{className:v()(D),htmlFor:m,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},u.a.createElement(f["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:C,height:s},u.a.createElement("span",{className:v()((a={},Object(r["a"])(a,M.labelContent,true),Object(r["a"])(a,M.withHeight,s),a))},u.a.createElement("span",{className:v()((t={},Object(r["a"])(t,M.layout,true),Object(r["a"])(t,M.withHeight,s),t))},u.a.createElement(f["a"],{height:s},this.renderLabel()))))),u.a.createElement("input",Object.assign({},Object(k["b"])(h),{onClick:this.handleClick,type:"file",className:M.input,id:m,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:b})),this.hasMessages?u.a.createElement(f["a"],{display:"block",margin:"small 0 0"},u.a.createElement(g["c"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(E["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
t.displayName="FileDrop"
return t}(c["Component"]),A.propTypes={id:h.a.string,renderLabel:h.a.oneOfType([h.a.func,h.a.node]).isRequired,accept:h.a.oneOfType([h.a.string,h.a.arrayOf(h.a.string)]),messages:h.a.arrayOf(g["d"].message),onClick:h.a.func,onDrop:h.a.func,onDropAccepted:h.a.func,onDropRejected:h.a.func,onDragEnter:h.a.func,onDragOver:h.a.func,onDragLeave:h.a.func,shouldEnablePreview:h.a.bool,shouldAllowMultiple:h.a.bool,shouldAllowRepeats:h.a.bool,maxSize:h.a.number,minSize:h.a.number,interaction:h.a.oneOf(["enabled","disabled","readonly"]),display:h.a.oneOf(["block","inline-block"]),height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),margin:L["c"].spacing,label:h.a.oneOfType([h.a.func,h.a.node]),enablePreview:h.a.bool,allowRepeatFileSelection:h.a.bool,allowMultiple:h.a.bool},A.defaultProps={onClick:function(e){},onDrop:function(e,a,t){},onDropAccepted:function(e,a){},onDropRejected:function(e,a){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",height:void 0,width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},R))||z)||z)||z)},hmuw:function(e,a,t){e.exports=t.p+"385ff3b0e7660fad56751f2a4b3c70e4.svg"},pUPW:function(e,a,t){"use strict"
var r=t("HGxv")
var n=t("8WeW")
Object(n["a"])(JSON.parse('{"ar":{"_5a374287":"..."},"ca":{"_5a374287":"..."},"cy":{"_5a374287":"..."},"da":{"_5a374287":"..."},"da-x-k12":{"_5a374287":"..."},"de":{"_5a374287":"..."},"el":{"_5a374287":"..."},"en-AU":{"_5a374287":"..."},"en-AU-x-unimelb":{"_5a374287":"..."},"en-CA":{"_5a374287":"..."},"en-GB":{"_5a374287":"..."},"en-GB-x-ukhe":{"_5a374287":"..."},"es":{"_5a374287":"..."},"es-ES":{"_5a374287":"..."},"fa":{"_5a374287":"..."},"fi":{"_5a374287":"..."},"fr":{"_5a374287":"..."},"fr-CA":{"_5a374287":"..."},"he":{"_5a374287":"..."},"ht":{"_5a374287":"..."},"hu":{"_5a374287":"..."},"hy":{"_5a374287":"..."},"is":{"_5a374287":"..."},"it":{"_5a374287":"..."},"ja":{"_5a374287":"..."},"ko":{"_5a374287":"..."},"mi":{"_5a374287":"..."},"nb":{"_5a374287":"…"},"nb-x-k12":{"_5a374287":"…"},"nl":{"_5a374287":"..."},"nn":{"_5a374287":"..."},"pl":{"_5a374287":"..."},"pt":{"_5a374287":"..."},"pt-BR":{"_5a374287":"..."},"ru":{"_5a374287":"..."},"sl":{"_5a374287":"..."},"sv":{"_5a374287":"..."},"sv-x-k12":{"_5a374287":"..."},"th":{"_5a374287":"..."},"tr":{"_5a374287":"..."},"uk":{"_5a374287":"..."},"zh-Hans":{"_5a374287":"..."},"zh-Hant":{"_5a374287":"..."}}'))
t("jQeR")
t("0sPK")
var o=r["default"].scoped("assignments_2_elide_string")
const i=e=>e.length>21?`${e.substr(0,9)}${o.t("...")}${e.substr(-9)}`:e
a["a"]=i},wOqo:function(e,a,t){"use strict"
t.d(a,"a",(function(){return S}))
var r=t("rePB")
var n=t("Ff2n")
var o=t("1OyB")
var i=t("vuIU")
var s=t("Ji7U")
var l=t("LK+K")
var d=t("q1tI")
var c=t.n(d)
var u=t("17x9")
var p=t.n(u)
var h=t("TSYQ")
var m=t.n(h)
var v=t("n12J")
var b=t("E+IV")
var C=t("jtGx")
var g=t("oXx0")
var f=t("J2CL")
function D(e){var a=e.borders,t=e.colors,r=e.spacing,n=e.typography
return{color:t.textDarkest,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,lineHeight:n.lineHeightCondensed,fontSize:n.fontSizeMedium,xSmallHeight:r.xSmall,xSmallValueFontSize:n.fontSizeXSmall,smallHeight:r.small,smallValueFontSize:n.fontSizeXSmall,mediumHeight:r.medium,mediumValueFontSize:n.fontSizeSmall,largeHeight:r.large,largeValueFontSize:n.fontSizeMedium,valuePadding:"".concat(r.xxSmall),meterColorBrand:t.backgroundBrand,meterColorBrandInverse:t.backgroundBrand,meterColorInfo:t.backgroundInfo,meterColorInfoInverse:t.backgroundInfo,meterColorSuccess:t.backgroundSuccess,meterColorSuccessInverse:t.backgroundSuccess,meterColorDanger:t.backgroundDanger,meterColorDangerInverse:t.backgroundDanger,meterColorAlert:t.backgroundAlert,meterColorAlertInverse:t.backgroundAlert,meterColorWarning:t.backgroundWarning,meterColorWarningInverse:t.backgroundWarning,meterBorderWidthInverse:a.widthSmall,meterBorderColorInverse:"transparent",trackColor:t.backgroundLightest,trackColorInverse:"transparent",trackBottomBorderWidth:a.widthSmall,trackBottomBorderColor:t.borderMedium,trackBottomBorderColorInverse:t.borderLightest}}D.canvas=function(e){return{color:e["ic-brand-font-color-dark"],meterColorBrand:e["ic-brand-primary"]}}
D["canvas-a11y"]=D["canvas-high-contrast"]=function(e){var a=e.colors
return{meterBorderColorInverse:a.borderLightest,meterColorBrandInverse:a.backgroundLightest,meterColorSuccessInverse:a.backgroundLightest,meterColorInfoInverse:a.backgroundLightest,meterColorAlertInverse:a.backgroundLightest,meterColorWarningInverse:a.backgroundLightest,meterColorDangerInverse:a.backgroundLightest}}
var L,_,y,O,k
var E={componentId:"deLCD",template:function(e){return"\n\n.deLCD_bGBk{align-items:center;display:flex;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.deLCD_eQhm{flex:1;position:relative}\n\n.deLCD_IjKP{border-bottom-style:solid;border-bottom-width:").concat(e.trackBottomBorderWidth||"inherit",";height:100%;left:0;position:absolute;top:0}\n\n.deLCD_eCEP[value],.deLCD_IjKP{box-sizing:border-box;display:block;width:100%}\n\n.deLCD_eCEP[value]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:none;position:relative}\n\n.deLCD_eCEP[value]::-webkit-progress-bar{background:transparent}\n\n.deLCD_eCEP[value]::-ms-fill{border:none}\n\n.deLCD_fqzO{-webkit-padding-start:").concat(e.valuePadding||"inherit",";box-sizing:border-box;flex:0 0 5.625rem;line-height:1;padding-inline-start:").concat(e.valuePadding||"inherit","}\n\n[dir=ltr] .deLCD_fqzO{padding-left:").concat(e.valuePadding||"inherit","}\n\n[dir=rtl] .deLCD_fqzO{padding-right:").concat(e.valuePadding||"inherit","}\n\n.deLCD_dIzR .deLCD_eCEP[value]{height:").concat(e.xSmallHeight||"inherit","}\n\n.deLCD_dIzR .deLCD_fqzO{font-size:").concat(e.xSmallValueFontSize||"inherit","}\n\n.deLCD_VCXp .deLCD_eCEP[value]{height:1.125rem}\n\n.deLCD_VCXp .deLCD_fqzO{font-size:").concat(e.smallValueFontSize||"inherit","}\n\n.deLCD_fKcQ .deLCD_eCEP[value]{height:").concat(e.mediumHeight||"inherit","}\n\n.deLCD_fKcQ .deLCD_fqzO{font-size:").concat(e.mediumValueFontSize||"inherit","}\n\n.deLCD_cnhd .deLCD_eCEP[value]{height:").concat(e.largeHeight||"inherit","}\n\n.deLCD_cnhd .deLCD_fqzO{font-size:").concat(e.largeValueFontSize||"inherit","}\n\n.deLCD_eCSh .deLCD_eQhm{background:").concat(e.trackColor||"inherit","}\n\n.deLCD_eCSh .deLCD_IjKP{border-bottom-color:").concat(e.trackBottomBorderColor||"inherit","}\n\n.deLCD_eCSh.deLCD_fEhA .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorBrand||"inherit","}\n\n.deLCD_eCSh.deLCD_fEhA .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorBrand||"inherit","}\n\n.deLCD_eCSh.deLCD_fEhA .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorBrand||"inherit","}\n\n.deLCD_eCSh.deLCD_diLM .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorInfo||"inherit","}\n\n.deLCD_eCSh.deLCD_diLM .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorInfo||"inherit","}\n\n.deLCD_eCSh.deLCD_diLM .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorInfo||"inherit","}\n\n.deLCD_eCSh.deLCD_buIS .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorSuccess||"inherit","}\n\n.deLCD_eCSh.deLCD_buIS .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorSuccess||"inherit","}\n\n.deLCD_eCSh.deLCD_buIS .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorSuccess||"inherit","}\n\n.deLCD_eCSh.deLCD_dpQv .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorDanger||"inherit","}\n\n.deLCD_eCSh.deLCD_dpQv .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorDanger||"inherit","}\n\n.deLCD_eCSh.deLCD_dpQv .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorDanger||"inherit","}\n\n.deLCD_eCSh.deLCD_dyHF .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorWarning||"inherit","}\n\n.deLCD_eCSh.deLCD_dyHF .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorWarning||"inherit","}\n\n.deLCD_eCSh.deLCD_dyHF .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorWarning||"inherit","}\n\n.deLCD_eCSh.deLCD_fJaO .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorAlert||"inherit","}\n\n.deLCD_eCSh.deLCD_fJaO .deLCD_eCEP[value]::-moz-primary-bar{background:").concat(e.meterColorAlert||"inherit","}\n\n.deLCD_eCSh.deLCD_fJaO .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorAlert||"inherit","}\n\n.deLCD_bFtJ .deLCD_eQhm{background:").concat(e.trackColorInverse||"inherit","}\n\n.deLCD_bFtJ .deLCD_IjKP{border-bottom-color:").concat(e.trackBottomBorderColorInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fEhA .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorBrandInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fEhA .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorBrandInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fEhA .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorBrandInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_diLM .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorInfoInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_diLM .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorInfoInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_diLM .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorInfoInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_buIS .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorSuccessInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_buIS .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorSuccessInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_buIS .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorSuccessInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dpQv .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorDangerInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dpQv .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorDangerInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dpQv .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorDangerInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dyHF .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorWarningInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dyHF .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorWarningInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_dyHF .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorWarningInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fJaO .deLCD_eCEP[value]::-webkit-progress-value{background:").concat(e.meterColorAlertInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fJaO .deLCD_eCEP[value]::-moz-progress-bar{background:").concat(e.meterColorAlertInverse||"inherit","}\n\n.deLCD_bFtJ.deLCD_fJaO .deLCD_eCEP[value]::-ms-fill{background:").concat(e.meterColorAlertInverse||"inherit","}")},root:"deLCD_bGBk",trackLayout:"deLCD_eQhm",trackBorder:"deLCD_IjKP",track:"deLCD_eCEP",value:"deLCD_fqzO","size--x-small":"deLCD_dIzR","size--small":"deLCD_VCXp","size--medium":"deLCD_fKcQ","size--large":"deLCD_cnhd","color--primary":"deLCD_eCSh","meterColor--brand":"deLCD_fEhA","meterColor--info":"deLCD_diLM","meterColor--success":"deLCD_buIS","meterColor--danger":"deLCD_dpQv","meterColor--warning":"deLCD_dyHF","meterColor--alert":"deLCD_fJaO","color--primary-inverse":"deLCD_bFtJ"}
var S=(L=Object(g["a"])(),_=Object(f["l"])(D,E),L(y=_(y=(k=O=function(e){Object(s["a"])(t,e)
var a=Object(l["a"])(t)
function t(){Object(o["a"])(this,t)
return a.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e
var a=this.props,t=a.renderValue,o=a.formatScreenReaderValue,i=a.valueNow,s=a.valueMax,l=a.screenReaderLabel,d=a.size,u=a.color,p=a.meterColor,h=Object(n["a"])(a,["renderValue","formatScreenReaderValue","valueNow","valueMax","screenReaderLabel","size","color","meterColor"])
var g="function"===typeof o&&o({valueNow:i,valueMax:s})
var f="".concat(l," ").concat(g)
var D=Object(b["a"])(t,{valueNow:i,valueMax:s})
var L="function"===typeof p?p({valueNow:i,valueMax:s}):p
var _=(e={},Object(r["a"])(e,E.root,true),Object(r["a"])(e,E["size--".concat(d)],true),Object(r["a"])(e,E["color--".concat(u)],true),Object(r["a"])(e,E["meterColor--".concat(L)],true),e)
return c.a.createElement(v["a"],Object.assign({},Object(C["b"])(h),{as:this.props.as,className:m()(_),margin:this.props.margin,elementRef:this.props.elementRef}),c.a.createElement("span",{className:E.trackLayout},c.a.createElement("span",{className:E.trackBorder}),c.a.createElement("progress",{className:E.track,max:s,value:i,role:"progressbar","aria-valuetext":g,"aria-valuenow":i,"aria-valuemax":s,"aria-label":f})),D&&c.a.createElement("span",{className:E.value,"aria-hidden":"true"},D))}}])
t.displayName="ProgressBar"
return t}(d["Component"]),O.propTypes={screenReaderLabel:p.a.string.isRequired,size:p.a.oneOf(["x-small","small","medium","large"]),valueMax:p.a.number,valueNow:p.a.number,formatScreenReaderValue:p.a.func,renderValue:p.a.oneOfType([p.a.func,p.a.node]),color:p.a.oneOf(["primary","primary-inverse"]),meterColor:p.a.oneOfType([p.a.func,p.a.oneOf(["info","warning","danger","alert","success","brand"])]),margin:f["c"].spacing,elementRef:p.a.func,as:p.a.elementType},O.defaultProps={formatScreenReaderValue:function(e){var a=e.valueNow,t=e.valueMax
return"".concat(a," / ").concat(t)},size:"medium",valueMax:100,valueNow:0,as:"div",renderValue:void 0,margin:void 0,elementRef:void 0,color:"primary",meterColor:function(e){var a=e.valueNow,t=e.valueMax
return a/t>=1?"success":"brand"}},k))||y)||y)},xHhu:function(e,a,t){"use strict"
t.d(a,"a",(function(){return p}))
var r=t("VTBJ")
var n=t("1OyB")
var o=t("vuIU")
var i=t("Ji7U")
var s=t("LK+K")
var l=t("q1tI")
var d=t.n(l)
var c=t("hPGw")
var u=d.a.createElement("path",{d:"M1581.17647,1750.58824 C1581.17647,1781.64706 1555.76471,1807.05882 1524.70588,1807.05882 L395.294118,1807.05882 C364.235294,1807.05882 338.823529,1781.64706 338.823529,1750.58824 L338.823529,564.705882 L225.882353,564.705882 L225.882353,1750.58824 C225.882353,1843.99059 301.891765,1920 395.294118,1920 L1524.70588,1920 C1618.10824,1920 1694.11765,1843.99059 1694.11765,1750.58824 L1694.11765,564.705882 L1581.17647,564.705882 L1581.17647,1750.58824 Z M677.647059,1581.17647 L790.588235,1581.17647 L790.588235,677.647059 L677.647059,677.647059 L677.647059,1581.17647 Z M1129.41176,1581.17647 L1242.35294,1581.17647 L1242.35294,677.647059 L1129.41176,677.647059 L1129.41176,1581.17647 Z M1340.62306,338.823529 L1217.06541,2.5243549e-29 L694.599529,2.5243549e-29 L571.267765,338.823529 L0.0112941176,338.823529 L0.0112941176,451.764706 L1920.01129,451.764706 L1920.01129,338.823529 L1340.62306,338.823529 Z M691.324235,338.823529 L773.658353,112.941176 L1138.11953,112.941176 L1220.45365,338.823529 L691.324235,338.823529 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(i["a"])(t,e)
var a=Object(s["a"])(t)
function t(){Object(n["a"])(this,t)
return a.apply(this,arguments)}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(c["a"],Object.assign({},this.props,{name:"IconTrash",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconTrashLine"
return t}(l["Component"])
p.glyphName="trash"
p.variant="Line"
p.propTypes=Object(r["a"])({},c["a"].propTypes)}}])

//# sourceMappingURL=4088-c-72da3c3a32.js.map