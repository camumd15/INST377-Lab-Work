(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4123,4132],{WROG:function(t,e,n){"use strict"
n.d(e,"a",(function(){return y}))
var i=n("Ff2n")
var s=n("An8g")
var a=n("q1tI")
var r=n.n(a)
n("17x9")
var o=n("LvDl")
var l=n("oJ5y")
var d=n("Oioo")
var c=n("L+/K")
var u=n("4Awi")
const p=["id","label","value","onChange","children","noOptionsLabel"],h=["id","children"],O=["id","label"]
var v,b
const g="_noOptionsOption"
function m(){return v||(v=Object(s["a"])("div",{}))}function f(){return b||(b=Object(s["a"])("div",{}))}class y extends r.a.Component{constructor(t){super(t)
this.backupKey=0
this.handleBlur=t=>{this.setState({highlightedOptionId:null})}
this.handleShowOptions=()=>{this.setState({isShowingOptions:true})}
this.handleHideOptions=t=>{this.setState(t=>{const e=this.getOptionLabelById(t.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:e,announcement:l["a"].t("List collapsed.")}})}
this.handleHighlightOption=(t,{id:e})=>{if(e===g)return
const n=this.getOptionLabelById(e)
const i=this.state.isShowingOptions?"":l["a"].t("List expanded.")
const s="keydown"===t.type?n:this.state.inputValue
this.setState({highlightedOptionId:e,inputValue:s,announcement:`${n} ${i}`})}
this.handleSelectOption=(t,{id:e})=>{if(e===g)this.setState({isShowingOptions:false,announcement:l["a"].t("List collapsed")})
else{const n=this.getOptionLabelById(e)
const i=this.state.selectedOptionId
this.setState({selectedOptionId:e,inputValue:n,isShowingOptions:false,announcement:l["a"].t("%{option} selected. List collapsed.",{option:n})})
const s=this.getOptionByFieldValue("id",e)
i!==e&&this.props.onChange(t,s.props.value)}}
const e=this.getOptionByFieldValue("value",t.value)
this.state={inputValue:e?e.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:e?e.props.id:null,announcement:null}}componentDidUpdate(t){if(this.props.value!==t.value||!Object(o["isEqual"])(this.props.children,t.children)){const t=this.getOptionByFieldValue("value",this.props.value)
this.setState({inputValue:t?t.props.children:"",selectedOptionId:t?t.props.id:""})}}render(){const t=this.props,e=t.id,n=t.label,a=(t.value,t.onChange,t.children),o=(t.noOptionsLabel,Object(i["a"])(t,p))
return r.a.createElement(r.a.Fragment,null,r.a.createElement(d["a"],Object.assign({id:e,renderLabel:()=>n,assistiveText:l["a"].t("Use arrow keys to navigate options."),inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},o),this.renderChildren(a)),Object(s["a"])(c["a"],{liveRegion:()=>document.getElementById("flash_screenreader_holder"),liveRegionPoliteness:"assertive",screenReaderOnly:true},void 0,this.state.announcement))}renderChildren(t){if(!Array.isArray(t))return Object(u["a"])(t,[m])?this.renderOption(t):Object(u["a"])(t,[f])?this.renderGroup(t):this.renderNoOptionsOption()
const e=t.map(t=>{if(Array.isArray(t))return this.renderChildren(t)
if(Object(u["a"])(t,[m]))return this.renderOption(t)
if(Object(u["a"])(t,[f]))return this.renderGroup(t)
return null}).filter(t=>!!t)
if(0===e.length)return this.renderNoOptionsOption()
return e}renderOption(t){const e=t.props,n=e.id,s=e.children,a=Object(i["a"])(e,h)
return r.a.createElement(d["a"].Option,Object.assign({id:n,key:t.key||n||++this.backupKey,isHighlighted:n===this.state.highlightedOptionId,isSelected:n===this.state.selectedOptionId},a),s)}renderGroup(t){const e=t.props,n=e.id,s=e.label,a=Object(i["a"])(e,O)
const l=Object(o["compact"])(Object(o["castArray"])(t.props.children))
return r.a.createElement(d["a"].Group,Object.assign({"data-testid":"Group:"+s,renderLabel:()=>s,key:t.key||n||++this.backupKey},a),l.map(t=>this.renderOption(t)))}renderNoOptionsOption(){return Object(s["a"])(d["a"].Option,{id:g,isHighlighted:false,isSelected:false},void 0,this.props.noOptionsLabel)}getOptionLabelById(t){const e=this.getOptionByFieldValue("id",t)
return e?e.props.children:""}getOptionByFieldValue(t,e,n=Object(o["castArray"])(this.props.children)){if(!this.props.children)return null
let i=null
for(let s=0;s<n.length;++s){const a=n[s]
if(Array.isArray(a))i=this.getOptionByFieldValue(t,e,a)
else if(Object(u["a"])(a,[m]))a.props[t]===e&&(i=a)
else if(Object(u["a"])(a,[f])){const n=Object(o["castArray"])(a.props.children)
for(let s=0;s<n.length;++s){const a=n[s]
if(a.props[t]===e){i=a
break}}}if(i)break}return i}}y.Option=m
y.Group=f
y.defaultProps={noOptionsLabel:"---"}},"dIE/":function(t,e,n){"use strict"
n.r(e)
n.d(e,"default",(function(){return v}))
var i=n("An8g")
var s=n("ODXe")
n("17x9")
var a=n("WROG")
var r=n("aLXX")
var o=n("UUaj")
n("cYdA")
var l=n("q1tI")
n("EXQS")
n("z3ng")
n("FcR3")
var d=n("kv/t")
var c=n("ZbPE")
var u=n("KIj7")
var p=n("n12J")
const h={StudentEnrollment:o["a"].t("Student"),TeacherEnrollment:o["a"].t("Teacher"),TaEnrollment:o["a"].t("TA")}
function O(t){var e,n
if(!(null!==t&&void 0!==t&&t.name))return o["a"].t("Anonymous")
const i=h[null===(e=t.enrollments)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.type]
return i?`${t.name} (${i})`:t.name}function v(t){var e,n,h,v
const b=Object(l["useState"])(null===(e=t.assessments)||void 0===e||null===(n=e[0])||void 0===n?void 0:n._id),g=Object(s["a"])(b,2),m=g[0],f=g[1]
const y=null===(h=t.assessments)||void 0===h?void 0:h.find(t=>t._id===m)
return Object(i["a"])("div",{"data-testid":"rubric-tab"},void 0,Object(i["a"])(p["a"],{as:"div",margin:"none none medium"},void 0,Object(i["a"])(u["a"],{defaultExpanded:true,fluidWidth:true,summary:Object(i["a"])(c["a"],{weight:"bold"},void 0,o["a"].t("View Rubric"))},void 0,!!(null!==(v=t.assessments)&&void 0!==v&&v.length)&&Object(i["a"])("div",{style:{marginBottom:"22px",width:"325px"}},void 0,Object(i["a"])(a["a"],{label:o["a"].t("Select Grader"),value:y._id,onChange:(t,e)=>f(e)},void 0,t.assessments.map(t=>Object(i["a"])(a["a"].Option,{value:t._id,id:t._id},t._id,O(t.assessor))))),Object(i["a"])(d["a"],{customRatings:t.proficiencyRatings,rubric:t.rubric,rubricAssessment:Object(r["a"])(t.rubric,y||{}),rubricAssociation:t.rubricAssociation}))))}},nl5f:function(t,e,n){"use strict"
n.r(e)
n.d(e,"default",(function(){return O}))
var i=n("An8g")
n("yXnT")
var s=n("1sWr")
var a=n.n(s)
var r=n("qwzJ")
var o=n("UUaj")
var l=n("7hyl")
n("q1tI")
var d=n("dIE/")
var c=n("JZ9k")
n("uqZB")
var u=n("ttZb")
var p=n("Qe/J")
var h
function O(t){var e,n,s,O,v,b
const g=Object(u["d"])(c["c"],{variables:{assignmentLid:t.assignment._id,submissionID:t.submission.id,courseID:t.assignment.env.courseId,submissionAttempt:t.submission.attempt}}),m=g.loading,f=g.error,y=g.data
if(m)return h||(h=Object(i["a"])(l["a"],{}))
if(f)return Object(i["a"])(r["a"],{imageUrl:a.a,errorSubject:o["a"].t("Assignments 2 Student initial query error"),errorCategory:o["a"].t("Assignments 2 Student Error Page")})
return Object(i["a"])(d["default"],{assessments:null===(e=y.submission)||void 0===e||null===(n=e.rubricAssessmentsConnection)||void 0===n||null===(s=n.nodes)||void 0===s?void 0:s.map(t=>Object(p["a"])(t)),proficiencyRatings:null===(O=y.course.account)||void 0===O||null===(v=O.outcomeProficiency)||void 0===v||null===(b=v.proficiencyRatingsConnection)||void 0===b?void 0:b.nodes,rubric:Object(p["b"])(y.assignment.rubric),rubricAssociation:y.assignment.rubricAssociation},t.submission.attempt)}}}])

//# sourceMappingURL=4123-c-1a9968f98e.js.map