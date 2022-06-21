import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
         NbLayoutModule,
         NbAlertModule,
         NbButtonModule,
         NbCheckboxModule,
         NbInputModule,
         NbSidebarModule,
         NbMenuModule,
         NbCardModule,
         NbIconModule,
         NbTabsetModule,
         NbActionsModule,
         NbSelectModule,
         NbListModule,
         NbToastrModule,
         NbSpinnerModule, } from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PosComponent } from './pages/pos/pos.component';

import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AuthInterceptor } from './shared/authconfig.interceptor';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PosComponent
  ],
  imports: [
    NbActionsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbAuthModule,
    FormsModule,
    NbCardModule,
    NbTabsetModule,
    NbListModule,
    NbSelectModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
    HttpClientModule,
    NgFlashMessagesModule,
    NbSidebarModule,
    NbMenuModule,
    ReactiveFormsModule,
    NbIconModule,
    NbToastrModule.forRoot(),
    NbSpinnerModule,
    AutocompleteLibModule
  ],
  providers: [
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
