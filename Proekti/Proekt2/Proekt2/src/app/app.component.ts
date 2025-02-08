import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpsComponent } from './rps/rps.component';

@Component({
  imports: [CommonModule, RpsComponent],

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scissors';
}