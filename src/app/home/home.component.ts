import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  public allBlogs;

  constructor(public blogHttpService : BlogHttpService) {
    console.log("home conpmonent constructor called.")
   }

  ngOnInit(): void {
    console.log("home component OnInit called.");
    //this.allBlogs = this.blogService.getAllBlogs();
    //console.log(this.allBlogs);

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log("Logging Data")
        console.log(data);
        this.allBlogs = data['data'];
      },
      error=>{
        console.log("Some error occured...");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allBlogs);

  }

  ngOnDestroy() : void {
    console.log("Home component destroyed")
  }

}
