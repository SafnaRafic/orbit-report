import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  counts: string[]=["Satellites: 9","Space Debris: 1"," Communication: 2","Probe:  2","Positioning: 1","Space Station:  2", "Telescope:  1"];

  constructor() { }

  ngOnInit() {
  }

}
