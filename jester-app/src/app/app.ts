import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JesterHome } from './jester-home/jester-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'jester-app';

}
