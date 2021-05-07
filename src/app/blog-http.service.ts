import { Injectable } from '@angular/core';


//importing http client
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {_throw} from 'rxjs/observable/throw';


//importing observables

import { Observable } from 'rxjs/Observable';
//import { throw } from 'rxjs/Observable'
//import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {
  public allBlogs;
  public currentBlogId;
  public baseUrl: 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken;

  constructor(private http: HttpClient) {
    console.log("Blog-Http service is called.");
  }

  //exception handler
  private handlerError(err: HttpErrorResponse) {
    console.log('Handle Error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all blogs

  public getAllBlogs(): any {

    let myResponse = this.http.get(this.baseUrl + "/all?authToken" + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  //method to get a particular 

  public getSingleblogInformation(currentBlogId): any {

    let myResponse = this.http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' 
    + this.authToken);
    return myResponse;

  }

  public createBlog(blogData): any {
    let data = {}
    let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }
  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this.http.post(this.baseUrl + '/' + blogId + '/delete' + "?authToken=" +
     this.authToken, blogId);
    return myResponse;
  }
  public editBlog(blogId, blogData): any {
    let data = {}
    let myResponse = this.http.put(this.baseUrl + '/' + blogId + '/edit' + "?authToken=" + this.authToken, blogData);
    return myResponse;
  }

}
