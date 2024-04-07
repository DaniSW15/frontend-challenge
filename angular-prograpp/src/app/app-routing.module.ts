import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarNombreComponent } from './components/buscar-nombre/buscar-nombre.component';
import { TokenUsuarioComponent } from './components/token-usuario/token-usuario.component';

const routes: Routes = [
  {
    path: 'buscarNombre',
    component: BuscarNombreComponent
  },
  {
    path: 'tokenUsuario',
    component: TokenUsuarioComponent
  },
  {
    path: '**',
    redirectTo: '/buscarNombre',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
