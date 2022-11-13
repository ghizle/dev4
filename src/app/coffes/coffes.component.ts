import { Component, OnInit } from '@angular/core';
import { Coffe } from '../model/coffe.model';
@Component({
  selector: 'app-coffes',
  templateUrl: './coffes.component.html',
  styleUrls: ['./coffes.component.css']
})
export class CoffesComponent implements OnInit {
  coffe!: Coffe[];
  constructor() { }

  ngOnInit(): void {
  }

}

