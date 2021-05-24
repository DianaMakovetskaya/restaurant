import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';
import { ContactsComponent } from './components/contacts/contacts.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AlertComponent } from './components/alert/alert.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    ContactsComponent,
    AlertComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    RouterModule.forRoot([{
      path: 'menu', component: MenuComponent
    },
      {
        path: '', component: HomeComponent
      },
      {
        path: 'aboutUs', component: AboutusComponent
      },
      {
        path: 'gallery', component: GalleryComponent
      },
      {
        path: 'contacts', component: ContactsComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
