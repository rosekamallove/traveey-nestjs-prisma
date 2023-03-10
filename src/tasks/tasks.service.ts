import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tasks, Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async task(
    taskWhereUniqueInput: Prisma.TasksWhereUniqueInput,
  ): Promise<Tasks | null> {
    return this.prisma.tasks.findUnique({
      where: taskWhereUniqueInput,
    });
  }

  async tasks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TasksWhereUniqueInput;
    where?: Prisma.TasksWhereInput;
    orderBy?: Prisma.TasksOrderByWithRelationInput;
  }): Promise<Tasks[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tasks.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTasks(data: Prisma.TasksCreateInput): Promise<Tasks> {
    return this.prisma.tasks.create({
      data,
    });
  }

  async updateTasks(params: {
    where: Prisma.TasksWhereUniqueInput;
    data: Prisma.TasksUpdateInput;
  }): Promise<Tasks> {
    const { data, where } = params;
    return this.prisma.tasks.update({
      data,
      where,
    });
  }

  async deleteTasks(where: Prisma.TasksWhereUniqueInput): Promise<Tasks> {
    return this.prisma.tasks.delete({
      where,
    });
  }
}
