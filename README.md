# CARE Dashboard

# Introduction

This is the code repository for the widget dashboard for use by
[CARE](http://edu.care.org/default.aspx). This document, along with
the documents in
[doc/](https://github.com/thelastnode/care-dashboard/tree/master/doc),
aim to explain the development environment, [technical
decisions](https://github.com/thelastnode/care-dashboard/blob/master/doc/technical.md),
[design
decisions](https://github.com/thelastnode/care-dashboard/blob/master/doc/design.md),
and [code
layout](https://github.com/thelastnode/care-dashboard/blob/master/doc/layout.md)
of this project.

# Dependencies

To set-up the build environment, you will need:

- python2 >= 2.4
- pip
- virtualenv (can be installed via pip: `pip install virtualenv`)

The remaining dependencies are described in the
[requirements.txt](./requirements.txt), and are automatically
downloaded into a sandbox by virtualenv and pip.

# Setting up the development environment

Clone the repository with git:

    $ git clone git@github.com:thelastnode/care-dashboard.git
    Cloning into 'care-dashboard'...
    ...

First, we will create the virtualenv (sandbox) in the `env` folder:

    $ cd care-dashboard/
    $ virtualenv -p python env/
    Running virtualenv with interpreter /usr/bin/python2
    New python executable in env/bin/python2
    Also creating executable in env/bin/python
    Installing setuptools............................done.
    Installing pip...............done.

On some systems (Arch Linux, for example), the python binary
(specified by the `-p` flag) for python 2.x is `python2` instead of
`python`.
    
Then we activate the virtualenv:

    $ . env/bin/activate
    (env) $
    
Next, we install the dependencies for the project:

    (env) $ pip install -r requirements.txt

Now, with the virtualenv activated, we can setup the development
SQLite3 database:

    (env) $ cd dashboard/
    (env) $ python manage.py syncdb
    Creating tables ...
    Creating table auth_permission
    Creating table auth_group_permissions
    Creating table auth_group
    ...

You will also be prompted to create a superuser, which will let you
log in. You can also create a superuser manually with:

    (env) $ python manage.py createsuperuser
    Username (Leave blank to use 'ankit'): 
    ...

Finally, you can run the server with:

    (env) $ python manage.py runserver

By default, the application can be accessed at
`http://localhost:8000/`.

# Adding a feature

For details on how to add a new feature, look at
[./doc/feature.md](https://github.com/thelastnode/care-dashboard/blob/master/doc/feature.md)
