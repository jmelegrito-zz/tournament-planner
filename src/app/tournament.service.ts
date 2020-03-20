import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getTourney(id) {
    return this.http.get(`${baseUrl}/tourney/${id}`);
  }


  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  signUp(data) {
    return this.http.post(`${baseUrl}/sign-up`, data)
  }

  signIn(data) {
    return this.http.post(`${baseUrl}/sign-in`, data)
  }

  signOut() {
    return this.http.get(`${baseUrl}/sign-out`, {responseType: 'text'})
  }

}
