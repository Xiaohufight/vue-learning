# 从零开始的Vue学习

## 前言

​		这个笔记参考了官方文档和多篇文章，虽然是自己一个字一个字手打的，但还是算是转载，并非原创。分享

这个笔记的作用一是监督自己，二是希望帮助到和我一样在学习vue的小伙伴。

​		同时，我自己照着教程写的程序源码也会在下面分享出来。

​		静心学习，无限进步！

​		学习笔记含代码：https://github.com/Xiaohufight/vue-learning

​        其他vue的在做练手项目：

​		https://github.com/Xiaohufight/my-vue-template

​        https://github.com/Xiaohufight/my-admin-template

## 学习日志

**2021-4-28~29**

因为毕设的事情，距离上次学习Vue已经过去十几天了，这俩天主要学习了如何实现侧边导航栏和面包屑，导航栏参考了[Vue 实现左边导航栏且右边显示具体内容（element-ui）](https://www.cnblogs.com/mica/p/10790976.html)，面包屑和标签参考了  作者"@雨点的名字"的 [Vue + Element-ui实现后台管理系统(3)---面包屑 + Tag标签切换功能](https://www.cnblogs.com/qdhxhz/p/12590324.html)

顺便放一下他的github源码，创作不易，欢迎star  

https://github.com/yudiandemingzi/mall-manage-system

**2021-4-15**

今天主要在本地运行了这个项目[vue-admin-webapp](https://github.com/gcddblue/vue-admin-webapp)(就前面[正确姿势开发vue后台管理系统](https://juejin.cn/post/6844903928761417741)中最终实现的项目)，由于作者并没有提供接口，所以在本地运行项目时顺便学习了如何写接口（[easy-mock](https://mock.mengxuegu.com/))，掌握了一些写法，但我没有用过mock，如果是用过mock的话，上手easy-mock应该会很容易。不管怎么样，今天收获也是挺多的。

**2021-4-13**

还在看vue实现后台管理系统，学习了[正确姿势开发vue后台管理系统](https://juejin.cn/post/6844903928761417741)，自己基础还是很薄弱的，没有看完；重点看了阮神的[JSON Web Token入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)，收获很多。关于之前的手摸手系列之后也要看看，但感觉还需要一些前置基础，就此搁置一下（才不是又菜又懒呢）。

**2021-4-7**

学习了Vue的动态路由相关知识，看的这篇文章[Vue动态菜单(路由)的实现方案](https://segmentfault.com/a/1190000018727683)，文章讲得比较好理解，也成功实现了，但离真正项目中的还有差距，太简单了。

**2021-4-2**

今天看了很多教程想要实现登录权限问题，都说很简单，但是我就是看不懂，后来看到一篇[vue登录并保持登录状态](https://segmentfault.com/a/1190000016040068)，虽然和自己想要的功能还有差距，但是也算是学习到了，了解了一些vuex。这种方法实现很简单，理解起来也不是很难。代码在`vue-login`里，主要遇到了两个坑:

1、main.js里router.beforeEach()和router.afterEach()要放在Vue对象前面；

2、store/index.js 里import   vue 和 vuex 时  前后大小写要注意；

**2021-4-1**

看了教程的基础篇和登录权限篇，感觉不理解和不了解的东西还有很多（我怎么这么菜啊）;后来又看了阮一峰大神的[flex布局语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)，不难理解，关键在于熟练掌握使用。最后自己用vue+element写了一些页面，虽然简单，但是也算复习了一下。愚人节快乐啊！？

**2021-3-31**

看了 [花裤衩](https://gitee.com/panjiachen/)大佬的开源项目[vue-element-admin](https://gitee.com/panjiachen/vue-element-admin)，佩服的五体投地，推荐去跑跑那个程序，顺便点个star，收藏以后可能用得到。

另外，大佬还更新一些教程，写得很好，在项目的`README.md`里有相关的链接。

我这里贴一下,估计后面的很多天里都会看这个了。**注意：这教程是2017年的，如有问题请看源码**

[手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)

[手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)

[手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)

[手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)

[手摸手，带你用vue撸后台 系列五(v4.0新版本)](https://juejin.im/post/5c92ff94f265da6128275a85)

[手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)

[手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)

[手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)

[手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)

**2021-3-30**

1、学习了BEM思想（CSS命名规范）

2、实现了第一个vue+element-ui的项目`portal-vue`（虽然很简单）

**2021-3-29**

1、第一次用vue-cli初始化一个项目，并`npm run dev`运行成功

2、修改了一些配置，并看运行结果

3、认识一下项目的结构

**2021-3-29前**

1、大概看到了cn.vuejs.org教程《深入了解组件前》前

2、基本实现了cn.vuejs.org上的例子，在html里写的，共10个`lesson.html  `

参考链接:

1、我们为什么要用Vue,它解决了什么问题,如何使用它

https://blog.csdn.net/wxl1555/article/details/79964818

2、Vue教程

https://cn.vuejs.org/

3、Vue教程--使用官方脚手架构建实例（上篇）

https://gitee.com/janking/Infinite-f2e/issues/IDQHW

4、初学vue+elementui搭建前台项目教程

https://blog.csdn.net/qq_42957424/article/details/107339993

5、BEM思想(命名规范)

https://blog.csdn.net/eunice_sytin/article/details/83341381

6、手摸手，带你用vue撸后台 系列一（基础篇）

https://juejin.cn/post/6844903476661583880

## 一些概念

1、什么是DOM

Document Object Model
文档对象模型

2、什么是Vue

一套构建用户界面的渐进式框架

自底向上 增量开发设计

响应式的数据绑定

3、单页应用程序(SPA)

一个页面就是应用,也可以是子应用,交互处理非常多,且页面中的内容根据用户的操作动态变化

## 开始入门

### 1、介绍

引入方式
```html
<!-- 开发环境版本,包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
或者

```html
<!-- 生产环境版本,优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
Vue.js的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统

#### （1）声明式渲染  

app1、app2

#### （2）条件与循环  

app3、app4

提供一个强大的过渡效果系统

`v-for`  绑定数组的数据来渲染一个项目的列表

#### （3）处理用户输入 

app5、app6

`v-on` 指令添加一个event  listener

`v-model` 表单输入和应用状态之间的双向绑定

#### （4）组件化应用构建

在Vue里,一个组件的本质是一个拥有预定义选项的一个Vue实例

app7、app8

"prop"  类似于一个自定义attribute

`v-bind` 指令将待办项传到循环输出的每个组件中

虽然Vue内部没有使用自定义元素,不过在应用使用自定义元素、或以自定义元素形式发布时,依然有很好的互操作性。


### 2、Vue实例

#### （1）创建一个Vue的实例

Vue的设计受MVVM模型,在文档中经常使用vm这个变量名表示Vue实例

当创建一个Vue实例时,可以传入一个选项对象

一个Vue应用由一个`new Vue`创建的根Vue实例,以及可选的嵌套的、可复用的组件树组成

#### （2）数据与方法

当一个Vue实例被创建时,它将`data`对象中所有的property加入到`Vue`的响应式系统中,当这些property的值发生改变时,视图将会产生“响应”,即匹配更新为新的值

如果晚些时候需要一个property,但是一开始它为空或不存在,可以设置一些初始值

```javascript
data:{
   newTodoText:'',
   visitCount:0,
   hideCompleteTodos:false,
   todos:[],
   error:null
}
```

使用`Object.freeze()`,阻止修改现有的property,这也意味着响应系统无法再追踪变化

除了数据property,Vue的实例还暴露了一些有用的实例property与方法,前缀为`$`,以便与用户定义的property区分开来

#### （3）实例生命周期钩子

Vue被创建时经历的初始化过程,设置数据监听、编译模板、将实例挂载到DOM并在数据变化时更新DOM等,同时在这个过程中也会运行一些叫做生命周期钩子的函数,让我们可以在不同阶段添加自己代码的机会

比如有`created`、`mounted`、`updated`、`destroyed`

其中生命周期钩子的`this`上下文指向调用它的Vue实例

注意:不要在选项property或者回调上使用箭头函数,因为箭头函数没有`this`

#### （4）生命周期示图

![img.png](img.png)

### 3、模板语法

Vue.js的模板都是合法的HTML,所以能被遵循规范的浏览器和HTML解析器解析

#### （1）插值

文本

数据绑定最常见的形式就是使用"Mustache"语法(双大括号)的文本差值
```html
<span>Message:{{msg}}</span>
```
通过`v-once`指令,执行一次性地插值,当数据改变时,插值处的内容不会更新

```html
<span v-once>这个将不会改变:{{msg}}</span>
```

原始HTML

双大括号会将数据解释为普通文本,而非HTML代码,为了输出真正的HTML,需要使用`v-html`指令:
```html
<p>Using mustaches:{{rawHtml}}</p>
<p>Using v-html directive:<span v-html="rawHtml"></span></p>
```

属性

Mustache语法不能作用在HTML attribute上,遇到这种情况应该使用`v-bind`指令

```html
<div v-bind:id="dynamicId"></div>ht
```
```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```
使用Javascript表达式

Vue.js都提供了完全的JavaScript表达式支持

```html
{{number+1}}
{{ok?'Yes':'No'}}
{{message.split('').reverse().join('')}}
<div v-bind:id="'list-'+id"></div>
```

这些表达式会在所属Vue实例的数据作用域下作为JavaScript被解析,有个限制就是,每个绑定都只能包含单个表达式,所以下面的例子都不会生效

```html
<!--这是语句,不是表达式-->
{{var a=1}}
<!--流控制也不会生效,请使用三元表达式-->
{{ if(ok){return message} }}
```
模板表达式都应放在沙盒中,只能访问全局变量的一个白名单,如`Math`和`Date`不应该在模板表达式中试图访问用户定义的全局变量

#### （2）指令

指令是带有`v-`前缀的特殊attribute,指令attribute的值预期是单个JavaScript表达式(`v-for`是例外情况)

指令的职责是,当表达式的值改变时,将对其产生的连带影响,响应式地作用域DOM

`v-if`指令将根据表达式中值的真假来插入/移除元素

参数

一些指令能够接受一个"参数",在指令名称之后以冒号表示

`v-bind` 响应式地更新HTML attribute
`v-on`   用于监听DOMevent

动态参数

```html
<a v-bind:[attributeName]="url">...</a>
```
```html
<a v-on:[eventName]="doSomething">...</a>
```

对动态参数的值的约束

动态参数预期会求出一个字符串,异常情况下为`null`,这个特殊的null值可以被显性地用于移除绑定，任何其他非字符串类型的值都会触发一个警告


对动态参数表达式的约束

动态参数表达式有一些语法约束,因为某些字符,空格和引号,放在HTML attribute名里是无效的

```html
<a v-bind:['foo'+bar]="value">...</a>
```

在DOM中使用模板时，还需要避免使用大写字母来命名键名,浏览器会会强制把attribute名全部改为小写

修饰符

修饰符是以半角句号`.`指明的特殊后缀,用于指出一个指令应该以特殊方式绑定

例如`.prevent`修饰符告诉`v-on`指令对于触发的event调用`event.preventDefault()`

```html
<form v-on:sumbit.prevent="obSubmit">...</form>
```

#### （3）缩写

`v-`前缀作为一种视觉提示,用来识别模板中Vue特定的attribute。当在使用Vue.js现有标签添加动态行为时,`v-`前缀很有帮助

对于经常使用的指令比较繁琐,同时在构建Vue管理所有模板的SPA,`v-`前缀也没有那么重要了

v-bind 缩写

```html
<!--完整语法-->
<a v-bind:href="url">...</a>

<!--缩写-->
<a :href="url">...</a>

<!--动态参数的缩写(2.6.0+)-->
<a :[key]="url">...</a>
```

v-on 缩写

```html
<!--完整语法-->
<a v-on:click="doSomething">...</a>

<!--缩写-->
<a @click="doSomething">...</a>

<!--动态参数的缩写(2.6.0+)-->
<a @[event]="doSomethind">...</a>
```

### 4、计算属性和侦听器

#### （1）计算属性

模板内的表达式非常便利,但是放入太多的逻辑会让模板过重且难以维护

例如

```html
<div id="example">
    {{message.split('').reverse().join('')}}
</div>
```

计算属性缓存vs方法

我们可以在表达式中调用方法来达到同样的效果,与前面的区别是,这里是定义了一个方法,而不是一个属性

计算属性是基于它们的响应式依赖进行缓存的,只要message还没有改变,就不需要再次执行函数

计算属性vs侦听属性

Vue提供了一种更通用的方式来观察和响应Vue实例上的数据变动:侦听属性

计算属性的setter

计算属性默认只有getter,但是现在也可以提供一个setter

#### （2）侦听器

自定义的侦听器,在数据变化时执行异步或者开销较大的操作时,最有效



### 5、Class与Style绑定

#### （1）绑定HTML Class

对象语法

可以传给`v-bind:class`一个对象,以动态地切换class:

```html
<div v-bind:class="{active:isActive}"></div>
```

上面的语法表示`active`这个class存在与否取决于数据property`isActive`的truthiness

可以在对象中传入更多字段来动态切换多个class,此外`v-bind:class`指令也可以与普通的class attribute共存

绑定的数据对象不一定内联定义在模板中

可以绑定一个返回对象的计算属性


数组语法

把一个数组传给`v-bind:class`,以应用一个class列表

用在组件上

当在一个自定义组件上使用`class`property时,这些class将被添加到该组件的根元素上面,这个元素上已经存在的class不会被覆盖

#### （2）绑定内联样式

对象语法

`v-bind:style`的语法十分直观,看着像CSS,但实际上是一个JavaScript对象

命名可以用驼峰式或者短横线分隔

```html
<div v-bind:style="{color:activeColor,fontSize:fontSize+'px'}></div>"
```
```javascript
data:{
    activeColor:'red',
    fontSize:30
}
```
直接绑定到一个样式对象通常更好,这会让模板更清晰,同样可以结合返回对象的计算属性


数组语法

`v-bind:style`的数组语法可以把多个样式对象应用到同一个元素上

```html
<div v-bind:style="[baseStyles,overridingStyles]"></div>
```

自动添加前缀

当`v-bind:style`使用需要添加的浏览器引擎前缀的CSS property时,如`transform`,Vue.js会自动侦测并添加相应的前缀

多重值

从2.3.0起,可以为`style`绑定中的property提供一个包含多个值的数组,常用于提供多个带前缀的值

```html
<div :style="{display:['-webkit-box','-ms-flexbox','flex']}"></div>
```
这样写只会渲染数组中最后一个被浏览器支持的值,在本例中,如果浏览器支持不带浏览器前缀的flexbox,那么就只会渲染`display:flex`



### 6、条件渲染

#### （1）v-if

`v-if`指令用于条件性地渲染一块内容，这块内容只会在指令的表达式返回truthy值的时候被渲染，也可以通过`v-else`添加一个“else块”

在`<template>`元素上使用`v-if`条件渲染分组

因为`v-if`是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素，此时可以把一个`<template>`元素当做不可见的包裹元素，并在上面使用`v-if`。最终的渲染结果将不包含`<template>`元素。

`v-else`和`v-else-if`相当于 "else块"和"else-if块"。

用`key`管理可复用的元素。

#### （2）v-show

只是简单地切换元素的CSS property `display`，不支持`<template>`元素，也不支持`v-else`。

#### （3）v-if vs v-show

`v-if`是"真正"的条件渲染，因为它会确保在切换过程中条件块内的event  listener和子组件适当地被销毁和重建。

`v-if`也是惰性的，如果在初始渲染时条件为假，则什么也不做，一直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show`就简单得多，不管初始条件是什么，元素总是被渲染，并且只是简单地基于CSS进行切换。

一般来说，`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用`v-show`较好；如果在运行时条件很少改变，则使用`v-if`较好。

#### （4）v-if与v-for一起使用

不推荐同时使用`v-if`和`v-for`，正常情况下，`v-for`比`v-if`有更高的优先级。

### 7、列表渲染

#### （1）用v-for把一个数组对应为一组元素

`v-for`指令基于一个数组来渲染一个列表，指令需要使用`item in items`形式的特殊语法，其中`items`是源数据数组，而`item`是被迭代的数组元素的别名。

`v-for`块中，我们可以访问所有父作用域的property。`v-for`还支持一个可选的第二个参数，即当前项的索引。

#### （2）在v-for里使用对象

可以用`v-for`来遍历一个对象的property

可以提供第二个的参数为property名称（也就是键名）

可以用第三个参数作为索引

在遍历对象时，会按`Object.keys()`的结果遍历，但是不能保证它的结果在不同的JavaScript引擎下都一致

#### （3）维护状态

当Vue正在更新使用`v-for`渲染元素列表时，它默认使用"就地更新"的策略。如果数据项的顺序被改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或者临时DOM状态（例如：表单输入值）的列表渲染输出。

#### （4）数组更新检测

变更方法

Vue将被侦听的数组的变更方法进行了包裹，所以它们也会触发视图更新

`push()`

`pop()`

`shift()`

`unshift()`

`splice()`

`sort()`

`reverse()`

替换数组

`filter()`、`concat()`、`slice()`不会变更原始数组，而总是返回一个新数组

#### （5）显示过滤/排序后的结果

可以创建一个计算属性来返回过滤或者排序后的数组

#### （6）在v-for里使用值范围

`v-for`也接受整数，在这种情况下，会把模板重复对应的次数

#### （7）在`<template>`上使用v-for

利用带有`<v-for>`的`<template>`来循环渲染一段包含多个元素的内容

#### （8）v-for与v-if一同使用

`v-for`优先级更高，如果想有条件地跳过循环的执行，可以将`v-if`置于外层元素或者(`<template>`)上

#### （9）在组件上使用v-for

`<my-component v-for="item in items" :key="item.id"></my-component>`

在2.2.0+  组件使用`v-for`时，`key`是必须的

任何数据不会自动传递到组件里，因为组件有自己独立的作用域，为了把迭代数据传递到组件里，使用prop:

```
<my-componet
	v-for="(item,index) in items"
	v-bind:item="item"
	v-bind:index="index"
	v-bind:key="item.id"
></my-component>	
```

不自动将`item`注入到组件里的原因是，这会使组件与`v-for`的运作紧密耦合。



### 8、event处理

#### （1）监听event

可以用`v-on`指令监听DOMevent，并在触发时运行一些JavaScipt代码

#### （2）event处理方法

许多event处理逻辑会更为复杂，所以`v-on`可以接受一个需要调用的方法名称

#### （3）内联处理器中的方法

在内联JavaScript语句中调用方法

有时需要在内联语句处理器中访问原始DOMevent，可以用特殊变量`$event`

```html
<button v-on:click="warn('Form cannot be submitted yet.',$event)">
</button>}
```

```html
//...
methonds:{
	warn: function (message,event){
	 if(event){
		event.preventDefault()
	}
		alert(message)
	}
}
```

（4）event修饰符

在event处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。尽管可以在方法中轻松实现这点，但是更好的方式是：方法只有纯粹的数据逻辑，而不是去处理DOMevent细节。

Vue.js 为`v-on`提供了event修饰符

`.stop`

`.prevent`

`.capture`

`.self`

`.once`

`.passive`

```html
<!--阻止单击event继续传播-->
<a v-on:click.stop="doThis"></a>

<!--提交event不再重载页面-->
<form v-on:submit.prevent="onSubmit"></form>

<!--修饰符可以串联-->
<a v-on:click.sop.prevent="doThat"></a>

<!--只有修饰符-->
<form v-on:submit.prevent></form>

<!--添加event  listener时使用event捕获模式-->
<!--即内部元素触发的event先在此处理，然后才交由内部元素进行处理-->
<div v-on:click.capture="doThis">...</div>

<!--只当在event.target是当前元素自身时触发处理函数-->
<!--即event不是从内部元素触发的-->
<div v-on:click.self="doThat">...</div>
```



使用修饰符时，顺序很重要；相应的代码会以相同的顺序产生。

`v-on:click.prevent.self`会阻止所有的点击

`v-on:click.self.prevent`只会阻止对元素自身的点击

2.1.4新增

```html
<!--点击event将只会触发一次-->
<a v-on:click.once = "doThis"></a>
```

2.3.0新增

Vue还对应`addEventListener`中的`passive`选项提供了`.passive`修饰符

```html
<!--滚动event的默认行为(即滚动行为)将会立即触发-->
<!--而不会等待`onScroll`完成-->
<!--这其中包含`event.preventDefault()`的情况-->
<div v-on:scroll.passive="onScroll">...</div>
```

这个`.passive`修饰符尤其能够提升移动端的性能



不要把`.passive`和`.prevent`一起使用，因为`prevent`将会被忽略，同时浏览器可能会向你展示一个警告，`.passive`会告诉浏览器不想阻止时间的默认行为

#### （5）按键修饰符

在监听键盘event时，经常需要检查详细的按键。Vue允许为`v-on`在监听键盘event时添加按键修饰符

```html
<!--只有在key是Enter时调用vm.submit()-->
<input v-on:keyup.enter="submit">
```

可以直接将`KeyboardEvent.key`暴露的任意有效按键名转换为kebab-case来作为修饰符

```html
<input v-on:keyup.page-down="onPageDown">
```

处理函数只会在`$event.key`等于`PageDown`时被调用

#### （6）系统修饰键

可以使用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘event的  listener

`.ctrl`

`.alt`

`.shift`

`.meta`

```html
<!--Alt + C-->
<input v-on:keyup.alt.67="clear">

<!--Ctrl + Click-->
<div v-on:click.ctrl="doSomething">Do something</div>
```

`.exact`修饰符

2.5.0新增

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的event

```html
<!--即使Alt或Shift被一同按下时也会触发-->
<button v-on:click.ctrl = "onClick">A</button>

<!--有且只有Ctrl被按下的时候才触发-->
<button v-on:click.crtl.exact="onCtrlClick">A</button>

<!--没有任何系统修饰符被按下的时候才触发-->
<button v-on:click.exact="onClick">A</button>
```

鼠标按钮修饰符

2.2.0新增

`.left`

`.right`

`.middle`

这些修饰符会限制处理函数，仅响应特定的鼠标按钮

#### （7）为什么在HTML中监听event

违背了关注点分离，但是因为所有的Vue.jsevent处理方法和表达式都严格绑定在当前视图的ViewModel上，不会导致任何维护上的困难。实际上，使用v-on有几个好处。

1、扫一眼HTML模板便能轻松定位在JavaScript代码里对应的方法

2、无须在JavaScript里手动绑定event，ViewModel代码时非常纯粹的逻辑，和DOM完全解耦，更易于测试

3、当一个ViewModel被销毁时，所有的event处理器都会自动被删除，无须担心清理

### 9、表单输入绑定

#### （1）基础用法

可以使用`v-model`指令在表单`<input>`、`<textarea>`及`<select>`元素上创建双向数据绑定。根据控件类型自动选取正确的方法来更新元素。负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

`v-model`会忽略所有表单元素的`value`、`checked`、`selected` attribute的初始值而总是将Vue实例的数据作为数据来源，应该通过JavaScript在组件的`data`选项中声明初始值

`v-model`在内部为不同的输入元素使用不同的property并抛出不同的事件

text和textarea 元素使用`value`property和`input`事件

checkbox和radio使用`checked`property和`change`事件

select字段将`value`作为prop并将`change`作为事件

#### （2）值绑定

对于单选按钮，复选框及选择框的选项，`v-model`绑定的值通常是静态字符串（对于复选框也可以是布尔值）

```html
<!--当选中时，`picked` 为字符串"a"-->
<input type="radio" v-model="picked" value="a">

<!--`toggle`为true或者false-->
<input type="checkedbox" v-model="toggle">

<!--当选中第一个选项时，`selected`为字符串"abc"-->
<select v-model="selected">
    <option value="abc">ABC</option>
</select>
```

复选框

```html
<input 
	type="checkbox"
    v-model="toggle"   
    true-value="yes"   
    false-value="no"   
>
```

单选按钮

```
<input type="radio" v-model="pick" v-bind:value="a">
```

选择框的选项

```html
<select v-model="selected">
    <!--内联对象字面量-->
    <option v-bind:value="{number:123}">123</option>
</select>
```

#### （3）修饰符

`.lazy`

在默认情况下，`v-model`在每次`input`事件触发后将输入框的值雨数据进行同步。

可以添加`lazy`修饰符，从而转为在`change`事件之后进行同步：

```html
<!--在"change"时而非"input"时更新-->
<input v-model.lazy="msg">
```

`.number`

如果想自动将用户的输入值转化为数值类型，可以给`v-model`添加`number`修饰符：

```html
<input v-model.number="age" type="number">
```

`.trim`

```html
<input v-model.trim="msg">
```

#### （4）在组件上使用`v-model`

Vue 的组件系统允许创建具有完全自定义行为且可复用的输入组件,这些输入组件甚至可以和 `v-model` 一起使用



### 10、组件基础

#### （1）基本示例

因为组件是可复用的Vue实例，所以它们与`new Vue`接受相同的选项，比如`data`、`computed`、`watch`、`methods`以及生命周期钩子等（除`el`）

#### （2）组件的复用

`data`必须是一个函数，不能直接提供一个对象，取而代之的是，一个组件的`data`选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

#### （3）组件的组织

两种组件注册类型：全局注册和局部注册

`Vue.component`全局注册

```
Vue.component('my-component-name',{
	//...options...
})
```

#### （4）通过Prop向子组件传递数据

Prop是可以在组件上注册的一些自定义attribute，当一个值传递给一个prop attribute的时候，它就变成了那个组件实例的一个property。

#### （5）单个根元素

每个组件必须只有一个根元素

#### （6）监听子组件event

有的时候用一个事件抛出一个特定的值非常有用，用`$emit`的第二个参数来提供这个值。

在组件上使用`v-model`

自定义事件也可以用于创建支持`v-model`的自定义输入组件

```html
<input v-model="searchText">
```

等价于：

```html
<input
	v-bind:value="searchText"
    v-on:input="searchText=$event.target.value"
>
```

当用在组件上时，`v-model`则会这样

```html
<custom-input
   v-bind:value="searchText"
   v-on:input="searchText=$event"           
 ></custom-input>
```

为了让其正常工作，这个组件内的`<input>`必须：

将其`value` attribute绑定到一个名叫`value`的prop上

在其`input`事件被触发时，将新的值通过自定的`input`事件抛出

写成代码之后是这样的：

```
Vue.component('custom-input',{
	props:['value'],
	template:`
		<input
           v-bind:value="value"
           v-on:input="$emit('input',$event.target.value)"    
        >
	`
})
```

现在`v-model`就应该可以在这个组件上完美地工作下来了

#### （7）通过插槽分发内容

Vue自定义的`<slot>`元素让这变得非常简单

```
Vue.component('alert-box',{
	template:`
		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot></slot>
		</div>
	`	
})
```

#### （8）动态组件

在不同组件之间进行动态切换非常有用

可以通过Vue的`<component>`元素加一个特殊的`is` attribute来实现

```
<!--组件会在`currentTabComponent`改变时改变-->
<component v-bind:is="currentTabComponent"></component>
```

`<currentTabComponent>`可以包括

已注册组件的名字或者一个组件的选项对象

#### （9）解析DOM模板时的注意事项

有些HTML元素(比如`<ul>` `<ol>` `<table>` `select`)对于哪些元素可以出现在其内部有严格限制的，而有些元素(比如`<li>` `<tr>` `<option>`)只能出现在其他某些特定的元素内部

```
<table>
	<blog-post-row></blog-post-row>
</table>
```

这个自定义组件会被作为无效内容提升到外部，并导致最终的渲染结果出错，特殊的`is` attribute给了一个变通的方法

```
<table>
	<tr is="blog-post-row"></tr>
</table>
```

需要注意的是  如果从以下的来源使用模板的话，这条限制是不存在的：

字符串（例如：`template:'...'`）

单文件组件（`.vue`）

`<script type="text/x-template">`



## 实战练习

### 1、前置安装

（1）安装node

（2）安装vue-cli

```
npm install --global vue-cli
```

（3）安装element-ui

```
npm install --global element-ui
```

### 2、初始化并运行

```
vue init webpack 项目名称
```

跟着提示和需求配置好项目，其中eslint可以选择standard或者none

```
cd 项目名称
npm run dev
```

### 3、认识项目结构

```
| - build （运行文件夹，dev/prod运行时需要用到的相关文件，含webpack配置）
| - config （配置文件夹，比如说dev/prod两种对应的不同接口等设置）
| - dist （打包生成的部署文件夹，一开始没有的，跑命令npm run build之后可见）
| - node_modules
| - src （项目代码）
  | - assets （资源文件夹，为了区分static，这里存自己的资源）
  | - components （页面文件夹）
  | - router （路由文件夹）
  | - App.vue （vue主文件）
  | - main.js （入口文件，webpack配置的entrance）
| - static （资源文件夹，为了区分assets，这里存第三方的资源）
| - .babelrc （转码规则配置）
| - .editorconfig （代码规范配置）
| - .eslintignore （eslint检查忽略配置）
| - .eslintrc.js （eslint配置文件）
| - .gitignore （git忽略配置）
| - .postcssrc.js （postcss的load的config，文件里有对应的github地址）
| - index.html （html主页面）
| - package.json
| - README.md
```

### 4、一个具体的例子

在能运行初始项目的基础上进行修改，制作一个登陆界面

（1）修改`main.js`文件

添加代码，导入element-ui

```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

（2）在`src`下创建文件夹`views`(用于存放页面文件)，并在`views`下创建`login`文件夹，在`login`里创建文件`Login.vue`

```
<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  /* name: 'Login', */
  data () {
    return {
      user: {
        username: '测试',
        password: '123456789'
      }
    }
  },
  methods: {
    doLogin () {
      alert(JSON.stringify(this.user))
    }
  }
}
</script>

<style scoped>

</style>
```

（3）修改`index.js`文件

添加代码：

```
import Login from '@/views/login/Login'
```

部分代码修改为：

```
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
          path: '/',
          name: 'Login', 
          component: Login 
    }
  ]
})
```

如果界面打开页面空白，请检查路由是否写错了或者有冲突。

## 补充：

### 1、BEM思想(命名规范)

BEM:  块(block)、元素(element)、修饰符(modifier)

```
.block{}                 //块
.block__element{}        //元素
.block--modifier{}       //修饰符
```

其中块也可以使用单个连字符来界定

```
.site-search{}			//块
.site-search__field{}   //元素
.site-search--full{}    //修饰符
```

**块：**一个独立的，可以复用而不依赖其他组件的部分

**元素：**属于块的某个部分

**修饰符：**用于修饰块或者元素，体现出外形行为状态等特征

要求：保证各个部分只有一级B__E--M,同时修饰符需要和对应的块或者元素一起使用，避免单独使用





