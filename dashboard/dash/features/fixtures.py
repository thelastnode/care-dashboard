from django.contrib.auth.models import User

def create_user(username, password):
    user = User.objects.create_user(username, 'none@example.com', password)
    user.first_name = 'Test'
    user.last_name = 'User'
    user.save()
    return user
