---
layout: post
title: Heuristic Evaluation
categories: [wk1]
tags: [testing]
---
<section class="intro">
    <p>After conducting a few quick usability tests and a brief heuristic evaluation for each step of the experience playing the domain-pricing game, I discovered many high-level issues in the information hierarchy. The following document will analyze heuristic factors in the original game, separated by game state.</p> <!--more-->
</section>


### Load Screen
I recognize that preloading screens can often be a necessary evil. They can provide a good way to maintain the user's attention, and allow the voice/branding of the app to be present, while **crucial** data is loaded in the background. This raises the first environmental accessibility issue in the game 🎉. The game begins by preloading the *entire* database of possible questions and answers as a JSON object. The benefit to this method is that the game becomes playable offline, and can be easily stored in the client cache, therefore speeding up initialization time in subsequent sessions. The downside to this is whopping 4 megabyte database file that has to be called at the start. But what if the user can't afford gigabit broadband or has limited smartphone data? For these users, a chunked dataset including only the crucial data would be more ideal. I'll explore possibile solutions to this during optimization week, but for now I'll at least address the crudely styled preloading message in parallel with similar style concerns I'll raise in a moment.

### Round Start
In every usability session and evaluation, the first point of feedback was always "I don't know what's clickable." And rightly so, since the only indicator of hierarchy in the main view is color and leading (line spacing). Nothing in the main view is semantically or visually styled like a conventional button or link, aside from a few links in the footer. A user perceived that since there were only two "options" on screen, they must be interactable. Using conventional styling I think it's possible to eliminate this moment of confusion. The cramped mobile footer and disconnected scroll state between main view and footer was also a hierarchy concern. Using grahpic design principles to improve the visual hierarchy of which content is *most* important and clickable in the app will be my first design solution in this project next week.

A piece of feedback that I found very interesting was that the game had a noticeable "character/voice" through its copy, but the visual style felt very "flat" and "unpolished", and that the design elements "did not interact with each other". Users were immediately immersed in the game (to the point of being so focused on the game that I occassionaly had to repeat a question) but perhaps an improvement to its visual aesthetic could boost the immersion factor. I'll address this during visual style week. 

I have not yet ventured into navigating the app with VoiceOver (Apple's native screenreader), but after a look in Firefox's Accessibility Inspector, I noticed some key mistakes. Content was not semantically organized and labelled for easy access. There were also no landmarks or live regions, which will become important at the end of the round. Lastly, there was nothing telling screenreaders to ignore the initial animation of links (which I can imagine would sound very hectic, and I look forward to experiencing that with VoiceOver). I'll address some of these organization and labelling issues next week, and the rest during ARIA week.

### Round End
As a result of improper content structure, labelling and ARIA support, it's unclear which revealed prices go with which domain. I also suspect that the screenreader will not announce revealed elements in the most important order. I'll look into solutions for these as with the above ARIA problems. 

In the visual space, the newly revealed "correct/wrong", "score" and "new round" elements are all in the same exact visual style, with only color and newlines separating them. I'll do my best to properly address this during content hierarchy updates next week, with appropriate embellishments during style week. 


### Conclusion
All of the necessary information is present and interactable, creating an immersive UX that users love, but there are some rough edges that could be rounded into a more exciting and frictionless game.