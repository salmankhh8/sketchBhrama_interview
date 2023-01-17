import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  countCircle: number=0
  countArr=[
    {id: 0, grayValue: false}
  ]
  clickedCircle:number=0
  // grayValue:boolean=false
  count(){
    this.countCircle++
    this.countArr.length = this.countCircle
    // const value=[
    //   {id: this.countCircle, grayValue:false}
    // ]
    this.countArr=[...this.countArr,{id:this.countCircle,grayValue:false }]
    // this.counter= new Array(this.countCircle)
    console.log(this.countArr);
    
  }

  circleClicked(item:any){
    // this.grayValue!=this.grayValue
    console.log(item);
    
    if(this.countArr[item].grayValue){
      this.clickedCircle--;
    }
    else{
      this.clickedCircle++

    }

    this.countArr[item].grayValue=!this.countArr[item].grayValue;
   
    console.log(this.countArr);
    
  }


}
