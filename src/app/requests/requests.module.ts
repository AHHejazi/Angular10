import { RequestsRoutingModule } from './requests-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendmodelComponent } from './sendmodel.component';
import { LayoutComponent } from './layout.component';
import { ModelManagmentComponent } from './model-managment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequestsRoutingModule,
    FormsModule,
  ],
  declarations: [SendmodelComponent, LayoutComponent, ModelManagmentComponent],
})
export class RequestsModule {}
