// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-id-init-exhausted.case
// - src/dstr-binding/default/cls-decl-private-gen-meth-static-dflt.template
/*---
description: Destructuring initializer with an exhausted iterator (private static class expression generator method (default parameter))
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
features: [class, class-static-methods-private, generators, destructuring-binding, default-parameters]
flags: [generated]
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be the result of ClassDefinitionEvaluation of ClassTail with
       argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
        b. Else,
           Let status be the result of performing PropertyDefinitionEvaluation for
           m with arguments F and false.
    [...]

    14.4.13 Runtime Semantics: PropertyDefinitionEvaluation

    GeneratorMethod : * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this GeneratorMethod is strict mode code,
       let strict be true. Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be GeneratorFunctionCreate(Method,
       StrictFormalParameters, GeneratorBody, scope, strict).

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    SingleNameBinding : BindingIdentifier Initializeropt

    [...]
    5. If iteratorRecord.[[done]] is true, let v be undefined.
    6. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       [...]
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).
---*/

var callCount = 0;
class C {
  static * #method([x = 23] = []) {
    assert.sameValue(x, 23);
    callCount = callCount + 1;
  }

  static get method() {
    return this.#method;
  }
};

C.method().next();
assert.sameValue(callCount, 1, 'method invoked exactly once');

reportCompare(0, 0);
