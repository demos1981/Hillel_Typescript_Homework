//Ви маєте JS код, який необхідно розширити анотацією примітивів, масивів, об'єктів (за необхідності),
// подумати над використанням перерахувань,
//а також реалізувати описані у вигляді коментарів властивості та методи.
interface Lecturers {
  name: string;
  surname: string;
  position: number;
  company: string;
  experience: string;
  courses: string;
  contacts: string;
}
class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: string[] = [];
  private _lecturers: Lecturers[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): Lecturers[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    this._areas.push(area);
  }

  removeArea(area: string): void {
    const areaItem = this._areas.indexOf(area);
    if (areaItem !== -1) {
      this._areas.splice(areaItem, 1);
    }
  }

  addLecturer(lecturer: Lecturers): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturer: Lecturers): void {
    const lecturerItem = this._lecturers.indexOf(lecturer);
    if (lecturerItem !== -1) {
      this._lecturers.splice(lecturerItem, 1);
    }
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: string[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  get levels(): string[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(levels: string): void {
    this._levels.push(levels);
  }

  removeLevel(levels: string): void {
    const levelItem = this._levels.indexOf(levels);
    if (levelItem !== -1) {
      this._levels.splice(levelItem, 1);
    }
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: number[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string, groups: number[]) {
    this._name = name;
    this._description = description;
    this._groups = groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): number[] {
    return this._groups;
  }

  addGroup(group: number): void {
    this._groups.push(group);
  }

  removeGroupe(groupe: number): void {
    const groupeItem = this._groups.indexOf(groupe);
    if (groupeItem !== -1) {
      this._groups.splice(groupeItem, 1);
    }
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: string;
  private _status: string;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName: string, levelName: string) {
    this._area = directionName;
    this._status = levelName;
  }

  get area(): string {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    const index = this._students.indexOf(student);
    if (index > -1) {
      this._students.splice(index, 1);
    }
  }

  setStatus(status: string) {
    this._status = status;
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students.sort(
      (a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: (string | number)[] = []; // workName: mark
  private _visits: boolean[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(workName: string[], mark: number[]): void {
    this._grades[workName] = mark;
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
