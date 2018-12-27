import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {VideoRoutingModule} from './video-routing.module';
import {VideoListComponent} from './list/list.component';
import {VideoListEditComponent} from './list/edit/edit.component';
import {VideoListViewComponent} from './list/view/view.component';

const COMPONENTS = [

  VideoListComponent];
const COMPONENTS_NOROUNT = [

  VideoListEditComponent,
  VideoListViewComponent];

@NgModule({
  imports: [
    SharedModule,
    VideoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class VideoModule { }
