import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users:any;
  constructor(private userService:UserService){}

  ngOnInit(){
  // let res= this.http.get("https://jsonplaceholder.typicode.com/users");
  //let res= this.http.get("http://localhost:8889/users");
 //res.subscribe((data)=>console.log(data));
 this.users=this.userService.getUsers().subscribe((data)=>this.users=data);
  }

}

