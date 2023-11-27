import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly _baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly _httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(USER_LIST).pipe(delay(1000));
  }

  toggleStatus(userId: number): Observable<boolean> {
    const userIndex = USER_LIST.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      const currentUser = USER_LIST[userIndex];

      USER_LIST[userIndex] = {
        ...currentUser,
        isActive: !currentUser.isActive,
      };
    }

    return of(true).pipe(delay(1000));
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
}

const USER_LIST: User[] = [
  {
    id: 1,
    name: 'Erwin Smith',
    email: 'esmith@email.com',
    phone: '1-770-736-8031',
    isActive: true,
  },
  {
    id: 2,
    name: 'Eren Yeager',
    email: 'eyeager@email.com',
    phone: '010-692-6593',
    isActive: true,
  },
  {
    id: 3,
    name: 'Levi Ackerman',
    email: 'lackerman@email.com',
    phone: '1-463-123-4447',
    isActive: true,
  },
  {
    id: 4,
    name: 'Mikasa Ackerman',
    email: 'mackerman@email.com',
    phone: '1-770-736-8031',
    isActive: true,
  },
  {
    id: 5,
    name: 'Ervin Howell',
    email: 'ehowell@email.com',
    phone: '010-692-6593',
    isActive: true,
  },
  {
    id: 6,
    name: 'Jhone Doe',
    email: 'jdoe@email.com',
    phone: '1-463-123-4447',
    isActive: true,
  },
  {
    id: 7,
    name: 'Itadori Yuji',
    email: 'iyuji@email.com',
    phone: '1-770-736-8031',
    isActive: true,
  },
  {
    id: 8,
    name: 'Fushigroro Megumi',
    email: 'fmegumi@email.com',
    phone: '010-692-6593',
    isActive: true,
  },
  {
    id: 9,
    name: 'Satoru Gojo',
    email: 'sgojo@email.com',
    phone: '1-463-123-4447',
    isActive: true,
  },
  {
    id: 10,
    name: 'Senku Ishigami',
    email: 'sishigami@email.com',
    phone: '1-770-736-8031',
    isActive: true,
  },
  {
    id: 11,
    name: 'Uchiha Itachi',
    email: 'uitachi@email.com',
    phone: '010-692-6593',
    isActive: true,
  },
  {
    id: 12,
    name: 'Sarah Connor',
    email: 'sconnor@email.com',
    phone: '1-463-123-4447',
    isActive: true,
  },
];
