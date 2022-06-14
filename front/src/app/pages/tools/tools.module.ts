import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ToolsModule { }
