rxjs:
 常见的创建类操作符
 1.from: 数组,Promise,以及Iterable转化为Observable;
 2.fromEvent:把事件转化为Observable;
 3.of:接受一系列数据,并发射出去(可以是单个的值,对象也可以);
 of({id:1,value:200})
 常见的转换操作符:
 map:原始元素进行处理, map(x=>10*x);
 mapTo:(常量)
 pluck:(作用例如直接获取event.taget.value);

