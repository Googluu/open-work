import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

import { config } from 'src/config';
@Injectable()
export class TasksService {
    private apiWeb = 'https://api.todoist.com/rest/v2';
    private token = config.token;
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

    async create(payload:  any): Promise<any> {
        const response = await axios.post(`${this.apiWeb}/tasks`, payload, {
            headers: {
                ...this.headers,
                'Content-Type': 'application/json'
            },
        })
        console.log(response.data);
        return response.data;
    }

    async update(id:any, payload: any): Promise<any> {
        try {
            const response = await axios.post(`${this.apiWeb}/tasks/${id}`, payload, {
                headers: {
                    ...this.headers,
                    'Content-Type': 'application/json'
                },
            })
            console.log(response);
            return response.data;
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    async remove(id: any): Promise<any> {
        try {
            await axios.delete(`${this.apiWeb}/tasks/${id}`, { headers: this.headers });
            return true;
        } catch (error) {
            throw new NotFoundException(`Task #${id} not found or could not be deleted`);
        }
    }
    
}
