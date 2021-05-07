import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
//import { Router } from '@angular/router';


//imports for components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//imports for service
import { BlogService } from "./blog.service";
import { BlogHttpService } from './blog-http.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

//imports for forms
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    //route module forroot method to declare the possible routes
    RouterModule.forRoot([
      {path: 'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/.blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent}
    
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
