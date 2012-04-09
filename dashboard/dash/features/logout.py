from lettuce import *
from lettuce.django import django_url

@step(u'Given that a user is logged in')
def given_that_a_user_is_logged_in(step):
    step.given('Given that a user account exists')
    step.given('When the user inputs the correct login information')
    step.given('Then the user is logged in')

@step(u'When the user clicks the log out button')
def when_the_user_clicks_the_logout_button(step):
    dropdowns = world.browser.find_elements_by_css_selector('.page-header '
                                                            'ul.nav li.dropdown')
    assert len(dropdowns) > 0, 'There must be a dropdown menu'
    dropdown = dropdowns[0]
    dropdown.click()

    logouts = dropdown.find_elements_by_link_text('Log out')
    assert len(logouts) == 1, 'There must be one log out button'
    logout = logouts[0]
    logout.click()

@step(u'Then the user sees the login page')
def then_the_user_sees_the_login_page(step):
    logins = world.browser.find_elements_by_xpath("//*[text()='Login']")
    assert len(logins) > 0, 'The user should see the login page'
