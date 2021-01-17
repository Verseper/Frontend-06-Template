学习笔记



#### 盒模型

盒模型是排版和渲染的基本内容，有content，padding，border，margin构成

**box-sizing** 属性有 **content-box** 和 **border-box**两种属性  前者代表content的尺寸  后者代表content  + padding + border的尺寸

#### 正常流

正常流的排版就是印刷行业的排版

- 从左至右书写
- 同一行写的文字都是对齐的
- 一行写满了，就换到下一行

#### 正常流排版

- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布

#### 正常流行级排布

行模型

- line-top
- text-top
- base-line
- text-bottom
- line-bottom

#### BFC合并

- block

  - Block container:里面有BFC的
  - 能容纳正常流的盒，里面就有BFC
  - Block-level Box:外面有BFC的
  - Block Box = Block Container + Block-level Box:里外都有BFC

  Block Container

  - block
  - Inline-block
  - table-cell
  - Flex item
  - grid cell
  - table-cpation

- Block-level Box

  | Block level   | Inline level          |
  | ------------- | --------------------- |
  | display:block | display: inline-block |
  | Display:flex  | display: inline-flex  |
  | Display:table | display: inline-table |
  | display:grid  | display: inline-grid  |
  | ....          | ...                   |

- 设立BFC

  - floats
  - Absolutely positioned elements
  - Block containers(such as inline-blocks,table-cells,and table-captions)that are not block boxes
    - flex items
    - Grid cell
    - ....
  - And block boxes with 'overflow' other that 'visible'

- BFC合并

  - block box && overflow：visible
    - BFC合并与float
    - BFC合并与边距折叠

- Flex排版

  - 收集盒进行
    - 分行
      - 根据主轴尺寸，把元素进行分行
      - 设置了no-wrap 强行分配到下一行
  - 计算盒在主轴方向的排布
    - 计算主轴方向
      - 找出所有flex元素
      - 把主轴方向的剩余尺寸按比例分配给这些元素
      - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
  - 计算盒在交叉轴方向的排布
    - 计算交叉轴方向的计算
      - 根据每一行中最大元素尺寸计算行高
      - 根据行高flex-align和item-align，确定元素具体位置

- 动画Animation

  - @keyframes 定义

    - 使用keyframes和@rule定义关键帧
    - from 相当于0%;to 相当于100%

    ```css
    @keyframes mykf {
    	from {background: red;} 
    	to {background: yellow;} 
    }
    
    div {
    	animation:mykf 5s infinite; 
    }
    ```

  - animation :

    - animation-name 时间曲线
    - animation-duration 动画的时长
    - animation-timing-function 动画的时间曲线
    - animation-delay 动画开始前的延时
    - animation-iteration-count 动画的播放次数
    - animation-direction 动画的方向

    ```css
    @keyframes mykf {
    	0% { top: 0; transition:top ease}
    	50% { top: 30px;transition:top ease-in } 
    	75% { top: 10px;transition:top ease-out } 
    	100% { top: 0; transition:top linear}
    }
    ```

    

  - ### Transition

    - transition-property 要变换的属性
    - transition-duration 变换的时长
    - transition-timing-function 时间曲线
    - transition-delay 延迟

- 颜色

  - HSL和HLV
    - CSS语义化颜色
    - W3C主要支持HSL，但是可以转换两者
    - hsv.html的例子主要是说方便管理，改变颜色只需要设置色相值