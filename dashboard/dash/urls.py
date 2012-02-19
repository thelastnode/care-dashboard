from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('dash.views',
    url(r'^$', 'index'),
)
