import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildBlogComponent } from './parent-child-blog.component';

const routes: Routes = [
  {
    path: '',
    component: ParentChildBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentChildBlogRoutingModule {}
