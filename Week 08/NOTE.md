学习笔记

### 浏览器工作原理

http基础知识 layout render

url -> htm ->dom -> dom with css->dom with position ->bitmap 

HTTP parse css computing

### http请求：

​	ISO/OSI 七层网络模型:

- 应用层 HTTP
- 表示层
- 会话层
- 传输层  TCP
- 网络层   Internet
- 数据链路  4g5gwifi
- 物理层

### TCP和IP的一些基础知识

- 流
- 端口
- require('net')
- IP地址
- 包
- Libnet/libpcap

### HTTP

- Request

  文本协议   Request LIne

  ​						headers:

  ​						body  kv结构

- Response

第一步HTTP请求总结

- 设计一个http请求的类
- contenttype 是一个必要的字段要有默认值
- body 是kv格式
- 不同的content-type 影响body的格式 

第二步 send函数总结

- 在request的构造器中收集必要的信息
- 设计一个send函数把请求的真实信息发送到服务器
- send函数应该是异步的 所有需要返回Promise

第三步 发送请求

- 设计支持已有的connection或者自己新建connection
- 收到数据传给parser
- 根据parser的状态reslove Promise