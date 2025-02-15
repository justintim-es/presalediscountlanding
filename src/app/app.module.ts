import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LandingComponent } from './routs/landing/landing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { landingReducer } from './redux/landing/reducer';
import { LandingService } from './redux/landing/landing.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './routs/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './redux/register/register.service';
import { registerReducer } from './redux/register/reducer';
import { PleaseComponent } from './routs/please/please.component';
import { unexpectedReducer } from './redux/unexpected/reducer';
import { UnexpectedComponent } from './routs/unexpected/unexpected.component';
import { UnexpectedService } from './redux/unexpected/unexpected.service';
import { confirmReducer } from './redux/confirm/reducer';
import { ConfirmService } from './redux/confirm/confirm.service';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { LoginDashboardComponent } from './routs/login-dashboard/login-dashboard.component';
import { loginDashboardReducer } from './redux/login-dashboard/reducer';
import { LoginDashboardService } from './redux/login-dashboard/login-dashboard.service';
import { tokenReducer } from './redux/token/reducer';
import { MainComponent } from './routs/main/main.component';
import { mainReducer } from './redux/main/reducer';
import { MainCreateCardComponent } from './routs/main/main-create-card/main-create-card.component';
import { mainCreateCardReducer } from './redux/main-create-card/reducer';
import { MainCreateCardService } from './redux/main-create-card/main-create-card.service';
import { MainService } from './redux/main/main.service';
import { BuyComponent } from './routs/buy/buy.component';
import { buyReducer } from './redux/buy/reducer';
import { BuyService } from './redux/buy/buy.service';
import { MainEthComponent } from './routs/main/main-eth/main-eth.component';
import { OnboardComponent } from './routs/onboard/onboard.component';
import { onboardReducer } from './redux/onboard/reducer';
import { OnboardService } from './redux/onboard/onboard.service';
import { BuyCardComponent } from './routs/buy/buy-card/buy-card.component';
import { buyCardReducer } from './redux/buy-card/reducer';
import { BuyCardService } from './redux/buy-card/buy-card.service';
import { CheckoutComponent } from './routs/buy/checkout/checkout.component';
import { checkoutReducer } from './redux/checkout/reducer';
import { CheckoutService } from './redux/checkout/checkout.service';
import { BalanceComponent } from './routs/balance/balance.component';
import { balanceReducer } from './redux/balance/reducer';
import { BalanceService } from './redux/balance/balance.service';
import { DeductComponent } from './routs/deduct/deduct.component';
import { deductReducer } from './redux/deduct/reducer';
import { DeductService } from './redux/deduct/deduct.service';
import { IsLatestService } from './redux/is-latest/is-latest.service';
import { isLatestReducer } from './redux/is-latest/reducer';
import { MainLoginQrCodeComponent } from './routs/main/main-login-qr-code/main-login-qr-code.component';
import { loginQRReducer } from './redux/login-qr/reducer';
import { LoginQrService } from './redux/login-qr/login-qr.service';
import { StripeFailureComponent } from './routs/stripe-failure/stripe-failure.component';
import { PreDeductComponent } from './routs/pre-deduct/pre-deduct.component';
import { SearchComponent } from './routs/search/search.component';
import { searchReducer } from './redux/search/reducer';
import { SearchService } from './redux/search/search.service';
import { MainCardComponent } from './routs/main/main-card/main-card.component';
import { cardInfoReducer } from './redux/card-info/reducer';
import { CardInfoService } from './redux/card-info/card-info.service';
import { FlyerComponent } from './routs/flyer/flyer.component';
import { ForgotComponent } from './routs/forgot/forgot.component';
import { forgotReducer } from './redux/forgot/reducer';
import { ForgotService } from './redux/forgot/forgot.service';
import { ResetComponent } from './routs/reset/reset.component';
import { resetReducer } from './redux/reset/reducer';
import { ResetService } from './redux/reset/reset.service';
import { TermsComponent } from './routs/terms/terms.component';
import { PrivacyComponent } from './routs/privacy/privacy.component';
import { ContactComponent } from './routs/contact/contact.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { DemoComponent } from './routs/demo/demo.component';
import { DemoBuyComponent } from './routs/demo/demo-buy/demo-buy.component';
import { DemoCompleteComponent } from './routs/demo/demo-buy/demo-complete/demo-complete.component';
import { DemoService } from './redux/demo/demo.service';
import { demoreducer } from './redux/demo/reducer';
import { DemoFailedComponent } from './routs/demo/demo-buy/demo-failed/demo-failed.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    PleaseComponent,
    UnexpectedComponent,
    ConfirmComponent,
    LoginDashboardComponent,
    MainComponent,
    MainCreateCardComponent,
    BuyComponent,
    MainEthComponent,
    OnboardComponent,
    BuyCardComponent,
    CheckoutComponent,
    BalanceComponent,
    DeductComponent,
    MainLoginQrCodeComponent,
    StripeFailureComponent,
    PreDeductComponent,
    SearchComponent,
    MainCardComponent,
    FlyerComponent,
    ForgotComponent,
    ResetComponent,
    TermsComponent,
    PrivacyComponent,
    ContactComponent,
    DemoComponent,
    DemoBuyComponent,
    DemoCompleteComponent,
    DemoFailedComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      unexpectedReducer: unexpectedReducer,
      landingReducer: landingReducer,
      registerReducer: registerReducer,
      confirmReducer: confirmReducer,
      onboardReducer: onboardReducer,
      loginDashboardReducer: loginDashboardReducer,
      tokenReducer: tokenReducer,
      mainReducer: mainReducer,
      mainCreateCardReducer: mainCreateCardReducer,
      buyReducer: buyReducer,
      buyCardReducer: buyCardReducer,
      checkoutReducer: checkoutReducer,
      balanceReducer: balanceReducer,
      isLatestReducer: isLatestReducer,
      deductReducer: deductReducer,
      loginQRReducer: loginQRReducer,
      searchReducer: searchReducer,
      cardInfoReducer: cardInfoReducer,
      forgotReducer: forgotReducer,
      resetReducer: resetReducer,
      demoreducer: demoreducer
    }, {}),
    EffectsModule.forRoot([
      LandingService,
      UnexpectedService,
      RegisterService,
      ConfirmService,
      OnboardService,
      LoginDashboardService,
      MainService,
      MainCreateCardService,
      BuyService,
      BuyCardService,
      CheckoutService,
      BalanceService,
      DeductService,
      IsLatestService,
      LoginQrService,
      SearchService,
      CardInfoService,
      ForgotService,
      ResetService,
      DemoService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
