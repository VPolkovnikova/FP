!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return(e=o(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function o(e){var i=function(e,i){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,i||"default");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===t(i)?i:String(i)}System.register(["./index-legacy-a6b6faca.js","./linear-legacy-86f2c45d.js","./init-legacy-2d87855a.js"],(function(t,i){"use strict";var n,r,o,l,u,c,h,d,f,x,g,y,p,m,q;return{setters:[function(t){n=t.$,r=t.c,o=t.X,l=t.l,u=t.s,c=t.g,h=t.B,d=t.D,f=t.a,x=t.b,g=t.E,y=t.h,p=t.i,m=t.d},function(t){q=t.l},null],execute:function(){var i=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,3],i=[1,4],n=[1,5],a=[1,6],r=[1,7],s=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],o=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],l=[32,33,34],u=[2,7],c=[1,13],h=[1,17],d=[1,18],f=[1,19],x=[1,20],g=[1,21],y=[1,22],p=[1,23],m=[1,24],q=[1,25],b=[1,26],T=[1,27],A=[1,30],_=[1,31],v=[1,32],S=[1,33],k=[1,34],P=[1,35],F=[1,36],L=[1,37],C=[1,38],E=[1,39],z=[1,40],D=[1,41],w=[1,42],I=[1,57],O=[1,58],B=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],R={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(t,e,i,n,a,r,s){var o=r.length-1;switch(a){case 12:this.$=r[o].trim(),n.setDiagramTitle(this.$);break;case 13:this.$=r[o].trim(),n.setAccTitle(this.$);break;case 14:case 15:this.$=r[o].trim(),n.setAccDescription(this.$);break;case 16:n.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 17:n.addPoint(r[o-3],r[o-1],r[o]);break;case 18:n.setXAxisLeftText(r[o-2]),n.setXAxisRightText(r[o]);break;case 19:r[o-1].text+=" ⟶ ",n.setXAxisLeftText(r[o-1]);break;case 20:n.setXAxisLeftText(r[o]);break;case 21:n.setYAxisBottomText(r[o-2]),n.setYAxisTopText(r[o]);break;case 22:r[o-1].text+=" ⟶ ",n.setYAxisBottomText(r[o-1]);break;case 23:n.setYAxisBottomText(r[o]);break;case 24:n.setQuadrant1Text(r[o]);break;case 25:n.setQuadrant2Text(r[o]);break;case 26:n.setQuadrant3Text(r[o]);break;case 27:n.setQuadrant4Text(r[o]);break;case 31:case 33:this.$={text:r[o],type:"text"};break;case 32:this.$={text:r[o-1].text+""+r[o],type:r[o-1].type};break;case 34:this.$={text:r[o],type:"markdown"};break;case 35:this.$=r[o];break;case 36:this.$=r[o-1]+""+r[o]}},table:[{3:1,4:2,5:e,6:i,32:n,33:a,34:r},{1:[3]},{3:8,4:2,5:e,6:i,32:n,33:a,34:r},{3:9,4:2,5:e,6:i,32:n,33:a,34:r},t(s,[2,4],{7:10}),t(o,[2,28]),t(o,[2,29]),t(o,[2,30]),{1:[2,1]},{1:[2,2]},t(l,u,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:c,13:h,15:d,17:f,19:x,20:g,25:y,27:p,28:m,29:q,30:b,31:T,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w}),t(s,[2,5]),{4:43,32:n,33:a,34:r},t(l,u,{10:14,11:15,12:16,21:28,35:29,9:44,5:c,13:h,15:d,17:f,19:x,20:g,25:y,27:p,28:m,29:q,30:b,31:T,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w}),t(l,[2,9]),t(l,[2,10]),t(l,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},t(l,[2,15]),t(l,[2,16]),{21:48,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{21:49,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{21:50,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{21:51,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{21:52,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{21:53,35:29,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w},{5:I,22:[1,54],35:56,36:55,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O},t(B,[2,31]),t(B,[2,33]),t(B,[2,34]),t(B,[2,37]),t(B,[2,38]),t(B,[2,39]),t(B,[2,40]),t(B,[2,41]),t(B,[2,42]),t(B,[2,43]),t(B,[2,44]),t(B,[2,45]),t(B,[2,46]),t(B,[2,47]),t(s,[2,6]),t(l,[2,8]),t(l,[2,12]),t(l,[2,13]),t(l,[2,14]),t(l,[2,20],{36:55,35:56,5:I,26:[1,59],40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,23],{36:55,35:56,5:I,26:[1,60],40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,24],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,25],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,26],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,27],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),{23:[1,61]},t(B,[2,32]),t(B,[2,48]),t(B,[2,49]),t(B,[2,50]),t(l,[2,19],{35:29,21:62,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w}),t(l,[2,22],{35:29,21:63,37:A,38:_,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w}),{24:[1,64]},t(l,[2,18],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,21],{36:55,35:56,5:I,40:v,41:S,42:k,43:P,44:F,45:L,46:C,47:E,48:z,49:D,50:w,51:O}),t(l,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[],a=[null],r=[],s=this.table,o="",l=0,u=0,c=r.slice.call(arguments,1),h=Object.create(this.lexer),d={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(d.yy[f]=this.yy[f]);h.setInput(t,d.yy),d.yy.lexer=h,d.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var x=h.yylloc;r.push(x);var g=h.options&&h.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,p,m,q,b,T,A,_,v,S={};;){if(p=i[i.length-1],this.defaultActions[p]?m=this.defaultActions[p]:(null==y&&(v=void 0,"number"!=typeof(v=n.pop()||h.lex()||1)&&(v instanceof Array&&(v=(n=v).pop()),v=e.symbols_[v]||v),y=v),m=s[p]&&s[p][y]),void 0===m||!m.length||!m[0]){var k="";for(b in _=[],s[p])this.terminals_[b]&&b>2&&_.push("'"+this.terminals_[b]+"'");k=h.showPosition?"Parse error on line "+(l+1)+":\n"+h.showPosition()+"\nExpecting "+_.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(k,{text:h.match,token:this.terminals_[y]||y,line:h.yylineno,loc:x,expected:_})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+y);switch(m[0]){case 1:i.push(y),a.push(h.yytext),r.push(h.yylloc),i.push(m[1]),y=null,u=h.yyleng,o=h.yytext,l=h.yylineno,x=h.yylloc;break;case 2:if(T=this.productions_[m[1]][1],S.$=a[a.length-T],S._$={first_line:r[r.length-(T||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(T||1)].first_column,last_column:r[r.length-1].last_column},g&&(S._$.range=[r[r.length-(T||1)].range[0],r[r.length-1].range[1]]),void 0!==(q=this.performAction.apply(S,[o,u,l,d.yy,m[1],a,r].concat(c))))return q;T&&(i=i.slice(0,-1*T*2),a=a.slice(0,-1*T),r=r.slice(0,-1*T)),i.push(this.productions_[m[1]][0]),a.push(S.$),r.push(S._$),A=s[i[i.length-2]][i[i.length-1]],i.push(A);break;case 3:return!0}}return!0}},W={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in a)this[r]=a[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),r=0;r<a.length;r++)if((i=this._input.match(this.rules[a[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,a[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:break;case 2:return 32;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 22:case 24:case 28:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 23:this.begin("string");break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function N(){this.yy={}}return R.lexer=W,N.prototype=R,R.Parser=N,new N}();i.parser=i;var b=i,T=n(),A=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}var i,n,r;return i=t,(n=[{key:"getDefaultData",value:function(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}},{key:"getDefaultConfig",value:function(){var t,e,i,n,a,r,s,l,u,c,h,d,f,x,g,y,p,m;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(t=o.quadrantChart)?void 0:t.chartWidth)||500,chartWidth:(null==(e=o.quadrantChart)?void 0:e.chartHeight)||500,titlePadding:(null==(i=o.quadrantChart)?void 0:i.titlePadding)||10,titleFontSize:(null==(n=o.quadrantChart)?void 0:n.titleFontSize)||20,quadrantPadding:(null==(a=o.quadrantChart)?void 0:a.quadrantPadding)||5,xAxisLabelPadding:(null==(r=o.quadrantChart)?void 0:r.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(s=o.quadrantChart)?void 0:s.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(l=o.quadrantChart)?void 0:l.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(u=o.quadrantChart)?void 0:u.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(c=o.quadrantChart)?void 0:c.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(h=o.quadrantChart)?void 0:h.quadrantTextTopPadding)||5,pointTextPadding:(null==(d=o.quadrantChart)?void 0:d.pointTextPadding)||5,pointLabelFontSize:(null==(f=o.quadrantChart)?void 0:f.pointLabelFontSize)||12,pointRadius:(null==(x=o.quadrantChart)?void 0:x.pointRadius)||5,xAxisPosition:(null==(g=o.quadrantChart)?void 0:g.xAxisPosition)||"top",yAxisPosition:(null==(y=o.quadrantChart)?void 0:y.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(p=o.quadrantChart)?void 0:p.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(m=o.quadrantChart)?void 0:m.quadrantExternalBorderStrokeWidth)||2}}},{key:"getDefaultThemeConfig",value:function(){return{quadrant1Fill:T.quadrant1Fill,quadrant2Fill:T.quadrant2Fill,quadrant3Fill:T.quadrant3Fill,quadrant4Fill:T.quadrant4Fill,quadrant1TextFill:T.quadrant1TextFill,quadrant2TextFill:T.quadrant2TextFill,quadrant3TextFill:T.quadrant3TextFill,quadrant4TextFill:T.quadrant4TextFill,quadrantPointFill:T.quadrantPointFill,quadrantPointTextFill:T.quadrantPointTextFill,quadrantXAxisTextFill:T.quadrantXAxisTextFill,quadrantYAxisTextFill:T.quadrantYAxisTextFill,quadrantTitleFill:T.quadrantTitleFill,quadrantInternalBorderStrokeFill:T.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:T.quadrantExternalBorderStrokeFill}}},{key:"clear",value:function(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),l.info("clear called")}},{key:"setData",value:function(t){this.data=a(a({},this.data),t)}},{key:"addPoints",value:function(t){this.data.points=[].concat(e(t),e(this.data.points))}},{key:"setConfig",value:function(t){l.trace("setConfig called with: ",t),this.config=a(a({},this.config),t)}},{key:"setThemeConfig",value:function(t){l.trace("setThemeConfig called with: ",t),this.themeConfig=a(a({},this.themeConfig),t)}},{key:"calculateSpace",value:function(t,e,i,n){var a=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,r={top:"top"===t&&e?a:0,bottom:"bottom"===t&&e?a:0},s=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,o={left:"left"===this.config.yAxisPosition&&i?s:0,right:"right"===this.config.yAxisPosition&&i?s:0},l=this.config.titleFontSize+2*this.config.titlePadding,u={top:n?l:0},c=this.config.quadrantPadding+o.left,h=this.config.quadrantPadding+r.top+u.top,d=this.config.chartWidth-2*this.config.quadrantPadding-o.left-o.right,f=this.config.chartHeight-2*this.config.quadrantPadding-r.top-r.bottom-u.top;return{xAxisSpace:r,yAxisSpace:o,titleSpace:u,quadrantSpace:{quadrantLeft:c,quadrantTop:h,quadrantWidth:d,quadrantHalfWidth:d/2,quadrantHeight:f,quadrantHalfHeight:f/2}}}},{key:"getAxisLabels",value:function(t,e,i,n){var a=n.quadrantSpace,r=n.titleSpace,s=a.quadrantHalfHeight,o=a.quadrantHeight,l=a.quadrantLeft,u=a.quadrantHalfWidth,c=a.quadrantTop,h=a.quadrantWidth,d=0===this.data.points.length,f=[];return this.data.xAxisLeftText&&e&&f.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(d?u/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&e&&f.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+u+(d?u/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&i&&f.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+h+this.config.quadrantPadding,y:c+o-(d?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&i&&f.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+h+this.config.quadrantPadding,y:c+s-(d?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:-90}),f}},{key:"getQuadrants",value:function(t){for(var e=t.quadrantSpace,i=e.quadrantHalfHeight,n=e.quadrantLeft,a=e.quadrantHalfWidth,r=e.quadrantTop,s=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n+a,y:r,width:a,height:i,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n,y:r,width:a,height:i,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n,y:r+i,width:a,height:i,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n+a,y:r+i,width:a,height:i,fill:this.themeConfig.quadrant4Fill}],o=0,l=s;o<l.length;o++){var u=l[o];u.text.x=u.x+u.width/2,0===this.data.points.length?(u.text.y=u.y+u.height/2,u.text.horizontalPos="middle"):(u.text.y=u.y+this.config.quadrantTextTopPadding,u.text.horizontalPos="top")}return s}},{key:"getQuadrantPoints",value:function(t){var e=this,i=t.quadrantSpace,n=i.quadrantHeight,a=i.quadrantLeft,r=i.quadrantTop,s=i.quadrantWidth,o=q().domain([0,1]).range([a,s+a]),l=q().domain([0,1]).range([n+r,r]);return this.data.points.map((function(t){return{x:o(t.x),y:l(t.y),fill:e.themeConfig.quadrantPointFill,radius:e.config.pointRadius,text:{text:t.text,fill:e.themeConfig.quadrantPointTextFill,x:o(t.x),y:l(t.y)+e.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:e.config.pointLabelFontSize,rotation:0}}}))}},{key:"getBorders",value:function(t){var e=this.config.quadrantExternalBorderStrokeWidth/2,i=t.quadrantSpace,n=i.quadrantHalfHeight,a=i.quadrantHeight,r=i.quadrantLeft,s=i.quadrantHalfWidth,o=i.quadrantTop,l=i.quadrantWidth;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-e,y1:o,x2:r+l+e,y2:o},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r+l,y1:o+e,x2:r+l,y2:o+a-e},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-e,y1:o+a,x2:r+l+e,y2:o+a},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r,y1:o+e,x2:r,y2:o+a-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+s,y1:o+e,x2:r+s,y2:o+a-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+e,y1:o+n,x2:r+l-e,y2:o+n}]}},{key:"getTitle",value:function(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}},{key:"build",value:function(){var t=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),e=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),i=this.config.showTitle&&!!this.data.titleText,n=this.data.points.length>0?"bottom":this.config.xAxisPosition,a=this.calculateSpace(n,t,e,i);return{points:this.getQuadrantPoints(a),quadrants:this.getQuadrants(a),axisLabels:this.getAxisLabels(n,t,e,a),borderLines:this.getBorders(a),title:this.getTitle(i)}}}])&&s(i.prototype,n),r&&s(i,r),Object.defineProperty(i,"prototype",{writable:!1}),t}(),_=r();function v(t){return m(t.trim(),_)}var S=new A;t("diagram",{parser:b,db:{setWidth:function(t){S.setConfig({chartWidth:t})},setHeight:function(t){S.setConfig({chartHeight:t})},setQuadrant1Text:function(t){S.setData({quadrant1Text:v(t.text)})},setQuadrant2Text:function(t){S.setData({quadrant2Text:v(t.text)})},setQuadrant3Text:function(t){S.setData({quadrant3Text:v(t.text)})},setQuadrant4Text:function(t){S.setData({quadrant4Text:v(t.text)})},setXAxisLeftText:function(t){S.setData({xAxisLeftText:v(t.text)})},setXAxisRightText:function(t){S.setData({xAxisRightText:v(t.text)})},setYAxisTopText:function(t){S.setData({yAxisTopText:v(t.text)})},setYAxisBottomText:function(t){S.setData({yAxisBottomText:v(t.text)})},addPoint:function(t,e,i){S.addPoints([{x:e,y:i,text:v(t.text)}])},getQuadrantData:function(){var t=r(),e=t.themeVariables,i=t.quadrantChart;return i&&S.setConfig(i),S.setThemeConfig({quadrant1Fill:e.quadrant1Fill,quadrant2Fill:e.quadrant2Fill,quadrant3Fill:e.quadrant3Fill,quadrant4Fill:e.quadrant4Fill,quadrant1TextFill:e.quadrant1TextFill,quadrant2TextFill:e.quadrant2TextFill,quadrant3TextFill:e.quadrant3TextFill,quadrant4TextFill:e.quadrant4TextFill,quadrantPointFill:e.quadrantPointFill,quadrantPointTextFill:e.quadrantPointTextFill,quadrantXAxisTextFill:e.quadrantXAxisTextFill,quadrantYAxisTextFill:e.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:e.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:e.quadrantInternalBorderStrokeFill,quadrantTitleFill:e.quadrantTitleFill}),S.setData({titleText:d()}),S.build()},clear:function(){S.clear(),g()},setAccTitle:u,getAccTitle:c,setDiagramTitle:h,getDiagramTitle:d,getAccDescription:f,setAccDescription:x},renderer:{draw:function(t,e,i,n){var a,s,o;function u(t){return"top"===t?"hanging":"middle"}function c(t){return"left"===t?"start":"middle"}function h(t){return"translate(".concat(t.x,", ").concat(t.y,") rotate(").concat(t.rotation||0,")")}var d=r();l.debug("Rendering quadrant chart\n"+t);var f,x=d.securityLevel;"sandbox"===x&&(f=y("#i"+e));var g=y("sandbox"===x?f.nodes()[0].contentDocument.body:"body").select('[id="'.concat(e,'"]')),m=g.append("g").attr("class","main"),q=(null==(a=d.quadrantChart)?void 0:a.chartWidth)||500,b=(null==(s=d.quadrantChart)?void 0:s.chartHeight)||500;p(g,b,q,(null==(o=d.quadrantChart)?void 0:o.useMaxWidth)||!0),g.attr("viewBox","0 0 "+q+" "+b),n.db.setHeight(b),n.db.setWidth(q);var T=n.db.getQuadrantData(),A=m.append("g").attr("class","quadrants"),_=m.append("g").attr("class","border"),v=m.append("g").attr("class","data-points"),S=m.append("g").attr("class","labels"),k=m.append("g").attr("class","title");T.title&&k.append("text").attr("x",0).attr("y",0).attr("fill",T.title.fill).attr("font-size",T.title.fontSize).attr("dominant-baseline",u(T.title.horizontalPos)).attr("text-anchor",c(T.title.verticalPos)).attr("transform",h(T.title)).text(T.title.text),T.borderLines&&_.selectAll("line").data(T.borderLines).enter().append("line").attr("x1",(function(t){return t.x1})).attr("y1",(function(t){return t.y1})).attr("x2",(function(t){return t.x2})).attr("y2",(function(t){return t.y2})).style("stroke",(function(t){return t.strokeFill})).style("stroke-width",(function(t){return t.strokeWidth}));var P=A.selectAll("g.quadrant").data(T.quadrants).enter().append("g").attr("class","quadrant");P.append("rect").attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).attr("width",(function(t){return t.width})).attr("height",(function(t){return t.height})).attr("fill",(function(t){return t.fill})),P.append("text").attr("x",0).attr("y",0).attr("fill",(function(t){return t.text.fill})).attr("font-size",(function(t){return t.text.fontSize})).attr("dominant-baseline",(function(t){return u(t.text.horizontalPos)})).attr("text-anchor",(function(t){return c(t.text.verticalPos)})).attr("transform",(function(t){return h(t.text)})).text((function(t){return t.text.text})),S.selectAll("g.label").data(T.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((function(t){return t.text})).attr("fill",(function(t){return t.fill})).attr("font-size",(function(t){return t.fontSize})).attr("dominant-baseline",(function(t){return u(t.horizontalPos)})).attr("text-anchor",(function(t){return c(t.verticalPos)})).attr("transform",(function(t){return h(t)}));var F=v.selectAll("g.data-point").data(T.points).enter().append("g").attr("class","data-point");F.append("circle").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",(function(t){return t.radius})).attr("fill",(function(t){return t.fill})),F.append("text").attr("x",0).attr("y",0).text((function(t){return t.text.text})).attr("fill",(function(t){return t.text.fill})).attr("font-size",(function(t){return t.text.fontSize})).attr("dominant-baseline",(function(t){return u(t.text.horizontalPos)})).attr("text-anchor",(function(t){return c(t.text.verticalPos)})).attr("transform",(function(t){return h(t.text)}))}},styles:function(){return""}})}}}))}();
