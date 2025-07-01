import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-viewuser',
  standalone: false,
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css'
})
export class Viewuser implements OnInit {
users :any;

constructor(
  private userService : UserService,
  private router: Router,
  private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadAllUser();
  }
loadAllUser(){

  this.users = this.userService.getAllUser();
}
deleteUser(id:string):void{
  this.userService.deleteUser(id).subscribe({

    next:(res)=>{
      this.loadAllUser();
      this.cdr.reattach();

    },
    error:(error)=>{
console.log(error);

    }

  });

}

}
