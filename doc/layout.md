# Code Layout

The code hierarchy follows the standard Django project. The top level
directory in the repository has the `requirements.txt`, with the
project package requirements.

The main project is in the `dashboard/` folder. There is one Django
application under this folder: `dash`. All paths in this document are
described relative to this directory (`dashboard/dash/`).

## Feature Descriptions

The application is written in a purely behavior-driven development
fashion with [lettuce](http://lettuce.it/). The feature descriptions
can be found under the `feature` folder.

There are plain-english descriptions of the features in the `.feature`
files, with the python translations in the `.py` files. Each python
file roughly corresponds to one feature and the steps for that
feature. For example, `login.py` has all the steps for
`login.feature`.

To avoid redundancy, many steps are reused, so if a step isn't in the
corresponding feature file, it may be a step that is already defined
elsewhere. For example, the `Given that a user is logged in` step is
used in most scenarios.

## Server-side code

The server-side code can be found in the python files in the `dash`
directory. This follows standard Django conventions:

  * URL patterns: `urls.py`
  * models: `models.py`
  * views (Django views - controllers in traditional MVC): `views.py`
  * utility function decorators: `decorators.py`

## Client-side code

The bulk of the application is client-side code, which can be found in
the `templates/` and `static/` folder. All client-side code renders to
one single page through `templates/index.html`.

Any new client-side models, views, or templates must be added to the
`templates/index.html` to be sent to the browser.

### Templates

The Django's templating engine allows the developer to write the
single page application as distinct logical components, but render it
into one page before sending it down.

### Static files

The static files are separated into two components: `bootstrap` (which
is [Bootstrap from Twitter](http://twitter.github.com/bootstrap/)) and
`app` (which is the application code).

The `bootstrap/` directory is intuitively split into `css/`, `js/`,
and `img/` directories.

The `app/` directory is split into `models/` and `views/`, which have
a single file `.js` file for each model and view, respectively.
