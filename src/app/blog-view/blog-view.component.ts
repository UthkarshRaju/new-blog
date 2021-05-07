import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService} from '../blog-http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//import { error } from 'node:console';
import { Location } from '@angular/common'




@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})

export class BlogViewComponent implements OnInit,OnDestroy{

  //empty object
  public currentBlog;
  
    constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService, public blogHttpService:BlogHttpService, private toastr: ToastsManager, vcr:ViewContainerRef, private location:Location) 
    {
    console.log("Blog-View Constructor is called.");
    this.toastr.setRootViewContainerRef(vcr);

   }

  ngOnInit(): void {
    console.log("Blog-View ngOnInitCalled");
    //getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log(myBlogId);
    //calling a function to get the blog with th blogId out of overall
    this.blogHttpService.getSingleblogInformation(myBlogId).subscribe(
      data=> {
        console.log(data);
        this.currentBlog= data['data'];
      },
      error=>{
        console.log('some error occured');
        console.log(error.errorMessage);
      }
      
    )
    console.log(this.currentBlog);
  }

  public deleteThisBlog(): any
  {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>
      {
        console.log(data);
        this.toastr.success('Blog successfully deleted');
        setTimeout(() => 
        {
          this.router.navigate(['/home'])
        }, 3000);
      },
        error =>
        {
          console.log("Some Error occured");
          console.log(error.errorMessage);
          this.toastr.error('Some error occured', 'Error');    
        }
    
    )

    
  }
  public goBackToPreviousPage()
  {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("Blog-View destroyed.");
    /*getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of overall 
    this.currentBlog=this.blogService.getSingleblogInformation(myBlogId);
    console.log(this.currentBlog)*/
  }
}
