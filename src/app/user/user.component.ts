import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string; //decorator
  // @Input({ required: true }) name!: string;   //decorater
  // avatar = input.required<string>(); //signal
  // name = input.required<string>(); //signal
  @Input({ required: true }) userObject!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Output()
  select = new EventEmitter<string>();

  imagePath = computed(() => 'assets/users/' + this.userObject.avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.userObject.id);
  }
}
