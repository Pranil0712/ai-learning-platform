# {{High-Level Architecture Flow}}

Developer (Git Push)
        │
        ▼
GitHub Repository
        │
        ▼
Jenkins (Running in Docker on EC2)
        │
        ├── Build Docker Image
        ├── Tag with BUILD_NUMBER
        ├── Push to DockerHub
        │
        ▼
Helm (Inside Jenkins)
        │
        ▼
Kubernetes (K3s on EC2)
        │
        ├── Deployment (2 replicas)
        ├── Service (NodePort)
        │
        ▼
End User (Browser)


# {{CI/CD Flow}}

This project uses Jenkins build number as Docker image tag.

Example:
Build #12 → Image tag: 12

Helm automatically deploys the new version.