from .views import view as admin_view
from admin.apis.api_member import api as member_api
from admin.apis.api_trip import api as trip_api
from admin.apis.api_user import api as user_api

blueprints = [
  member_api,
  trip_api,
  user_api,
  admin_view,
]