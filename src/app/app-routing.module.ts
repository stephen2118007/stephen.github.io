import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './hero_mock';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dash_bord', component: DashboardComponent},
  {path: 'hero_detail', component: HeroDetailsComponent},
  {path: 'hero_search', component: HeroSearchComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'message', component: MessageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
