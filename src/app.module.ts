import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { PrismaService } from './prisma/prisma.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [AuthModule, EmployeeModule, TasksModule],
  controllers: [AppController],
  providers: [EmployeeService, PrismaService],
})
export class AppModule {}
