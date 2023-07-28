import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // Define fake users with credentials
    const users = [
      { id: 1, username: 'user@demo.com', password: '123456' },
    ];

    // Fake authentication endpoint
    if (url.endsWith('/login') && method === 'POST') {

      const { username, password } = body;
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        const notFoundError = new Error('Not Found');
        return throwError(notFoundError);
      }
      return okResponse({ id: user.id, username: user.username, token: 'fake-token' });
    }

    // Pass through any other requests
    return next.handle(request);
  }
}


// Helper functions for creating responses
const okResponse = (body: any) => of(new HttpResponse({ status: 200, body }));

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
