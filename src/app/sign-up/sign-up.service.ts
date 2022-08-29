import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  basePath = 'https://demo-api.now.sh/users';

  constructor(private httpClient: HttpClient) {}

  registerUser(payload: UserDetails) {
    return this.httpClient.post(this.basePath, payload);
  }
}
