import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDEService } from '../services/crude.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private crudService: CRUDEService, private route: Router,private snackBar: MatSnackBar) { }
  //object that will be binded by html
  private newPost: any = { title: null, userId: null, body: null };

  public createPost() {
    //do a request sending the post create by user
    this.crudService.createPost(this.newPost).subscribe(data => {
      //return to home page after request sucess
      this.route.navigateByUrl('/');
      //show confirm message
      this.snackBar.open('Post created sucessfully!', 'close', { duration: 7000 });
    },
    error => {
      //log error object into cosonle
      console.log(error);
      //show a error message
      this.snackBar.open('Error on create post. Try it again!', 'close', { duration: 7000 });
    });
  }
  ngOnInit() {
  }

}
