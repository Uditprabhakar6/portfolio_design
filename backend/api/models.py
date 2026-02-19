from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    linkedin = models.URLField()
    summary = models.TextField()

    def __str__(self):
        return self.name


class Education(models.Model):
    degree = models.CharField(max_length=300)
    institution = models.CharField(max_length=300)
    location = models.CharField(max_length=200, blank=True)
    dates = models.CharField(max_length=100)
    gpa = models.CharField(max_length=50, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Experience(models.Model):
    company = models.CharField(max_length=300)
    role = models.CharField(max_length=300)
    location = models.CharField(max_length=200)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.role} @ {self.company}"


class ExperienceHighlight(models.Model):
    experience = models.ForeignKey(
        Experience, on_delete=models.CASCADE, related_name='highlights'
    )
    text = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.text[:80]


class SkillCategory(models.Model):
    name = models.CharField(max_length=200)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Skill categories'

    def __str__(self):
        return self.name


class Skill(models.Model):
    category = models.ForeignKey(
        SkillCategory, on_delete=models.CASCADE, related_name='skills'
    )
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Certification(models.Model):
    name = models.CharField(max_length=500)
    issuer = models.CharField(max_length=300, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class Patent(models.Model):
    title = models.CharField(max_length=500)
    number = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
