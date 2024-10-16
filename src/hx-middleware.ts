import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HxRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['hx-request'] !== 'true') {
      const pageId = req.url != '/' ? req.url : '/dashboard'; // Default to dashboard
      res.render('index', { current_page: pageId });
    } else {
      next();
    }
  }
}
