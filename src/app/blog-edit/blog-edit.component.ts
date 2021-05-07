import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BlogService } from "../blog.service";
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  constructor(private blogHttpService : BlogHttpService, private _route:ActivatedRoute, private router: Router, private toastr:ToastsManager, vcr:ViewContainerRef)
   {
    
    this.toastr.setRootViewContainerRef(vcr);

   }

  ngOnInit(): void {
    let myBlogId= this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    this.blogHttpService.getSingleblogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog= data["data"];
        console.log("Current blog is ");
        console.log(this.currentBlog);
      },
      error =>{
        console.log("Some error occurred.");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data =>
      {
        console.log(data);
        this.toastr.success("Blog has been edited successfully", "Success!");
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId])
        }, 1000);
      },
      error =>
      {
        console.log("Some error occured.");
        console.log(error.errorMessage);
        this.toastr.error("some error occurred", 'Error');
        
      }
    )
  }
}
