# WEEK14 组件化

###  对象与组件

#### 对象

- ​	Properties
- Methods
- Inherit

#### 组件

- Properties
- Methods
- Inherit
- Attribute
- Config & State
- Event
- Lifecycle
- Children

### Component

![Compenent](https://i.loli.net/2021/01/31/1JrMbTnDPQON5zE.jpg)

- attribute (组件使用者向开发者传递信息)
- Method
- Property
- event -> (组件开发者向使用者传递信息)

### Attribute Vs Property

- Attribute 强调描述性
- Property 强调从属关系

### 如何设计组件状态

| Markup set | Js set | Js change | UserInput change |           |
| ---------- | ------ | --------- | ---------------- | --------- |
| ❌          | ✅      | ✅         | ？               | property  |
| ✅          | ✅      | ✅         | ？               | attribute |
| ❌          | ❌      | ❌         | ✅                | state     |
| ❌          | ✅      | ❌         | ❌                | config    |

property: 用户输入不应该改变 property

attribute： 用户输入不应该改变 attribue

state： 只能从组件内部改变，不能从外部改变。但保证用户输入是能改变我的 state 的

config: 一次性结果，只在构造是被触发，不可更改。通常留给全局

### 为组件插入JSX语法

```js
mkdir jsx
cd jsx
npm init
npm install -g webpack webpack-cli
npm install --save-dev webpack babel-loader
vim webpack.config.js (entry)
webpack
npm install --save-dev @babel/core @babel/preset-env
vim webpack.config.js (module.rules: babel-loader: presets)
webpack
npm install --save-dev @babel/plugin-transform-react-jsx
vim webpack.config.js (moduel.rules: babel-loader: plugins)
```