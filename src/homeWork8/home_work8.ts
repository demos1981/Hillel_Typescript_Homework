//Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface IExamples {
  prop1: string;
  prop2: {
    nested1: number;
    nested2: {
      nestedDeep: boolean;
    };
  };
}

const readOnlyExamples: DeepReadonly<IExamples> = {
  prop1: 'read-only string',
  prop2: {
    nested1: 42,
    nested2: {
      nestedDeep: true,
    },
  },
};

//Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

interface IDeepRequire {
  prop1?: string;
  prop2?: {
    nested1?: number;
    nested2?: {
      deep?: boolean;
    };
  };
}

const requiredReadOnlyExample: DeepRequireReadonly<IDeepRequire> = {
  prop1: 'required and read-only string',
  prop2: {
    nested1: 42,
    nested2: {
      deep: true,
    },
  },
};

//Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

interface IUpperCase {
  prop1: string;
  prop2: number;
}

const upperCaseExample: UpperCaseKeys<IUpperCase> = {
  PROP1: 'value1',
  PROP2: 42,
};

//І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

/*interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}*/

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

interface IForPropertyDescriptor {
  prop1: string;
  prop2: number;
}

const ordinaryObject: IForPropertyDescriptor = {
  prop1: 'value1',
  prop2: 42,
};

const propertyDescriptorObject: ObjectToPropertyDescriptor<IForPropertyDescriptor> = {
  prop1: { value: 'value1', writable: true, enumerable: true, configurable: true },
  prop2: { value: 42, writable: true, enumerable: true, configurable: true },
};
