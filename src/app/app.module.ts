import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './components/sharedComponents/header/header.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { OtherArticleComponent } from './components/other-article/other-article.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { TripResumeComponent } from './components/trip-resume/trip-resume.component';
import { NoticesComponent } from './components/notices/notices.component';
import { MoreTripsComponent } from './components/more-trips/more-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    OtherArticleComponent,
    ReturnButtonComponent,
    TripResumeComponent,
    NoticesComponent,
    MoreTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
