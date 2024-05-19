import { CreateTaskDto } from "src/tasks/dto/create-task.dto";

export class CreateTaskCommand {
    constructor (
        public readonly dto: CreateTaskDto
    ) {}
}