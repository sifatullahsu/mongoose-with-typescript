export interface iUser {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  gender: 'male' | 'female';
  role: 'student' | 'admin'
  password: string
}