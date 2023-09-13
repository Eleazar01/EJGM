import {Component} from '@angular/core';
// import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class TareasComponent {
  // movies = [
  //   'Episodio I - La amenaza fantasma',
  //   'Episodio II - El ataque de los clones',
  //   'Episodio III - Revenge of the Sith',
  //   'Episodio IV - A New Hope',
  //   'Episodio V - The Empire Strikes Back',
  //   'Episodio VI - Return of the Jedi',
  //   'Episodio VII - The Force Awakens',
  //   'Episodio VIII - The Last Jedi',
  //   'Episodio IX – The Rise of Skywalker',
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }
  todo = ['Episodio I - La amenaza fantasma', 'Episodio II - El ataque de los clones', 'Episodio III - La venganza de los Sith', 'Episodio IV - Una nueva esperanza'];

  done = ['Episodio V - El imperio contraataca', 'Episodio VI - El retorno del Jedi', 'Episodio VII - El despertar de la fuerza', 'Episodio VIII - Los últimos Jedi', 'Episode IX – El ascenso de Skywalker'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
