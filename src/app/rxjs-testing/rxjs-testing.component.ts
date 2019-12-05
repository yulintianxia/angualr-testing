import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-testing',
  templateUrl: './rxjs-testing.component.html',
  styleUrls: ['./rxjs-testing.component.scss']
})
export class RxjsTestingComponent implements OnInit {
  /* 
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
  interval是interval 类型创建符（无限）
  time类似timeout的创建符（一个参数）,
  如果有2个参数
  time(100,100)类似于interval，第二个参数是隔1ooms执行，无限
  never 无限创建类型符
 
  empty() 直接结束，不输出任何元素,直接完成
  catchError 捕获异常的操作符
  take取流前几次，Observable
  有3种状态,next(必须), error错误,completed(完成)
  tap类似与与外部链接,可以执行一些打印,类似与subscribe作用,
  filter过滤操作符,过滤一定条件
  first取第一次操作符
  last 取最后一次
  skip跳过几个,
  count() 返回流里面的个数
  scan((x,y)=>{return x+y}); 类似递归,第二次x的值是x+y之后的参数的值
  reduce((x,y)=>{return x*y})类似scan，不过只计算最终值,只发射一次
  debunce(()=> interval(300)) 过滤,内部可以接操作符,过滤操作
  debunceTime(300),隔300ms才执行(输入框输入),
  distinct(), 整个序列没有重复的值(对内存开销大);
  distinctUntilChanged(),和前一个序列不能重复
  合并操作流:
  merge:将2个流按照原先时间依次输出
  concat: 前一个流执行完之后,后面流才执行,
  startWith:赋初始值,在流最前面,
  combinLatest: 最开始改变,2个流都有值,任何值的改变都会触发流
  zip: 必须成对,第一个流第一项对应第二项的第一项,依次对齐,最慢流决定速度
  withLatestForm: 返回一个数组,2个流都有值,然后第一个流为主,第一个流改变才输出
   高阶操作符:拍扁(数据流的数据流);
   flatMap/mergeMap:保留外层所有流的订阅
    obervable: Observable<any> = interval(100).pipe(
    take(3),
    map(val => interval(100)),
  );
   this.obervable.subscribe(
      (val) => {
         //需要在流里面subscrivbe
        val.subscribe(vals => console.log(vals));
      },
      error => console.log(error),
      () => console.log('comlplete')
    );
    // 拍扁
     obervable: Observable<any> = interval(100).pipe(
    take(3),
    flatMap(val => interval(100)),
  );
   this.obervable.subscribe(
      (val) => {
         console.log(val)
      },
      error => console.log(error),
      () => console.log('comlplete')
    );
    switchMap:有外层流进来,原来的的外层流抛弃掉
  */
  obervable: Observable<any> = interval(100).pipe(
    take(3),
    flatMap(val => interval(100)),
  );
  constructor() { }

  ngOnInit() {
    this.testing();
  }
  testing() {
    // this.obervable.subscribe(
    //   (val) => {
    //     // console.log(val);
    //     // console.log(val);
    //     // val.subscribe(vals => console.log(vals));
    //   },
    //   error => console.log(error),
    //   () => console.log('comlplete')
    // );
  }

}
