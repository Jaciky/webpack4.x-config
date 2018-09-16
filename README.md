<<<<<<< HEAD
![](./static/webpack.png)
=======
![](./statics/webpack.png)
>>>>>>> e77fec309a5b81f64420cd5004f4dd06981c2d59

### webpack 概念

> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(static module bundler)。在 `webpack` 处理应用程序时，它会在内部创建一个依赖图(dependency graph)，用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle。`webpack`作为一个模块打包器，主要用于前端工程中的依赖梳理和模块打包，将我们开发的具有高可读性和可维护性的代码文件打包成浏览器可以识别并正常运行的压缩代码，主要包括样式文件处理成`css`，各种新式的`JavaScript`转换成浏览器认识的写法等，也是前端工程师进阶之路必须要掌握的技能。

### 模块 modules

> 在模块化编程中，开发者将程序分解成离散功能块(discrete chunks of functionality)，并称之为_模块_。每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。 精心编写的_模块_提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。`Node.js` 从最一开始就支持模块化编程。然而，在 web，模块化的支持正缓慢到来。在 web 存在多种支持 `JavaScript` 模块化的工具，这些工具各有优势和限制。`webpack` 基于从这些系统获得的经验教训，并将_模块_的概念应用于项目中的任何文件。

### webpack 模块

对比 `Node.js` 模块，webpack _模块_能够以各种方式表达它们的依赖关系，几个例子如下：

- ES2015 import 语句
- CommonJS require() 语句
- AMD define 和 `require` 语句
- css/sass/less 文件中的 `@import` 语句。
- 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)

### webpack 4个核心概念

#### 入口 entry

入口起点(entry point)指示 `webpack` 应该使用哪个模块，来作为构建其内部依赖图的开始，`webpack` 会找出有哪些模块和 `library` 是入口起点（直接和间接）依赖的。

默认值是 ./src/index.js，然而，可以通过在 webpack 配置中配置 entry 属性，来指定一个不同的入口起点（或者也可以指定多个入口起点）。

`webpack.config.js`

```javascript
module.exports = {
  entry: './src/main.js' // 设置相对路径
};
```

#### 出口 output

output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，主输出文件默认为 ./dist/main.js，其他生成文件的默认输出目录是 ./dist。

你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

`webpack.config.js`

```javascript
const path = require('path'); // 它是一个 Node.js 核心模块，用于操作文件路径。

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 经过 webpack 打包后的文件存放路径
    filename: 'bundle.js' // 自定义打包后的文件名 bundle.js
  }
};
```

#### 加载器 loader

`webpack` 自身只支持 `JavaScript`。而 `loader` 能够让 `webpack` 处理那些非 `JavaScript` 文件，并且先将它们转换为有效 模块，然后添加到依赖图中，这样就可以提供给应用程序使用。

每个 `loader` 有两个基本属性
1. `test` 属性，用于标识出应该被对应的 `loader` 进行转换的某个或某些文件。
2. `use` 属性，表示进行转换时，应该使用哪个 `loader。`

`webpack.config.js`

```javascript
const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' } // test 为模块匹配规则，user 为解析loader
    ]
  }
};
```
在 webpack 配置中定义 `loader` 时，要定义在 `module.rules` 中，当 `webpack` 执行打包时，对匹配到`.css`的模块先执行 `style-loader` 进行装换，然后进行打包。

#### 插件 plugins

`loader` 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，插件的范围包括：打包优化、资源管理和注入环境变量。

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项`(option)`自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

`webpack.config.js`

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 需要通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}) // 生成一个 html 文件，然后自动注入所有打包生成的 bundle
  ]
};
```
<<<<<<< HEAD
 至此，webpack 基本概念基本阐述完成，现在，请移步这里：
=======
 至此，webpack 基本概念基本阐述完成，现在，请移步这里：
>>>>>>> e77fec309a5b81f64420cd5004f4dd06981c2d59
