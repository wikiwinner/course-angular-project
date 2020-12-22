import {User} from '../user';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';


@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  getUsers() {
    let userList: User[];
    userList = [
      new User(26279, 'Duman', 'Serikbay','I was born in Shymkent, on the Kazakhstan. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Programmer', 20, 'Kazakhstan'),
      new User(26280, 'Karina', 'Suingaraeva','I was born in Uralsk, on the Kazakhstan. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Teacher', 19, 'Kazakhstan'),
      new User(26281, 'Kim', 'Chen In','I was born in Tokyo city, on the Japanese. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Police', 36, 'Japan'),
      new User(26282, 'Szin', 'Pin','I was born in Pekin, on the China. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Architector', 80, 'China'),
      new User(26283, 'Djord', 'Baiden','I was born in New York, on the USA. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Prezident', 66, 'USA'),
      new User(26284, 'Osama', 'Ben Laden','I was born in Bagdat, on the Irak. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Milirarry', 72, 'Irak'),
      new User(26285, 'Kolinda', 'Grabar','I was born in Blard, on the Choart. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Actress', 58, 'Choart'),
      new User(26286, 'Putin', 'Vladimir','I was born in Perm, on the Russian. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Politic', 60, 'Russian'),
      new User(26287, 'John', 'Djordjo','I was born in Santo, on the Brazillia. I have been familiar with this course for a long time. I showed good results in 2 months. I advise you to study','Developer', 18, 'Brazillia'),
      ];
    this.loggingService.log('List of users: ' + userList);
    return userList;
  }
}
