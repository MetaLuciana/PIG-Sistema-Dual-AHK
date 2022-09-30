import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasPage } from './materias.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasPage
  },  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriasPageRoutingModule {}
