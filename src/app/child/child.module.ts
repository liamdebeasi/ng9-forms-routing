import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChildComponent } from './child.component';


@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildComponent
      }
    ])
  ]
})
export class ChildModule { }
