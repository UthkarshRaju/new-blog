import { Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import {ActivatedRoute} from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  route: any;

  constructor(private blogHttpService : BlogHttpService, private _route:ActivatedRoute, 
     router: Router, private toastr:ToastsManager, vcr:ViewContainerRef)
  { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle : string;
  public blogBodyHtml : String;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  ngOnInit(): void {
  }
  public CreateBlog() : any{
    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody: this.blogBodyHtml,
      category : this.blogCategory,
    }
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success("Blog Created Sucessfully");
    
        setTimeout(() => {
          this.route.navigate(['/blog',data.data.blogId]);
        }, 1000);
      },
      error =>{
        console.log("Some Error Occured.");
        console.log(error.errorMessage);
        this.toastr.error("Some Error Occured");
      }
    )
  }

}
