### 重学JavaScript

#### 一般命令式变成语言

+ 原子级（Atom）：变量名/字符串直接量/数字直接量
+ 表达式（Expression）：由原子级结构通过运算符相连接加上辅助符号构成，可以级联
+ 语句（Statement）：表达式加上特定的标示符或关键字形成一定的结构
+ 结构（Structure）：Function/Class
+ 编程（Program）：Program/Module

#### Types

* Number 

  +  IEEE 754 Double Float  双精度浮点类型

    浮点:小数点是来回浮动的

  + Sign(1) 符号位  0 为正数 1 为负数

  + Exponent(11) 指数位 

  + Fraction(52) 精度位

    

    ​	精度·位 * 指数位

    ​	0.toString()

    ​	0 .toString()

    ​	0..toString()

* String

  + Character
  + Code Point    ASCII
  + Encoding

* Boolean

  + true
  + false

* Object

   * 任何一个对象都是唯一的，与它本身的状态无关；即使状态完全一致的两个对象也并不相等

   * 状态改变即是行为

     对象的组成：唯一性标识，状态，行为

  JavaScript内置特殊对象

  * Array：Array 的 length 属性根据最大的下标自动发生变化。
    注意，Array 的 length 属性也是可以手动修改的，会造成实际数组元素个数与 length 属性不匹配的情况。
  * String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
  * Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。

* Null

* Undefined

* Symbol

