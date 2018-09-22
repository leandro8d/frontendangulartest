import { Component, OnInit } from '@angular/core';
import { CRUDEService } from '../services/crude.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {


  constructor(public crudService: CRUDEService,private snackBar: MatSnackBar) { }
  
  public posts: object[];
  public inAction:boolean = false;
  public selectedPost:object;



  public setInAction(selectedRow) {
    this.inAction = this.inAction ? false : true;
    this.selectedPost = selectedRow;
  }

  ngOnInit() {
    this.crudService.getPosts().subscribe(data => {
      this.posts = data
    },
    error => {
      console.log(error);
      this.snackBar.open('Error on retrive data from server. Try it again! ', 'close', { duration: 7000 });
    });
  }

}
