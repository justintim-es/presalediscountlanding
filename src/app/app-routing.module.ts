import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component';
import { RegisterComponent } from './routs/register/register.component';
import { PleaseComponent } from './routs/please/please.component';
import { UnexpectedComponent } from './routs/unexpected/unexpected.component';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { LoginDashboardComponent } from './routs/login-dashboard/login-dashboard.component';
import { MainComponent } from './routs/main/main.component';
import { MainCreateCardComponent } from './routs/main/main-create-card/main-create-card.component';
import { BuyComponent } from './routs/buy/buy.component';
import { MainEthComponent } from './routs/main/main-eth/main-eth.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'unexpected', component: UnexpectedComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'please', component: PleaseComponent
  },
  {
    path: 'confirm/:token', component: ConfirmComponent
  },
  {
    path: 'login-dashboard', component: LoginDashboardComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'main/main-create-card', component: MainCreateCardComponent
  },
  {
    path: 'main/main-eth', component: MainEthComponent
  },
  {
    path: 'buy/:id', component: BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
