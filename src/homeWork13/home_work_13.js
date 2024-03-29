var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TodoList = /** @class */ (function () {
    function TodoList() {
        //імпліментація класу який создає, редагує та видаляє нотатки а ще сортирує за конкретними значеннями
        this.notes = [];
    }
    TodoList.prototype.addNote = function (name, content, confirmationRequired) {
        if (confirmationRequired === void 0) { confirmationRequired = false; }
        if (!name || !content) {
            throw new Error('Note name and content cannot be empty!');
        }
        var id = Math.random().toString(36).substring(2, 15);
        this.notes.push({
            id: id,
            name: name,
            content: content,
            createdAt: new Date(),
            editedAt: new Date(),
            status: 'pending',
            confirmationRequired: confirmationRequired,
        });
    };
    TodoList.prototype.deleteNote = function (id) {
        var index = this.notes.findIndex(function (note) { return note.id === id; });
        if (index !== -1) {
            this.notes.splice(index, 1);
        }
    };
    TodoList.prototype.editNote = function (id, name, content) {
        var index = this.notes.findIndex(function (note) { return note.id === id; });
        if (index !== -1) {
            var note = this.notes[index];
            if (name) {
                note.name = name;
            }
            if (content) {
                note.content = content;
            }
            note.editedAt = new Date();
        }
    };
    TodoList.prototype.getNote = function (id) {
        return this.notes.find(function (note) { return note.id === id; });
    };
    TodoList.prototype.getAllNotes = function () {
        return __spreadArray([], this.notes, true); // Return copy to avoid mutation
    };
    TodoList.prototype.markCompleted = function (id) {
        var note = this.getNote(id);
        if (note) {
            note.status = 'completed';
        }
    };
    TodoList.prototype.getCompletedCount = function () {
        return this.notes.filter(function (note) { return note.status === 'completed'; }).length;
    };
    TodoList.prototype.getPendingCount = function () {
        return this.notes.filter(function (note) { return note.status === 'pending'; }).length;
    };
    TodoList.prototype.searchNotes = function (query) {
        return this.notes.filter(function (note) {
            return note.name.toLowerCase().includes(query.toLowerCase()) ||
                note.content.toLowerCase().includes(query.toLowerCase());
        });
    };
    TodoList.prototype.sortNotes = function (sortBy, descending) {
        if (sortBy === void 0) { sortBy = 'createdAt'; }
        if (descending === void 0) { descending = false; }
        if (sortBy === 'status') {
            this.notes.sort(function (a, b) { return (a.status === b.status ? 0 : a.status < b.status ? -1 : 1); });
        }
        else {
            this.notes.sort(function (a, b) { return a.createdAt.getTime() - b.createdAt.getTime() * (descending ? -1 : 1); });
        }
        if (descending) {
            this.notes.reverse();
        }
    };
    return TodoList;
}());
// Перевірка
var todoList = new TodoList();
todoList.addNote('Buy groceries', 'Milk, bread, eggs');
todoList.addNote('Finish project', 'Write unit tests', true);
todoList.markCompleted(todoList.notes[0].id);
console.log(todoList.getAllNotes());
var searchedNotes = todoList.searchNotes('bread');
console.log(searchedNotes);
todoList.sortNotes('status');
console.log(todoList.getAllNotes());
todoList.sortNotes('createdAt', true);
console.log(todoList.getAllNotes());
