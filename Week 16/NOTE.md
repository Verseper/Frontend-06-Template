## 轮播组件 | 手势动画应用

#### mouse事件

- Mousestart 监听到element元素上
- mouseover和mouseend 作用到document上
- touchmove 和 touchend 不管触摸屏幕后，手指是在目标元素上还是滑出目标元素，target 属性的值都不变

#### Symbol

- ​	是一种基本数据类型 （[primitive data type](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)）

- `Symbol()`函数会返回**symbol**类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。

- ```js
  var sym1 = Symbol();
  var sym2 = Symbol('foo');
  var sym3 = Symbol('foo');
  ```

上面的代码创建了三个新的symbol类型。 注意，`Symbol("foo")` 不会强制将字符串 “foo” 转换成symbol类型。它每次都会创建一个新的 symbol类型：

```js
	Symbol("foo") === Symbol("foo"); // false
```

