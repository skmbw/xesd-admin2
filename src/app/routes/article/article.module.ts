import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {ArticleRoutingModule} from './article-routing.module';
import {ArticleListComponent} from './list/list.component';
import {ArticleViewComponent} from './view/view.component';
import {ArticleEditComponent} from './edit/edit.component';

const COMPONENTS = [
  ArticleListComponent,
  ArticleViewComponent,
  ArticleEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ArticleModule { }
