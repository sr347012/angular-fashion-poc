import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
// const oktaAuth = new OktaAuth({
//   issuer: 'https://dev-28004049.okta.com/oauth2/default',
//   clientId: '0oa4vpgj84ZBzv2Xg5d7',
//   redirectUri: window.location.origin + '/login/callback'
// });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    OrderDetailComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    CommonModule
  ],
  providers: [
    {
      provide: OktaAuth,
      useValue: new OktaAuth({
        issuer: 'https://dev-28004049.okta.com/oauth2/default',
        clientId: '0oa4vpgj84ZBzv2Xg5d7',
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
