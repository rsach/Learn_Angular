import {Component} from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'bs-welcome',
  templateUrl: 'app/welcome/welcome.component.html'
})

export class WelcomeComponent{
  pageTitle: string = "Welcome";
  constructor(){
  	console.log('welcome.component.ts')
  }
}
