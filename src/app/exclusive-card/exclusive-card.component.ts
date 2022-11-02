import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exclusive-card',
  templateUrl: './exclusive-card.component.html',
  styleUrls: ['./exclusive-card.component.css']
})
export class ExclusiveCardComponent implements OnInit {


   @Input() nombre: string | undefined;
   @Input() precio: string | undefined;
   @Input() img: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
