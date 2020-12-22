export class User {
  id: number;
  name: string;
  surname: string;
  biography: string;
  speciality: string;
  age: number;
  country: string;

  constructor(id: number, name: string, surname: string, biography: string,
              speciality: string, age: number, country: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.biography = biography;
    this.speciality = speciality;
    this.age = age;
    this.country = country;
  }
}
