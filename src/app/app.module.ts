import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { BooksComponent } from './books/books.component';
import { NarratorsComponent } from './narrators/narrators.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllAuthorsComponent,
    BooksComponent,
    NarratorsComponent,
    AboutUsComponent,
    HeaderComponent,
    TopicsComponent,
    AllBooksComponent,
    FooterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
