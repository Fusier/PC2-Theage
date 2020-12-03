import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutPageComponent } from 'src/app/about-page/about-page.component';
import { FaqComponent } from 'src/app/faq-page/faq-page.component';
import { ForumComponent } from 'src/app/forum-page/forum-page.component';
import { ForumSubPageComponent } from 'src/app/forum-sub-page/forum-sub-page.component';
import { ForumPostComponent } from 'src/app/forum-post/forum-post.component';
import { ContactPageComponent } from 'src/app/contact-page/contact-page.component';
import { PastPostsComponent } from 'src/app/past-posts/past-posts.component';
import { ViewPostComponent } from 'src/app/view-post/view-post.component';
import { EventPageComponent } from './event-page/event-page.component';
import { StartPageComponent} from 'src/app/start-page/start-page.component';
import { ForumCreatePostPageComponent } from './forum-create-post-page/forum-create-post-page.component';
import { ForumManagementPageComponent } from './forum-management-page/forum-management-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SingleEventPageComponent } from './single-event-page/single-event-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum-subs/:id', component: ForumSubPageComponent},
  { path: 'forum-post/:id', component: ForumPostComponent },
  { path: 'forum-post-new', component: ForumCreatePostPageComponent },
  { path: 'forum-management', component: ForumManagementPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'posts', component: PastPostsComponent },
  { path: 'post/:id', component: ViewPostComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: 'start-page', component: StartPageComponent },
  { path: 'registration-page', component: RegistrationPageComponent},
  { path: 'registration-confirm', component: RegistrationConfirmComponent},
  { path: 'profile-page', component: ProfilePageComponent},
  { path: 'single-event-page/:id', component: SingleEventPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
