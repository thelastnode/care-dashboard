# Design Decisions

This document aims to explain some of the design decisions made for
this project.

## Model-View-Controller

As is typical for web applications, Django uses the
model-view-controller design pattern, and this application adheres to
that.

On the client, the MVC pattern continues, with Backbone.js. This makes
it easy to break the code into distinct components, which is important
given the complexity of the client-side code.

## Decorator

Some views (Django views, which are MVC controllers) have the
`json_view` decorator attached to them. This takes a view's return
value and passes it to the client as JSON.

## Evented

On the client, we use Backbone's events to handle UI actions and
propagation of events. This is standard in Javascript, since there is
only one thread.
