"use strict";
var readOnlyExamples = {
    prop1: 'read-only string',
    prop2: {
        nested1: 42,
        nested2: {
            nestedDeep: true,
        },
    },
};
var requiredReadOnlyExample = {
    prop1: 'required and read-only string',
    prop2: {
        nested1: 42,
        nested2: {
            deep: true,
        },
    },
};
var upperCaseExample = {
    PROP1: 'value1',
    PROP2: 42,
};
var ordinaryObject = {
    prop1: 'value1',
    prop2: 42,
};
var propertyDescriptorObject = {
    prop1: { value: 'value1', writable: true, enumerable: true, configurable: true },
    prop2: { value: 42, writable: true, enumerable: true, configurable: true },
};
