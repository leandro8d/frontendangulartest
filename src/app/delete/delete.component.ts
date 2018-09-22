import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDEService } from '../services/crude.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private crudService: CRUDEService, private route: Router, private snackBar: MatSnackBar) { }
 //object that will be binded by html
  private selectedPost: any = {title:null,body:null,userId:null,id:null};

  getPost() {
    //get the post id param passed by url
    const id = +this.activeroute.snapshot.paramMap.get('id');

    //get the post equals param id
    this.crudService.getPost(id).subscribe(data => {
      this.selectedPost = data;
    },
    error => {
      console.log(error);
      this.snackBar.open('Error on retrive post ' + this.selectedPost.id + ' from server. Try it again!', 'close', { duration: 7000 });
    });
  }

  public deletePost() {
    this.crudService.deletePost(this.selectedPost).subscribe(data => {
      //show confirmation message
      this.snackBar.open('Post with id: ' + this.selectedPost.id + ' deleted!', 'close', { duration: 7000 });
      //after request confrimed, return to home page
      this.route.navigateByUrl('/');
    },
      error => {
        //log error obj into console
        console.log(error);
         //error message
        this.snackBar.open('Error on delete post ' + this.selectedPost.id + '. Try it again!', 'close', { duration: 7000 });
      });
  }

  ngOnInit() {
     //get the post on init the page
    this.getPost();
  }

}
