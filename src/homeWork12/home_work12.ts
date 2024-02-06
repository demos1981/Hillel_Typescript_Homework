//Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.

//Створіть декоратори MinLength, MaxLength та Email

// DeprecatedMethod decorator
function DeprecatedMethod(reason: string, replacementMethod?: string): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.warn(`Warning: ${propertyKey.toString()} is deprecated. Reason: ${reason}`);
      if (replacementMethod) {
        console.warn(`Consider using ${replacementMethod} instead.`);
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

// MinLength decorator
function MinLength(minLength: number): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (value: string) {
      if (value.length < minLength) {
        throw new Error(`${propertyKey.toString()} requires a minimum length of ${minLength}`);
      }

      return originalMethod.apply(this, [value]);
    };

    return descriptor;
  };
}

// MaxLength decorator
function MaxLength(maxLength: number): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (value: string) {
      if (value.length > maxLength) {
        throw new Error(`${propertyKey.toString()} requires a maximum length of ${maxLength}`);
      }

      return originalMethod.apply(this, [value]);
    };

    return descriptor;
  };
}

// Email decorator
function Email(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error(`${propertyKey.toString()} requires a valid email address`);
    }

    return originalMethod.apply(this, [email]);
  };

  return descriptor;
}

class ExperimentalClass {
  @DeprecatedMethod('Use the newMethod instead.', 'newMethod')
  public oldMethod() {
    console.log('This is the old method.');
  }

  @MinLength(5)
  validateLength(value: string) {
    console.log(`Value '${value}' meets the minimum length requirement.`);
  }

  @MaxLength(10)
  validateMaxLength(value: string) {
    console.log(`Value '${value}' meets the maximum length requirement.`);
  }

  @Email
  validateEmail(email: string) {
    console.log(`Email '${email}' is valid.`);
  }
}

const exampleInstance = new ExperimentalClass();
exampleInstance.oldMethod();
exampleInstance.validateLength('Hello');
exampleInstance.validateMaxLength('ShortText');
exampleInstance.validateEmail('test@example.com');
