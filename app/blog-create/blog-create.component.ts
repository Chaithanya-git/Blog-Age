import { Component, OnInit } from '@angular/core';
import {BlogHttpService} from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  [x: string]: any;


 constructor(private blogservice: BlogHttpService,private _router:ActivatedRoute,private router: Router){} 
 public blogTitle:any | undefined;
 public blogBodyHtml:any | undefined;
 public blogDescription:any| undefined;
 public blogAuthor:any| undefined;
 public blogCategory:any| undefined;
 public blogCategories:string[] = ["Comedy","Drama","Action","Technology"]

  
 
 
 ngOnInit():any {
  
 }
 
public createBlog():any{
    let blogData = {
      title:this.blogTitle,
      body:this.blogBodyHtml,
      description:this.blogDescription,
      category:this.blogCategory,
      author:this.blogAuthor
       }

    console.log(blogData);

  this.blogservice.createBlog(blogData).subscribe(
     (data:any)=>{
       console.log("blog-created")
       console.log(data);
       alert("Blog Posted Successfully");
       setTimeout(()=>{
       this.router.navigate(['/home']);
       },1000)

    },
    (error:any)=>{
      console.log("Some error occured")
      console.log(error.errorMessage);
      alert("Some error occured");
    })
 }
 
  
}
  



