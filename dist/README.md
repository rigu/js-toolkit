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


### **String utils**
<!-- eslint-disable no-new-wrappers -->

### `isString( value )`
*Check if value is a string type*
```javascript
isString(undefined); // return false
isString(null);      // return false
isString(0);         // return false
isString(1);         // return false
isString('');        // return true
isString('a');       // return true
isString([]);        // return false
```
<br>

#### `isStringNotEmpty( value )`
*Check if value is a string type and if is not empty*
```javascript
isStringNotEmpty(undefined); // false
isStringNotEmpty(null);      // false
isStringNotEmpty(0);         // false
isStringNotEmpty(1);         // false
isStringNotEmpty('');        // false
isStringNotEmpty('a');       // true
isStringNotEmpty([]);        // false
isStringNotEmpty(['abc']);   // false
```
<br>

#### `defaultEmpty( value )` `emptyDefault( value )`
*Return empty string if provided null or undefined*
```javascript
defaultEmpty(undefined); // return ''
defaultEmpty(null);      // return ''
defaultEmpty(0);         // return 0
defaultEmpty(1);         // return 1
defaultEmpty('');        // return ''
defaultEmpty('a');       // return 'a'
defaultEmpty([]);        // return []`
```
<br>

####  `lowerCaseIfString( value )`
<br>

####  `upperCaseIfString( value )`
<br>

####  `includeIgnoreCase( value )`
<br>

####  `capitalize( value )`
<br>

#### `compareIgnoreCase( str1, str2 )`
* Compares two strings ignoring case and special chars in a null-safe manner
```javascript
compareIgnoreCase(undefined, undefined); // return true
compareIgnoreCase(undefined, null);      // return false
compareIgnoreCase(null, null);           // return true
compareIgnoreCase('','');                // return true
compareIgnoreCase('ast', 'ast');         // return true
compareIgnoreCase('âșț', 'ast');         // return true
```
<br>

### **Array utils**
<!-- eslint-disable no-new-wrappers -->
#### `asArray( value )`  `arrayOf( value )`
* Improved version of **Array.of**
```javascript
asArray(undefined); // return []
asArray(null);      // return []
asArray('');        // return ['']
asArray('abc');     // return ['abc']
asArray(['abc']);   // return ['abc']
asArray(11);        // return [11]
asArray([11]);      // return [11]
asArray([5, 6, 7]); // return [5, 6, 7]`
```
<br>

#### `isNotEmpty( value )` `notEmpty( value )`
* Check if object is array, and is not empty in a null-safe manner
```javascript
isNotEmpty(undefined); // return false
isNotEmpty(null);      // return false
isNotEmpty(123);       // return false
isNotEmpty([]);        // return false
isNotEmpty('');        // return false
isNotEmpty('a');       // return true
isNotEmpty('abc');     // return true
isNotEmpty([1]);       // return true
```
<br>

### **Object utils**
<!-- eslint-disable no-new-wrappers -->
#### `isDefined( value )`
* Check if object is defined
```javascript
isDefined(undefined); // return false
isDefined(null);      // return false
isDefined(0);         // return true
isDefined(1);         // return true
isDefined('');        // return true
isDefined('a');       // return true
isDefined('[]');      // return true
```
<br>

#### `asDefined( value )`
* Return empty object if the obj is not defined, otherwise the same object
```javascript
asDefined(undefined); // return {}
asDefined(null);      // return {}
asDefined(0);         // return 0
asDefined(1);         // return 1
asDefined('');        // return ''
asDefined('a');       // return 'a'
asDefined('[]');      // return []
```
<br>

