import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { BooksComponent } from './books/books.component';
import { NarratorsComponent } from './narrators/narrators.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NarratorDetailComponent } from './narrator-detail/narrator-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'all-authors', component: AllAuthorsComponent },
  { path: 'narrators', component: NarratorsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'all-books', component: AllBooksComponent },
  {path: 'comments', component: CommentsComponent},
  {path: 'author-detail', component: AuthorDetailComponent},
  {path: 'narrator-detail', component:NarratorDetailComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
