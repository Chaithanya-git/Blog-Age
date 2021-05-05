import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import {Location}from '@angular/common';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers:[Location]
})
export class BlogEditComponent implements OnInit {
  public currentBlog:any;
  public possibleCategories = ["Comedy","Drama","Action","Technology"]
  constructor(private _route: ActivatedRoute, private router: Router,private blogService: BlogHttpService,private location : Location) { }
 
  public blogTitle:any | undefined;
  public blogBodyHtml:any | undefined;
  public blogDescription:any| undefined;
  public blogAuthor:any| undefined;
  public blogCategory:any| undefined;
  public blogCategories = ["Comedy","Drama","Action","Technology"]

  ngOnInit(): void {
   
  }


 
  editBlogMethod():any{
   let currentBlog = {
      title:this.blogTitle,
      body:this.blogBodyHtml,
      description:this.blogDescription,
      category:this.blogCategory,
      author:this.blogAuthor
       }
       let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogService.editBlog(myBlogId ,currentBlog).
         subscribe((data: any) => {
          console.log(data)
          console.log("Blog edited successfully")
          setTimeout(()=>{
            this.router.navigate(['/blog',myBlogId]);
            },1000)
        }, (error:any) => {
          return console.log(error.errorMessage);
           
        });
  
}
goBackToPreviousPage = ():any =>{
  this.location.back(); 
  
}
}
