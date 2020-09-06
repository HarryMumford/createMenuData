# Tech test

# Approach:

_*Following TDD*_

## Inputs and outputs

```
['parent1'] => []

["parent1/parent1child"] => [{title: "parent1", data: ["parent1child"]}]

["parent1/parent1child", 'parent2'] => [{title: "parent1", data: ["parent1child"]}]

["parent1/parent1child", "parent1/parent1child2"] => [{ title: "parent1" data: ["parent1child", "parent1child2"] }]

[
    "parent1/parent1child",
    "parent1/parent1child",
    "parent2/parent1child1"
]

=>

[
    { title: "parent1", data: ["parent1child", "parent1child2"] },
    { title: "parent2", data: ["parent2child"] }
]

[null, undefined, parent1/child1, 10] => { title: 'parent1', data: ['parent1child'] }


```

## Tests (simplest first)

```
it returns empty array when given no children
it returns correct data structure for single parent and single child
it does not return an entry when parent has no children
it returns correct data structure for single parent and 2 children
it returns correct data structure for 2 parents and 3 children
it skips null, undefined, integer
```

![tests](https://github.com/HarryMumford/createMenuData/blob/master/tests.PNG)

## Edge cases

1. If non string entries are passed then they are skipped.
2. If strings are misspelt / not in the parent1child1 format they will still be added as long as there is a '/' in between the parent and child.

## Assumptions

Following the example test, I have assumed the data is always in order. The algorithm does not sort the data if passed unordered (e.g. `['parent1/parent1child8', 'parent1/parent1child1']`)

## Clone this repository

please do not fork it!

## Setup

install yarn or npm globally

run `yarn` or `npm install`

## Challenge

Write some code to implement the function `createMenuData`

Use the test runner `jest` to run the `gradTest.test.js`

Commit your changes and push them up to your own git repositry!
Once done, link us the URL of your solution

## Tips

The data set in the test ends at parent 4, but imagine any number of parents and children could be passed to this function.

When the test passes clean up your code.
It's worth spending time formatting and simplifing thins.
It's more important that humans can read your code than computers.
Software tools like `eslint` do some amazing things 🕶
