import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PastPostsComponent } from './past-posts/past-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';
import { PreviewPostComponent } from './preview-post/preview-post.component';
import { LoadingComponent } from './loading/loading.component';
import { EventPageComponent } from './event-page/event-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ForumComponent } from './forum-page/forum-page.component';
import { ForumSubPageComponent } from './forum-sub-page/forum-sub-page.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForumCreatePostPageComponent } from './forum-create-post-page/forum-create-post-page.component';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ForumManagementPageComponent } from './forum-management-page/forum-management-page.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import {SingleEventPageComponent} from './single-event-page/single-event-page.component';
import { LoginService } from './service/login-service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';



Amplify.configure(awsmobile);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutPageComponent,
    FaqComponent,
    ContactPageComponent,
    PastPostsComponent,
    ViewPostComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    LoadingComponent,
    EventPageComponent,
    StartPageComponent,
    ForumComponent,
    ForumSubPageComponent,
    ForumPostComponent,
    ForumCreatePostPageComponent,
    ForumManagementPageComponent,
    RegistrationPageComponent,
    RegistrationConfirmComponent,
    ProfilePageComponent,
    SingleEventPageComponent
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
    MatProgressBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
