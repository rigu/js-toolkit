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

<section class="usage">
   ## Usage

<!-- eslint-disable no-new-wrappers -->

```javascript
import { asArray, emptyDefault, isNotEmpty, isStringNotEmpty } from '@rigu/js-toolkit';
```

   #### asArray( value )
<!-- eslint-disable no-new-wrappers -->

```javascript
let a = asArray(null);  // return []
a = asArray('');        // return ['']
a = asArray('abc');     // return ['abc']
a = asArray(['abc']);   // return ['abc']
a = asArray(11);        // return [11]
a = asArray([11]);      // return [11]
a = asArray([5, 6, 7]); // return [5, 6, 7]

```

</section>
