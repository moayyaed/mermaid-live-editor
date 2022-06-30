var ie=Object.defineProperty,se=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var F=(o,e,r)=>e in o?ie(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,j=(o,e)=>{for(var r in e||(e={}))ne.call(e,r)&&F(o,r,e[r]);if(N)for(var r of N(e))ge.call(e,r)&&F(o,r,e[r]);return o},q=(o,e)=>se(o,ce(e));import{S as de,i as we,s as le,e as O,t as pe,c as D,a as C,h as ue,d as p,b as u,g as L,J as X,j as he,k as ye,m as fe,Y as f,E as M,N as B,v as me,a5 as be,Q as G,O as U}from"./index-b06f7db9.js";import{i as P,s as R,r as V,p as T,a as W,f as E,h as K,j as ve,k as _e,m as Se,b as ke,n as ze}from"./state-84d73eef.js";import{w as v,d as je}from"./preload-helper-29d322af.js";function x(o){let e,r=o[4].error+"",a;return{c(){e=O("div"),a=pe(r),this.h()},l(t){e=D(t,"DIV",{class:!0,id:!0});var i=C(e);a=ue(i,r),i.forEach(p),this.h()},h(){u(e,"class","p-2 text-red-600"),u(e,"id","errorContainer")},m(t,i){L(t,e,i),X(e,a)},p(t,i){i&16&&r!==(r=t[4].error+"")&&he(a,r)},d(t){t&&p(e)}}}function qe(o){let e,r,a,t=o[2]&&o[4].error instanceof Error&&x(o);return{c(){t&&t.c(),e=ye(),r=O("div"),a=O("div"),this.h()},l(i){t&&t.l(i),e=fe(i),r=D(i,"DIV",{id:!0,class:!0});var s=C(r);a=D(s,"DIV",{id:!0,class:!0}),C(a).forEach(p),s.forEach(p),this.h()},h(){u(a,"id","container"),u(a,"class","flex-1 overflow-auto"),u(r,"id","view"),u(r,"class","p-2 svelte-1blxohz"),f(r,"error",o[2]),f(r,"outOfSync",o[3])},m(i,s){t&&t.m(i,s),L(i,e,s),L(i,r,s),X(r,a),o[5](a),o[6](r)},p(i,[s]){i[2]&&i[4].error instanceof Error?t?t.p(i,s):(t=x(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),s&4&&f(r,"error",i[2]),s&8&&f(r,"outOfSync",i[3])},i:M,o:M,d(i){t&&t.d(i),i&&p(e),i&&p(r),o[5](null),o[6](null)}}}function Oe(o,e,r){let a,t;B(o,P,d=>r(10,a=d)),B(o,R,d=>r(4,t=d));let i="",s="",g,c,n=!1,w=!1,l=!0;me(()=>{R.subscribe(d=>{if(d.error!==void 0){r(2,n=!0);return}r(2,n=!1);try{if(g&&d&&(d.updateDiagram||d.autoSync)){if(d.autoSync||be(P,a.updateDiagram=!1,a),r(3,w=!1),l=!0,i===d.code&&s===d.mermaid)return;i=d.code,s=d.mermaid;const k=c.parentElement.scrollTop;delete g.dataset.processed,V.initialize(Object.assign({},JSON.parse(d.mermaid))),V.render("graph-div",i,z=>{z.length>0&&(console.log(z),r(0,g.innerHTML=z,g))}),r(1,c.parentElement.scrollTop=k,c),r(2,n=!1)}else l?l=!1:r(3,w=!0)}catch(k){console.log("view fail",k),r(2,n=!0)}})});function h(d){G[d?"unshift":"push"](()=>{g=d,r(0,g)})}function ae(d){G[d?"unshift":"push"](()=>{c=d,r(1,c)})}return[g,c,n,w,t,h,ae]}class Re extends de{constructor(e){super();we(this,e,Oe,qe,le,{})}}var m=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y={},Z={};(function(o){var e=m&&m.__values||function(a){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&a[t],s=0;if(i)return i.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&s>=a.length&&(a=void 0),{value:a&&a[s++],done:!a}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(o,"__esModule",{value:!0}),o.getWordsByCategory=o.wordList=void 0,o.wordList={noun:[{word:"accountant",categories:["profession"]},{word:"ability",categories:["thing"]},{word:"accident",categories:["thing"]},{word:"account",categories:["thing"]},{word:"action",categories:["thing"]},{word:"activity",categories:["thing"]},{word:"actor",categories:["profession"]},{word:"ad",categories:["media"]},{word:"addition",categories:["thing"]},{word:"address",categories:["thing"]},{word:"adult",categories:["people"]},{word:"advantage",categories:["thing"]},{word:"advertisement",categories:["media"]},{word:"afternoon",categories:["time"]},{word:"agency",categories:["thing"]},{word:"agent",categories:["people"]},{word:"air",categories:["thing"]},{word:"airline",categories:["transportation"]},{word:"airplane",categories:["transportation"]},{word:"airport",categories:["transportation","place"]},{word:"alarm",categories:["thing"]},{word:"alligator",categories:["animals"]},{word:"ambulance",categories:["health"]},{word:"analyst",categories:["profession"]},{word:"angle",categories:["thing"]},{word:"animal",categories:["animals"]},{word:"answer",categories:["thing"]},{word:"apartment",categories:["place"]},{word:"apple",categories:["food"]},{word:"application",categories:["thing"]},{word:"appointment",categories:["thing"]},{word:"architect",categories:["profession"]},{word:"argument",categories:["thing"]},{word:"area",categories:["thing"]},{word:"arm",categories:["thing"]},{word:"army",categories:["thing"]},{word:"art",categories:["thing"]},{word:"article",categories:["thing"]},{word:"artist",categories:["profession"]},{word:"australia",categories:["place"]},{word:"author",categories:["profession"]},{word:"autumn",categories:["time"]},{word:"baby",categories:["people","family"]},{word:"baker",categories:["profession"]},{word:"balloon",categories:["thing"]},{word:"banana",categories:["food"]},{word:"barista",categories:["profession"]},{word:"battery",categories:["thing"]},{word:"beach",categories:["place"]},{word:"bear",categories:["animals"]},{word:"beard",categories:["thing"]},{word:"bed",categories:["thing"]},{word:"belgium",categories:["place"]},{word:"bird",categories:["animals"]},{word:"bit",categories:["thing","technology"]},{word:"book",categories:["thing","education"]},{word:"boots",categories:["thing"]},{word:"boy",categories:["people"]},{word:"branch",categories:["thing"]},{word:"breakfast",categories:["thing"]},{word:"brother",categories:["family"]},{word:"businessperson",categories:["people","business"]},{word:"butcher",categories:["profession"]},{word:"byte",categories:["thing","technology"]},{word:"camera",categories:["thing"]},{word:"candle",categories:["thing"]},{word:"car",categories:["transportation"]},{word:"caravan",categories:["transportation"]},{word:"carpenter",categories:["profession"]},{word:"carpet",categories:["thing"]},{word:"cartoon",categories:["media"]},{word:"cat",categories:["animals"]},{word:"chef",categories:["profession"]},{word:"child",categories:["people","family"]},{word:"china",categories:["place"]},{word:"church",categories:["religion"]},{word:"city",categories:["place"]},{word:"coat",categories:["thing"]},{word:"coffeeshop",categories:["place"]},{word:"computer",categories:["thing","technology"]},{word:"continent",categories:["place"]},{word:"controller",categories:["thing","technology"]},{word:"country",categories:["place"]},{word:"cpu",categories:["thing","technology"]},{word:"crayon",categories:["thing"]},{word:"cricket",categories:["animals"]},{word:"crowd",categories:["people"]},{word:"daughter",categories:["family"]},{word:"dawn",categories:["time"]},{word:"daybreak",categories:["time"]},{word:"death",categories:["thing"]},{word:"denmark",categories:["place"]},{word:"dentist",categories:["profession"]},{word:"diamond",categories:["thing"]},{word:"dinner",categories:["food"]},{word:"disease",categories:["thing"]},{word:"doctor",categories:["profession"]},{word:"dog",categories:["animals"]},{word:"dream",categories:["thing"]},{word:"dress",categories:["thing"]},{word:"dusk",categories:["time"]},{word:"easter",categories:["religion"]},{word:"egg",categories:["food"]},{word:"eggplant",categories:["food"]},{word:"egypt",categories:["place"]},{word:"electrician",categories:["profession"]},{word:"elephant",categories:["animals"]},{word:"energy",categories:["thing"]},{word:"engine",categories:["transportation"]},{word:"engineer",categories:["profession"]},{word:"england",categories:["place"]},{word:"eve",categories:["time"]},{word:"evening",categories:["time"]},{word:"eventide",categories:["time"]},{word:"exabyte",categories:["thing","technology"]},{word:"eye",categories:["thing"]},{word:"fall",categories:["time"]},{word:"family",categories:["family"]},{word:"farmer",categories:["profession"]},{word:"father",categories:["people","family"]},{word:"finland",categories:["place"]},{word:"fireman",categories:["profession"]},{word:"fish",categories:["animals"]},{word:"flag",categories:["thing"]},{word:"florist",categories:["profession"]},{word:"flower",categories:["thing"]},{word:"football",categories:["sports"]},{word:"forest",categories:["place"]},{word:"fountain",categories:["thing"]},{word:"france",categories:["place"]},{word:"furniture",categories:["thing"]},{word:"garage",categories:["place"]},{word:"garden",categories:["food"]},{word:"gas",categories:["transportation"]},{word:"ghost",categories:["thing"]},{word:"gigabyte",categories:["thing","technology"]},{word:"girl",categories:["people"]},{word:"glass",categories:["thing"]},{word:"gold",categories:["thing"]},{word:"gpu",categories:["thing","technology"]},{word:"grandmother",categories:["people","family"]},{word:"grass",categories:["thing"]},{word:"greece",categories:["place"]},{word:"guitar",categories:["thing"]},{word:"hair",categories:["thing"]},{word:"hairdresser",categories:["profession"]},{word:"hamburger",categories:["food"]},{word:"helicopter",categories:["transportation"]},{word:"helmet",categories:["thing"]},{word:"holiday",categories:["thing"]},{word:"honey",categories:["food"]},{word:"horse",categories:["animals"]},{word:"hospital",categories:["place"]},{word:"house",categories:["place"]},{word:"hydrogen",categories:["science"]},{word:"ice",categories:["science"]},{word:"insect",categories:["animals"]},{word:"insurance",categories:["thing"]},{word:"intern",categories:["profession"]},{word:"iron",categories:["science"]},{word:"island",categories:["place"]},{word:"jackal",categories:["animals"]},{word:"jelly",categories:["food"]},{word:"jewellery",categories:["thing"]},{word:"jordan",categories:["place"]},{word:"journalist",categories:["profession"]},{word:"joystick",categories:["thing","technology"]},{word:"judge",categories:["profession"]},{word:"juice",categories:["food"]},{word:"kangaroo",categories:["animals"]},{word:"keyboard",categories:["thing","technology"]},{word:"kilobyte",categories:["thing","technology"]},{word:"king",categories:["people"]},{word:"kitchen",categories:["place"]},{word:"kite",categories:["thing"]},{word:"knife",categories:["thing"]},{word:"lamp",categories:["thing"]},{word:"laptop",categories:["thing","technology"]},{word:"lawyer",categories:["profession"]},{word:"leather",categories:["thing"]},{word:"librarian",categories:["profession"]},{word:"library",categories:["place"]},{word:"lifeguard",categories:["profession"]},{word:"lighter",categories:["thing"]},{word:"lion",categories:["animals"]},{word:"lizard",categories:["animals"]},{word:"lock",categories:["thing"]},{word:"london",categories:["place"]},{word:"lunch",categories:["food"]},{word:"machine",categories:["science"]},{word:"magazine",categories:["media"]},{word:"magician",categories:["people"]},{word:"man",categories:["people"]},{word:"manchester",categories:["place"]},{word:"market",categories:["place"]},{word:"match",categories:["thing"]},{word:"mechanic",categories:["profession"]},{word:"megabyte",categories:["thing","technology"]},{word:"memory",categories:["thing","technology"]},{word:"microphone",categories:["thing"]},{word:"midnight",categories:["time"]},{word:"minister",categories:["people","religion"]},{word:"monitor",categories:["thing","technology"]},{word:"monkey",categories:["animals"]},{word:"morn",categories:["time"]},{word:"morning",categories:["time"]},{word:"mother",categories:["people","family"]},{word:"motherboard",categories:["thing","technology"]},{word:"motorcycle",categories:["transportation"]},{word:"mouse",categories:["thing","technology","animals"]},{word:"musician",categories:["profession"]},{word:"nail",categories:["thing"]},{word:"napkin",categories:["thing"]},{word:"needle",categories:["thing"]},{word:"nest",categories:["thing"]},{word:"nigeria",categories:["place"]},{word:"night",categories:["time"]},{word:"nightfall",categories:["time"]},{word:"noon",categories:["time"]},{word:"notebook",categories:["thing"]},{word:"nurse",categories:["profession"]},{word:"ocean",categories:["place"]},{word:"oil",categories:["thing"]},{word:"optician",categories:["profession"]},{word:"orange",categories:["food"]},{word:"oxygen",categories:["science"]},{word:"oyster",categories:["animals"]},{word:"pager",categories:["thing","technology"]},{word:"painter",categories:["profession"]},{word:"painting",categories:["media"]},{word:"park",categories:["place"]},{word:"parrot",categories:["animals"]},{word:"pencil",categories:["thing","education"]},{word:"petabyte",categories:["thing","technology"]},{word:"pharmacist",categories:["profession"]},{word:"photographer",categories:["profession"]},{word:"piano",categories:["thing"]},{word:"pillow",categories:["thing"]},{word:"pilot",categories:["profession"]},{word:"pizza",categories:["food"]},{word:"planet",categories:["science"]},{word:"plastic",categories:["thing"]},{word:"plumber",categories:["profession"]},{word:"policeman",categories:["profession"]},{word:"portugal",categories:["place"]},{word:"postman",categories:["profession"]},{word:"potato",categories:["food"]},{word:"printer",categories:["thing","technology"]},{word:"processor",categories:["thing","technology"]},{word:"psychiatrist",categories:["profession"]},{word:"queen",categories:["people"]},{word:"quill",categories:["thing"]},{word:"rain",categories:["thing"]},{word:"rainbow",categories:["science"]},{word:"raincoat",categories:["thing"]},{word:"ram",categories:["thing","technology"]},{word:"receptionist",categories:["profession"]},{word:"refrigerator",categories:["food"]},{word:"restaurant",categories:["place"]},{word:"river",categories:["thing"]},{word:"rocket",categories:["science"]},{word:"room",categories:["place"]},{word:"rose",categories:["thing"]},{word:"russia",categories:["place"]},{word:"salesclerk",categories:["people","business"]},{word:"salesmen",categories:["profession"]},{word:"sandwich",categories:["food"]},{word:"school",categories:["education"]},{word:"scientist",categories:["profession"]},{word:"scooter",categories:["transportation"]},{word:"secretary",categories:["profession"]},{word:"shampoo",categories:["thing"]},{word:"shoe",categories:["thing"]},{word:"smartphone",categories:["thing","technology"]},{word:"soccer",categories:["sports"]},{word:"solstice",categories:["time"]},{word:"spoon",categories:["thing"]},{word:"spring",categories:["time"]},{word:"state",categories:["place"]},{word:"stone",categories:["thing"]},{word:"student",categories:["people","education"]},{word:"sugar",categories:["food"]},{word:"summer",categories:["time"]},{word:"sundown",categories:["time"]},{word:"sunset",categories:["time"]},{word:"sweden",categories:["place"]},{word:"table",categories:["thing"]},{word:"tailor",categories:["profession"]},{word:"teacher",categories:["people","education","profession"]},{word:"teenager",categories:["people","family"]},{word:"telephone",categories:["thing"]},{word:"television",categories:["media"]},{word:"tent",categories:["thing"]},{word:"terabyte",categories:["thing","technology"]},{word:"thailand",categories:["place"]},{word:"tiger",categories:["animals"]},{word:"toddler",categories:["people","family"]},{word:"tomato",categories:["food"]},{word:"toothbrush",categories:["thing"]},{word:"traffic",categories:["thing"]},{word:"train",categories:["transportation"]},{word:"translator",categories:["profession"]},{word:"truck",categories:["thing","transportation"]},{word:"twilight",categories:["time"]},{word:"uganda",categories:["place"]},{word:"umbrella",categories:["thing"]},{word:"van",categories:["transportation"]},{word:"vase",categories:["thing"]},{word:"vegetable",categories:["food"]},{word:"vr",categories:["thing","technology"]},{word:"vulture",categories:["animals"]},{word:"waiter",categories:["profession"]},{word:"waitress",categories:["profession"]},{word:"wall",categories:["thing"]},{word:"whale",categories:["animals"]},{word:"window",categories:["thing"]},{word:"winter",categories:["time"]},{word:"wire",categories:["thing"]},{word:"wolf",categories:["animals"]},{word:"woman",categories:["people"]},{word:"xylophone",categories:["thing"]},{word:"yacht",categories:["transportation"]},{word:"yak",categories:["animals"]},{word:"yottabyte",categories:["thing","technology"]},{word:"zebra",categories:["animals"]},{word:"zettabyte",categories:["thing","technology"]},{word:"zoo",categories:["animals"]}],adjective:[{word:"abandoned",categories:["condition"]},{word:"abiding",categories:["personality"]},{word:"able",categories:["condition"]},{word:"abrasive",categories:["condition","personality"]},{word:"abnormal",categories:["condition"]},{word:"absurd",categories:["condition"]},{word:"abundant",categories:["quantity"]},{word:"acceptable",categories:["condition"]},{word:"acidic",categories:["taste"]},{word:"acoustic",categories:["sounds"]},{word:"acrid",categories:["condition"]},{word:"adamant",categories:["personality"]},{word:"adorable",categories:["personality"]},{word:"adventurous",categories:["personality"]},{word:"aggressive",categories:["personality"]},{word:"agitated",categories:["personality"]},{word:"agreeable",categories:["personality"]},{word:"alert",categories:["condition"]},{word:"alive",categories:["condition"]},{word:"aloof",categories:["personality"]},{word:"ambitious",categories:["personality"]},{word:"ancient",categories:["time"]},{word:"angry",categories:["personality"]},{word:"annoyed",categories:["personality"]},{word:"antsy",categories:["personality"]},{word:"anxious",categories:["personality"]},{word:"appalling",categories:["personality"]},{word:"appetizing",categories:["taste"]},{word:"apprehensive",categories:["personality"]},{word:"arrogant",categories:["personality"]},{word:"ashamed",categories:["personality"]},{word:"astonishing",categories:["personality"]},{word:"attractive",categories:["appearance"]},{word:"average",categories:["appearance"]},{word:"bad",categories:["condition"]},{word:"bald",categories:["appearance"]},{word:"bashful",categories:["personality"]},{word:"beautiful",categories:["appearance"]},{word:"beefy",categories:["appearance"]},{word:"belligerent",categories:["personality"]},{word:"bent",categories:["condition"]},{word:"better",categories:["condition"]},{word:"best",categories:["condition"]},{word:"better",categories:["condition"]},{word:"bewildered",categories:["personality"]},{word:"big",categories:["size"]},{word:"billions",categories:["quantity"]},{word:"billowy",categories:["appearance"]},{word:"bitter",categories:["taste"]},{word:"black",categories:["color"]},{word:"bland",categories:["taste"]},{word:"blue",categories:["color"]},{word:"blushing",categories:["appearance"]},{word:"bored",categories:["personality"]},{word:"boring",categories:["personality"]},{word:"boundless",categories:["personality"]},{word:"brainy",categories:["personality"]},{word:"brash",categories:["personality"]},{word:"brave",categories:["personality"]},{word:"breezy",categories:["touch"]},{word:"brief",categories:["time"]},{word:"bright",categories:["appearance"]},{word:"broad",categories:["shapes"]},{word:"broken",categories:["condition"]},{word:"brown",categories:["color"]},{word:"bulky",categories:["appearance"]},{word:"bumpy",categories:["touch"]},{word:"burly",categories:["appearance"]},{word:"busy",categories:["personality"]},{word:"cagey",categories:["personality"]},{word:"calm",categories:["personality"]},{word:"callous",categories:["personality"]},{word:"careful",categories:["condition"]},{word:"chilly",categories:["touch"]},{word:"chubby",categories:["appearance"]},{word:"clean",categories:["appearance"]},{word:"clever",categories:["condition"]},{word:"clumsy",categories:["personality"]},{word:"cold",categories:["touch"]},{word:"colossal",categories:["size"]},{word:"cool",categories:["touch"]},{word:"crashing",categories:["sounds"]},{word:"creamy",categories:["taste"]},{word:"crooked",categories:["shapes"]},{word:"cuddly",categories:["touch"]},{word:"curved",categories:["shapes"]},{word:"damaged",categories:["touch"]},{word:"damp",categories:["touch"]},{word:"dazzling",categories:["appearance"]},{word:"dead",categories:["condition"]},{word:"deafening",categories:["sounds"]},{word:"deep",categories:["shapes"]},{word:"defeated",categories:["personality"]},{word:"delicious",categories:["taste"]},{word:"delightful",categories:["personality"]},{word:"dirty",categories:["touch"]},{word:"disgusting",categories:["taste"]},{word:"drab",categories:["appearance"]},{word:"dry",categories:["touch"]},{word:"eager",categories:["personality"]},{word:"early",categories:["time"]},{word:"easy",categories:["condition"]},{word:"echoing",categories:["sounds"]},{word:"elegant",categories:["appearance"]},{word:"embarrassed",categories:["personality"]},{word:"enough",categories:["quantity"]},{word:"faint",categories:["sounds"]},{word:"faithful",categories:["personality"]},{word:"famous",categories:["condition"]},{word:"fancy",categories:["appearance"]},{word:"fast",categories:["time"]},{word:"fat",categories:["size"]},{word:"few",categories:["quantity"]},{word:"fierce",categories:["personality"]},{word:"fit",categories:["appearance"]},{word:"flabby",categories:["appearance"]},{word:"flaky",categories:["touch"]},{word:"flat",categories:["shapes"]},{word:"fluffy",categories:["touch"]},{word:"freezing",categories:["touch"]},{word:"fresh",categories:["taste"]},{word:"full",categories:["quantity"]},{word:"future",categories:["time"]},{word:"gentle",categories:["personality"]},{word:"gifted",categories:["condition"]},{word:"gigantic",categories:["size"]},{word:"glamorous",categories:["appearance"]},{word:"gorgeous",categories:["appearance"]},{word:"gray",categories:["color"]},{word:"greasy",categories:["touch","taste"]},{word:"great",categories:["size"]},{word:"green",categories:["color"]},{word:"grumpy",categories:["personality"]},{word:"hallowed",categories:["condition"]},{word:"handsome",categories:["appearance"]},{word:"happy",categories:["personality"]},{word:"harsh",categories:["sounds"]},{word:"helpful",categories:["condition"]},{word:"helpless",categories:["personality"]},{word:"high",categories:["shapes"]},{word:"hissing",categories:["sounds"]},{word:"hollow",categories:["shapes"]},{word:"hot",categories:["touch","taste"]},{word:"howling",categories:["sounds"]},{word:"huge",categories:["size"]},{word:"hundreds",categories:["quantity"]},{word:"icy",categories:["touch"]},{word:"immense",categories:["size"]},{word:"important",categories:["condition"]},{word:"incalculable",categories:["quantity"]},{word:"inexpensive",categories:["condition"]},{word:"itchy",categories:["personality"]},{word:"jealous",categories:["personality"]},{word:"jolly",categories:["personality"]},{word:"juicy",categories:["taste"]},{word:"kind",categories:["personality"]},{word:"large",categories:["size"]},{word:"late",categories:["time"]},{word:"lazy",categories:["personality"]},{word:"lemon",categories:["color"]},{word:"limited",categories:["quantity"]},{word:"little",categories:["size","quantity"]},{word:"lively",categories:["personality"]},{word:"long",categories:["time","appearance"]},{word:"loose",categories:["touch"]},{word:"loud",categories:["sounds"]},{word:"low",categories:["shapes"]},{word:"magnificent",categories:["appearance"]},{word:"mammoth",categories:["size"]},{word:"mango",categories:["color"]},{word:"many",categories:["quantity"]},{word:"massive",categories:["size"]},{word:"mealy",categories:["condition"]},{word:"melodic",categories:["sounds"]},{word:"melted",categories:["touch"]},{word:"microscopic",categories:["size"]},{word:"millions",categories:["quantity"]},{word:"miniature",categories:["size"]},{word:"modern",categories:["time"]},{word:"moldy",categories:["taste"]},{word:"most",categories:["quantity"]},{word:"muscular",categories:["appearance"]},{word:"mushy",categories:["condition"]},{word:"mysterious",categories:["personality"]},{word:"narrow",categories:["shapes"]},{word:"nervous",categories:["personality"]},{word:"nice",categories:["personality"]},{word:"noisy",categories:["sounds"]},{word:"numerous",categories:["quantity"]},{word:"nutritious",categories:["taste"]},{word:"nutty",categories:["taste"]},{word:"obedient",categories:["personality"]},{word:"obnoxious",categories:["personality"]},{word:"odd",categories:["condition"]},{word:"old",categories:["time"]},{word:"orange",categories:["color"]},{word:"panicky",categories:["personality"]},{word:"petite",categories:["size"]},{word:"pitiful",categories:["personality"]},{word:"plain",categories:["appearance"]},{word:"plump",categories:["appearance"]},{word:"polite",categories:["personality"]},{word:"poor",categories:["condition"]},{word:"powerful",categories:["condition"]},{word:"prehistoric",categories:["time"]},{word:"prickly",categories:["touch"]},{word:"proud",categories:["personality"]},{word:"puny",categories:["size"]},{word:"purple",categories:["color"]},{word:"purring",categories:["sounds"]},{word:"putrid",categories:["taste"]},{word:"quaint",categories:["appearance"]},{word:"quick",categories:["time"]},{word:"quiet",categories:["sounds"]},{word:"rancid",categories:["taste"]},{word:"rapid",categories:["time"]},{word:"rapping",categories:["sounds"]},{word:"raspy",categories:["sounds"]},{word:"red",categories:["color"]},{word:"refined",categories:["shapes"]},{word:"repulsive",categories:["personality"]},{word:"rhythmic",categories:["sounds"]},{word:"rich",categories:["condition"]},{word:"ripe",categories:["taste"]},{word:"rotten",categories:["taste"]},{word:"rough",categories:["touch"]},{word:"round",categories:["shapes"]},{word:"salmon",categories:["color"]},{word:"salty",categories:["taste"]},{word:"savory",categories:["taste"]},{word:"scarce",categories:["quantity"]},{word:"scary",categories:["personality"]},{word:"scrawny",categories:["size"]},{word:"screeching",categories:["sounds"]},{word:"scruffy",categories:["appearance"]},{word:"shaggy",categories:["touch"]},{word:"shallow",categories:["shapes"]},{word:"shapely",categories:["appearance"]},{word:"sharp",categories:["touch"]},{word:"short",categories:["size","appearance","time"]},{word:"shrilling",categories:["sounds"]},{word:"shy",categories:["condition"]},{word:"silly",categories:["personality"]},{word:"skinny",categories:["appearance","shapes"]},{word:"slimy",categories:["touch"]},{word:"slow",categories:["time"]},{word:"small",categories:["size"]},{word:"some",categories:["quantity"]},{word:"sour",categories:["taste"]},{word:"sparse",categories:["quantity"]},{word:"spicy",categories:["taste"]},{word:"spoiled",categories:["taste"]},{word:"square",categories:["shapes"]},{word:"squeaking",categories:["sounds"]},{word:"stale",categories:["taste"]},{word:"steep",categories:["shapes"]},{word:"sticky",categories:["touch"]},{word:"stocky",categories:["appearance"]},{word:"straight",categories:["shapes"]},{word:"strong",categories:["touch"]},{word:"substantial",categories:["quantity"]},{word:"sweet",categories:["taste"]},{word:"swift",categories:["time"]},{word:"tall",categories:["size"]},{word:"tangy",categories:["taste"]},{word:"tart",categories:["taste"]},{word:"tasteless",categories:["taste"]},{word:"tasty",categories:["taste"]},{word:"teeny",categories:["size"]},{word:"tender",categories:["condition"]},{word:"thankful",categories:["personality"]},{word:"thoughtless",categories:["personality"]},{word:"thousands",categories:["quantity"]},{word:"thundering",categories:["sounds"]},{word:"tight",categories:["touch"]},{word:"tinkling",categories:["sounds"]},{word:"tiny",categories:["size"]},{word:"ugly",categories:["appearance"]},{word:"uneven",categories:["touch"]},{word:"unimportant",categories:["condition"]},{word:"uninterested",categories:["condition"]},{word:"unkempt",categories:["appearance"]},{word:"unsightly",categories:["appearance"]},{word:"uptight",categories:["personality"]},{word:"vast",categories:["condition"]},{word:"victorious",categories:["personality"]},{word:"wailing",categories:["sounds"]},{word:"warm",categories:["touch"]},{word:"weak",categories:["touch"]},{word:"wet",categories:["touch"]},{word:"whining",categories:["sounds"]},{word:"whispering",categories:["sounds"]},{word:"white",categories:["color"]},{word:"wide",categories:["shapes"]},{word:"witty",categories:["personality"]},{word:"wonderful",categories:["personality"]},{word:"wooden",categories:["touch"]},{word:"worried",categories:["personality"]},{word:"wrong",categories:["condition"]},{word:"yellow",categories:["color"]},{word:"young",categories:["time"]},{word:"yummy",categories:["taste"]},{word:"zealous",categories:["personality"]}]};function r(a,t){var i,s;t===void 0&&(t=[]);var g=new Set(t),c=[];try{for(var n=e(o.wordList[a]),w=n.next();!w.done;w=n.next()){var l=w.value;(t.length===0||l.categories.some(function(h){return g.has(h)}))&&c.push(l.word)}}catch(h){i={error:h}}finally{try{w&&!w.done&&(s=n.return)&&s.call(n)}finally{if(i)throw i.error}}return c}o.getWordsByCategory=r})(Z);var b=m&&m.__assign||function(){return b=Object.assign||function(o){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}return o},b.apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0});y.totalUniqueSlugs=ee=y.generateSlug=void 0;var H=Z,$=3;function De(o,e){for(var r=o||$,a={partsOfSpeech:oe(r),categories:{},format:"kebab"},t=b(b({},a),e),i=[],s=0;s<r;s++){var g=t.partsOfSpeech[s],c=H.getWordsByCategory(t.partsOfSpeech[s],t.categories[g]),n=c[Math.floor(Math.random()*c.length)];i.push(n)}return Ce(i,t.format)}var ee=y.generateSlug=De;function oe(o){for(var e=[],r=0;r<o-1;r++)e.push("adjective");return e.push("noun"),e}function Ce(o,e){return e==="kebab"?o.join("-").toLowerCase():e==="camel"?o.map(function(r,a){return a===0?r.toLowerCase():r[0].toUpperCase()+r.slice(1).toLowerCase()}).join(""):e==="lower"?o.join(" ").toLowerCase():e==="sentence"?o.map(function(r,a){return a===0?r[0].toUpperCase()+r.slice(1).toLowerCase():r}).join(" "):o.map(function(r){return r[0].toUpperCase()+r.slice(1).toLowerCase()}).join(" ")}function Le(o,e){for(var r,a,t=H.getWordsByCategory("adjective",(r=e==null?void 0:e.categories)===null||r===void 0?void 0:r.adjective).length,i=H.getWordsByCategory("noun",(a=e==null?void 0:e.categories)===null||a===void 0?void 0:a.noun).length,s={adjective:t,noun:i},g=o||$,c=(e==null?void 0:e.partsOfSpeech)||oe(g),n=1,w=0;w<g;w++)n*=s[c[w]];return n}y.totalUniqueSlugs=Le;const Ue=30,I=T(v("manual"),W(),"autoHistoryMode"),_=T(v([]),W(),"autoHistoryStore"),S=T(v([]),W(),"manualHistoryStore"),re=v([]),Ve=je([I,_,S,re],([o,e,r,a],t)=>{t(o==="auto"?e:o==="manual"?r:o==="loader"?a:e)}),Ee=o=>{if(o.type==="loader"){re.update(e=>[o,...e]);return}if(o.name=ee(2),o.type!=="auto"){S.update(e=>[o,...e]);return}_.update(e=>(e.length===Ue&&e.pop(),[o,...e]))},xe=o=>{(U(I)==="auto"?_:S).update(e=>(U(I)!=="loader"&&(e=e.filter(r=>o&&r.time!=o)),e))},Ae=o=>{const e=U(o?_:S);return e.length>0?JSON.stringify(e[0].state):""},te="code.mmd",A="config.json",He=o=>te in o,J=async o=>o.truncated?await(await fetch(o.raw_url)).text():o.content,Ie=async o=>{const[e,r,a,t]=o.split("github.com").pop().split("/"),{html_url:i,files:s,history:g}=await(await fetch(`https://api.github.com/gists/${a}${t?"/"+t:""}`)).json();if(He(s)){const c=await J(s[te]);let n;A in s&&(n=await J(s[A]));const w=g[0];return{url:`${i}/${w.version}`,code:c,config:n,author:w.user.login,time:new Date(w.committed_at).getTime(),version:w.version.slice(-7)}}else throw"Invalid gist provided"},Y=(o,e=o.url)=>{const r=q(j({},E),{code:o.code,loader:{type:"gist",config:{url:e}}});return o.config&&(r.mermaid=o.config),r},Te=async o=>{try{const[e,r,a,t]=o.split("github.com").pop().split("/"),{history:i}=await(await fetch(`https://api.github.com/gists/${a}${t?"/"+t:""}`)).json(),s=[];for(const c of i){const n=await Ie(c.url).catch(()=>{});n&&s.push(n)}if(s.length===0)throw"Invalid gist provided";s.reverse();const g=Y(s.slice(-1).pop(),o);for(const c of s)Ee({state:Y(c),time:c.time,type:"loader",url:c.url,name:`${c.author} v${c.version}`});return g}catch(e){console.error(e)}},Q={gist:Te},We=async()=>{const o=new URLSearchParams(window.location.search);let e=E,r,a,t=!1;const i=o.get("code"),s=o.get("config");if(i&&(r=await(await fetch(i)).text(),t=!0),s?a=await(await fetch(s)).text():a=E.mermaid,r)e={code:r,mermaid:a,loader:{type:"files",config:{codeURL:i,configURL:s}}};else for(const[g,c]of o.entries())if(g in Q)try{e=await Q[g](c),t=!0;break}catch(n){console.error(n)}t&&K(q(j({},e),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))},Ne=()=>{ze(window.location.hash.slice(1))},Fe=()=>{K({updateDiagram:!0})},Je=async()=>{var o;Ne(),await ve("Loading Gist...",We().catch(console.error)),Fe(),_e(),await Se(),(o=ke)==null||o.page()};export{Re as V,Ve as a,Ee as b,xe as c,Ae as g,I as h,Je as i,re as l,Fe as s};
