import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { CommandBus } from '@nestjs/cqrs';
import { TaskDto } from './dto/task.dto';
import { CreateTaskCommand } from './features/commands/create-task/create-task.command';

@Injectable()
export class TasksService {

  constructor (private readonly commandBus: CommandBus) {}
  
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const createdTask = await this.commandBus.execute(
      new CreateTaskCommand(createTaskDto)
    );

    return createdTask;
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
