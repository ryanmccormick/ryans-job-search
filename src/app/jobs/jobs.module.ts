import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JobsRoutingModule, routedComponents } from './jobs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JobsRoutingModule
  ],
  declarations: [ routedComponents ]
})
export class JobsModule { }
