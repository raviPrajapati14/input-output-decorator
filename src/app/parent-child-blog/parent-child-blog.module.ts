import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';

import { ParentChildBlogRoutingModule } from './parent-child-blog-routing.module';
import { ParentChildBlogComponent } from './parent-child-blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [ParentChildBlogComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ParentChildBlogRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
  ],
})
export class ParentChildBlogModule {}
