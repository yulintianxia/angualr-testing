import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-testing',
  templateUrl: './rxjs-testing.component.html',
  styleUrls: ['./rxjs-testing.component.scss']
})
export class RxjsTestingComponent implements OnInit {
  /* 
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
  */
  obervable: Observable<any> = interval(100).pipe(
    take(3),
    tap(val => console.log('当前值' + val)
    )
  );
  constructor() { }

  ngOnInit() {
    this.testing();
  }
  testing() {
    this.obervable.subscribe(
      (val) => {
        console.log(val);
      },
      error => console.log(error),
      () => console.log('comlplete')
    );
  }

}
