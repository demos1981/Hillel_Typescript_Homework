// Вам необхідно написати додаток Todo list.
// У списку нотаток повинні бути методи для додавання нового запису, видалення, редагування та отримання повної інформації про нотатку за ідентифікатором,
//а так само отримання списку всіх нотаток.
// Крім цього, у користувача має бути можливість позначити нотаток, як виконаний, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконаними.
// Нотатки не повинні бути порожніми.
// Кожний нотаток має назву, зміст, дату створення і редагування та статус.
// Нотатки бувають двох типів. Дефолтні та такі, які вимагають підтвердження при ридагуванні.
// Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка за ім'ям або змістом.
// Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.

interface INote {
  //создання інтерфейсу який має набір полів.
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  editedAt: Date;
  status: 'completed' | 'pending';
  confirmationRequired: boolean;
}

class TodoList {
  //ініціалізація класу який відповідає за створення, редагування та відалення нотаток та пошук і сортування, до класі імплементован інтерфейс
  public notes: INote[] = [];

  addNote(name: string, content: string, confirmationRequired: boolean = false): void {
    //додавання нотаток
    if (!name || !content) {
      throw new Error('Note name and content cannot be empty!');
    }
    const id = Math.random().toString(36).substring(2, 10);
    this.notes.push({
      id,
      name,
      content,
      createdAt: new Date(),
      editedAt: new Date(),
      status: 'pending',
      confirmationRequired,
    });
  }

  deleteNote(id: string): void {
    //видалення нотаток
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  editNote(id: string, name?: string, content?: string): void {
    //редагування нотаток
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      const note = this.notes[index];
      if (name) {
        note.name = name;
      }
      if (content) {
        note.content = content;
      }
      note.editedAt = new Date();
    }
  }

  getNote(id: string): INote | undefined {
    return this.notes.find(note => note.id === id);
  }

  getAllNotes(): INote[] {
    return [...this.notes]; // Return copy to avoid mutation
  }

  markCompleted(id: string): void {
    const note = this.getNote(id);
    if (note) {
      note.status = 'completed';
    }
  }

  getCompletedCount(): number {
    return this.notes.filter(note => note.status === 'completed').length;
  }

  getPendingCount(): number {
    return this.notes.filter(note => note.status === 'pending').length;
  }

  searchNotes(query: string): INote[] {
    return this.notes.filter(
      note =>
        note.name.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  sortNotes(sortBy: 'status' | 'createdAt' = 'createdAt', descending = false): void {
    //сортировка за статусем та датою
    if (sortBy === 'status') {
      this.notes.sort((a, b) => (a.status === b.status ? 0 : a.status < b.status ? -1 : 1));
    } else {
      this.notes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime() * (descending ? -1 : 1));
    }
    if (descending) {
      this.notes.reverse();
    }
  }
}

// Перевіряємо
const todoList = new TodoList();
todoList.addNote('Buy groceries', 'Milk, bread, eggs');
todoList.addNote('Finish project', 'Write unit tests', true);
todoList.markCompleted(todoList.notes[0].id);
console.log(todoList.getAllNotes());

const searchedNotes = todoList.searchNotes('bread');
console.log(searchedNotes);

todoList.sortNotes('status');
console.log(todoList.getAllNotes());

todoList.sortNotes('createdAt', true);
console.log(todoList.getAllNotes());
