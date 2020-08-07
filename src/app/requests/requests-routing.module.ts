import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendmodelComponent } from './sendmodel.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'sendrequest', component: SendmodelComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {}
