export interface ICustomer {
  firstName: string;
  lastName: string;
  emailAddress: string;
  dateOfBirth: string;
  yearsOfExperience: number;
  educationLevel: string;
  pointOfContact: number;
}

export class CustomersService {
  register(customer: ICustomer) {
    return fetch('https://dummyjson.com/http/200', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }
}
