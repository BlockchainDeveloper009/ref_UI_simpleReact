import { ExitStatus } from "typescript";

export interface GetCharacterResults {
    info: Info;
    results: Character[];
}
export interface Character {
    id:         number;
    name:       string;
    status:     ExitStatus;
    species:    Species;
    type:       string;
    gender:     Gender;
    origin:     Location;
    location:   Location;
    image:      string;
    episode:    string[];
    url:        string;
    created:    Date; 
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}
export interface Location {
    name: string;
    url: string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}