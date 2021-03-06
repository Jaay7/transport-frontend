import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DealerComponent } from './dealer/dealer.component';
import { DriverComponent } from './driver/driver.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HomeComponent } from './dealer/home/home.component';
import { ProfileComponent } from './dealer/profile/profile.component';
import { MyDriverComponent } from './dealer/my-driver/my-driver.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent as DriverHomeComponent } from './driver/home/home.component';
import { ProfileComponent as DriverProfileComponent } from './driver/profile/profile.component';
import { RequestsComponent } from './driver/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DealerComponent,
    DriverComponent,
    HomeComponent,
    ProfileComponent,
    MyDriverComponent,
    LoadingComponent,
    DriverHomeComponent,
    DriverProfileComponent,
    RequestsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
