# CARE Dashboard

# Introduction

This is the code repository for the widget dashboard for use by
[CARE](http://edu.care.org/default.aspx). This document, along with
the documents in [doc/](./doc), aim to explain the development
environment, [technical decisions](./doc/technical.md),
[design decisions](./doc/design.md), and
[code layout](./doc/layout.md) of this project.

# Dependencies

To set-up the build environment, you will need:

- python2 >= 2.4
- pip
- virtualenv (can be installed via pip: `pip install virtualenv`)

The remaining dependencies are described in the
[requirements.txt](./requirements.txt), and are automatically
downloaded into a sandbox by virtualenv and pip.

# Setting up the development environment

First, we will create the virtualenv (sandbox) in the `env` folder:

    $ virtualenv -p python2 env/
    Running virtualenv with interpreter /usr/bin/python2
    New python executable in env/bin/python2
    Also creating executable in env/bin/python
    Installing setuptools............................done.
    Installing pip...............done.

    
Then we activate the virtualenv:

    $ . env/bin/activate
    (env) $
    
Next, we install the dependencies for the project:

    $ pip install -r requirements.txt

Now, with the virtualenv activated, we can setup the development
SQLite3 database:

    $ cd dashboard/
    $ python manage.py syncdb
    Creating tables ...
    Creating table auth_permission
    Creating table auth_group_permissions
    Creating table auth_group
    ...

You will also be prompted to create a superuser, which will let you
log in. Finally, you can run the server with:

  $ python manage.py runserver
