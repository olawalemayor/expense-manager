export interface IExpense {
  id: number;
  date: Date;
  merchant: string;
  status: Status;
  total: number;
  comment?: string;
  receipt?: string;
}

enum Status {
  inProgress = 'in progress',
  reImbursed = 'reimbursed',
  new = 'new',
}
