import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chosenTestHero:boolean = false;
  chosenTestFitness:boolean = false;
  showButton:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  showHero() {
    this.chosenTestHero = true
    this.showButton = false
  }

  showFitness() {
    this.chosenTestFitness = true
    this.showButton = false
  }

}
