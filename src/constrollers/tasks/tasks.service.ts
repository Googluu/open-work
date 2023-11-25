import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { CreateTaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
    private apiWeb = 'https://api.todoist.com/rest/v2';
    private token = '6f665e8f59e9fe2aab49ea42859b47b2b9a577b0';
    private headers = {
        'Authorization': `Bearer ${this.token}`
    };

    async getAll(): Promise<any> {
        const response = await axios.get(`${this.apiWeb}/tasks`, {
            headers: this.headers
        });
        console.log(response.data);
        return response.data;
    }

    async getById(id: any): Promise<any> {
        const response = await axios.get(`${this.apiWeb}/tasks/${id}`, {
            headers: this.headers
        });
        console.log(response.data);
        return response.data;
    }

    // en preceso - err 500
    // async create(payload:  CreateTaskDto): Promise<any> {
    //     const response = await axios.post(`${this.apiWeb}/tasks`, {
    //         headers: this.headers,
    //         payload
    //     })
    //     console.log(response.data);
    //     return response.data;
    // }

    async remove(id: any): Promise<any> {
        const response = await axios.delete(`${this.apiWeb}/tasks/${id}`, {
          headers: this.headers  
        });

        return {
            status: 204
        }
    }
}
