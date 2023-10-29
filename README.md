<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# js-toolkit
A set of JavaScript utils to check and manage javascript string, array and object (with TypeScript typings)

<section class="installation">
## Installation

```bash
# NPM
npm install @rigu/js-toolkit

# Yarn
yarn add @rigu/js-toolkit
```

</section>

## Usage

<!-- eslint-disable no-new-wrappers -->

```javascript
import { asArray, emptyDefault, isNotEmpty, isStringNotEmpty } from '@rigu/js-toolkit';
```


### String  
<!-- eslint-disable no-new-wrappers -->
| Function | Description | Examples |
| :--- | :--- | :--- |
| `compareIgnoreCase( str1, str2 )` | Compares two strings ignoring case and special chars <br> in a null-safe manner |`(undefined, undefined); // return true`<br>`(undefined, null);      // return false`<br>`(null, null);           // return true`<br>`('','');                // return true`<br>`('ast', 'ast');         // return true`<br>`('âșț', 'ast');         // return true`|
| `isString( value )` | Check if value is a string type |`isString(undefined); // return false`<br>`isString(null);      // return false`<br>`isString(0);         // return false`<br>`isString(1);         // return false`<br>`isString('');        // return true`<br>`isString('a');       // return true`<br>`isString([]);        // return false`|
| `isStringNotEmpty( value )` | Check if value is a string type <br > and if is not empty|`isStringNotEmpty(undefined); // false`<br>`isStringNotEmpty(null);      // false`<br>`isStringNotEmpty(0);         // false`<br>`isStringNotEmpty(1);         // false`<br>`isStringNotEmpty('');        // false`<br>`isStringNotEmpty('a');       // true`<br>`isStringNotEmpty([]);        // false`<br>`isStringNotEmpty(['abc']);   // false`|
| `defaultEmpty( value )` <br>`emptyDefault( value )` | Return empty string <br>if provided null or undefined |`defaultEmpty(undefined); // return ''`<br>`defaultEmpty(null);      // return ''`<br>`defaultEmpty(0);         // return 0`<br>`defaultEmpty(1);         // return 1`<br>`defaultEmpty('');        // return ''`<br>`defaultEmpty('a');       // return 'a'`<br>`defaultEmpty([]);        // return []`|
| `lowerCaseIfString( value )` | | |
| `upperCaseIfString( value )` | | |
| `includeIgnoreCase( value )` | | |
| `capitalize( value )` | | |


### Array   
<!-- eslint-disable no-new-wrappers -->
| Function | Description | Examples |
| :--- | :--- | :--- |
| `asArray( value )` <br> `arrayOf( value )` | Improved version of **Array.of**  | `asArray(undefined); // return []`<br>`asArray(null);      // return []`<br>`asArray('');        // return ['']`<br>`asArray('abc');     // return ['abc']`<br>`asArray(['abc']);   // return ['abc']`<br>`asArray(11);        // return [11]`<br>`asArray([11]);      // return [11]`<br>`asArray([5, 6, 7]); // return [5, 6, 7]`|
| `isNotEmpty( value )` <br> `notEmpty( value )` | Check if object is array, and is not empty in a null-safe manner |`isNotEmpty(undefined); // return false`<br>`isNotEmpty(null);      // return false`<br>`isNotEmpty(123);       // return false`<br>`isNotEmpty([]);        // return false`<br>`isNotEmpty('');        // return false`<br>`isNotEmpty('a');       // return true`<br>`isNotEmpty('abc');     // return true`<br>`isNotEmpty([1]);       // return true`|

### Object  
<!-- eslint-disable no-new-wrappers -->
| Function | Description | Examples |
| :--- | :--- | :--- |
| `isDefined( value )` | Check if object is defined |`isDefined(undefined); // return false`<br>`isDefined(null);      // return false`<br>`isDefined(0);         // return true`<br>`isDefined(1);         // return true`<br>`isDefined('');        // return true`<br>`isDefined('a');       // return true`<br>`isDefined('[]');      // return true`|
| `asDefined( value )` | Return empty object if the obj is not defined, <br>otherwise the same object |`asDefined(undefined); // return {}`<br>`asDefined(null);      // return {}`<br>`asDefined(0);         // return 0`<br>`asDefined(1);         // return 1`<br>`asDefined('');        // return ''`<br>`asDefined('a');       // return 'a'`<br>`asDefined('[]');      // return []`|

