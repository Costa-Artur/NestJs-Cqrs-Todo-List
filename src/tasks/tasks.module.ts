import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskRepository } from './repositories/task.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateTaskHandler } from './features/commands/create-task/create-task.handler';
import { TaskProfile } from './profiles/task.profile';
import { AutomapperModule } from '@automapper/nestjs';

const CommandHandlers = [CreateTaskHandler];
const Profiles = [TaskProfile];

@Module({
  imports: [
    PrismaModule,
    CqrsModule,
    AutomapperModule
  ],
  controllers: [TasksController],
  providers: [
    PrismaModule,
    TaskRepository,
    TasksService,
    ...CommandHandlers,
    ...Profiles
  ],
})
export class TasksModule {}
