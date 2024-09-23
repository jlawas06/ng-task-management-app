import { FormControl } from '@angular/forms';

export interface TaskFormGroup {
  id: FormControl<number | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  completed: FormControl<boolean | null>;
  dueDate: FormControl<Date | null>;
}
