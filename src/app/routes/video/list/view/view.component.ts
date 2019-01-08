import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {com} from '@shared';
import {VideoService} from '../../../service/video.service';
import VideoReply = com.xueershangda.tianxun.video.model.VideoReply;
import IVideo = com.xueershangda.tianxun.video.model.IVideo;

@Component({
  selector: 'video-list-view',
  templateUrl: './view.component.html',
})
export class VideoListViewComponent implements OnInit {
  record: any = {};
  i: IVideo;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.videoService.get(this.record.id).subscribe(res => {
      const uint8Array = new Uint8Array(res, 0, res.byteLength);
      const reply = VideoReply.decode(uint8Array);
      if (reply.code === 1) {
        this.i = reply.video;
      } else {
        this.msgSrv.info(reply.message);
      }
    });
  }

  close() {
    this.modal.destroy();
  }
}
