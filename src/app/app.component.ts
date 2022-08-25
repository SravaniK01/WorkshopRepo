import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
 menuItems: MenuItem[] = [
  {item:"Chicken Finger", category:'dinner', price: 11.99},
  {item:"Pizza", category:'dinner', price: 11.99},
  {item:"Wings", category:'sides', price: 8.99},
  {item:"Breadsticks", category:'sides', price: 4.99},
  {item:"Ceasar salad", category:'salads', price: 5.99},
  {item:"Cinnamon", category:'dessert', price: 8.99}
  

 ]

}
