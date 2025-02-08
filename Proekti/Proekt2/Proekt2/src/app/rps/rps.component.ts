import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RpsComponent {
  userChoice: string = '';
  computerChoice: string = '';
  result: string = '';
  message: string = '';
  userScore: number = 0;
  computerScore: number = 0;

  play(userChoice: string): void {
    this.userChoice = userChoice;
    const choices = ['👊', '🤚', '✌️'];
    const randomIndex = Math.floor(Math.random() * 3);
    this.computerChoice = choices[randomIndex];
    
    this.determineWinner();
  }

  determineWinner(): void {
    if (this.userChoice === this.computerChoice) {
      this.message = "It's a tie!";
    } else if (
      (this.userChoice === '👊' && this.computerChoice === '✌️') ||
      (this.userChoice === '🤚' && this.computerChoice === '👊') ||
      (this.userChoice === '✌️' && this.computerChoice === '🤚')
    ) {
      this.message = 'You win!';
      this.userScore++;
    } else {
      this.message = 'Computer wins!';
      this.computerScore++;
    }
    this.result = this.message;
  }

  resetGame(): void {
    this.userScore = 0;
    this.computerScore = 0;
    this.result = '';
    this.message = '';
    this.userChoice = '';
    this.computerChoice = '';
  }
}