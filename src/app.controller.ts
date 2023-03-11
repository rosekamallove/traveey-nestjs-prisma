import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Employee as EmployeeModel, Tasks as TaskModel } from '@prisma/client';
import { EmployeeService } from './employee/employee.service';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly taskService: TasksService,
  ) {}

  @Post('employee')
  async signup(
    @Body()
    employeeData: {
      name: string;
      email: string;
      phone: string;
      hireData: string;
      position: string;
    },
  ): Promise<EmployeeModel> {
    return this.employeeService.createEmployee(employeeData);
  }

  @Get('employee')
  async getEmployee(
    @Body()
    employeeData: {
      email: string;
    },
  ): Promise<EmployeeModel> {
    return this.employeeService.employee(employeeData);
  }

  @Get('task/:id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.task({ id: Number(id) });
  }

  @Post('task')
  async createDraft(
    @Body()
    postData: {
      title: string;
      description?: string;
      dueDate: string;
      authorEmail: string;
    },
  ): Promise<TaskModel> {
    const { title, description, authorEmail, dueDate } = postData;
    return this.taskService.createTasks({
      title,
      dueDate,
      description,
      employee: {
        connect: { email: authorEmail },
      },
    });
  }
}
