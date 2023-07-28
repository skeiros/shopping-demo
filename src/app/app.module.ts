import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HttpClientModule and HTTP_INTERCEPTORS
import { FakeBackendInterceptor } from './fake/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }, // Provide the AuthInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
