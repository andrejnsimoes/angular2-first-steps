import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title: string;
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.title = 'Angular2 First Steps!';
    this.name = 'André';
    this.email = 'andre.simoes@cashyt.com';
    
    this.address = {
      street: 'Rua da Sofia',
      city: 'Coimbra'
    };

    this.hobbies = ['Movies', 'Music', 'Just sleep'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
    
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

}

export interface Address{
  street: string;
  city: string;
}
