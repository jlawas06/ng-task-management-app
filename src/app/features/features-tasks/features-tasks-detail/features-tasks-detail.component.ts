import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../interfaces';
import { TaskSelectors } from '../state';

@Component({
  selector: 'app-features-tasks-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './features-tasks-detail.component.html',
  styleUrl: './features-tasks-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksDetailComponent implements OnInit {
  task$!: Observable<Task | undefined>;
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.task$ = this.store.select(TaskSelectors.selectTaskById(id));
  }
}
