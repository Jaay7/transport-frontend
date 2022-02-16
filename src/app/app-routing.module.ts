import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerComponent } from './dealer/dealer.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dealer", component: DealerComponent },
  { path: "driver", component: DriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
