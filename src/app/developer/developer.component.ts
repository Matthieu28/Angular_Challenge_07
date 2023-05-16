import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer: Developer = new Developer();

  constructor() {
    this.developer.lastname = "Maginot";
    this.developer.firstname = "Matthieu";
    this.developer.age = 19;
    this.developer.gender = "Homme";
    this.developer.bio = "C'est chiant angular, mais bon, on s'y habitue, et au final on fini par l'apprécier ( faut pas critiquer mon CSS ).";
    this.developer.skills = [
      { name: "React", logo: "https://www.troispointzero.fr/content/uploads/2019/04/react-javascript-logo-1.png", site:"https://fr.legacy.reactjs.org/" },
      { name: "Angular", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", site: "https://angular.io/" }
    ]
  }
}
