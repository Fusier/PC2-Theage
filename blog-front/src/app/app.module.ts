import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { Http, HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PastPostsComponent } from "./past-posts/past-posts.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { PreviewPostComponent } from "./preview-post/preview-post.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PastPostsComponent,
    ViewPostComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
