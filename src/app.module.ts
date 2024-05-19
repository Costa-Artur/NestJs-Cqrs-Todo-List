import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    PrismaModule, 
    TasksModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes()
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
