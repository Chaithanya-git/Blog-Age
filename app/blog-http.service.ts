import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

//import observable code
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

//import'rxjs/add/operator/catch'
//import'rxjs/add/operator/do'


@Injectable()

export class BlogHttpService {
 public allBlogs:any;
 public currentBlog:any;
 public baseUrl:string = 'http://localhost:3000/api/v1/blogs';
 public authToken:string = '/?authToken=ADMIN';



  constructor(private _http:HttpClient) { 
    console.log('Blog-Http service was called')
  }

//exception handler
private handleError(err:HttpErrorResponse){
  console.log('Handle error http calls');
  console.log(err.message);
  throw (err.message);
  

}



  public getAllBlogs():Observable<any>{
    console.log("get all blogs called") 
    let myResponse = this._http.get('http://localhost:3000/api/v1/blogs/all/?authToken=ADMIN')
    console.log(myResponse)
    return myResponse
  }
 public getSingleBlogInformation(currentBlogId:any):Observable<any>{
  let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+this.authToken).pipe(share())
  console.log(myResponse)
  return myResponse
 }
 public createBlog(blogData:any):Observable<any>{
  let myResponse = this._http.post(this.baseUrl+'/create'+this.authToken,blogData)
  console.log(myResponse)
  return myResponse
 }
 public editBlog(currentBlogId:any,blogData:any):Observable<any>{
  let myResponse = this._http.put(this.baseUrl+ '/' +currentBlogId+'/edit'+this.authToken,blogData)
  console.log(myResponse)
  return myResponse
 }
 public deleteBlog(currentBlogId:any):Observable<any>{
  let data = {}
  let myResponse = this._http.post(this.baseUrl+'/'+currentBlogId+'/delete'+this.authToken,data).pipe(share())
  console.log(myResponse)
  return myResponse
 }
 //comments code
 public getAllComments():Observable<any>{
  console.log("get all comments called") 
  let myResponse = this._http.get(this.baseUrl+'/all/comments'+this.authToken)
  console.log(myResponse)
  return myResponse
} 
public createComment(commentData:any):Observable<any>{
  let myResponse = this._http.post(this.baseUrl+'/create/comments'+this.authToken,commentData)
  console.log(myResponse)
  return myResponse
 }




}
