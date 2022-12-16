import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-no-food',
  templateUrl: './no-food.component.html',
  styleUrls: ['./no-food.component.css']
})
export class NoFoodComponent implements OnInit{
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";

  ngOnInit(): void {
   
  }

}
