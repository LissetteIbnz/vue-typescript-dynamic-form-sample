import { PlanEntity } from '@/models';
import Vue from 'vue';
import { } from 'vuelidate';

export interface ProcessStep {
  data: FormAddress | FormUserDetails | FormReviewOrder | FormPlanPicker;
  valid: boolean;
}

export interface FormWizard {
  plan: PlanEntity | null;
  email: string | null;
  name: string | null;
  password: string | null;
  address: string | null;
  recipient: string | null;
  chocolate: boolean;
  otherTreat: boolean;
}

export interface FormAddress {
  address: string | null;
  recipient: string | null;
}

export interface FormUserDetails {
  email: string | null;
  password: string | null;
  name: string | null;
}

export interface FormReviewOrder {
  chocolate: boolean;
  otherTreat: boolean;
}

export interface FormPlanPicker {
  plan: PlanEntity| null;
}
