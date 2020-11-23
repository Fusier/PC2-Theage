import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { AboutComponent } from "src/app/about/about.component";
import { FaqComponent } from "src/app/faq-page/faq-page.component";
import { ForumComponent } from "src/app/forum-page/forum-page.component";
import { ForumSubPageComponent } from "src/app/forum-sub-page/forum-sub-page.component";
import { ForumPostComponent } from "src/app/forum-post/forum-post.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { PastPostsComponent } from "src/app/past-posts/past-posts.component";
import { AuthorPostComponent } from "src/app/author-post/author-post.component";
import { ViewPostComponent } from "src/app/view-post/view-post.component";
import { EventPageComponent } from "./event-page/event-page.component";
import { StartPageComponent} from "src/app/start-page/start-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/start-page", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },
  { path: "forum", component: ForumComponent },
  { path: "forum-subs", component: ForumSubPageComponent },
  { path: "forum-post", component: ForumPostComponent },
  { path: "contact", component: ContactComponent },
  { path: "posts", component: PastPostsComponent },
  { path: "post/:id", component: ViewPostComponent },
  { path: "author-post", component: AuthorPostComponent },
  { path: "event-page", component: EventPageComponent },
  { path: "start-page", component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
