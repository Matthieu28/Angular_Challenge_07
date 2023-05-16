import { Skill } from './skill.model';

export class Developer {
    lastname: string;
    firstname: string;
    age: number;
    gender: string;
    bio: string;
    skills: Skill[];

    constructor() {
        this.lastname = "";
        this.firstname = "";
        this.age = 0;
        this.gender = "";
        this.bio = "";
        this.skills = [];
    }
}