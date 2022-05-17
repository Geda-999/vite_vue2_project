import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue'

import { createVuePlugin } from "vite-plugin-vue2";

// 自动按需引入 vue\vue-router\pinia 等的 api
import AutoImport from "unplugin-auto-import/vite";
// 自动按需引入 第三方的组件库组件 和 我们自定义的组件
import Components from "unplugin-vue-components/vite";

// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// 自动按需引入 我们手动引入的组件的css样式
// import styleImport, { AndDesignVueResolve } from "vite-plugin-style-import";

// 可以自动按需引入 所使用的图标，而不用手动 import
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// 启动优化
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";

// https://vitejs.dev/config/
export default {
	plugins: [
		createVuePlugin(/* options */),
		AutoImport({
			// 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
			// 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
			import: ["vue", "vue-router"],
			// 第三方组件库的解析器
			// resolvers: [ElementPlusResolver()],
			dts: "./src/auto-imports.d.ts",

			// Generate corresponding .eslintrc-auto-import.json file.
			// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
			eslintrc: {
				enabled: true, // Default `false`
				filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
		}),
		Components({
			// dirs 指定组件所在位置，默认为 src/components
			// 可以让我们使用自己定义组件的时候免去 import 的麻烦
			dirs: ["src/components/"],
			// 配置需要将哪些后缀类型的文件进行自动按需引入
			extensions: ["vue", "md"],
			// 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
			// resolvers: [ElementPlusResolver(), AntDesignVueResolver()],

			// 是一个非常优秀的图标库
			resolvers: IconsResolver(),

			dts: "./src/components.d.ts",
		}),
		// styleImport({
		// 	// resolves: [AndDesignVueResolve()],
		// }),
		Icons({
			compiler: "vue2",
			autoInstall: true,
		}),
		PkgConfig(),
		OptimizationPersist(),
	],
};
