from django.http import HttpResponse
from django.utils.simplejson import dumps

def json_view(view):
    def wrapped(req, *args, **kwargs):
        res = view(req, *args, **kwargs)

        if not isinstance(res, dict):
            return res

        return HttpResponse(dumps(res), mimetype='application/json')

    return wrapped
