import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

enum Pages {
  DASHBOARD,
  USERS
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async index(
  ) {
    return {
      current_page: Pages.DASHBOARD
    } 
  }

  @Get('dashboard')
  @Render('dashboard')
  async dashboard(
  ) {
    let user_count = await this.appService.getUserCount()
    return {
      user_count
    } 
  }

  @Get('users')
  @Render('users')
  async users(
  ) {
    let users = await this.appService.getUsers()
    return {
      users
    } 
  }
}


