# hcTest

Homework assignment that allows users to scrape LinkedIn profiles and see the data. It also caches the data and allows searching through it.

# Getting Started

Steps for running this project locally.

### Prerequisites

1. [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [Docker](https://docs.docker.com/engine/install/ubuntu/)
2. [Kubernetes](https://kubernetes.io/docs/tasks/tools/)
3. [Skaffold](https://skaffold.dev/docs/install/)

### Installation

1. Clone repository
2. Go in backend folder and build image with Docker
```docker
docker build -t markomatic507/scrape .
```
3. Go in client folder and build image with Docker
```docker
docker build -t markomatic507/client .
```
4. Add entry in /etc/hosts file. Add public IP of your cluster with address scrape.com
5. Run Skaffold
```skaffold
skaffold dev
```

# Usage

Go to scrape.com page. Scrape page allows scraping of LikedIn profiles and scraped page displayes previously scraped profiles.

# Roadmap

- [ ] Better error handling for front-end and back-end
- [ ] Improve front-end design
- [ ] Split backend in microservices
- [ ] Add back-end validation
- [ ] Add front-end regex validation for checking if the links are valid
