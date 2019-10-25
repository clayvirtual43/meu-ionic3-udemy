import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      //{
        //path: 'tab2',
        //children: [
         // {
           // path: '',
           // loadChildren: () =>
              //import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          //}
       // ]
     // },
      /*{
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      */
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'app-resumo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../app-resumo/app-resumo.module').then(m => m.AppResumoPageModule)
          }
        ]
      },
      {
        path: 'Intro',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('../intro/intro.module').then(m => m.IntroPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
