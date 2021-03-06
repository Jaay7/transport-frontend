import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerComponent } from './dealer/dealer.component';
import { HomeComponent } from './dealer/home/home.component';
import { MyDriverComponent } from './dealer/my-driver/my-driver.component';
import { ProfileComponent } from './dealer/profile/profile.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent as HomeDriverComponent } from './driver/home/home.component';
import { ProfileComponent as ProfileDriverComponent } from './driver/profile/profile.component';
import { RequestsComponent } from './driver/requests/requests.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dealer", component: DealerComponent, children: [
    { path: "", component: HomeComponent },
    { path: "my-drivers", component: MyDriverComponent },
    { path: "profile", component: ProfileComponent },
  ] },
  { path: "driver", component: DriverComponent, children: [
    { path: "", component: HomeDriverComponent },
    { path: "my-requests", component: RequestsComponent },
    { path: "profile", component: ProfileDriverComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
