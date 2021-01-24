学习笔记

#### 重学HTML

html的定义:XML与SGML

#### HTML标签语义

#### HTML语法

合法元素

- Element
- Text
- Comment
- DocumentType
- ProcessingInstruction
- CDATA

#### DOM API

​	 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentElement
- children
- firstElementChild
- lastElementChild
- nextElementChild
- nextElementSibling
- previousElementSibling

修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

高级操作

- compareDocumentPosition 是一个用于比较两个节点中关系的函数
- contains检查一个节点是否包含另一个节点的函数
- isEqualNode检查两个节点是否完全相同 
- isSameNode 检查两个节点是否是同一个节点，实际上javascript 中可以使用‘===’
- cloneNode 复制一个节点,如果传入参数 true,则会连同子元素做深拷贝

#### 事件API

Event:冒泡与捕获

​	先捕获再冒泡

##### 事件冒泡：

- 从触发事件的那个节点一直到document，是自下而上的去触发事件。

##### 事件捕获:

- 从document到触发事件的那个节点，即自上而下的去触发事件



#### RANGE API

- ​	var range = new Range()
- Range.setStart(element,9)
- Range.setEnd(element,4)
- var range = document.getSelection().getRangeAt(0)
- Range.setStartBrfore
- Range.setEndBefore
- Range.setStartAfter
- Range.setEndAfter
- Range.selectNode
- Range.selectNodeContents



- var fragment = range.extractContents() 将dom从dom树上完全摘下来
- range.insertNode(document.createTextNode('aaaa'))



#### CSSOM

​	document.styleSheets 





