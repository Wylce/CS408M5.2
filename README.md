# Web Dev Starter Code

Wylie Hansen  
CS 408  
September 16, 2024

## Overview

A simple informational website about bears that's been edited as an exercise in webpage accessibility.

## Accessibility Lab Answers

- Color: Putting the text and background colors into WebAIM's contrast checker gives a 2.79:1 contrast ratio, which fails for all text type tests. I changed the colors to a simpler black and white, and made it darkmode style because I personally find that easier on my eyes.

- Keyboard navigation: 
1. Pressing tab puts focus at the top of the navigtation bar first, then it cycles through the nav bar and into the search bar, then it skips past the all the text content to the audio clip lower on the page. After the audio clip it goes down to the comments section, then back up to the related links in the sidebar.
2. I updated the article section with more appropriate elements, replacing all the divs with paragraphs and all the font size options with equivalent headers.
3. Navigation menus should go in a <nav> element.

- The Images: I added descriptive alt text to the two images

- The Audio Player
1. I transcribed the audio into a paragraph that can be toggled by a button, the same way that the show-hide comments button works.
2. I replaced the "your browser doesn't support HTML5 audio" fallback paragraph with a download link for the mp3 file.

- The Forms:
1. I added an aria-label to the text input box.
2. I put the labels into more explicit label elements.

- The Show/Hide Comment Control: The button already was keyboard accessible when I tried it in Firefox and in VSCode's preview, but I added a tabindex property to make it explicit.

- The Table: I added a short caption and made sure all the column and row headers had the appropriate elements.

- Other Considerations:
1. I downloaded the Site Improve Accesibility Checker for Firefox to check my page, and it recommended adding a language specification and increasing the size of interactable elements to make them easier for all users to click
2. I added some general quality of life styling on the links and buttons to make them more obviously interactable, like hover and active effects, and tooltips via titles on the buttons. Also increased the font size a little cause it felt small.


## Sources and Credits

- For HTML and CSS Syntax help: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web

- Shane Panter, for starter code: https://github.com/shanep/web-dev-starter
