from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext

from decorators import json_view

def index(req):
    req.META["CSRF_COOKIE_USED"] = True
    return render_to_response('index.html',
                              context_instance=RequestContext(req))

@json_view
def login(req):
    username = req.POST.get('username', '')
    password = req.POST.get('password', '')
    user = authenticate(username=username, password=password)

    if user is None:
        return {
            'success': False,
            'error': 'Incorrect username/password',
        }

    if not user.is_active:
        return {
            'success': False,
            'error': 'Account disabled',
        }

    auth_login(req, user)

    return {
        'success': True,
        'user': {
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        },
    }
