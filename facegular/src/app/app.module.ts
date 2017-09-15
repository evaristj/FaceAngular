import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { MyPostComponent } from './my-post/my-post.component';
import { HistorialComponent } from './historial/historial.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BarranavComponent } from './barranav/barranav.component';

const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'my-post-component', component: MyPostComponent },
  { path: 'portada-component', component: PortadaComponent },
  { path: 'historial-component', component: HistorialComponent },
  { path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    MyPostComponent,
    HistorialComponent,
    PrincipalComponent,
    BarranavComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
