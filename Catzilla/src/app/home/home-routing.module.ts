import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'random',
        loadChildren: () =>
          import('./random/random.module').then((m) => m.RandomPageModule),
      },
      { path: '', redirectTo: 'random', pathMatch: 'full' },
      {
        path: 'favourites',
        loadChildren: () =>
          import('./favourites/favourites.module').then(
            (m) => m.FavouritesPageModule
          ),
      },
      {
        path: 'searching',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
