(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{451:function(t,e,s){"use strict";s.r(e);var a=s(17),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[t._v(t._s(t.$frontmatter.description))]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#enabling-a-custom-gpu"}},[t._v("Enabling a custom GPU")])]),s("li",[s("a",{attrs:{href:"#testing-whether-the-gpu-is-used"}},[t._v("Testing whether the GPU is used")])])])]),s("p"),t._v(" "),s("p",[t._v("The list of known-to-work supported GPUs is in the "),s("RouterLink",{attrs:{to:"/mine/hardware-requirements.html"}},[t._v("hardware-requirements")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"enabling-a-custom-gpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-a-custom-gpu"}},[t._v("#")]),t._v(" Enabling a custom GPU")]),t._v(" "),s("p",[t._v("If you want to test a GPU that is not explicitly supported, set the following environment variable:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BELLMAN_CUSTOM_GPU")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<NAME>:<NUMBER_OF_CORES>"')]),t._v("\n")])])]),s("p",[t._v("Here is an example of trying a GeForce GTX 1660 Ti with 1536 cores:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BELLMAN_CUSTOM_GPU")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GeForce GTX 1660 Ti:1536"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("To get the number of cores for your GPU, you will need to check your card's specifications.")])]),t._v(" "),s("h2",{attrs:{id:"testing-whether-the-gpu-is-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-whether-the-gpu-is-used"}},[t._v("#")]),t._v(" Testing whether the GPU is used")]),t._v(" "),s("p",[t._v("First, to watch GPU utilization run "),s("code",[t._v("nvtop")]),t._v(" in one terminal, then in a separate terminal, run the benchmarking tool to simulate sealing of a sector of small size:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Venus-bench sealing --sector-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2KiB\n")])])]),s("p",[t._v("This process uses a fair amount of GPU, and generally takes ~4 minutes to complete. If you do not see any activity in nvtop from venus during the entire process, it is likely something is misconfigured with your GPU.")])])}),[],!1,null,null,null);e.default=r.exports}}]);