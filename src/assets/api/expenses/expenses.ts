import { IExpense } from '../../../app/models/expenses';
import { BehaviorSubject } from 'rxjs';

export const expenses = new BehaviorSubject<IExpense[]>([]);
