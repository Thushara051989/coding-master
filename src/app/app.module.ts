import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SamplesComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,CarouselModule,
    FormsModule,
    RouterModule,
    ShareButtonsModule,
  ShareIconsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
