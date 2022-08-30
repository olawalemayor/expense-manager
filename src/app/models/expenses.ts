export interface IExpense {
  id?: number;
  date: Date;
  merchant: string;
  status?: string;
  total: number;
  comment: string;
  receipt: string;
}
