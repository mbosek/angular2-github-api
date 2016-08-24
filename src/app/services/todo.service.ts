import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    private tempAddress: string = 'http://localhost:3000';

    constructor(public http: Http) {}
    
    getTodos() {
        return this.http.get(`${this.tempAddress}/api/v1/todos`);
    }
    
    saveTodo(todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.tempAddress}/api/v1/todo`, JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }
    
    updateTodo(todo) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.tempAddress}/api/v1/todo/${todo._id}`, JSON.stringify(todo), {headers: headers});
    }
    
    deleteTodo(id) {
        return this.http.delete(`http://localhost:3000/api/v1/todo/${id}`);
    }
}
