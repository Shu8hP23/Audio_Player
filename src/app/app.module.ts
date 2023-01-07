import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicComponent } from './music/music.component';
import { CurrentComponent } from './current/current.component';
import { RoutingModule } from './routing/routing.module';
import { BottomComponent } from './bottom/bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    CurrentComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
