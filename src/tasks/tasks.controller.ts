import { Controller, Post, Body} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly service: TasksService
  ) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const taskToReturn = await this.service.createTask(createTaskDto);
    console.log(taskToReturn)
    return taskToReturn;
  }

}
