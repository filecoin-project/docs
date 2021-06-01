(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{425:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何启动测试网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何启动测试网络"}},[s._v("#")]),s._v(" 如何启动测试网络")]),s._v(" "),a("p",[s._v("本文以建立2k专用网络为例。")]),s._v(" "),a("h2",{attrs:{id:"本文以建立2k专用网络为例。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文以建立2k专用网络为例。"}},[s._v("#")]),s._v(" 本文以建立2k专用网络为例。")]),s._v(" "),a("p",[s._v("基于 CentOS 7.* :")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ocl-icd-devel -y\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" opencl-headers -y\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hwloc\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jq -y \n")])])]),a("p",[s._v("在此过程中，系统会提示您安装所有组件。")]),s._v(" "),a("h2",{attrs:{id:"生成节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成节点"}},[s._v("#")]),s._v(" 生成节点")]),s._v(" "),a("ol",[a("li",[s._v("生成预密封文件和数据")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus seed pre-seal --sector-size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --num-sectors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n./venus seed genesis new localnet.json\n./venus seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("启动 daemon")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus daemon --make-genesis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --genesis-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localnet.json --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置钱包密码")]),s._v("\n./venus wallet set-password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n./venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ~/.genesis-sectors/pre-seal-t01000.key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动daemon后，您需要解锁钱包")]),s._v("\n./venus wallet unlock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("初始化矿工")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化 sealer")]),s._v("\n./venus-sealer init --genesis-miner --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --pre-sealed-sectors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors --pre-sealed-metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors/pre-seal-t01000.json --nosync --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化 miner")]),s._v("\n./venus-miner init --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("miner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --listen-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("开始创世矿工的服务")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动seal服务")]),s._v("\n./venus-sealer run --nosync\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动挖矿服务")]),s._v("\n./venus-miner run --nosync\n")])])]),a("h2",{attrs:{id:"启动venus普通节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动venus普通节点"}},[s._v("#")]),s._v(" 启动Venus普通节点")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先，devgen.car由创世节点生成")]),s._v("\n./venus daemon --genesisfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他")]),s._v("\n./venus daemon --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])])]),a("h2",{attrs:{id:"生成普通矿工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成普通矿工"}},[s._v("#")]),s._v(" 生成普通矿工")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 矿建一个钱包")]),s._v("\n./venus wallet new --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bls\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转账，在创世节点执行")]),s._v("\n./venus send "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WALLET_T3_ADDR")]),s._v(" --value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询")]),s._v("\n./venus wallet balance "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WALLET_T3_ADDR")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成普通矿工")]),s._v("\n./venus-miner init --owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WALLET_T3_ADDR")]),s._v(" --worker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WALLET_T3_ADDR")]),s._v(" --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --nosync\n")])])]),a("h2",{attrs:{id:"启动普通节点的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动普通节点的服务"}},[s._v("#")]),s._v(" 启动普通节点的服务")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动sealing服务")]),s._v("\n./venus-sealer run --nosync\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# seal一次")]),s._v("\n./venus-sealer sectors pledge\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动挖矿服务")]),s._v("\n./venus-miner init --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("miner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --listen-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n./venus-miner run --nosync\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);