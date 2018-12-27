import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'header-storage',
  template: `
  <i nz-icon type="tool"></i>
  {{ 'menu.clear.local.storage' | translate}}
  `,
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderStorageComponent {
  constructor(
    private confirmServ: NzModalService,
    private messageServ: NzMessageService,
  ) {}

  @HostListener('click')
  _click() {
    this.confirmServ.confirm({
      nzTitle: 'Make sure clear all local storage?',
      nzOnOk: () => {
        localStorage.clear();
        this.messageServ.success('Clear Finished!');
      },
    });
  }
}
