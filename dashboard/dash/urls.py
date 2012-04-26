from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('dash.views',
    url(r'^$', 'index'),

    url(r'^login$', 'login'),
    url(r'^logout$', 'logout'),

    url(r'^dashboards$', 'dashboards'),
)
