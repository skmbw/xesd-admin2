import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from './list/list.component';
import {ArticleViewComponent} from './view/view.component';
import {ArticleEditComponent} from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: ArticleListComponent },
  // 这里也要调整，path添加 /:id 后缀
  { path: 'view/:id', component: ArticleViewComponent },
  // 这个编辑，要调整path添加 /:id 后缀
  { path: 'edit/:id', component: ArticleEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
