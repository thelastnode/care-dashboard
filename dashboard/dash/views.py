from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext

from decorators import json_view
from models import Dashboards

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

@json_view
def logout(req):
    auth_logout(req)
    return {
        'success': True
    }

@login_required
@json_view
def dashboards(req):
    if req.method == 'POST':
        d = Dashboards.objects.get_or_create(user=req.user)[0]
        d.raw = req.POST.get('raw', '[]')
        d.save()
        return {
            'success': True
        }
    
    # otherwise: GET request
    return {
        'dashboards': Dashboards.objects.get_or_create(user=req.user)[0].raw,
    }
    
@login_required
@json_view
def get_data(req):
    return {
        'shops': [{
            'name': 'A1 Shop',
            'latitude': '33.7267137',
            'longtitude': '-84.4118112',
            'owner_name': 'Bob Loblaw',
            'phone_number': '14045551212',
        }],
    }
