学习笔记



### CSS总论

#### css总体结构

- @charset
- @import
- rules
  - @media
  - @page
  - rule

#### css规则研究

- @规则的研究 
  - @charset
  - @import
  - @media
  - @page
  - @counter-style
  - @keyframes
  - @fontface
  - @supports
  - @namespace
- rule规则的研究
  - 选择器 selector
  -  声明
    - Key(属性/变量)
    - Value(值/函数类型的值)



#### csss收集标准

```js
Array.prototype.slice.call(document.querySelector('#container').children).filter(e => e.getAttribute('data-tag').match(
			/css/)).map(e => ({
			name: e.children[1].innerText,
			url: e.children[1].children[0].href
		}));
```



#### 选择器语法

- 简单选择器
  - *
  - div svg|a
  - .cls
  - #id
  - [attr=value]
  - :hover
  - ::before
- 复合选择器
  - <简单选择器><简单选择器><简单选择器>
  - *或者div必须写在最前面
- 复杂选择器
  - <复合选择器><sp><复合选择器>
  - <复合选择器>">"<复合选择器>
  - <复合选择器>"~"<复合选择器>
  - <复合选择器>"+"<复合选择器>
  - <复合选择器>"||"<复合选择器>

#### 选择器优先级

- ​	简单选择器计数

  选取一个足够大的值，一般是256的整次幂

  ```js
  S = 0 * N3 + 2 * N2 + 1 * N1 + 1
  N =65536
  计算得到S的值
  ```

  

#### 伪类

- 链接/行为
  - :any-link
  - :link :v​isited
  - :hover
  - :active
  - :focus
  - :target
- 树结构
  - :empty元素是否有子元素
  - Nth-child()第几个子元素
  - Nth-last-child()倒数第几个子元素
  - :first-child :last-child :only-child 第一个元素 最后一个元素 唯一子元素
- 逻辑型
  - :not伪类 只能写复合选择器不能写复杂选择器
  - :where :has

#### 伪元素

- ::before
- ::after
- ::first-line
- ::first-letter

