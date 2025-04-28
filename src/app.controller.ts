import { Controller, ExecutionContext, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const request: Request = context.switchToHttp().getRequest();
  //   // const user = request.session.user;
  //   return false;
  // }
}
