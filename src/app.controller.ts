import { Body, Controller, Get, Post } from '@nestjs/common';
import { Employee as EmployeeModel } from '@prisma/client';
import { EmployeeService } from './employee/employee.service';

@Controller()
export class AppController {
  constructor(private readonly employeeService: EmployeeService) {}

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
}
