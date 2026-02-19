from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import (
    Profile, Education, Experience,
    SkillCategory, Certification, Patent
)
from .serializers import (
    ProfileSerializer, EducationSerializer, ExperienceSerializer,
    SkillCategorySerializer, CertificationSerializer, PatentSerializer
)


@api_view(['GET'])
def portfolio(request):
    """Return all portfolio data in a single API response."""
    profile = Profile.objects.first()
    education = Education.objects.all()
    experience = Experience.objects.all()
    skills = SkillCategory.objects.prefetch_related('skills').all()
    certifications = Certification.objects.all()
    patent = Patent.objects.first()

    data = {
        'profile': ProfileSerializer(profile).data if profile else None,
        'education': EducationSerializer(education, many=True).data,
        'experience': ExperienceSerializer(experience, many=True).data,
        'skills': SkillCategorySerializer(skills, many=True).data,
        'certifications': CertificationSerializer(certifications, many=True).data,
        'patent': PatentSerializer(patent).data if patent else None,
    }
    return Response(data)
