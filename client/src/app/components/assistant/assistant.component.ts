import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
