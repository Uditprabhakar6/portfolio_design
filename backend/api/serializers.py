from rest_framework import serializers
from .models import (
    Profile, Education, Experience, ExperienceHighlight,
    SkillCategory, Skill, Certification, Patent
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ExperienceHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceHighlight
        fields = ['id', 'text', 'order']


class ExperienceSerializer(serializers.ModelSerializer):
    highlights = ExperienceHighlightSerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']


class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = '__all__'


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'


class PatentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patent
        fields = '__all__'


class PortfolioSerializer(serializers.Serializer):
    profile = ProfileSerializer()
    education = EducationSerializer(many=True)
    experience = ExperienceSerializer(many=True)
    skills = SkillCategorySerializer(many=True)
    certifications = CertificationSerializer(many=True)
    patent = PatentSerializer()
