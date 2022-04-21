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
import { BenefitsComponent } from './benefits/benefits.component';
import { IkhlaqComponent } from './ikhlaq/ikhlaq.component';
import { ImaliComponent } from './imali/imali.component';
import { TarjmaOTwarekhComponent } from './tarjma-o-twarekh/tarjma-o-twarekh.component';
import { TafseerEQuranComponent } from './tafseer-e-quran/tafseer-e-quran.component';
import { ZahdORqaiqComponent } from './zahd-o-rqaiq/zahd-o-rqaiq.component';
import { SaneenOMotaatComponent } from './saneen-o-motaat/saneen-o-motaat.component';
import { SeerahOShumailComponent } from './seerah-o-shumail/seerah-o-shumail.component';
import { MahaahOMustakharjatComponent } from './mahaah-o-mustakharjat/mahaah-o-mustakharjat.component';
import { AqeedahComponent } from './aqeedah/aqeedah.component';
import { AloomAlHadeesComponent } from './aloom-al-hadees/aloom-al-hadees.component';
import { AloomQuranComponent } from './aloom-quran/aloom-quran.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NarratorDetailComponent } from './narrator-detail/narrator-detail.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DisplayContentComponent } from './display-content/display-content.component';


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
    BenefitsComponent,
    IkhlaqComponent,
    ImaliComponent,
    TarjmaOTwarekhComponent,
    TafseerEQuranComponent,
    ZahdORqaiqComponent,
    SaneenOMotaatComponent,
    SeerahOShumailComponent,
    MahaahOMustakharjatComponent,
    AqeedahComponent,
    AloomAlHadeesComponent,
    AloomQuranComponent,
    CommentsComponent,
    AuthorDetailComponent,
    NarratorDetailComponent,
    BookDetailsComponent,
    DisplayContentComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
