import {Component, OnInit, ViewChild} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {STColumn, STComponent} from '@delon/abc';
import {SFSchema} from '@delon/form';
import {VideoListEditComponent} from './edit/edit.component';
import {VideoListViewComponent} from './view/view.component';

@Component({
  selector: 'video-list',
  templateUrl: './list.component.html',
})
export class VideoListComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          // 如果在click中打开modal，那么type是不需要指定的
          // type: 'static', // static（点击蒙层不关闭）和modal（点击蒙层关闭modal）的区别
          // component: VideoListViewComponent,
          // modal: {params: {'id': 322}, paramsName: 'record'},
          click: (item: any) => {
            this.modal
              // static的modal点击蒙层，不会关闭modal
              // 这个参数名有两个一个是i，一个是record
              .createStatic(VideoListViewComponent, { record: item })
              .subscribe(() => this.st.reload());
          }
        },
        { // 这种方式打开modal为什么不能正确的传递参数呢？因为bug，没有取modal这个参数，导致参数名是undefined。
          // 默认传递的参数是改行记录。
          text: '编辑',
          type: 'static',
          component: VideoListEditComponent // 默认将当前行记录record传进去作为参数
          // 这个参数没有使用，是一个bug，在@delon/abc/fesm5/table.js._btnClick（1976行）中，根本没有判断paramsName是否为空
          // 我对源码做了改动，可以使用了，暂时还是不建议使用这个方式，使用click的方式也是OK的，自己创建modal。
          // modal: {
          //   params: (record: STData) => { // 这个参数是一个函数，会将数据进行处理然后返回，这里直接返回即可。
          //     if (record === null || record === undefined) {
          //       record = {};
          //     }
          //     record.id = 234;
          //     record.name = 'yinlei';
          //     return record;
          //   }, 'paramsName': 'record'}
          // click: (item: any) => item
        }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(VideoListEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
