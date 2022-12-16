import { Injectable } from '@angular/core';
import { Food } from 'src/app/common/models/food';
import { Tag } from 'src/app/common/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(foodID: number):Food {
    let foodItem:Food=this.getAll().find((food) => (food.id == foodID)?? new Food())!;
    return foodItem ;

  }

  getAllTags(): Tag[] {
    return [
      { name: 'all', count: 1 },
      { name: 'fast food', count: 1 },
      { name: 'slow food', count: 1 },
      { name: 'breakfast', count: 1 },
      { name: 'lunch', count: 1 },
      { name: 'dinner', count: 1 },
      { name: 'soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == 'all') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        price: 20,
        name: 'Pepporoni Pizza',
        favorite: false,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-1.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 2,
        price: 20,
        name: 'Meatball',
        favorite: true,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-2.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 3,
        price: 20,
        name: 'Veggie Burger',
        favorite: false,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-3.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 4,
        price: 20,
        name: 'Finger Fries',
        favorite: true,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-4.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 5,
        price: 20,
        name: 'Chicken Soup',
        favorite: false,
        star: 5,
        tags: ['slow food', 'dinner'],
        imageUrl: '/assets/food-5.jpg',
        cookingTime: '20-30',
        cuisine: ['indian', 'middle east', 'chinese'],
      },
      {
        id: 6,
        price: 20,
        name: 'Veggie Pizza',
        favorite: true,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-6.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 7,
        price: 20,
        name: 'Double Patty Burger',
        favorite: true,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-7.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 8,
        price: 20,
        name: 'Farmhouse Pizza',
        favorite: false,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/food-8.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
      {
        id: 9,
        price: 20,
        name: 'Dal Makhni',
        favorite: false,
        star: 5,
        tags: ['slow food', 'lunch'],
        imageUrl: '/assets/dal.jpg',
        cookingTime: '20-30',
        cuisine: ['persian', 'middle east', 'chinese'],
      },
    ];
  }
}
