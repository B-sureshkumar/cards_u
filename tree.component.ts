import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input () title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';



  constructor() { }

  ngOnInit(): void {
  }

}
