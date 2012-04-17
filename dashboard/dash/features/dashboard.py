from lettuce import *
from lettuce.django import django_url

from selenium.webdriver.support.ui import WebDriverWait

@step(u'When the user clicks the add dashboard button')
def when_the_user_clicks_the_add_dashboard_button(step):
    add_buttons = world.browser.find_elements_by_css_selector(
        '.nav-tabs .icon-plus')
    assert len(add_buttons) == 1, 'There must be exactly one add button'

    add_buttons[0].click()

@step(u'Then enters "([^"]*)" as the name for a dashboard')
def then_enters_a_name_for_the_dashboard(step, name):
    def modal_visible(driver):
        modals = driver.find_elements_by_css_selector('.modal')
        print modals
        for modal in modals:
            if modal.is_displayed():
                inputs = modal.find_elements_by_css_selector('input')
                assert len(inputs) == 1, 'There must be only one input'
                inputs[0].send_keys(name + '\n')
                return True
        return False

    WebDriverWait(world.browser, 10).until(modal_visible)

@step(u'Then the user sees a dashboard tab labeled "([^"]*)"')
def then_the_user_sees_a_dashboard_tab_labeled(step, name):
    def tab_exists(driver):
        tabs_ul = driver.find_elements_by_css_selector('ul.nav.nav-tabs')
        assert len(tabs_ul) > 0, 'There must be a navigation tabs list'
        tab = tabs_ul[0].find_elements_by_link_text(name)
        return len(tab) == 1

    WebDriverWait(world.browser, 10).until(tab_exists)
    
