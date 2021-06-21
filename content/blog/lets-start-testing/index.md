---
title: "Let's Start Testing"
date: "2021-06-21T03:48:29.895Z"
description: "Upon setting up this new Blog, one of my goals in moving the codebase to a JS-based platform (Gatsby), was to begin delving into unit testing with Jest. Let's consider how one initial test can help illuminate key code organization changes for my consideration moving forward."
---

## The Setup

To start with, I would like to applaud Gatsby for their excellent 
[documentation](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/) on Unit Testing. It is one thing to include step-by-step that works flawlessly, but it is even more helpful when the documentation outlines the *why*.

My setup for unit testing here follows all the reccomendations found in the documentation above, as I am a huge proponent of adhering to community standards when they are available. We can probably delve more into that topic in a future post. 

## The Test

My first test was modified from the Gatsby documentation example. The documentation outlines how to test a Header component, but I do not have such a component (more on that in a minute)

```js
import React from "react"
import renderer from "react-test-renderer"
import Bio from "../bio"

describe("Bio", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Bio />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```

This test simply renders my Bio component, creates a snapshot of it, and then all future tests will ensure that this snapshot will be how the component renders. This initial Regression Test is valuable, as it will ensure that the static side effects of this component will render as expected in the future.

This test could definitely be modified to only look at the text content, which would make it less brittle. Currently, the snaptop contains the entire DOM structure, along with CSS class. I am not comfortable with this because it is likely I will make adjustments and tweaks to my Tailwind CSS classes in the future.

For now, simply introducing this test has helped illumunate some issues with my code structure.

## Future Implications

It is immediately clear to me after implementing this first test, that my layout is not atomic enough. I have a total of 3 components, one of which as an amalgamation of my Layout. 

As I build out this test suite, I should at least factor out my Layout to make use of encapsulated Head, Footer, and Nav components.
