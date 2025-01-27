// src/interceptors/cors.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class CorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const allowedOrigin = 'http://localhost:4200'; // Your frontend URL

    // Set CORS headers for all requests
    response.header('Access-Control-Allow-Origin', allowedOrigin);
    response.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials (cookies, Authorization headers, etc.)

    // Handle pre-flight request (OPTIONS)
    if (request.method === 'OPTIONS') {
      response.status(204).send(); // Respond with 204 No Content for OPTIONS request
      return of(null); // Return an empty observable to finish the request
    }

    // For other methods (GET, POST, PATCH, DELETE), continue with the request
    return next.handle();
  }
}
