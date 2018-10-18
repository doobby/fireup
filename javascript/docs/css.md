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
3. pseudo-classes: mouse hover, checked, first child, etc
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

## Value Categories

1. Numberic value (width, unitless integer)
2. Percentage
3. Color
4. Coordinate Position
5. Function (background, url, calc)

## Length/Size Unit

* absolute units
  * px (Pixels)
  * q, mm, cm, in
  * pt (1/72 inch), pc (12 pt)
* relative units
  * em
  * ex, eh
  * rem
  * vw, vh (relative to viewport)

## Unitless Value

1. "0"
2. `line-weight`: as a multiply factor
3. `animations-iteration-count`: as count

## Percentage

* `width`: relative to parent box
* `font-size`: relative to parent base font size (em)

## Colors

1. Keywords: `red`, `black`, `white` (165 keywords)
2. hex values: `#1234EF`
3. `rgb()`, `hsl()` function (hsl for hue, saturation, lightness)
4. with alpha: `rgba()`, `hsla()`
5. `opacity` (0 to 1.0)

## Functions

* `rgb()`, `hsla()`
* `rotate()`, `translate()`, `calc()`, `url()`
 
## Casecade Algorithm

Indicate the orders of CSS rules matter. 

What selectors win out depends on 3 factors:
1. importance: marked with `!important` which will always win over all others (never use it!)
2. specifity: a measure of how specific a selector is
3. source order:  later rules will win over earlier rules

Mixing is based on rules' properties, not the entire rules.

### Specificity Calculate

Calculate specificity score by accumulate selectors' weights
1. Thousand: inside a `style` attribute
2. Hundred: id selector
3. Ten: class selector, attribute selector, pseudo-class selector
4. One: element selector or pseudo-element selector

## Inheritance

* Some property values applied to an element will be inherited by that element's children, and some won't.
* Which properties are inherited by default and which aren't is largely down to common sense.
* Four property values:
  1. `inherit`
  2. `initial`: browser default or inherit
  3. `unset`: natural value
  4. `revert`: uesr css or user agent style
* Special property `all` which can be used to apply the value to all properties at once