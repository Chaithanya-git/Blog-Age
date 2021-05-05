import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import {Location}from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
  Blog: any;
  public blogCategories = ["Comedy","Drama","Action","Technology"]


  constructor(private _route: ActivatedRoute, private router: Router,private blogService: BlogHttpService,private location : Location) {
   console.log("constructor is called");
   
   }

  ngOnInit(): any {
    console.log("Oninit called");
    this.currentBlog();
  }
  currentBlog=():any=>{
  let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
   this.blogService.getSingleBlogInformation(myBlogId).
   subscribe((data: any) => {
    console.log(data)
    this.Blog= data["data"];
    
  }, (error:any) => {
    console.log('Some error Occured in new method')
    return console.log(error.errorMessage);
     
  });
}
  goBackToPreviousPage = ():any =>{
    //this.location.back(); 
    this.router.navigate(['/']);
  }

deleteMethod=() =>{
  let myBlogId = this._route.snapshot.paramMap.get('blogId');
  this.blogService.deleteBlog(myBlogId).
  subscribe((data: any) => {
   console.log(data)
   console.log("Blog deleted successfully")
   setTimeout(()=>{
     this.router.navigate(['/home']);
     },1000)
 }, (error:any) => {
   console.log('Some error Occured')
   return console.log(error.errorMessage);
  
 });

}











}




  




 
  

