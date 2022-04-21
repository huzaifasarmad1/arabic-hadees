import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { BooksComponent } from './books/books.component';
import { NarratorsComponent } from './narrators/narrators.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { IkhlaqComponent } from './ikhlaq/ikhlaq.component';
import { ImaliComponent } from './imali/imali.component';
import { MahaahOMustakharjatComponent } from './mahaah-o-mustakharjat/mahaah-o-mustakharjat.component';
import { SaneenOMotaatComponent } from './saneen-o-motaat/saneen-o-motaat.component';
import { SeerahOShumailComponent } from './seerah-o-shumail/seerah-o-shumail.component';
import { TafseerEQuranComponent } from './tafseer-e-quran/tafseer-e-quran.component';
import { TarjmaOTwarekhComponent } from './tarjma-o-twarekh/tarjma-o-twarekh.component';
import { ZahdORqaiqComponent } from './zahd-o-rqaiq/zahd-o-rqaiq.component';
import { AqeedahComponent } from './aqeedah/aqeedah.component';
import { AloomAlHadeesComponent } from './aloom-al-hadees/aloom-al-hadees.component';
import { AloomQuranComponent } from './aloom-quran/aloom-quran.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NarratorDetailComponent } from './narrator-detail/narrator-detail.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import { NarratorsHadithComponent } from './narrators-hadith/narrators-hadith.component';


  


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
  {path: 'narrator-detail', component:NarratorDetailComponent},
    {path:'benefits', component:BenefitsComponent},
    {path:'ikhlaq', component:IkhlaqComponent},
    {path:'imali',component:ImaliComponent},
    {path:'mahaah-o-mustakharjat',component:MahaahOMustakharjatComponent},
    {path:'saneen-o-motaat',component:SaneenOMotaatComponent},
    {path:'seerah-o-shumail',component:SeerahOShumailComponent},
    {path:'tafseer-e-quran',component:TafseerEQuranComponent},
    {path:'tarjma-o-twarekh',component:TarjmaOTwarekhComponent},
    {path:'zahd-o-rqaiq',component:ZahdORqaiqComponent},
    {path:'aqeedah',component:AqeedahComponent},
    {path:'aloom-al-hadees',component:AloomAlHadeesComponent},
    {path:'aloom-quran',component:AloomQuranComponent},
  {path: 'book-details', component: BookDetailsComponent},
  {path:'display-content', component:DisplayContentComponent},
  {path: 'narrators-hadith', component: NarratorsHadithComponent}
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
