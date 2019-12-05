import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then(m => m.TabsPageModule)
  }
  // { path: 'top-news', loadChildren: './top-news/top-news.module#TopNewsPageModule' },
  // { path: 'headlines', loadChildren: './headlines/headlines.module#HeadlinesPageModule' },
  // { path: 'sources', loadChildren: './sources/sources.module#SourcesPageModule' },
  // { path: 'favourites', loadChildren: './favourites/favourites.module#FavouritesPageModule' },
  // { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
