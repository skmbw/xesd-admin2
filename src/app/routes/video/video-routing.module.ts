import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoListComponent} from './list/list.component';

const routes: Routes = [
  { path: 'list', component: VideoListComponent },
  // { path: 'view/:id', component: VideoListViewComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
