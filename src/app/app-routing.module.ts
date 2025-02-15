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
import { OnboardComponent } from './routs/onboard/onboard.component';
import { BuyCardComponent } from './routs/buy/buy-card/buy-card.component';
import { CheckoutComponent } from './routs/buy/checkout/checkout.component';
import { BalanceComponent } from './routs/balance/balance.component';
import { DeductComponent } from './routs/deduct/deduct.component';
import { MainLoginQrCodeComponent } from './routs/main/main-login-qr-code/main-login-qr-code.component';
import { StripeFailureComponent } from './routs/stripe-failure/stripe-failure.component';
import { SearchComponent } from './routs/search/search.component';
import { MainCardComponent } from './routs/main/main-card/main-card.component';
import { FlyerComponent } from './routs/flyer/flyer.component';
import { ForgotComponent } from './routs/forgot/forgot.component';
import { ResetComponent } from './routs/reset/reset.component';
import { TermsComponent } from './routs/terms/terms.component';
import { PrivacyComponent } from './routs/privacy/privacy.component';
import { AuthGuard } from './auth-guard.service';
import { ContactComponent } from './routs/contact/contact.component';
import { DemoComponent } from './routs/demo/demo.component';
import { DemoBuyComponent } from './routs/demo/demo-buy/demo-buy.component';
import { DemoCompleteComponent } from './routs/demo/demo-buy/demo-complete/demo-complete.component';
import { DemoFailedComponent } from './routs/demo/demo-buy/demo-failed/demo-failed.component';
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
    path: 'stripe-failure', component: StripeFailureComponent
  },
  {
    path: 'onboarded/:recognition', component: OnboardComponent
  },
  {
    path: 'login-dashboard', component: LoginDashboardComponent
  },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'main/main-create-card', component: MainCreateCardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'main/main-eth', component: MainEthComponent, canActivate: [AuthGuard]
  },
  {
    path: 'main/login-qr', component: MainLoginQrCodeComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'main/main-card/:id', component: MainCardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'buy/:id', component: BuyComponent
  },
  {
    path: 'buy-card/:shopId/:cardId', component: BuyCardComponent
  },
  {
    path: 'checkout/:recognition', component: CheckoutComponent
  },
  {
    path: 'balance/:recognition', component: BalanceComponent
  },
  {
    path: 'deduct/:recognition', component: DeductComponent
  },
  {
  	path: 'pricing', component: ContactComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'flyer/:shop', component: FlyerComponent
  },
  {
    path: 'forgot', component: ForgotComponent
  },
  {
    path: 'reset/:token', component: ResetComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'demo/:value/:discount', component: DemoComponent
  },
  {
    path: 'demo/demo-buy/:value/:discount', component: DemoBuyComponent
  },
  {
    path: 'demo-complete', component: DemoCompleteComponent
  },
  {
    path: 'demo-failed', component: DemoFailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
