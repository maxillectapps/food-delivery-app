import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchQuery:string='';

constructor(private route:ActivatedRoute,private router:Router){}

ngOnInit(): void {
this.route.params.subscribe((params =>{
  if(params['searchQuery']){
  this.searchQuery=params['searchQuery'];
  }
}));
}


search():void{
  if(this.searchQuery)
  this.router.navigateByUrl('/search/'+this.searchQuery);
}

}
