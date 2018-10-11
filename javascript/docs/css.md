# [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)

## How CSS Work

### What is CSS
### How does CSS affect to HTML
### How does CSS work
### DOM: Virtual Element Node which merge html and css information
### Apply CSS to HTML

1. external: link tag
2. internal: style tag
3. inline: style attribute

## CSS Syntax

### declaration: property + value
### ruleset: selector + declaration block
### Cascade Algorithm
### Best Practice

* white space
* comment: c style
* shorthand: `padding-` or `background-`

## Selector

### Categories

1. simple (by type or class or id)
2. attribute
3. pseudo-clases: mouse hover, checked, first child, etc
4. combinators
5. multiple selectors: seperate by comma, reuse rulesets

### Simple Selector

#### Type Selector (`typename`)

#### Class Selector (`.class`)

* match multple elements
* single elements can have multiple class

#### ID Selector (`#id`)

* ID must be unique

#### Universal Selector (`*`)

* Mostly used with combinator

### Attribute Selector

#### Categories
1. Presence and value
2. Substring (regexp)

#### Presence and value

1. `[attr]`: present
2. `[attr=var]`: exact match
3. `[attr~=val]`: in match

#### Substring 

1. `[attr|=val]`: exact `val` or starts with `val-`
2. `[attr^=val]`: starts with
3. `[attr$=val]`: ends with
4. `[attr*=val]`: contains

### Pseudo Selector

#### Categories

1. pseudo-classes
2. pseudo-elements

#### Pseudo-classes (`:keyword`)

Find class elements in certain state, such as
1. mouse hover, link visited, object focus
2. even/odd list item

#### Pseudo-elements (`::keyword`)

* Append or Prefix content to selection (`::after` or `::before`)

### Combinators and Groups of selectors

1. Group: `A,B` (or)
2. Descendant: `A >> B`
3. Child: `A > B`
4. Adjacent sibling: `A + B`
5. General sibling: `A ~ B`