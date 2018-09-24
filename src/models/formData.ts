import { PlanEntity } from './planEntity';

export interface FormData {
  plan: PlanEntity | null;
  email: string | null;
  name: string | null;
  password: string | null;
  address: string | null;
  recipient: string | null;
  chocolate: boolean;
  otherTreat: boolean;
}
