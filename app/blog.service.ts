import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080/blogs';
  
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"some data",
      "created":"2020",
      "tags":[],
      "author":"Chaitu",
      "category":"comedy",
      "isPublished":"true",
      "views":"1",
      "bodyHtml":"this is my body",
      "description":"this is my description",
      "title":"happy"
      },
      {
        "blogId":"2",
        "lastModified":"some data",
        "created":"2020",
        "tags":[],
        "author":"Dhana",
        "category":"comedy",
        "isPublished":"true",
        "views":"1",
        "bodyHtml":"this is my body",
        "description":"this is my description",
        "title":"sad"
        },
        {
          "blogId":"3",
          "lastModified":"some data",
          "created":"2020",
          "tags":[],
          "author":"Jana",
          "category":"comedy",
          "isPublished":"true",
          "views":"1",
          "bodyHtml":"this is my body",
          "description":"this is my description",
          "title":"cool"
          },
          {
            "blogId":"4",
            "lastModified":"some data",
            "created":"2020",
            "tags":[],
            "author":"Phani",
            "category":"comedy",
            "isPublished":"true",
            "views":"1",
            "bodyHtml":"this is my body",
            "description":"this is my description",
            "title":"calm"
            }

  ]

  public currentBlog:any;
  

  constructor(private http: HttpClient) { }
  
  
  getBlog(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  createBlog(blog:object): Observable<object> {
    return this.http.post('http://localhost:8080/createblog', blog);
  }
   getAllBlogs(){
    return this.allBlogs;
    
  }

//  public createBlog(blogData:any):any{
//    this.allBlogs.push(blogData);
//  }


  public getSingleBloginformation(currentBlogID:any): any{
    for(let blog of this.allBlogs){
      if(currentBlogID==blog.blogId){
        this.currentBlog=blog;
      }
      
    }
    return this.currentBlog;
  }}
