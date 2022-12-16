import { Component,OnInit } from '@angular/core';
import { Food } from '../common/models/food';
import { FoodService } from '../services/food/food.service';
import {BarRatingModule} from 'ngx-bar-rating';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
foods:Food[]=[];
  constructor(private fs:FoodService,private router:ActivatedRoute){}

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchQuery'])
      {this.foods=this.fs.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchQuery'].toLocaleLowerCase()));}
      else if(params['tag'])
      {
        this.foods=this.fs.getAllFoodsByTag(params['tag']);
      }
      else{
      this.foods=this.fs.getAll();
    }
    });
  }

}
