学习笔记

1. 学习画地图编辑器

  因为有换行符，会出现元素缝隙问题

解决办法:

​	在父元素中设置line-height
​	设置font-size为0
​	采用flex布局或浮动

2. Array.fill()

    用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

3. localStorage 和 sessionStorage

    Local Storage

   **描述**：local storage是HTML5标准中加入的新技术。

   **特性**：local storage 是在客户端生成的，大小大概有5M，本地存储，不会发送到服务器上。会永久保存，除非用户自己清除掉。

   **应用场景**：一般实现购物车功能。

   

   Session Storage 

   **描述**：local session 和local storage 一样，都是在客户端生成的，大小也是5M,本地存储，不会发送到服务器上。 不同的是session srorage会在session结束之后销毁。

4. BFS 广度优先算法

    BFS选取状态用队列的形式，先进先出。

   