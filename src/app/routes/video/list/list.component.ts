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
        {
          text: '编辑',
          type: 'modal',
          component: VideoListEditComponent,
          click: (item: any) => item
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
