# Blog 1 :

## Interfaces vs Types in TypeScript: What’s the Difference?

While both **interfaces** and **types** can be used to describe the structure of objects and the shape of data in TypeScript, `interfaces`  can just define the shape of an object. 
But `type`  can define all of data type including object , array , string ,boolean etc:
### 1. Defining Object Shapes

 `interfaces`  can just define the shape of an object. 
But `type`  can define all of data type including object , array , string ,boolean etc.


##### Example: Using `interface` and `type` to define an object shape

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};
type Name = string ;
type Arr1 = number[];
type isStudent = boolean;

interface Arr2 = number[]  // this is not gonna work becasue interface only work on object //
```

# Blog 2 : 
## Use of the `keyof` Keyword
The `keyof` keyword in TypeScript is a type operator that can be used to extract the keys of a given type. When you apply `keyof` to an object type, it returns a union type of all the keys of that object. This is extremely useful when you want to restrict what keys can be used in your code.
```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // "name" | "age"

const key1: PersonKeys = "name"; // Valid
const key2: PersonKeys = "age";  // Valid
const key3: PersonKeys = "address"; // Error: Type '"address"' is not assignable to type '"name" | "age"'
```
---

