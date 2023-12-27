export interface RUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  date_of_birth: string;
  gender: string;
  country: string;
  emailVerified: boolean;
}

export interface LoginUserData {
  email: string;
  password: string;
}
