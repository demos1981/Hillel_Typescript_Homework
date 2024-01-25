// Потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
//Як параметр типу повинен обов'язково виступати функціональний тип.
type ConditionalReturnType<T> = T extends (...params: any[]) => infer R ? R : never;

function exampleFunction1(): string {
  return 'Hello';
}

function exampleFunction2(): number {
  return 42;
}

function exampleFunction3(): boolean {
  return true;
}
const result1: ConditionalReturnType<typeof exampleFunction1> = 'Some string';
const result2: ConditionalReturnType<typeof exampleFunction2> = 123;
const result3: ConditionalReturnType<typeof exampleFunction3> = false;

//Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж,
// де перше значення - це тип, що функція повертає, а другий - тип її параметру

type FunctionTuple<T> = T extends (params: infer Arg) => infer Return ? [Return, Arg] : never;

function exampleFunction(value: number): string {
  return value.toString();
}

const funcTuple: FunctionTuple<typeof exampleFunction> = ['new', 42];
