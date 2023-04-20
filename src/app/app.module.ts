import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './components/sharedComponents/header/header.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { OtherArticleComponent } from './components/other-article/other-article.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { MoreArticleLinksComponent } from './components/more-article-links/more-article-links.component';
import { TripSummaryComponent } from './components/trip-summary/trip-summary.component';
import { OurOpinionComponent } from './components/our-opinion/our-opinion.component';
import { ImageArticleGalleryComponent } from './components/image-article-gallery/image-article-gallery.component';
import { HomepageTopLinkComponent } from './components/homepage-top-link/homepage-top-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    OtherArticleComponent,
    ReturnButtonComponent,
    LastArticleComponent,
    MoreArticleLinksComponent,
    TripSummaryComponent,
    OurOpinionComponent,
    ImageArticleGalleryComponent,
    HomepageTopLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
