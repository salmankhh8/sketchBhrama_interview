import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'dropdown';
  country = ['india', 'srilanka', 'usa']
  current:any
  isOpen:boolean = false;
  @ViewChild('hover') hover : any
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

  enter(){
    console.log("mouse entered");
    this.isOpen=true
    // document.getElementById("dropdown").style.visibility = true
  }

  leave(){
    this.isOpen=false;
  }

  selected(cnty:any){

    this.current= cnty
    console.log(this.current); 
  }
}


function jQuery(arg0: string) {
  throw new Error('Function not implemented.');
}

