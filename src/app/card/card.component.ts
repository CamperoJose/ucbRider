import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  @Input() nombre: string | undefined;
  @Input() precio: string | undefined;
  @Input() img: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
