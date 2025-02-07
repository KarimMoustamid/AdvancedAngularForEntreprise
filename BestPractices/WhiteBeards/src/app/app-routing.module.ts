import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./components/app.component";


const routes: Routes = [
  // { path: 'users/register', component: RegisterComponent, },
  // { path: 'users/sign-in', component: SignInComponent, },
  // { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
