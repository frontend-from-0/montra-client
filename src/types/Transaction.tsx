import { Category } from './Category';
import { PaymentFrequency } from './PaymentFrequency';

enum AttachmentType {
  Camera = 'camera',
  Image = 'image',
  Document = 'document',
}

enum AccountType {
  Personal = 'personal',
  Business = 'business',
  Joint = 'joint',
  Corporate = 'corporate',
}

enum Currency {
  USD = 'USD',
  IDR = 'IDR',
  JPY = 'JPY',
  RUB = 'RUB',
  EUR = 'EUR',
  WON = 'WON',
}

export interface Transaction {
  category: Category;
  description?: string;
  attachments?: Array<{
    attachmentType:
      | AttachmentType.Camera
      | AttachmentType.Document
      | AttachmentType.Image;
    url: string;
  }>;
  date: string | Date;
  accountType: AccountType.Personal;
  wallet: string;
  amountWithCurrency: {
    amount: number;
    currency: Currency;
  };
  bank: string;
  paymentSchedule: {
    paymentFrequency: PaymentFrequency;
    endAfter?: string | Date;
  };
}
