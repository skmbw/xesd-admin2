import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {_HttpClient} from '@delon/theme';

@Component({
  selector: 'video-list-view',
  templateUrl: './view.component.html',
})
export class VideoListViewComponent implements OnInit {
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    // this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
    this.i = {'id': 22};
  }

  close() {
    this.modal.destroy();
  }
}
