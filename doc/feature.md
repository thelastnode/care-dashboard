# How to Add a Feature

This document explains how to add a new feature to the project
"the Right Way."

## Make a new git branch

    git checkout -b new_feature

## Describe the feature in plain English

In the `dashboard/dash/features/` folder, add a feature file
(e.g., `new_feature.feature`). Describe the feature in plain English
according to the format specified by [lettuce](http://lettuce.it/).

## Describe each step in Python

This step can be done automatically by simply running the lettuce
tests:

    python manage.py harvest

This will provide the boilerplate code for you, which should be copied
and pasted into a `new_feature.py` file, also in the `features/`
folder.

## Make sure the tests fail

Run the tests. You can specify a particular test (so you can avoid
running the whole test suite) as follows:

    python manage.py harvest dash/features/new_feature.py

and ensure the tests do not pass. If they pass, your tests suck.

## Write the code, pass tests

Add client-side code to the `dash/static/` folder or the
`dash/templates/` folder. Server-side code usually falls under the
`dash/views.py` file.

See
[code layout](https://github.com/thelastnode/care-dashboard/blob/master/doc/layout.md)
for more details.

Make individual tests pass until all the tests you have written pass.

## Run all tests

Run *all* tests, for *all* features. Just in case you broke something.

## Make sure it looks good

This is the part where you open the browser and do some sanity
checking. Design can't really be automatically tested.

## Merge git branch or put up a pull request

Cool, now we're ready to merge it in. Or if you're working in a team,
send a pull request.

To send a pull request, push the branch:

    git push origin new_feature

And then go to the Github page and
[create a pull request](http://help.github.com/send-pull-requests/).

Alternatively, merge the branch into master:

    git checkout master
    git merge new_feature

You can now push master and delete the old branch:

    git push origin master
    git branch -d new_feature
