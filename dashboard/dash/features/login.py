from lettuce import *
from lettuce.django import django_url

from django.core.management import call_command
from django.db import connection
from django.test.utils import setup_test_environment

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

from dashboard import settings
from fixtures import create_user

@before.all
def syncdb():
    call_command('syncdb', interactive=False, verbosity=1)

@before.each_scenario
def clean_environment(scenario):
    call_command('flush', interactive=False, verbosity=1)

@before.all
def setup_selenium():
    world.browser = webdriver.Chrome()

@after.all
def close_selenium(total):
    world.browser.quit()

@step(u'Given that a user account exists')
def given_that_a_user_account_exists(step):
    world.username = 'testuser'
    world.password = 'passw0rd'
    world.user = create_user(world.username, world.password)

@step(u'When the user inputs the incorrect login information')
def when_the_user_inputs_the_incorrect_login_information(step):
    world.browser.get(django_url('/'))
    inputs = world.browser.find_elements_by_tag_name('input')
    login = inputs[0]
    password = inputs[1]

    login.send_keys(world.username)
    password.send_keys(world.password + 'asdf')
    password.submit()

@step(u'Then the user sees an error')
def then_the_user_cannot_log_in(step):
    errors = world.browser.find_elements_by_xpath("//*[text()='Login Failed']")
    assert errors > 0, "There must be an error saying 'Login Failed'"
    WebDriverWait(world.browser, 10).until(lambda driver: errors[0].is_displayed())

@step(u'When the user inputs the correct login information')
def when_the_user_inputs_the_correct_login_information(step):
    world.browser.get(django_url('/'))
    WebDriverWait(world.browser, 10).until(
        lambda driver: driver.find_elements_by_tag_name('input') >= 2)
    inputs = world.browser.find_elements_by_tag_name('input')
    login = inputs[0]
    password = inputs[1]

    login.send_keys(world.username)
    password.send_keys(world.password)
    password.submit()

@step(u'Then the user is logged in')
def then_the_user_is_logged_in(step):
    def no_logins(driver=None):
        logins = world.browser.find_elements_by_xpath("//*[text()='Login']")
        for login in logins:
            if login.is_displayed():
                return False
        return True
    WebDriverWait(world.browser, 10).until(no_logins)
