import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';
import {SFSchema, SFUISchema} from '@delon/form';

@Component({
  selector: 'video-list-edit',
  templateUrl: './edit.component.html',
})
export class VideoListEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      no: { type: 'string', title: '编号' },
      owner: { type: 'string', title: '姓名', maxLength: 15 },
      callNo: { type: 'number', title: '调用次数' },
      href: { type: 'string', title: '链接', format: 'uri' },
      coverImage: { type: 'string', title: '预览图片',
        // enum: [ // enum中的静态数据会以a标签展示，后面上传的是span标签
        //   // {
        //   //   // uid: -1,
        //   //   // name: 'xxx.png',
        //   //   // status: 'done',
        //   //   // url:
        //   //   //   'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   //   // response: {
        //   //   //   resourceId: 1,
        //   //   // }
        //   // }
        // ]
      },
      description: { type: 'string', title: '描述', maxLength: 140 },
    },
    required: ['owner', 'callNo', 'href', 'coverImage', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string',
    },
    $coverImage: {
      widget: 'upload',
      action: 'http://localhost:8775/video/upload',
      name: 'coverImage',
      fileType: 'image/png,image/jpeg,image/gif,image/bmp',
      fileSize: 2048,
      resReName: 'resourceId',
      // change: (args: UploadChangeParam) => {
      //   // console.log(JSON.stringify(args));
      //   if (args.type === 'success') {
      //     // this.ui.$coverImage.asyncData(args.file);
      //     console.log('changed.');
      //     const reply = args.file;
      //     const response = reply.response;
      //
      //     reply.url = response.url;
      //     // this.schema.properties.coverImage.enum[0] = reply;
      //   }
      // },
      listType: 'picture'
      // asyncData: (data?: any) => {
      //   if (data !== undefined) {
      //     console.log(JSON.stringify(data));
      //     // const type: SFSchemaEnumType[] = [];
      //     return Observable.create((observer) => {
      //       data.url = 'aaaa';
      //       observer.next(data);
      //     });
      //   } else {
      //     return Observable.create(() => {
      //     });
      //   }
      // }
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    // alert(this.i);
    // alert(this.record);
    // alert(this.record.id); // this.undefined就是穿过来的参数，但是table.js._btnClick中的bug，没有设置或取到参数名导致
    if (this.record.id > 0)
      this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  save(value: any) {
    this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
