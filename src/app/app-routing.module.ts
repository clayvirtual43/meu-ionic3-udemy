import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'app-resumo', loadChildren: './app-resumo/app-resumo.module#AppResumoPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
