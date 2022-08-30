import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { WaitingInQueueComponent } from './components/waiting-in-queue/waiting-in-queue.component';
import { RecentlyCompletedComponent } from './components/recently-completed/recently-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TabsComponent,
    InProgressComponent,
    WaitingInQueueComponent,
    RecentlyCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
