import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';
import { EventPageComponent } from './event-page/event-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ForumComponent } from './forum-page/forum-page.component';
import { ForumSubPageComponent } from './forum-sub-page/forum-sub-page.component';
import { ForumPostPageComponent } from './forum-post-page/forum-post-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForumCreatePostPageComponent } from './forum-create-post-page/forum-create-post-page.component';
import { MatInputModule } from '@angular/material/input';
import { ForumManagementPageComponent } from './forum-management-page/forum-management-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationConfirmPageComponent } from './registration-confirm-page/registration-confirm-page.component';
import { SingleEventPageComponent } from './single-event-page/single-event-page.component';
import { LoginService } from './service/login-service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';



Amplify.configure(awsmobile);
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    FaqComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    EventPageComponent,
    StartPageComponent,
    ForumComponent,
    ForumSubPageComponent,
    ForumPostPageComponent,
    ForumCreatePostPageComponent,
    ForumManagementPageComponent,
    RegistrationPageComponent,
    RegistrationConfirmPageComponent,
    ProfilePageComponent,
    SingleEventPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
