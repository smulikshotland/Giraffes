import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-j-label-span',
  templateUrl: './j-label-span.component.html',
  styleUrls: ['./j-label-span.component.css']
})
export class JLabelSpanComponent implements OnInit {

  @Input() label:string=""
  @Input() val:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
