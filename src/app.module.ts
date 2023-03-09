import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [AuthModule, EmployeeModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
