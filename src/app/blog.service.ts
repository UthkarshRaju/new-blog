import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [


    {
      "blogId": "1",
      "lastModified": "2017-10-25T21:47:52.678Z",
      "createdOn": "2017-10-25T21:47:52.678Z",
      "tags": [],
      "author": "admin",
      "catogery": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1> This is blog body </h1> <p>small text</p>",
      "decription": "This is an example of the blog-1 application",
      "title": "This is blog1 example"
    },
    {
      "blogId": "2",
      "lastModified": "2019-10-25T21:47:52.678Z",
      "createdOn": "2017-10-25T21:47:52.678Z",
      "tags": [],
      "author": "admin",
      "catogery": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1> This is big text </h1> <p>small text</p>",
      "decription": "This is an example of the blog2 application",
      "title": "This is blog-2 example"
    },
    {
      "blogId": "3",
      "lastModified": "2020-10-25T21:47:52.678Z",
      "createdOn": "2017-10-25T21:47:52.678Z",
      "tags": [],
      "author": "admin",
      "catogery": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1> This is big text </h1> <p>small text</p>",
      "decription": "This is an example of the blog-3 application",
      "title": "This is blog-3 example"
    }

  ]
//variable declartions

  public currentBlog;

//declarations end here

  constructor() {

    console.log("Service constructor is called.")
  }

//method to return all blogs

 public getAllBlogs():any {
    return this.allBlogs;
  }

  //method to get a particular 
  
  public getSingleblogInformation(currentBlogId): any {
    //using for loop for typescript
    //https://www.typescriptlang.org/docs/handbook/iterators

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
