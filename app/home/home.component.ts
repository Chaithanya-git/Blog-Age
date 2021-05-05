import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service';
import { BlogHttpService} from '../blog-http.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 public blogs:any | undefined;
 public allBlogs: any | undefined;
 public allComments:any;
 public comment: any | undefined;
 public commentedBy: any | undefined;
  createCommentForm: any;
  constructor(private route: ActivatedRoute,private router: Router,private blogHttpService: BlogHttpService, ) {}

  ngOnInit() {
  this.getBlogComponent();
  this.getComment();
 }
  getBlogComponent(){
    this.blogHttpService.getAllBlogs()
    .subscribe((data: any) => {
      console.log(data)
      this.allBlogs = data["data"];
      console.log(typeof( this.allBlogs))
      this.blogs=Object.keys(this.allBlogs);
      console.log(typeof( this.blogs))
      return this.blogs;
    }, (error:any) => {
      return console.log(error.errorMessage);
      
    });
  

  }
  //comments code
  getComment(){
    this.blogHttpService.getAllComments()
    .subscribe((data: any) => {
      console.log(data)
      this.allComments = data["data"];
      console.log( this.allComments)
      return this.allComments;
    }, (error:any) => {
      return console.log(error.errorMessage);
      
    });
  }

  public createComment():any{
    let commentData = {
      comment:this.comment,
      commentedBy:this.commentedBy
       }

    console.log(commentData);

  this.blogHttpService.createComment(commentData).subscribe(
     (data:any)=>{
       console.log(data);
       alert("Commented Successfully");
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

 onSubmit(){
  this.createComment();

 }

}