import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  products: Product[] =[
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max",
      price: 1099,
      quantity: 15
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199,
      quantity: 0
    },
    {
      id: 3,
      name: "Google Pixel 7 Pro",
      price: 899,
      quantity: 20
    },
    {
      id: 4,
      name: "Microsoft Surface Laptop 5",
      price: 1299,
      quantity: 5
    },
    {
      id: 5,
      name: "Dell XPS 13 Plus",
      price: 1199,
      quantity: 8
    },
    {
      id: 6,
      name: "HP Envy x360 13",
      price: 799,
      quantity: 12
    },
    {
      id: 7,
      name: "Lenovo Yoga 9i",
      price: 1499,
      quantity: 0
    },
    {
      id: 8,
      name: "Acer Swift 3",
      price: 699,
      quantity: 18
    },
    {
      id: 9,
      name: "ASUS ZenBook 13 OLED",
      price: 999,
      quantity: 7
    },
    {
      id: 10,
      name: "MSI GE76 Raider",
      price: 2499,
      quantity: 2
    }
  ]
  
}
