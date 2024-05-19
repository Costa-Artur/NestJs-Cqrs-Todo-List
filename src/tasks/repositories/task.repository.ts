import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTaskDto } from "../dto/create-task.dto";
import { TaskDto } from "../dto/task.dto";
import { Mapper } from "@automapper/core";
import { TaskEntity } from "../entities/task.entity";
import { InjectMapper } from "@automapper/nestjs";

@Injectable()
export class TaskRepository {
    constructor(private prisma : PrismaService, @InjectMapper() private mapper: Mapper) {}

    async createTask(createTaskDto : CreateTaskDto): Promise<TaskDto> {
        const task = await this.prisma.task.create({data: createTaskDto});
        return this.mapper.map(task, TaskEntity,TaskDto );
    }
}