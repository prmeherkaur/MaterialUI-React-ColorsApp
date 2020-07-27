(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{236:function(e,a,t){e.exports=t.p+"static/media/bg.77428cd4.svg"},261:function(e,a,t){e.exports=t(506)},266:function(e,a,t){},331:function(e,a,t){},506:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(34),s=(t(266),t(104)),m=t(19),d=t(20),u=t(22),h=t(21),p=t(8),b=t(23),g=t(509),f=t(7),v=t(231),C=t(42),y=t.n(C),j=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},E=(o={ColorBox:{width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}}},Object(f.a)(o,j("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(f.a)(o,j("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(f.a)(o,j("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),Object(f.a)(o,"copyText",{color:function(e){return y()(e.background).luminance()>=.7?"black":"white"}}),Object(f.a)(o,"colorName",{color:function(e){return y()(e.background).luminance()<=.08?"white":"black"}}),Object(f.a)(o,"seeMore",Object(f.a)({color:function(e){return y()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},j("sm"),{width:"40%",height:"20%",fontSize:"15px"})),Object(f.a)(o,"copyButton",{color:function(e){return y()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0}),Object(f.a)(o,"boxContent",{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"}),Object(f.a)(o,"copyOverlay",{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"}),Object(f.a)(o,"showOverlay",{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"}),Object(f.a)(o,"copyMessage",{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:"100"}}),Object(f.a)(o,"showMessage",{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}),o),x=t(16),O=t.n(x),k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.id,n=e.paletteId,l=e.showingFullPalette,i=e.classes,s=this.state.copied;return r.a.createElement(v.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:i.ColorBox},r.a.createElement("div",{style:{background:t},className:O()(i.copyOverlay,Object(f.a)({},i.showOverlay,s))}),r.a.createElement("div",{className:O()(i.copyMessage,Object(f.a)({},i.showMessage,s))},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:i.copyText},this.props.background)),r.a.createElement("div",null,r.a.createElement("div",{className:i.boxContent},r.a.createElement("span",{className:i.colorName},a)),r.a.createElement("button",{className:i.copyButton},"Copy")),l&&r.a.createElement(c.b,{to:"/palette/".concat(n,"/").concat(o),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:i.seeMore},"MORE"))))}}]),a}(n.Component),w=Object(g.a)(E)(k);var S,N=Object(g.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),P=t(244),F=t(566),B=t(552),D=t(568),I=t(553),A=t(126),T=t.n(A),L={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(f.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},j("xs"),{display:"none"}),slider:Object(f.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},j("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}},R=(t(329),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(p.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.Navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(c.b,{to:"/"},"Main-color-picker")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:n.slider},r.a.createElement(P.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(F.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(B.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(B.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(B.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(I.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(T.a,null))]}))}}]),a}(n.Component)),G=Object(g.a)(L)(R),M={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(S={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(f.a)(S,j("lg"),{width:"25%",height:"33.3333%"}),Object(f.a)(S,j("md"),{width:"50%",height:"20%"}),Object(f.a)(S,j("xs"),{width:"100%",height:"10%"}),S)},z=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(p.a)(t)),t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return r.a.createElement(w,{background:e[s],name:e.name,key:e.id,id:e.id,paletteId:n,showingFullPalette:!0})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(G,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(N,{paletteName:t,emoji:o}))}}]),a}(n.Component),H=Object(g.a)(M)(z);t(331);var U,V,q,W=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},J=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Y=t(569),K=t(567),_=t(127),Q=t.n(_),X=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(p.a)(t)),t.handleClick=t.handleClick.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.handleClick(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement("div",{className:a.delete},r.a.createElement(Q.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette})),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))}}]),a}(n.PureComponent),$=Object(g.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.1rem",paddingBottom:"0.1rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.4rem",fontSize:"1.2rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(X),Z=t(236),ee={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(t.n(Z).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(U={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(f.a)(U,j("xl"),{width:"80%"}),Object(f.a)(U,j("xs"),{width:"75%"}),U),nav:{color:"white",display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center","& a":{color:"white"}},palettes:(V={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(f.a)(V,j("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(f.a)(V,j("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),V)},ae=t(554),te=t(551),oe=t(507),ne=t(556),re=t(570),le=t(557),ie=t(237),ce=t.n(ie),se=t(555),me=t(168),de=t.n(me),ue=t(169),he=t.n(ue),pe=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingId:""},t.openDialog=t.openDialog.bind(Object(p.a)(t)),t.closeDialog=t.closeDialog.bind(Object(p.a)(t)),t.handleDelete=t.handleDelete.bind(Object(p.a)(t)),t.goToPalette=t.goToPalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(c.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(Y.a,{className:o.palettes},t.map((function(a){return r.a.createElement(K.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement($,Object.assign({},a,{handleClick:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(ae.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(se.a,{id:"delete-dialog-title"},"Delete This Palette?"),r.a.createElement(te.a,null,r.a.createElement(oe.a,{button:!0,onClick:this.handleDelete},r.a.createElement(ne.a,null,r.a.createElement(re.a,{style:{backgroundColor:de.a[100],color:de.a[600]}},r.a.createElement(ce.a,null))),r.a.createElement(le.a,{primary:"Delete"})),r.a.createElement(oe.a,{button:!0,onClick:this.closeDialog},r.a.createElement(ne.a,null,r.a.createElement(re.a,{style:{backgroundColor:he.a[100],color:he.a[600]}},r.a.createElement(T.a,null))),r.a.createElement(le.a,{primary:"Cancel"})))))}}]),a}(n.Component),be=Object(g.a)(ee)(pe),ge=t(86),fe=t(5),ve=t(571),Ce=t(89),ye=t(565),je=t(561),Ee=t(243),xe=t.n(Ee),Oe=(q={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}}},Object(f.a)(q,j("lg"),{width:"25%",height:"20%"}),Object(f.a)(q,j("md"),{width:"50%",height:"10%"}),Object(f.a)(q,j("sm"),{width:"100%",height:"5%"}),Object(f.a)(q,"boxContent",{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return y()(e.color).luminance()<=.09?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"}),Object(f.a)(q,"deleteIcon",{transition:"all 0.3s ease-in-out"}),q),ke=Object(ge.b)((function(e){var a=e.classes,t=e.name,o=e.color,n=e.handleClick;return r.a.createElement("div",{className:a.root,style:{backgroundColor:o}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,t),r.a.createElement(Q.a,{className:a.deleteIcon,onClick:n})))})),we=Object(g.a)(Oe)(ke),Se=Object(ge.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(we,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),Ne=t(562),Pe=t(563),Fe=t(564),Be=t(240),De=t.n(Be),Ie=t(560),Ae=t(558),Te=t(559),Le=t(57),Re=t(245),Ge=(t(343),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showEmojiPicker=t.showEmojiPicker.bind(Object(p.a)(t)),t.savePalette=t.savePalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(ae.a,{open:"emoji"===t,onClose:o},r.a.createElement(se.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(Re.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),r.a.createElement(ae.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:o},r.a.createElement(se.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Le.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(Ae.a,null,r.a.createElement(Te.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),r.a.createElement(Le.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),r.a.createElement(Ie.a,null,r.a.createElement(je.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(je.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(n.Component)),Me=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(f.a)({width:"20%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"0.4rem","& a":{textDecoration:"none"}},j("xs"),{marginRight:"0.2rem"}),button:Object(f.a)({height:"50%",width:"50%"},j("xs"),{margin:"0 0.1rem",padding:"0.1rem"}),hide:{display:"none"}}},ze=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showForm=t.showForm.bind(Object(p.a)(t)),t.hideForm=t.hideForm.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,l=e.handleDrawerOpen,i=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(Ne.a,null),r.a.createElement(Pe.a,{position:"fixed",color:"default",className:O()(a.appBar,Object(f.a)({},a.appBarShift,t))},r.a.createElement(Fe.a,{disableGutters:!t},r.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:O()(a.menuButton,Object(f.a)({},a.hide,t))},r.a.createElement(De.a,null)),r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Create a Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/"},r.a.createElement(je.a,{variant:"outlined",color:"secondary",className:a.button},"Back")),r.a.createElement(je.a,{variant:"outlined",color:"primary",onClick:this.showForm,className:a.button},"Save"))),i&&r.a.createElement(Ge,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(n.Component),He=Object(fe.a)(Me,{withTheme:!0})(ze),Ue=t(241),Ve={picker:{width:"100% !important",marginTop:"1rem"},addColor:{width:"100%",padding:"0.2rem",marginTop:"0.2rem",fontSize:"1rem"},colorNameInput:{width:"100%",height:"10%"}},qe=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Le.ValidatorForm.addValidationRule("isColorUnique",(function(){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={name:this.state.newColorName,color:this.state.currentColor};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.isPaletteFull,t=e.classes;return r.a.createElement("div",null,r.a.createElement(Ue.ChromePicker,{color:this.state.currentColor,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(Le.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Le.TextValidator,{value:this.state.newColorName,name:"newColorName",onChange:this.handleChange,className:t.colorNameInput,placeholder:"Color Name",variant:"filled",margin:"normal",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),r.a.createElement(je.a,{variant:"contained",type:"submit",color:"primary",className:t.addColor,disabled:a,style:{backgroundColor:a?"grey":this.state.currentColor}},"Add Color")))}}]),a}(n.Component),We=Object(fe.a)(Ve)(qe),Je=t(242),Ye=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100%"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Je.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"90%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},Ke=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState((function(e){var t=e.colors;return{colors:Object(ge.c)(t,a,o)}}))},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.state={open:!0,colors:J[0].colors},t.addNewColor=t.addNewColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.removeColor=t.removeColor.bind(Object(p.a)(t)),t.clearColors=t.clearColors.bind(Object(p.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e])})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(He,{open:l,palettes:o,classes:a,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(ve.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(I.a,{fontSize:"small",onClick:this.handleDrawerClose},r.a.createElement(xe.a,{fontSize:"small"}))),r.a.createElement(ye.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(Ce.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(je.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),r.a.createElement(je.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:c,className:a.button},"Random Color")),r.a.createElement(We,{colors:i,addNewColor:this.addNewColor,isPaletteFull:c}))),r.a.createElement("main",{className:O()(a.content,Object(f.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Se,{colors:i,removeColor:this.removeColor,onSortEnd:this.onSortEnd,axis:"xy",distance:20})))}}]),a}(n.Component);Ke.defaultProps={maxColors:20};var _e=Object(fe.a)(Ye,{withTheme:!0})(Ke),Qe=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.classes,t=this._shades.map((function(a){return r.a.createElement(w,{background:a[e],name:a.name,key:a.name,showingFullPalette:!1})})),o=this.props.palette,n=o.paletteName,l=o.emoji,i=o.id;return r.a.createElement("div",{className:a.Palette},r.a.createElement(G,{handleChange:this.changeFormat,showAllColors:!1}),r.a.createElement("div",{className:a.colors},t,r.a.createElement("div",{className:a.goBack},r.a.createElement(c.b,{to:"/palette/".concat(i),className:"back-button"},"GO BACK"))),r.a.createElement(N,{paletteName:n,emoji:l}))}}]),a}(n.Component),Xe=Object(g.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}}})(Qe),$e=[50,100,200,300,400,500,600,700,800,900];function Ze(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=$e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;a.colors[i]=[]}}catch(v){o=!0,n=v}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var c,s,m=!0,d=!1,u=void 0;try{for(var h,p=e.colors[Symbol.iterator]();!(m=(h=p.next()).done);m=!0){var b=h.value,g=(c=b.color,s=10,y.a.scale(function(e){return[y()(e).darken(1.4).hex(),e,"#fff"]}(c)).mode("lab").colors(s)).reverse();for(var f in g)a.colors[$e[f]].push({name:"".concat(b.name," ").concat($e[f]),id:b.name.toLowerCase().replace(/ /g,"-"),hex:g[f],rgb:y()(g[f]).css(),rgba:y()(g[f]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(v){d=!0,u=v}finally{try{m||null==p.return||p.return()}finally{if(d)throw u}}return a}var ea=t(65),aa=function(e){function a(e){var t;Object(m.a)(this,a),t=Object(u.a)(this,Object(h.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||J},t.savePalette=t.savePalette.bind(Object(p.a)(t)),t.findPalette=t.findPalette.bind(Object(p.a)(t)),t.deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(d.a)(a,[{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"render",value:function(){var e=this;return r.a.createElement(ea.a,{render:function(a){var t=a.location;return r.a.createElement(Y.a,null,r.a.createElement(K.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(ea.c,{location:t},r.a.createElement(ea.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(W,null,r.a.createElement(_e,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(ea.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(W,null,r.a.createElement(Xe,{colorId:a.match.params.colorId,palette:Ze(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(ea.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(W,null,r.a.createElement(be,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(ea.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(W,null,r.a.createElement(H,{palette:Ze(e.findPalette(a.match.params.id))}))}}))))}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[261,1,2]]]);
//# sourceMappingURL=main.b6c19e5a.chunk.js.map