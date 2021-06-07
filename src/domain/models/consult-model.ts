export interface ConsultModel {
  _id: string;
  consultDateTime: Date;
  endDateTime: Date;
  healthProfessionalId: string;
  patientId: string;
  status: string;
}
