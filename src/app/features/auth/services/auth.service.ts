import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}

export interface IUser {
  email: string;
  role: Role;
  id: number;
  isActive: boolean;
}

export enum Role {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERADOR',
  DOCTOR = 'DOCTOR',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn$ = new BehaviorSubject<IUser | null>(null);

  private _userFakeCredentials = {
    email: 'email@email.com',
    passsword: '123',
  };
  private readonly _baseUrl = environment.apiUrl + '/auth';

  constructor(private http: HttpClient) {}

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('access_token');

    if (!token) {
      return of(false);
    }

    const headers = new HttpHeaders(`Authorization: Bearer ${token}`);

    return this.http
      .get<ILoginResponse>(this._baseUrl + '/verify-token', { headers })
      .pipe(
        map((response) => {
          this.userLoggedIn$.next(response.user);
          localStorage.setItem('access_token', response.access_token);

          return true;
        })
      );
  }

  // TODO: The way to store token in local storage should be in independent method
  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<ILoginResponse>(this._baseUrl + '/login', { email, password })
      .pipe(
        map((response) => {
          if (response && response.access_token && response.user) {
            this.userLoggedIn$.next(response.user);
            localStorage.setItem('access_token', response.access_token);

            return true;
          }

          return false;
        })
      );
  }

  // TODO: The way to store token in local storage should be in independent method
  fakeLogin(email: string, password: string): Observable<boolean> {
    if (
      email == this._userFakeCredentials.email &&
      password == this._userFakeCredentials.passsword
    ) {
      const response: ILoginResponse = {
        access_token: '_fake_token_',
        user: {
          id: 1,
          isActive: true,
          email: this._userFakeCredentials.email,
          role: Role.ADMIN,
        },
      };

      this.userLoggedIn$.next(response.user);
      localStorage.setItem('access_token', response.access_token);

      return of(true).pipe(delay(1000));
    }

    const errorResponse = new HttpErrorResponse({
      status: 401,
      statusText: 'Unauthorized',
    });

    return throwError(() => errorResponse);
  }

  logout(): void {
    this.userLoggedIn$.next(null);
    localStorage.removeItem('access_token');
  }

  fakeRequestNewPassword(email: string): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }

  fakeCreateNewPassword(
    email: string,
    newPassword: string
  ): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }

  fakeResetPassword(email: string, newPassword: string): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }
}
