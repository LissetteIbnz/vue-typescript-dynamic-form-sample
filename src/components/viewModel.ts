import { PlanEntity } from '@/models';

export interface formWizard {
  plan: PlanEntity | null;
  email: string | null;
  name: string | null;
  password: string | null;
  address: string | null;
  recipient: string | null;
  chocolate: boolean;
  otherTreat: boolean;
}

export interface formAddress {
  address: string | null;
  recipient: string | null;
}

export interface formUserDetails {
  email: string | null;
  password: string | null;
  name: string | null;
}

export interface formReviewOrder {
  chocolate: boolean;
  otherTreat: boolean;
}
