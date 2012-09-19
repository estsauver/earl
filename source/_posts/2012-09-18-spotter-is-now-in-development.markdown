---
layout: post
title: "Spotter is now in development"
date: 2012-09-18 17:28
comments: true
publish: false
categories: [Spotter, Programming]
---
As a smart phone user, there are very few things that are still really frustrating. By and large, the operating systems for most major smartphones are, at this point, polished incredibly well. However, the process of switching between wifi and cellular network coverage is still mistifyingly bad. As the phone loses wifi strength, the transmission of data becomes increasingly less reliable on the poor network, but there's no attempt made to establish a cellular connection. 
<!-- more -->
It's like my phone is absolutely startled that I walk around with it while accessing data. It always seems to act like nothing of this sort had ever happenned before. 

I think this can be fixed by using empirical models of where connections are dropped to perdict regions where wifi is likely to fail around a cell phone user. Using this information, I want to create a library that will allow application developers to take predictive action when their users are about to enter rough internet seas. 

I think this project will take roughly three phases. 

1. ### Aquire data for as many network/wifi transitions as possible to model where these transitions occur.
    
    As of the writing, it's unclear what the uncertainty for this transition is, when the effective wifi transmission stops, and when the cell network is switched over to. We'd like to have enough data, if only for a relatively small geographic area initially, that we can effectively model the wireless characteristics of a pilot area.

2. ### Model the pilot area to generate regions of likely network failure. 

    In order for the data to be meaningfully used, it needs to be converted from a large series of points to a set of regions where connection failure is likely. Performing this server side asynchronously seems to be the only reasonable choice that doesn't destroy battery life. This step will also involve the deployment of a backend capable of repsonding to latitude longitude pairs with sets of regions. 
    
3. ### Deploy a library which responds to the set of regions and takes meaningful action to minimize disruption.

    Without the ability to use this data in real time, the data is really only useful to IT people trying to see where their network is covered. We'd like to develop a library that will begin cacheing in advance when nearing a poor service area and will reduce cacheing in a good service area. I'd like to implement switching from wifi to WWAN programaticaly, but that's likely impossible without the cooperation of the phone providers. 

Spotter is currently part of the way through the first step. The project is working on the simulator, but it's not yet tested on an actual iPhone, pending an Apple developer license. With some luck, we can begin limited beta testing of the client by the end of the month. 

I'm currently set up to use [Parse.com](www.parse.com) as the backend for this project, but this could change as the project scales. Parse has the immense bennefit of providing an easy to use cross platform library allowing us to potentially extend this project to other device types as time goes forward. I'm quite open to hearing other possible alternatives, but it certainly seems like Parse is the best solution for now. 

Questions/comments? Please log an issue on our github [https://github.com/estsauver/spotter](https://github.com/estsauver/spotter), I'd love to hear from you. If you don't have to 