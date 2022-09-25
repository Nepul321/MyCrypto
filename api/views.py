from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import (
    PortFolioSerializer
)
from base.models import Portfolio
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def APIBaseView(request, *args, **kwargs):
    return Response({"detail" : "API Base Point"}, status=200)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def PortfolioView(request, id, *args, **kwargs):
    qs = Portfolio.objects.filter(id=id)
    if not qs:
        return Response({"detail" : "Not found"}, status=404)
    obj = qs.first()
    if obj.user != request.user:
        return Response({"detail" : "You can't look at this portfolio"}, status=403)
    serializer = PortFolioSerializer(obj)
    data = serializer.data
    return Response(data, status=200)