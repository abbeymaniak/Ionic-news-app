import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "top-news",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../top-news/top-news.module").then(
                m => m.TopNewsPageModule
              )
          }
        ]
      },
      {
        path: "headlines",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../headlines/headlines.module").then(
                m => m.HeadlinesPageModule
              )
          }
        ]
      },
      {
        path: "sources",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../sources/sources.module").then(m => m.SourcesPageModule)
          }
        ]
      },
      {
        path: "favourites",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../favourites/favourites.module").then(
                m => m.FavouritesPageModule
              )
          }
        ]
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../settings/settings.module").then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/top-news",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/top-news",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
