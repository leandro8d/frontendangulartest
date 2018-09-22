import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//service for server comunication
export class CRUDEService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  public getPosts(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: this.headers });
  }

  public getPost(id): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id,{ headers: this.headers });
  }
  public createPost(post): any {
    
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(post),{ headers: this.headers });
  }
  public updatePost(post): any {
    
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+post.id, JSON.stringify(post),{ headers: this.headers });
  }
  public deletePost(post): any {
    
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+post.id,{ headers: this.headers });
  }
}
