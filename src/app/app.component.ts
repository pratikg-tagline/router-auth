import { Component } from '@angular/core';

interface Header {
  name:string,
  link:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headers :Header[] = [
    {
      name:'Admin',
      link:'admin'
    },
    {
      name:'User',
      link:'user'
    },
    {
      name:'Deactivate',
      link:'deactivate'
    },
    {
      name:'Contect',
      link:'contect'
    }
  ]
  title = 'routerauth';
  logOut(){
    localStorage.clear()
  }
}
