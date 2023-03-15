import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { nextTick } from 'process';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before the request
    // is handled by request handler
    console.log("I'm running before the handler", context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        console.log('Im running before response is sent out', data);
      }),
    );
  }
}
