# Sudoo-Random

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Random/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Random/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Random/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Random)
[![npm version](https://badge.fury.io/js/%40sudoo%2Frandom.svg)](https://badge.fury.io/js/%40sudoo%2Frandom)
[![downloads](https://img.shields.io/npm/dm/@sudoo/random.svg)](https://www.npmjs.com/package/@sudoo/random)

Random

## Install

```sh
yarn add @sudoo/random
# Or
npm install @sudoo/random --save
```

## Generate Random String

```ts
import { randomString } from "@sudoo/random";

randomString();
randomString(6);
```

## Generate Random Numeric String

```ts
import { randomNumericString } from "@sudoo/random";

randomNumericString();
randomNumericString(6);
```
