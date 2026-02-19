from django.core.management.base import BaseCommand
from api.models import (
    Profile, Education, Experience, ExperienceHighlight,
    SkillCategory, Skill, Certification, Patent
)


class Command(BaseCommand):
    help = 'Seed the database with portfolio data from CV'

    def handle(self, *args, **options):
        self.stdout.write('Clearing existing data...')
        Profile.objects.all().delete()
        Education.objects.all().delete()
        Experience.objects.all().delete()
        SkillCategory.objects.all().delete()
        Certification.objects.all().delete()
        Patent.objects.all().delete()

        # ── Profile ──
        Profile.objects.create(
            name='Udit Prabhakar',
            title='Software Engineer',
            location='Delhi, India',
            phone='+91-9097753202',
            email='uditprabhakar.up@gmail.com',
            linkedin='https://linkedin.com/in/udit-prabhakar-m4v8r7s/',
            summary=(
                'Software Developer with 3.5+ years of experience in Python, Django, '
                'and backend systems. Skilled in building scalable APIs, microservices, '
                'and cloud-based solutions using AWS, MongoDB, and Docker. Delivered '
                'high-impact projects for enterprise clients. Strong in data modeling, '
                'system design, and agile development. Holds a patent and IT engineering degree.'
            ),
        )

        # ── Education ──
        Education.objects.create(
            degree='Bachelor of Technology (B.Tech) in Information Technology',
            institution='Sharda University, Greater Noida, Uttar Pradesh',
            dates='May 2018 – May 2022',
            gpa='CGPA: 8.0 | First Division',
            order=1,
        )

        # ── Experience 1 ──
        exp1 = Experience.objects.create(
            company='Attackfence Techlabs',
            role='Software Engineer',
            location='Gurugram, Haryana, India',
            start_date='Jun 2025',
            end_date='Present',
            order=1,
        )
        exp1_highlights = [
            'Developed Network Detection and Response (NDR) solutions for cybersecurity, implementing advanced threat detection mechanisms to monitor and analyze network traffic in real-time',
            'Built rules management and control dashboard for NDR development, enabling security teams to configure, monitor, and manage detection rules efficiently',
            'Designed and implemented MITRE ATT&CK framework mapping solution to correlate detected threats with adversarial tactics, techniques, and procedures (TTPs), enhancing incident response and threat intelligence capabilities',
            'Developed automated Suricata rules validation and deployment pipeline, reducing rule deployment time by 50% and improving threat detection accuracy',
            'Engineered an event-driven architecture (EDA) to secure Operational Technology (OT) environments, enabling real-time threat detection and automated responses to security incidents',
            'Developed and tested secure backend services and APIs using Python and Django REST Framework, focusing on application security and vulnerability mitigation',
        ]
        for i, text in enumerate(exp1_highlights):
            ExperienceHighlight.objects.create(experience=exp1, text=text, order=i)

        # ── Experience 2 ──
        exp2 = Experience.objects.create(
            company='Ecom Express Limited',
            role='Software Development Engineer',
            location='Gurugram, Haryana, India',
            start_date='Jun 2022',
            end_date='Jun 2025',
            order=2,
        )
        exp2_highlights = [
            'Designed and developed scalable RESTful APIs and microservices using Python, Django, and FastAPI, supporting over 10,000 daily transactions with 99.9% uptime',
            'Built real-time data processing pipelines with Kafka, reducing response latency by 40% for business-critical applications',
            'Optimized MongoDB and MySQL databases to support over 10 million records, improving query performance by 30%',
            'Deployed and managed AWS infrastructure (EC2, S3, RDS) and implemented CI/CD pipelines with Jenkins and Docker, cutting deployment time by 50% and operational costs by 15%',
            'Led the end-to-end development of claims management platforms and customer dashboards, increasing user engagement by 25%',
        ]
        for i, text in enumerate(exp2_highlights):
            ExperienceHighlight.objects.create(experience=exp2, text=text, order=i)

        # ── Skills ──
        skills_data = {
            'Programming Languages': ['Python', 'HTML', 'CSS'],
            'Web Frameworks': ['Django', 'REST Framework', 'FastAPI'],
            'Frontend': ['React'],
            'Databases': ['SQLite', 'MySQL', 'MongoDB', 'Parquet'],
            'DevOps & Tools': ['Git', 'Docker', 'Jenkins', 'CI/CD'],
            'Cloud & Hosting': ['AWS (EC2, S3, RDS)', 'Linux'],
            'Messaging & Streaming': ['Kafka'],
            'Version Control': ['GitHub', 'GitLab', 'BitBucket'],
            'Testing & Debugging': ['Postman', 'PyTest'],
        }
        for i, (category, items) in enumerate(skills_data.items()):
            cat = SkillCategory.objects.create(name=category, order=i)
            for item in items:
                Skill.objects.create(category=cat, name=item)

        # ── Certifications ──
        Certification.objects.create(
            name='Cybersecurity Foundation',
            issuer='Palo Alto Networks / Sharda University',
            order=1,
        )
        Certification.objects.create(
            name='Software Development Trainee Certification',
            issuer='Aspiring Minds (now SHL)',
            order=2,
        )

        # ── Patent ──
        Patent.objects.create(
            title='Detection and Hacking of Unauthorised Unmanned Vehicles',
            number='IN202211042825',
            date='July 27, 2022',
            description=(
                'Invented a system to detect and prevent unauthorized access and '
                'control of unmanned aerial vehicles (UAVs), contributing to '
                'advancements in drone security and real-time threat mitigation technologies.'
            ),
        )

        self.stdout.write(self.style.SUCCESS('✅ Portfolio data seeded successfully!'))
