import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { Http, HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { FaqComponent } from "./faq-page/faq-page.component";
import { ContactComponent } from "./contact/contact.component";
import { PastPostsComponent } from "./past-posts/past-posts.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { PreviewPostComponent } from "./preview-post/preview-post.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { LoadingComponent } from "./loading/loading.component";
import { EventPageComponent } from "./event-page/event-page.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { ForumComponent } from './forum-page/forum-page.component';
import { ForumSubPageComponent } from './forum-sub-page/forum-sub-page.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForumCreatePostComponent } from './forum-create-post/forum-create-post.component';
import { MatInputModule } from '@angular/material/input';
import { ForumManagementComponent } from './forum-management/forum-management.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    PastPostsComponent,
    ViewPostComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent,
    EventPageComponent,
    StartPageComponent,
    ForumComponent,
    ForumSubPageComponent,
    ForumPostComponent,
    ForumCreatePostComponent,
    ForumManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
