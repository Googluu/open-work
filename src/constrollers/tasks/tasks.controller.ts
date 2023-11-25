import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateTaskDto } from './tasks.dto';
import { TasksService } from './tasks.service'; 

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAll() {
        return this.tasksService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.tasksService.getById(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.tasksService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.tasksService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
       return this.tasksService.remove(id);
    }
}
