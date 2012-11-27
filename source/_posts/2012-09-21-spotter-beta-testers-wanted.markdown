---
layout: post
title: "Spotter Beta Testers Wanted"
date: 2012-09-21 17:01
comments: true
categories: [Spotter, Programming]
---
With an Apple Developer account in hand, the Spotter project is off to a rocking start. I'd really love to start getting some user feedback for the app, even before it hits full functionality. The beta signup link is here [http://tflig.ht/QnqkjJ](http://tflig.ht/QnqkjJ). The wifi logging only happens when the application is currently open so the usefulness is inherently limited. The application should ideally run in the background for a long period of time until it's disabled by the user. 

<!-- more -->
However, that refactoring is going to have to wait for next weeks build. Spotter's almost certainly going to need to collect another set of information (type of iphone, carrier, proximity-sensor information) so this data set will likely just be used for development. Spotter also doesn't yet annotate the google map with the location of a network drop, it just centers the map. Trust that when the map moves, things are happening in the application. 

{% img left http://i.imgur.com/otZ2E.png 320 480 Spotter Screenshot %}

I feel like every time I open Xcode I learn how to do a half dozen things. I don't know if that means I'm a quick learner or if that means I'm still a mediocre Objective-C programmer, but it's nice to feel that constant rush of problem solving and learning. I think that might be the thing that has me come back to programming again and again is that I always feel like I'm really learning every time I sit down at the keyboard.

For example, the use of the delegate pattern everywhere throughout the app doesn't feel natural to me. It seems to add a degree of complexity almost inherently to the application by abstracting how messages are passed through the application. I think that might be one of the downsides to entering the programming world through the relatively nice playing world of python and ruby. I'm going in the "harder" programming language direction, which means learning is an uphil battle. People who learned to program in C, they've seen things. They're the Bane's of the programming world, "they're born in darkness".

### Backend Work
I've now started design on the first chunk of data processing scripts. It almost immediately became clear that this stage will influence the type of data which we need in at least a few ways. First of all, once a suitable size of data has been collected, the collection of network data can switch from a background always on process to only checking "regions of interest" in the background. Once there's sufficient data collected it'll be possible to divide the data collection into two pieces. **First**  , The data collection done by the library as the library is actively running and monitoring network drops. **Second**, A set of coordinate regions that are *of interest* to the database which the phone can turn on, take a couple measurements for, and then turn back off. 

This will allow for smart collection of data. Once it becomes clear where the generally problematic areas in a region are, there's no reason to continually poll the phone to determine that there is, for instance, most definitively a dead zone at the enterance to the subway. We can limit the background polling to "interesting areas" where we get conflicting data.

### Apple Store Guidelines

I am at least a little curious whether this project will be pushing up against the limits of what the iPhone can do in an authorized background process. For those who aren't aware, typically there are 3 classes of location services that a phone can use. First, there are foreground services that run only when the application is open and running. This is the kind of locations ervice that's currently used. Second there are services which receive updates only when there's a "substantial change" in the application's location. This isn't particularly helpful as the phone determines there's been a significant change in location when it switches to a new cell tower. However this location information is far too coarsely grained to be useful. The third type of background service is a always running background service. These are incredibly restricted, and I'm unclear if the application will qualify as being a "real time location" application. While spotter is fundamentally a geographic logging application, and there's certainly some precedent to allow applications of a similar sort to use the background processes indefinitely, it makes me nervous. 

Currently, at least one application is using background location processes for real time monitoring of locatin. [RunKeeper](http://runkeeper.com/home) has a wonderful application that lets you use GPS logging to follow your runs as you go on them. I'm just not clear if they had to do some extra work to reclassify the background process as a different type (a finite length background service, that calls more finite background services or something of the sort). 

If nothing else, I hope that they'll grant Spotter some leniancy as it's a research project. If they were to turn down the application, I believe that it would still be possible to obtain an enterprise distribution license and distribute it to a limited audience here. That would be unfortunate, but I think it still might be possible to then license this technology out to other universities and hope that they implement the project in a similar way.

~Earl    