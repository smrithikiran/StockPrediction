import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import {Chart} from 'chart.js';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public price = [];
  public chart = [];
  public weekReport=[];
  
  public name;
  
  public flag=false;
  
  public past=[];
  public show;
  public days=['01/07','02/07','03/07','04/07','05/07','06/07','07/07','08/07','09/07','10/07','11/07','12/07','13/07'];
  

  constructor(private stock:StockService,private router:Router,private routes:ActivatedRoute) { }
  ngOnInit() {
    this.past = this.stock.getPast();
     
  }
 

  public func(value)
  {
    this.price = this.stock.getStocks(value);
    
    this.name=this.stock.getName(value);
    this.stock.addPast(value);

    if(this.price!=null)
    this.flag=true;
    else if(this.price==null)
    this.flag=false;
  }

  public viewPage(id)
  {
     this.router.navigate(['view',id],{relativeTo:this.routes});
  }
}