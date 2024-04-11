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
### [![npm package](https://img.shields.io/npm/v/@rigu/js-toolkit.svg?style=flat-square)](https://www.npmjs.com/package/@rigu/js-toolkit)
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

* ### `isString( value )` 
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

* #### `isStringNotEmpty( value )` 
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

* #### `defaultEmpty( value )` 
* #### `emptyDefault( value )`
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

* ####  `lowerCaseIfString( value )`
* ####  `lowerCase( value )`
    *Return lower case if the argument object type is string, otherwise return the provided value*
    ```javascript
    lowerCaseIfString('AbCdEfgH');  // return 'abcdefgh'
    lowerCaseIfString('');          // return ''
  
    lowerCaseIfString(['AbCd', 'EfgH']);    // return ['abcd', 'efgh']
    lowerCaseIfString([1234, 'EfgH']);      // return [1234, 'efgh']
  
    lowerCaseIfString(null);            // return null
    lowerCaseIfString(undefined);       // return undefined
    lowerCaseIfString(0);               // return 0
    lowerCaseIfString(1);               // return 1
    lowerCaseIfString(true);            // return true
    lowerCaseIfString([]);              // return []
    lowerCaseIfString([123, 456]);      // return [123, 456]
    lowerCaseIfString([true, false]);   // return [true, false]
    ```
<br>

* ####  `upperCaseIfString( value )`
* ####  `upperCase( value )`
    *Return upper case if the argument object type is string, otherwise return the provided value*
    ```javascript
    upperCaseIfString('AbCdEfgH');  // return 'ABCDEFGH'
    upperCaseIfString('');          // return ''
  
    upperCaseIfString(['AbCd', 'EfgH']);    // return ['ABCD', 'EFGH']
    upperCaseIfString([1234, 'EfgH']);      // return [1234, 'EFGH']
  
    upperCaseIfString(null);            // return null
    upperCaseIfString(undefined);       // return undefined
    upperCaseIfString(0);               // return 0
    upperCaseIfString(1);               // return 1
    upperCaseIfString(true);            // return true
    upperCaseIfString([]);              // return []
    upperCaseIfString([123, 456]);      // return [123, 456]
    upperCaseIfString([true, false]);   // return [true, false]
    ```
<br>

* ####  `includeIgnoreCase( strToCheck, value )`
    *Check if strToCheck include the value, ignoring case*
    ```javascript
    ```
<br>

* ####  `capitalize( value, returnEmptyIfNull = true )`
    *Capitalize string value in a null-safe manner*<br>
    *Return empty string if null or undefined value is provided*<br>
    *If the flag `returnEmptyIfNull` is set to `false`, return the provided value if is undefined, null, or is not string*
    ```javascript
    capitalize('abc');          // return 'Abc'
    capitalize('abc', false);   // return 'Abc'
  
    capitalize(['abc', 123]);           // return ['Abc', 123]
    capitalize(['abc', 123], false);    // return ['Abc', 123]
    
    capitalize('');         // return ''
    capitalize(undefined);  // return ''
    capitalize(null);       // return ''
    capitalize(0);          // return ''
    capitalize(1);          // return ''
    capitalize(true);       // return ''
    capitalize([]);         // return ''
    capitalize([123]);      // return '';
  
    capitalize('', false);         // return ''
    capitalize(undefined, false);  // return undefined
    capitalize(null, false);       // return null
    capitalize(0, false);          // return 0
    capitalize(1, false);          // return 1
    capitalize(true, false);       // return true
    capitalize([], false);         // return []
    capitalize([123], false);      // return [123];
    ```
<br>

* #### `compareIgnoreCase( str1, str2 )`
    *Compares two strings ignoring case and special chars in a null-safe manner*
    ```javascript
    compareIgnoreCase(undefined, undefined); // return true
    compareIgnoreCase(undefined, null);      // return false
    compareIgnoreCase(null, null);           // return true
    compareIgnoreCase('','');                // return true
    compareIgnoreCase('ast', 'ast');         // return true
    compareIgnoreCase('âșț', 'ast');         // return true
    compareIgnoreCase('Ast', 'asT');         // return true
    compareIgnoreCase('âȘț', 'Ast');         // return true
    ```
<br>

### **Array utils**
<!-- eslint-disable no-new-wrappers -->
* #### `asArray( value )`
* #### `arrayOf( value )`
    *Improved version of **Array.of***
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

* #### `isNotEmpty( value )` 
* #### `notEmpty( value )`
    *Check if object is array, and is not empty in a null-safe manner*
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
* #### `isDefined( value )`
    *Check if object is defined*
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

* #### `asDefined( value )`
    *Return empty object if the obj is not defined, otherwise the same object* 
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

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
