
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public nWidthSlider: number;
  public nWidthToSlider: any;
  public bCaptions: boolean;
  public oAuthor: any;
  @ViewChild('texts', { static: false }) texts;

  name: string;
  email: string;
  message: string;

  constructor() { 
  	this.bCaptions = true;
  }

  ngOnInit() {
  	var sClassicOption = document.querySelector('#text').innerHTML;
  	//console.log(this.texts.nativeElement.textContent);
  }

  loadSlider(){
  	this.nWidthToSlider = this.nWidthSlider;
  }

  resetSlider(){
  	this.nWidthToSlider = false;
  }

  getAuthor(oEvent){
  	console.log(oEvent);
  	this.oAuthor = oEvent;
  }




  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }



}
