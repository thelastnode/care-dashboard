# Technical Decisions

This document aims to explain some of the technical decisions made for
this project.

## Server-side
### Django

On the server, we decided to go with
[Django](https://www.djangoproject.com/), a popular Python web
framework. It has a very large and mature community, and is built
around Python, which is easy to pick up and familiar to most
developers.

### Lettuce

Since all
[features](https://github.com/thelastnode/care-dashboard/blob/master/doc/feature.md)
are added in a test-driven fashion, we need a test framework. We chose
[lettuce](http://lettuce.it/), which is similar to
[cucumber](http://cukes.info/) in Ruby.

Lettuce lets us specify features in plain English steps, and then
translate those to Python, which makes test-driven development easy.

## Client-side
### Backbone.js

Since we want the application to work offline, we need robust
client-side code. We chose [Backbone.js](http://backbonejs.org/), a
Model-View-Controller framework in Javascript, to make this easier.

Backbone.js has widespread adoption for writing client-side web
applications as well.

### HTML5 localStorage

For storing data offline, we use
[HTML5 localStorage](https://developer.mozilla.org/en/DOM/Storage#localStorage).
This lets us save the Backbone models (by serializing to JSON strings)
for use when there is no Internet connection.
