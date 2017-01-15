**Movies & Tabs & Things Test**
===============================

What we've got here?
------------------------

A test task I've got at a job interview. This includes:

 - API calls to OMDB
 - Implementation of tabs display and management
 - React.js

How to start this?
----------------------

 - run `npm install` if you didn't yet.
 - run `npm start`.

Choices
-----------

 - **No store**. While I'll usually use some kind of store in those things, this is a small project and I believe that a store is an overkill.
 - **No graphical assets**. All the icons are unicode. This is quicker and I believe it's good enough here. Optimally, there should some kind of a more in-depth design decision that will result in custom icons or CSS work.
 - **Interface locking when search is active**. This is a quick and dirty solution to prevent unexpected behavior with multiple parallel searches. Optimally, a tab should handle more of the search process and have a **loading state**, which will also provide a more intuitive user experience.
 - **create-react-app** as a quickstart.
 - **Ready-made code for fetching data from OMDB**.

Things that should be added
---------------------------

 - Most importantly, **Add a loading indicator** of some kind. Either in tabs (I touched this above) or in the search box.
 - **Image container should not have different width before and after loading the picture**. This could be done, for example, by giving the image a max. width and giving that width to the image's container. If it's possible to know the image's width beforehand, we could set the container's width to that and always show pictures in their full size.
 - **preloading of posters/images** could be considered. This could be done once we have the relevant information from search results. A good compromise could be to define a metric that would allow us to predict the probability of a user clicking on a movie and load the most likely chances (a crude metric could be to load by order, as OMDB returns results that are ordered by relevance.)
 - **Tab titles**. The current solution is not really a solution. Either a title should be passed, or there should be a matching between the tab type and a title formatting function that could use the tab's data for this.
 - **Testing on multiple devices**, especially mobile.
 - **Autosuggestion** for search.
 - **Saving the tabs' state when reopening the tab**. Could be done using LocalStorage.
 - maybe **More informative route names**.
 - **Indication for when the search button is pressed**.
 - More color :(
   - Maybe the background could be a blurred poster from a random popular movie or from past search results.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).