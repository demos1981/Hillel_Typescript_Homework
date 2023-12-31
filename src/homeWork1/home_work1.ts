//Додаю JS код, який потрібно перевести у TS та додати анотацію типів до примітивів. Не чіпайте обʼєкти та будь що, чого ми ще не розглядали на занятті.
//Замість цього ви можете зараз використовувати any, поки ми не знаємо кращого вибору.

//Перевіряйте код, там є речі, які потрібно додати до класів, не тільки типи. Вам треба зробити рефакторинг, будьте уважні.

class School {
  directions: string[] = [];

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

class Direction {
  private _name: string;
  levels: number[] = [];

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number): void {
    this.levels.push(level);
  }
}

class Level {
  private _name: string;
  private _program: string;
  groups: number[] = [];

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: number): void {
    this.groups.push(group);
  }
}

class Group {
  private _students: Student[] = []; //adding type array Student
  directionName: string;
  levelName: string;

  get students(): Student[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students.sort(
      (a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating() //анотация параметров const
    );

    return sortedStudents;
  }
}

class Student {
  firstName: string;
  lastName: string;
  birthYear: number;
  grades: any = {};
  attendance: string[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: string): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: any = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present: string) => present).length / this.attendance.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
