import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

export const layoutComponents = [ NavbarComponent ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ layoutComponents ],
  exports: [ layoutComponents ]
})
export class LayoutModule { }
