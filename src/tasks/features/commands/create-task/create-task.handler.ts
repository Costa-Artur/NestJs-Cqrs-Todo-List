import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateTaskCommand } from "./create-task.command";
import { TaskRepository } from "src/tasks/repositories/task.repository";
import { TaskDto } from "src/tasks/dto/task.dto";

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    constructor (
        private readonly repository: TaskRepository
    ) {}

    async execute(command: CreateTaskCommand) : Promise<TaskDto> {
        console.log(command.dto);

        return await this.repository.createTask(command.dto);
    }
}