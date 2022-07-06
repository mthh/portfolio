(function(){"use strict";var e={983:function(e,t,a){var i=a(963),o=a(252);function n(e,t,a,n,r,s){const l=(0,o.up)("NavBar"),c=(0,o.up)("router-view"),g=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(l)]),(0,o.Wm)(c,null,{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(i.uT,{name:"component-fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1}),(0,o.Wm)(g)],64)}const r=e=>((0,o.dD)("data-v-161f4dfa"),e=e(),(0,o.Cn)(),e),s={class:"navbar is-warning has-shadow"},l=r((()=>(0,o._)("div",{class:"navbar-brand"},[(0,o._)("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},[(0,o._)("span",{"aria-hidden":"true"}),(0,o._)("span",{"aria-hidden":"true"}),(0,o._)("span",{"aria-hidden":"true"})])],-1))),c={id:"navMenu",class:"navbar-menu is-warning"},g={class:"navbar-start"},p=(0,o.Uk)("Home"),d=(0,o.Uk)("Projects"),h=(0,o.Uk)("Publications"),u=(0,o.Uk)("Teachings"),m=(0,o.Uk)("Slides");function f(e,t,a,i,n,r){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",s,[l,(0,o._)("div",c,[(0,o._)("div",g,[(0,o.Wm)(f,{to:"/portfolio/",class:"navbar-item"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(f,{to:"/portfolio/projects",class:"navbar-item"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(f,{to:"/portfolio/publications",class:"navbar-item"},{default:(0,o.w5)((()=>[h])),_:1}),(0,o.Wm)(f,{to:"/portfolio/teachings",class:"navbar-item"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(f,{to:"/portfolio/slides",class:"navbar-item"},{default:(0,o.w5)((()=>[m])),_:1})])])])}var b={name:"NavBar"};document.addEventListener("DOMContentLoaded",(()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")}))}))}));var v=a(744);const y=(0,v.Z)(b,[["render",f],["__scopeId","data-v-161f4dfa"]]);var A=y,I=a(577);const w=e=>((0,o.dD)("data-v-57a851be"),e=e(),(0,o.Cn)(),e),k={class:"content"},S=w((()=>(0,o._)("a",{href:"https://v3.vuejs.org/"},"Vue.js",-1))),B=(0,o.Uk)(" and "),C=w((()=>(0,o._)("a",{href:"https://bulma.io/"},"Bulma",-1))),E=(0,o.Uk)(" ("),Q=w((()=>(0,o._)("a",{href:"https://github.com/mthh/portfolio"},"source",-1))),D=(0,o.Uk)(").");function x(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("footer",k,[(0,o._)("p",null,[(0,o.Uk)("© 2021-2022 Matthieu Viry. Last updated on "+(0,I.zw)(r.getBuildDate())+". Built with ",1),S,B,C,E,Q,D])])}var H={name:"Footer",methods:{getBuildDate(){return document.documentElement.dataset.buildTimestampUtc.split("T")[0]}}};const L=(0,v.Z)(H,[["render",x],["__scopeId","data-v-57a851be"]]);var _=L,O={name:"App",components:{Footer:_,NavBar:A}};const P=(0,v.Z)(O,[["render",n]]);var j=P,G=a(119),J="data:image/png;base64,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";const M={id:"home",class:"content"},T=(0,o.uE)('<h1 class="title" data-v-4fa5496b>Matthieu Viry</h1><section data-v-4fa5496b><figure class="image is-128x128" data-v-4fa5496b><img class="" src="'+J+'" data-v-4fa5496b></figure><h2 data-v-4fa5496b>About me</h2><div data-v-4fa5496b><p data-v-4fa5496b>I am currently a research engineer in software engineering at the <a href="https://www.univ-grenoble-alpes.fr/" data-v-4fa5496b>Université Grenoble Alpes</a>, working in the <a href="https://steamer.imag.fr/" data-v-4fa5496b>STeamer research team</a> of the <a href="https://www.liglab.fr/" data-v-4fa5496b>Grenoble Informatics Laboratory</a> (LIG).</p><p data-v-4fa5496b>On December 2021, I graduated from the Université Grenoble Alpes with a <a href="https://www.theses.fr/s208233" data-v-4fa5496b>PhD in Computer Science</a>. Before that, from early 2014 to October 2018, I worked as a study engineer in geography and geographic information science.</p><h4 data-v-4fa5496b>Research interest</h4><ul data-v-4fa5496b><li data-v-4fa5496b>Semantic Web technologies / Web of Data</li><li data-v-4fa5496b>Visualisation of geospatial or statistical data</li><li data-v-4fa5496b>Geographic Information Systems</li></ul><h4 data-v-4fa5496b>Other interest</h4><p data-v-4fa5496b> I am also interested in software development (library or application) whether it is to process data related to my research interests (geographic information or Semantic Web data for example) or for user interface development in general. </p><p data-v-4fa5496b> I have experience with various languages and frameworks such as JavaScript (vanilla, d3.js, Vue.js, OpenLayers, Leaflet, Itowns), HTML and CSS (Bootstrap, Bulma), Python (FastApi, aiohttp, pandas, geopandas, dask, matplotlib, PyQt / PySide, Owlready, RDFLib), Cython, Rust (georust ecosystem), Java (Apache Jena) and I may even write C if necessary. </p></div></section><section data-v-4fa5496b><h2 data-v-4fa5496b>Contact / Find me</h2><div data-v-4fa5496b><p data-v-4fa5496b>You can reach me by email, at <span class="is-fake-link" data-v-4fa5496b>matthieu (dot) viry (at) univ-grenoble-alpes (dot) fr</span>.</p><p data-v-4fa5496b>You can find me and see my contributions on <a href="https://github.com/mthh" data-v-4fa5496b>GitHub</a> and on <a href="https://stackoverflow.com/users/5050917" data-v-4fa5496b>StackOverflow</a> where I gave more than 130 answers.</p></div></section>',3),Z=[T];function Y(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("main",M,Z)}var R={name:"Home"};const W=(0,v.Z)(R,[["render",Y],["__scopeId","data-v-4fa5496b"]]);var U=W;const z={id:"publications",class:"content"},q=(0,o.uE)('<h1 data-v-2792df1a>Publications</h1><section class="hal-preamble" data-v-2792df1a><p data-v-2792df1a>Below is my list of publications automatically extracted from HAL. You can also consult it directly on <a href="https://hal.archives-ouvertes.fr/search/index/?q=%2A&amp;authIdHal_s=matthieu-viry&amp;sort=producedDate_tdate+desc" data-v-2792df1a>HAL</a> or on <a href="https://www.semanticscholar.org/author/Matthieu-Viry/120089527" data-v-2792df1a>Semantic Scholar</a>.</p></section><section class="hal-container" data-v-2792df1a><iframe id="hal-frame" title="Publications extracted from HAL" src="https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?idHal=matthieu-viry&amp;CB_ref_biblio=oui&amp;langue=Anglais&amp;tri_exp=annee_publi&amp;tri_exp2=typdoc&amp;tri_exp3=date_publi&amp;ordre_aff=TA&amp;Fen=Aff&amp;css=../css/VisuRubriqueEncadre.css" data-v-2792df1a></iframe></section>',3),F=[q];function N(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("main",z,F)}var V={name:"Publications.vue"};const K=(0,v.Z)(V,[["render",N],["__scopeId","data-v-2792df1a"]]);var $=K;const X=e=>((0,o.dD)("data-v-869f0d88"),e=e(),(0,o.Cn)(),e),ee={class:"content"},te=X((()=>(0,o._)("h2",null,[(0,o._)("em",null,"Oops, it looks like the page you're looking for doesn't exist !")],-1))),ae=[te];function ie(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("main",ee,ae)}var oe={name:"NotFound.vue"};const ne=(0,v.Z)(oe,[["render",ie],["__scopeId","data-v-869f0d88"]]);var re=ne;const se=e=>((0,o.dD)("data-v-3e39a118"),e=e(),(0,o.Cn)(),e),le={class:"content"},ce=se((()=>(0,o._)("h1",null,"Projects",-1))),ge={class:"projects-holder"},pe=["src","alt"];function de(e,t,a,n,r,s){const l=(0,o.up)("ProjectItem");return(0,o.wg)(),(0,o.iD)("main",le,[ce,(0,o._)("section",ge,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.projects,((e,a)=>((0,o.wg)(),(0,o.j4)(l,{key:a,name:e.name,types:e.types,languages:e.languages,description:e.description,images:e.images,links:e.links,duration:e.duration,context:e.context,note:e.note,onEmitImage:t[0]||(t[0]=e=>[r.showImage=!0,r.previewImageUrl=e.url,r.previewImageTitle=e.title])},null,8,["name","types","languages","description","images","links","duration","context","note"])))),128))]),(0,o.Wm)(i.uT,{name:"image-preview-transition"},{default:(0,o.w5)((()=>[r.showImage?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"image-preview-container",onClick:t[1]||(t[1]=e=>[r.showImage=!1,r.previewImageUrl="",r.previewImageTitle=""])},[(0,o._)("img",{src:r.previewImageUrl,alt:r.previewImageTitle,class:"image-preview"},null,8,pe),(0,o._)("h4",null,(0,I.zw)(r.previewImageTitle),1)])):(0,o.kq)("",!0)])),_:1})])}const he={class:"project-item"},ue={class:"title-section"},me={class:"tags"},fe={class:"subtitle-section"},be={key:0,class:"duration"},ve={key:1,class:"links"},ye=["innerHTML"],Ae={key:0,class:"description-container"},Ie=["innerHTML"],we=["innerHTML"],ke={key:2,class:"note"};function Se(e,t,a,i,n,r){const s=(0,o.up)("vueper-slide"),l=(0,o.up)("vueper-slides");return(0,o.wg)(),(0,o.iD)("article",he,[(0,o._)("div",ue,[(0,o._)("h3",null,(0,I.zw)(a.name),1),(0,o._)("div",me,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.types,((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t,class:"tag is-info"},(0,I.zw)(e),1)))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.languages,((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t,class:"tag is-danger"},(0,I.zw)(e),1)))),128))])]),(0,o._)("div",fe,[a.duration?((0,o.wg)(),(0,o.iD)("div",be," Duration: "+(0,I.zw)(a.duration),1)):(0,o.kq)("",!0),a.links?((0,o.wg)(),(0,o.iD)("div",ve,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Object.keys(a.links),((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"link-image-container",key:t,innerHTML:r.makeImageLink(e)},null,8,ye)))),128))])):(0,o.kq)("",!0)]),a.description||a.images?((0,o.wg)(),(0,o.iD)("div",Ae,[(0,o._)("div",{class:"description",innerHTML:r.formatDescription(a.description)},null,8,Ie),a.images&&a.images.length>0?((0,o.wg)(),(0,o.j4)(l,{key:0,class:"no-shadow",fade:"",touchable:!1,"slide-ratio":1/1.5},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.images,((t,a)=>((0,o.wg)(),(0,o.j4)(s,{style:{"background-size":"100% auto","background-position":"center","background-repeat":"no-repeat"},key:a,image:t.url,onClick:a=>e.$emit("emitImage",{url:t.url,title:t.title})},null,8,["image","onClick"])))),128))])),_:1},8,["slide-ratio"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),a.context?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"context",innerHTML:r.formatContext(a.context)},null,8,we)):(0,o.kq)("",!0),a.note?((0,o.wg)(),(0,o.iD)("div",ke,(0,I.zw)(a.note),1)):(0,o.kq)("",!0)])}var Be=a(970),Ce=a.p+"img/logo-github.656a961c.svg",Ee=a.p+"img/logo-crates.96e24f4d.svg",Qe=a.p+"img/logo-npm.3e3c169f.svg",De=a.p+"img/logo-pypi.b5191ab8.svg",xe=a.p+"img/logo-web.c5a63dcc.svg",He=a.p+"img/logo-paper.70dc1f95.svg";const Le={crates:`<img title="crates.io" style="width: 30px;" src="${Ee}"/>`,pypi:`<img title="PyPI" style="width: 30px;" src="${De}"/>`,github:`<img title="GitHub repository" style="width: 30px;" src="${Ce}"/>`,npm:`<img title="NPM" style="width: 30px;" src="${Qe}"/>`,web:`<img title="Web page" style="width: 30px;" src="${xe}"/>`,paper:`<img title="Scientific publication" style="width: 30px;" src="${He}"/>`};var _e={name:"ProjectItem",components:{VueperSlides:Be.x,VueperSlide:Be.c},props:{name:{type:String,required:!0},types:{type:Array,required:!1},languages:{type:Array,required:!1},description:{type:String,required:!0},images:{type:Array,required:!1},links:{type:Object,required:!1},duration:{type:String,required:!1},context:{type:String,required:!1},note:{type:String,required:!1}},emits:{emitImage:{type:String}},methods:{formatDescription(e){return e.split("\n").map((e=>`<p>${e}</p>`)).join("")},makeImageLink(e){return`<a href="${this.links[e]}">${Le[e]}</a>`},formatContext(e){return`Context: ${e}`}}};const Oe=(0,v.Z)(_e,[["render",Se],["__scopeId","data-v-b565f576"]]);var Pe=Oe,je=JSON.parse('[{"name":"GeoChange visualisation interface","types":["Web application"],"languages":["JavaScript"],"description":"The GeoChange visualisation interface is a Single Page Application dedicated to visualise the data processed and published in the GeoChange project. It uses notably Vue.js and Openlayers.\\nThe aim of the application is to allow the user to compare two versions of a dataset through various visualisation components.","duration":"Jan. 2022 - Jul. 2022","context":"I designed and developed this application within the project GeoChange, which is funded by the SATT (technology transfer acceleration company) Linksium in collaboration with the Grenoble Informatics Laboratory (LIG) of Grenoble Alpes University.","images":[],"links":{}},{"name":"CoViKoa","types":["Research prototype"],"languages":["Java","Python","JavaScript"],"description":"CoViKoa (which is an abbreviation for the french, albeit incorrect, sentence <em>Comment on Visualise Quoi</em>) is a framework for the geovisualisation of Semantic Web data. For this, it uses an ecosystem of 10 ontologies, 6 which are original proposals and 4 which are reused from the literature.\\nIt allows a user (typically a knowledge engineer) to describe, in a purely declarative way and in RDF, a geovisualisation. This description is done in a specification document which is read by the framework and which allows, thanks to SHACL rules, to obtain a RDF graph containing the links between the data and their symbolisation within the components of a geovisualisation. Other elements such as the possibility of defining interactions and the possibility of transforming the data to be portrayed contribute to the creation of rich geovisualisations. The resulting RDF graph is published behind a SPARQL interface and we also provide a generic web client to create the corresponding geovisualisation using this graph. To test its relevance, we use it to visualise data from three different models.","duration":"Dec. 2019 - Dec. 2021","context":"This research prototype was made during my PhD, funded by the <a href=\\"https://choucas.ign.fr/\\">ANR CHOUCAS</a> project. It includes all the elements described in the \'Proposal\' part of my thesis manuscript.","images":[{"url":"/portfolio/img/covikoala-cut-resized.jpg","title":"CoViKoa\'s logo - made by an anonymous friend"},{"url":"/portfolio/img/covikoa-screenshot-loac-resized.jpg","title":"Example of UI that can be specified and generated with CoViKoa"}],"links":{"github":"https://github.com/mthh/covikoa","paper":"https://tel.archives-ouvertes.fr/tel-03578323"}},{"name":"GASPAR","types":["Research prototype","Web application"],"languages":["Python","JavaScript"],"description":"GASPAR is a prototype of a geovisualisation application, intended to support the search for a victim to be located in the mountains, on the basis of imprecise location elements. It allows the use of various elements of the CHOUCAS project (concerning the provision of reference objects and concerning the spatialisation and fusion of location areas). For its part, GASPAR allows the capturing of the initial search area, the capturing of clues, and the restitution of the victim\'s location area in a 2d view and in a 3d view.\\nIt uses libraries such as OpenLayers, Itowns and Lumino.js.\\nAn article describing the latest version of the application is under review at the moment.","duration":"Oct. 2018 - Dec. 2021","context":"This research prototype was made during my PhD and during a short contract as a study engineer, both funded by the <a href=\\"https://choucas.ign.fr/\\">ANR CHOUCAS</a> (however, my thesis manuscript does not specifically address this aspect).","images":[{"url":"/portfolio/img/gasparlogo-resized.png","title":"GASPAR\'s logo - generated from a DEM of the Grenoble area"}],"links":{"github":"https://github.com/ANRChoucas/GASPAR","web":"https://steamer.imag.fr/?page_id=792"}},{"name":"Magrit","types":["Web application"],"languages":["Python","JavaScript"],"description":"Magrit is an online application for thematic mapping (cartography). It\'s designed for teaching and learning cartography (in fact it is used by several teachers at the university for this purpose).\\nIt allows the production of a wide variety of portrayals (choropleth, proportional symbols, cartogram, discontinuity, etc.), map customisation with classic design elements (scale, orientation, arrow, custom image), and the export of the maps created in various formats (notably in well-organised SVG which allows easy editing in a vector drawing software afterwards).\\nFrom a technical point of view, Magrit is backed by a python 3.6+ application (particularly for some geoprocessing tasks relying on GDAL, GEOS and PROJ.4 libraries). On client-side, Magrit is written in modern JavaScript (ES6) and uses notably the d3.js library.","duration":"Feb. 2016 - Sept. 2018","context":"I developed Magrit while working at the <a href=\\"https://riate.cnrs.fr/\\">UMS RIATE</a>. Design was made with Timothée Giraud and Nicolas Lambert, as well as thanks to the numerous feedbacks and suggestions from students or teachers. I am no longer actively maintaining it since Sept. 2018 (however I do sometimes make bug fixes if necessary) and the application is still <a href=\\"http://magrit.cnrs.fr/\\">online</a> (managed by the UMS RIATE) and in use.","images":[{"url":"/portfolio/img/magrit-screenshot-cinemapot-resized.png","title":"An example of map made with Magrit"},{"url":"/portfolio/img/magrit-map-brazil-resized.png","title":"An example of map made with Magrit"}],"links":{"github":"https://github.com/riatelab/magrit","web":"http://magrit.cnrs.fr"}},{"name":"Regioviz","types":["Research prototype","Web application"],"languages":["JavaScript"],"description":"Regioviz is a tool to compare new French regions in the European context. This statistical exploration tool aims to be usable by non-experts in data manipulation/visualisation. A central point of the proposed exploration is thus the choice of a reference territory (\\"my territory\\") by the user.\\nIt allows the use of several representation and analysis functionalities to compare a territory with the other territories in the study area: positioning with regard to one indicator (bar chart), two indicators (scatter plot) and three or more indicators (radar chart), and similarity with regard to one or more indicators (two proposed representations).\\nRegioviz is written entirely in JavaScript and works with any dataset prepared according to its specifications. In order to test the genericity of the tool and the data model, we prepared two other datasets (indicators of various French statistical subdivisions and electoral results of delegations in Tunisia).","duration":"Feb. 2017 - Sept. 2018","context":"I developed Regioviz while working at the <a href=\\"https://riate.cnrs.fr/\\">UMS RIATE</a> as part of a project coordinated by French CGET (<em>Commissariat Général à l\'Égalité des Territoires). Design was made with Ronan Ysebaert and Marianne Guérois and in association with the end-users via the CGET. All the work related to the data (modelling, preparation, etc.) was made by Ronan Ysebaert.","images":[{"url":"/portfolio/img/screenshot-regioviz-resized.jpg","title":"Screenshot of a portion of the Regioviz interface"}],"links":{"github":"https://github.com/riatelab/regioviz","web":"https://riatelab.github.io/regiovizlab/","paper":"https://doi.org/10.4000/mappemonde.7498"}},{"name":"QGIS Distance Cartogram Plugin","types":["QGIS Plugin"],"languages":["Python"],"description":"Distance Cartogram is a Python plugin to QGIS3 allowing to make distance cartograms.\\nThe technique consists in showing (on background(s) layer(s), such as the territorial divisions of the study zone) the local deformations (calculated using Waldo Tobler\'s bidimensional regression) to fit a layer of image points to a layer of source points. It is an appealing representation that allows, for example, the distortion of a reference space to represent travel times or estimated positions in spatial cognition.\\nThe credit for this type of anamorphosis goes to Colette Cauvin (UMR Théma - Univ. Franche-Comté) and Gilles Vuidel (UMR Théma - CNRS) who first implemented it in Darcy tool.","duration":"Feb. 2018 - Now","images":[{"url":"/portfolio/img/qgisdistancecartogram-screenshot-resized.png","title":"Example of a distance cartogram"}],"links":{"github":"https://github.com/mthh/QgisDistanceCartogramPlugin","web":"https://plugins.qgis.org/plugins/dist_cartogram/"}},{"name":"Jenkspy","types":["Library"],"languages":["Python"],"description":"Jenkspy is a fast implementation (the core processing is coded in C and wrapped with Cython) of the Fisher-Jenks 1d classification algorithm which is frequently used in cartography.\\nAccording to PyPi Stats, it is downloaded several thousand times a day on PyPI.","duration":"Sept. 2016 - Now","images":[],"links":{"github":"https://github.com/mthh/jenkspy","pypi":"https://pypi.org/project/jenkspy/"}},{"name":"contours-rs","types":["Library"],"languages":["Rust"],"description":"A Rust library that computes isorings and contour polygons by applying marching squares to a grid of numeric values. This library can also be easily compiled to WebAssembly to be used from JS code for example (see the <a target=\\"_blank\\" href=\\"https://mthh.github.io/wasm_demo_contour/\\">demo page</a>).","duration":"Janv. 2019 - Now","images":[],"links":{"github":"https://github.com/mthh/contours-rs","crates":"https://crates.io/crates/contours","web":"https://mthh.github.io/wasm_demo_contour/"}},{"name":"loc-i18next","types":["Library"],"languages":["JavaScript"],"description":"loc-i18next is a 0-dependency JavaScript library, inspired by jquery-i18next, which allows to use HTML5 selectors to select in JavaScript the elements to be translated by i18next.\\nAlthough it is less used nowadays, it still counts several hundred downloads each week on npm.","duration":"Oct 2016 - Now","images":[],"links":{"github":"https://github.com/mthh/loc-i18next","npm":"https://www.npmjs.com/package/loc-i18next"}},{"name":"sfcgal-rs","types":["Library"],"languages":["Rust"],"description":"A Rust wrapper around <a href\\"https://gitlab.com/Oslandia/SFCGAL\\">SFCGAL</a> C API.\\nIn addition to exposing the various functionalities of SFCGAL, it allows easy conversions to / from the data structures of other crates in the georust ecosystem.","duration":"Feb. 2019 - Now","images":[],"links":{"github":"https://github.com/mthh/sfcgal-rs","crates":"https://crates.io/crates/sfcgal"}},{"name":"Miscellaneous opensource contributions","types":["Library"],"languages":["Python","Rust","JavaScript"],"description":"I also made a few minor contributions (bug fixes, documentation or improvements) to some open-source projects I love :\\n- <a href=\\"https://github.com/georust/gdal\\">georust/gdal</a> (<a href=\\"https://github.com/georust/gdal/pull/29\\">#29</a>, <a href=\\"https://github.com/georust/gdal/pull/31\\">#31</a>)\\n- <a href=\\"https://github.com/georust/geojson\\">georust/geojson</a> (<a href=\\"https://github.com/georust/geojson/pull/68\\">#68</a>, <a href=\\"https://github.com/georust/geojson/pull/70\\">#70</a>, <a href=\\"https://github.com/georust/geojson/pull/76\\">#76</a>, <a href=\\"https://github.com/georust/geojson/pull/79\\">#79</a>, <a href=\\"https://github.com/georust/geojson/pull/105\\">#105</a>, <a href=\\"https://github.com/georust/geojson/pull/106\\">#106</a>)\\n- <a href=\\"https://github.com/georust/topojson/\\">georust/topojson</a> <a href=\\"https://github.com/georust/topojson/pull/6\\">(#6)</a>\\n- <a href=\\"https://github.com/georust/geos\\">georust/geos</a> (I was the creator / maintainer until it was given to georust community - <a href=\\"https://github.com/georust/geos/pull/11\\">#11</a>, <a href=\\"https://github.com/georust/geos/pull/18\\">#18</a>, <a href=\\"https://github.com/georust/geos/pull/19\\">#19</a>)\\n- <a href=\\"https://github.com/d3/d3-geo-projection\\">d3/d3-geo-projection</a> (<a href=\\"https://github.com/d3/d3-geo-projection/pull/101\\">#101</a>)\\n- <a href=\\"https://github.com/d3/d3-geo\\">d3/d3-geo</a> (<a href=\\"https://github.com/d3/d3-geo/pull/114\\">#114</a>)\\n- <a href=\\"https://github.com/geopandas/geopandas/\\">geopandas/geopandas</a> (<a href=\\"https://github.com/geopandas/geopandas/pull/781\\">#781</a>)\\n- <a href=\\"https://github.com/Turbo87/flat-projection-rs\\">Turbo87/flat-projection-rs</a> (<a href=\\"https://github.com/Turbo87/flat-projection-rs/pull/8\\">#8</a>, <a href=\\"https://github.com/Turbo87/flat-projection-rs/pull/9\\">#9</a>)\\n- <a href=\\"https://github.com/rust-lang/mdBook/\\">rust-lang/mdBook</a> (<a href=\\"https://github.com/rust-lang/mdBook/pull/248\\">#248</a>)\\n- <a href=\\"https://github.com/mrhooray/kdtree-rs\\">mrhooray/kdtree-rs</a> (<a href=\\"https://github.com/mrhooray/kdtree-rs/pull/15\\">#15</a>)","duration":"","note":"This is a non-exhaustive list, more of my contributions can be found on my GitHub profile and I have other minor libraries published for example on crates.io (although they are not widely used).","images":[]}]'),Ge={name:"Projects",components:{ProjectItem:Pe},data(){return{projects:je,showImage:!1,previewImageUrl:"",previewImageTitle:""}}};const Je=(0,v.Z)(Ge,[["render",de],["__scopeId","data-v-3e39a118"]]);var Me=Je;const Te={id:"teachings",class:"content"},Ze=(0,o.uE)("<h1>Teachings</h1><section><p>Since the beginning of my PhD thesis, I have taught various courses:</p><ul><li><strong>Technologies Web</strong> (2019-2020, 2020-2021, 2021-2022) - LP ESSIG (IUT2 / Univ. Grenoble Alpes)</li><li><strong>Python pour QGIS</strong> (2018-2019, 2019-2020, 2020-2021, 2021-2022) - LP ESSIG (IUT2 / Univ. Grenoble Alpes)</li><li><strong>Outils de Communication Territoriale : cartographie thématique</strong> (2019-2020, 2020-2021) - M1 IDT2 (IUGA / Univ. Grenoble Alpes)</li><li><strong>Outils de l&#39;Urbanisme : Introduction aux SIG</strong> (2018-2019, 2019-2020) - M1 Urbanisme (IUGA / Univ. Grenoble Alpes)</li><li><strong>Introduction aux SIG</strong> (2020-2021) - 3ème année ISI et Mastere BigData (ENSIMAG / Grenoble INP)</li><li><strong>Des données à la cartographie : cartographie thématique</strong> (2021-2022) - M1 GAED-GEOMAS / M1 GAED-GEOPOESICE (IUGA / Univ. Grenoble Alpes)</li></ul></section>",2),Ye=[Ze];function Re(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("main",Te,Ye)}var We={name:"Teachings"};const Ue=(0,v.Z)(We,[["render",Re]]);var ze=Ue;const qe=e=>((0,o.dD)("data-v-1939726a"),e=e(),(0,o.Cn)(),e),Fe={id:"slides",class:"content"},Ne=qe((()=>(0,o._)("h1",null,"Presentation slides",-1))),Ve=qe((()=>(0,o._)("p",null," I have given various presentations over the last few years, whether it was to present research results or to present technologies that I work with. For the record, my slides are usually available here (most of them are in French, some are in PDF and others use web frameworks such as Reveal.js). ",-1)));function Ke(e,t,a,i,n,r){const s=(0,o.up)("SlideEntry");return(0,o.wg)(),(0,o.iD)("main",Fe,[Ne,(0,o._)("section",null,[Ve,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.slides,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,title:e.title,url:e.url,note:e.note,conference:e.conference,place:e.place,date:e.date},null,8,["title","url","note","conference","place","date"])))),128))])])])}const $e=["href"],Xe={key:0},et=(0,o._)("br",null,null,-1),tt={key:1},at={key:2},it={key:3};function ot(e,t,a,i,n,r){return(0,o.wg)(),(0,o.iD)("li",null,[(0,o._)("strong",null,[(0,o._)("a",{href:a.url},(0,I.zw)(a.title),9,$e)]),a.note?((0,o.wg)(),(0,o.iD)("span",Xe," ("+(0,I.zw)(a.note)+")",1)):(0,o.kq)("",!0),et,a.conference?((0,o.wg)(),(0,o.iD)("span",tt,[(0,o._)("em",null,(0,I.zw)(a.conference)+" - ",1)])):(0,o.kq)("",!0),a.place?((0,o.wg)(),(0,o.iD)("span",at,(0,I.zw)(a.place)+" - "+(0,I.zw)(a.date),1)):((0,o.wg)(),(0,o.iD)("span",it,(0,I.zw)(a.date),1))])}var nt={name:"SlideEntry",props:{title:{type:String,required:!0},date:{type:String,required:!0},url:{type:String,required:!1},note:{type:String,required:!1},conference:{type:String,required:!1},thumbnail:{type:String,required:!1},place:{type:String,required:!1}}};const rt=(0,v.Z)(nt,[["render",ot]]);var st=rt,lt=JSON.parse('[{"title":"Une approche déclarative basée sur les technologies du Web Sémantique pour spécifier et générer des geovisualisations adaptatives","url":"https://mthh.github.io/phd-defense/viry-matthieu-soutenance-20211216.pdf","note":"","conference":"PhD defense","place":"Université Grenoble Alpes","date":"16 décembre 2021"},{"title":"GASPAR - Geoviz Application for Searching And Rescuing People","url":"https://cloud.univ-grenoble-alpes.fr/index.php/s/stMBoxcWbaHED2K","note":"","conference":"Challenge GeoDataDays 2021","place":"Grenoble","date":"15-16 septembre 2021"},{"title":"Tour d’horizon des fonctionnalités de SHACL","url":"https://mthh.github.io/shacl_intro_20200117/","note":"","conference":"","place":"","date":"17 janvier 2020"},{"title":"Environnement de dev. en JS","url":"https://mthh.github.io/environnement_dev_js_20191220/","note":"","conference":"","place":"","date":"20 décembre 2019"},{"title":"L’Ontologie d’Alerte Choucas : de la modélisation des connaissances à un outil support d’un raisonnement géovisuel - Application à la recherche de victime en haute-montagne","url":"https://mthh.github.io/sageo2019/","note":"","conference":"SAGEO 2019","place":"Clermont-Ferrand","date":"14 novembre 2019"},{"title":"Improving the search for victims in mountain environments with geovisualization and competing hypotheses management","url":"https://mthh.github.io/icc19/ViryEtAl_choucas_icc19_prez.pdf","note":"","conference":"ICC / Conférence Internationnale de Cartographie","place":"Tokyo","date":"16 juillet 2019"},{"title":"Introduction à Webpack","url":"https://mthh.github.io/intro_webpack_190509/","note":"","conference":"","place":"","date":"09 mai 2019"},{"title":"Introduction Python pour les utilisateurs de R","url":"https://mthh.github.io/RUSS_190404/","note":"","conference":"Séminaire RUSS de l’INED","place":"Paris","date":"04 Avril 2019"},{"title":"Les données spatialisées ou géolocalisées - Pratique de Khartis et Magrit","url":"","note":"avec Thomas Ansart","conference":"ANF DATAVIZ 2018","place":"Sète","date":"16 novembre 2018"},{"title":"Regioviz - Outil interactif de visualisation et de comparaison régionale","url":"https://riate.cnrs.fr/wp-content/uploads/2019/01/20181108_Regioviz_SAGEO.pdf","note":"avec Ronan Ysebaert et Marianne Guérois","conference":"SAGEO 2018","place":"Montpellier","date":"08 novembre 2018"},{"title":"Mettre en ligne une carte sans Google","url":"https://mthh.github.io/poleimage_osm_180621/","note":"session 2 - avec Violaine Jurie","conference":"Midi du Pôle Image","place":"Paris","date":"21 juin 2018"},{"title":"Magrit - Session trucs et astuces","url":"https://mthh.github.io/poleimage_magrit_180329/","note":"","conference":"Midi du Pôle Image","place":"Paris","date":"29 mars 2018"},{"title":"Magrit: a didactic cartography tool","url":"https://mthh.github.io/icc17/","note":"","conference":"ICC / Conférence Internationnale de Cartographie","place":"Washington DC","date":"3 juillet 2017"},{"title":"OSM dans une unité de service en aménagement du territoire","url":"https://mthh.github.io/sotm_riate/","note":"","conference":"State Of The Map 2017","place":"Avignon","date":"2 juin 2017"},{"title":"Présentation de Magrit","url":"https://mthh.github.io/carto/","note":"","conference":"Midi du Pôle Image","place":"Paris","date":"21 mars 2017"}]'),ct={name:"Slides",components:{SlideEntry:st},data(){return{slides:lt}}};const gt=(0,v.Z)(ct,[["render",Ke],["__scopeId","data-v-1939726a"]]);var pt=gt;const dt=[{path:"/",redirect:{name:"Home"}},{name:"Home",path:"/portfolio/",component:U},{name:"Projects",path:"/portfolio/projects",component:Me},{name:"Publications",path:"/portfolio/publications",component:$},{name:"Teachings",path:"/portfolio/teachings",component:ze},{name:"Slides",path:"/portfolio/slides",component:pt},{path:"/portfolio/:catchAll(.*)",component:re}],ht=(0,G.p7)({history:(0,G.PO)(),routes:dt});var ut=ht;(0,i.ri)(j).use(ut).mount("#app")}},t={};function a(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,o,n){if(!i){var r=1/0;for(g=0;g<e.length;g++){i=e[g][0],o=e[g][1],n=e[g][2];for(var s=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(s=!1,n<r&&(r=n));if(s){e.splice(g--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var g=e.length;g>0&&e[g-1][2]>n;g--)e[g]=e[g-1];e[g]=[i,o,n]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/portfolio/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,n,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var g=l(a)}for(t&&t(i);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(g)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(983)}));i=a.O(i)})();
//# sourceMappingURL=app.b3e5c123.js.map
