import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Task } from '../interfaces';

@Component({
  selector: 'app-features-tasks-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './features-tasks-detail.component.html',
  styleUrl: './features-tasks-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksDetailComponent implements OnInit {
  id: number = 0;
  task: Task = {
    id: 1,
    title: 'Complete project proposal',
    description: 'Finish writing the project proposal for the client meeting',
    completed: true,
    dueDate: new Date('2024-09-30'),
  };
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
