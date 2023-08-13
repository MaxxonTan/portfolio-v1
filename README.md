# Portfolio (V1)
This is **first** version of my portfolio meant to store all things related to my development journey, built with **HTML, SASS and JavaScript**

![image](https://github.com/MaxxonTan/portfolio-v1/assets/59834451/74db3999-c670-496c-968c-11ed1d2f4e5e)

# Local Development 
I run VSCode with the [vscode-live-server](https://github.com/ritwickdey/vscode-live-server) extension. If you don't have access to that, try [this alternative](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_an_extension_in_your_code_editor).

If you also want to play around with CSS, you'll need to have either [Sass installed on the command line](https://sass-lang.com/install/) or the popular [Live Sass Compiler](https://github.com/ritwickdey/vscode-live-sass-compiler). If you're using the command line, run:
1. `cd styles`
2. `sass --watch scss:css`

# Design
I designed this website (both UI and code-wise) with the goal of wanting to keep everything _as simple as possible_. I wanted everyone to be able to view and navigate my website with no fuss, to be able to find what you need to know about me in a glance, to be able to see _(or hear)_ all the information in my portfolio whilst making it look as appealing as possible; **TLDR: Simplicity + Accessibility**

## With that goal in mind my portfolio needed to be:
- [x] **Accessible:** Color contrast, keyboard navigation, works for screen readers, etc.
- [x] **Simple:** You should be able to navigate through the porfolio easy and find whatever you need intuitively i.e no scroll hijacking, too much animations. 

# Tech Stack
- HTML - My whole HTML file isjust under 100 lines! 
- SASS - I love nested syntax and more
- JavaScript - For populating the DOM with JSON

I wanted my code to also reflect my goals as outlined above, so HTML + SCSS and JavaScript is plenty sufficient. This stack also helps with local development and deployment because of how easy everything is to setup.   

## What can be improved
The way the content of the portfolio (work, project) is being stored as am array of JSON object, as shown below, in a variable. _Note: I didn't store it as a `.JSON` file directly because of the complications that comes with loading a JSON file from JavaScript._
```
const work = [
  {
    name: "Name",
    position: "Pos",
    photoPath: "../assets/media/photo.jpg",
    techStack: [
       "HTML"
    ],
    startDate: "May 2023",
    endDate: "Sept 2023",
    details: [
      "Paragraph 1",
      "Paragraph 2",
    ],
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com",
      },
    ],
  },
];
```
This JSON array is then intialized as a global variable and used in `dom-helper.js` to generate DOM elements. While this works fine for now, it does not have any _flexbility_. I'm probably gonna do blogs soon, so I would need to figure a new way of strong content. 

## What I learned
If there's one thing I learned from building this portfolio, it would be _Semantics_. Learning to use _right_ semantic elemnets like `<article>`, `<section>` and how it can help with accessibility has been very helpful. Though I'll need to google for which element to use everytime since there's so many. 

I also learned about how a lot of these tags are hard af to customise. Just look at [this tutorial](https://css-tricks.com/how-to-animate-the-details-element/) on how to animate the opening and closing animation for the `<detail>` element! I often have to resort to "tricks" in order to customise HTML elements.

# References
- [Semantics overview by MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)https://developer.mozilla.org/en-US/docs/Glossary/Semantics
- [Web Accessibility also by MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)https://developer.mozilla.org/en-US/docs/Web/Accessibility
- [SCSS Media Query Mixin by Necromancerx](https://github.com/Necromancerx/media-queries-scss-mixins)https://github.com/Necromancerx/media-queries-scss-mixins

