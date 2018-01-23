import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {StarWarsService} from './star-wars.service';
import {LogService} from './log.service';
import { HeaderComponent } from './header/header.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [StarWarsService, LogService], // needed for di
  bootstrap: [AppComponent]
})
export class AppModule { }
