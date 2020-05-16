import { HttpRequest, HttpResponse } from '../protocols/http'
import {} from '../erros/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statyscode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statyscode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
