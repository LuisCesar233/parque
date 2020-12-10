import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
              }
            ]
        },
        {
          path: 'lista',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../pages/lista/lista.module').then(m => m.ListaPageModule)
              }
            ]
        },
        {
          path: 'scanner',
          children:
            [
              {
                path: '',
                loadChildren: '../pages/scanner/scanner.module#scannerPageModule'
              }
            ]
        },
        {
          path: 'map',
          children:
            [
              {
                path: '',
                loadChildren: '../page/ruta/ruta.module#rutaPageModule'
              }
            ]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
