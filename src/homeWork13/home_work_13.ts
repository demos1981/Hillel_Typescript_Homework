interface INote {
  //создання інтерфейсу який містить у собі поля нотатків
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  editedAt: Date | null;
  status: 'completed' | 'pending';
  confirmationRequired: boolean;
}
//два типи нотатків
enum EnumNote {
  defaultNote,
  mustToProveNote,
}
type CheckNote = keyof typeof EnumNote;
class TodoList {
  //імпліментація класу який создає, редагує та видаляє нотатки а ще сортирує за конкретними значеннями
  public notes: INote[] = [];

  addNote(name: string, content: string, confirmationRequired: boolean = false): void {
    //додавання нотатків
    if (!name || !content) {
      throw new Error('Note name and content cannot be empty!');
    }
    const id = Math.random().toString(36).substring(2, 15);
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
    //видалення нотатків
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  editNote(key: CheckNote, id: string, name?: string, content?: string): void {
    const checkNoteItem = EnumNote[key];
    if (checkNoteItem <= EnumNote.defaultNote) {
      console.log('it is default note');
    } else {
      console.log('you must choose');
    }
    //редагування нотатків
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
    return [...this.notes];
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

// Перевірка
const todoList = new TodoList();
todoList.addNote('Buy groceries', 'Milk, bread, eggs');
todoList.addNote('Finish project', 'Write unit tests', true);
todoList.editNote('defaultNote', 'some id', 'My new todo', 'it is my new todo list item');

todoList.markCompleted(todoList.notes[0].id);
console.log(todoList.getAllNotes());

const searchedNotes = todoList.searchNotes('bread');
console.log(searchedNotes);

todoList.sortNotes('status');
console.log(todoList.getAllNotes());

todoList.sortNotes('createdAt', true);
console.log(todoList.getAllNotes());
