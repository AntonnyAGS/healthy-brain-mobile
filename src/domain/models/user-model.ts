export interface UserModel {
  _id: string;
  name: string;
  email: string;
  userType: string;
  birthdayDate: Date;
  healthArea?: string;
  description?: string;
}
