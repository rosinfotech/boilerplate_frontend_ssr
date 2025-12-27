<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD034 -->

[![rosinfo.tech](https://cdn.rosinfo.tech/id/logo/id_logo_width_160.svg "rosinfo.tech")](https://rosinfo.tech)

# Rosinfotech Boilerplate Frontend SSR

## Stack

- Server Side Rendering;
- Clean Architecture;
- NextJS;
- TypeScript;
- React;
- Ant Design;
- TailwindCSS;
- Capacitor;
- ESlint;
- Prettier;
- Stylelint;

## Deployed version

- https://boilerplate-frontend-ssr.demo.rosinfo.tech/

## Quick Start

### Initialization

- `npm i`;

- If you would like to work on mobile version (CSR):

  - Once:

    - `npm run mobile:init`;

### Development

- Development:

  - Web:

    - `npm run dev`

  - Mobile:

    - Terminal 1: `npm run dev:mobile`;

    - Terminal 2:

      - `npm run build:mobile:ios` and `npm run dev:mobile:ios`;

      - or `npm run build:mobile:android` and `npm run dev:mobile:android`;

### Building

- Web:

  - `npm run build`;

- Mobile:

  - Build:

    - `npm run build:mobile:ios`;

    - or `npm run build:mobile:android`;

### Deployment

- Local:

  - Start:

    - `make local_docker_compose_start`
    - or `docker compose -f ops/docker-compose.local.yml up -d`

  - Stop:

    - `make local_docker_compose_stop`
    - or `docker compose -f ops/docker-compose.local.yml --env-file envs/.env.local down`

- Remote:

  - This is approach suitable if you have own VPS;

    - We recommend to use GitHub Actions as one of true CI/CD approaches;

  - You can use `make local_deploy_remote` command, with your own server resource and secrets;

  - Also, you should make settings Nginx of own www domain with very similar config:

    ```shell
    server {
        listen 80;
        server_name example.com www.example.com;
        return 301 https://example.com/;
    }

    server {
        listen 443;
        server_name example.com www.example.com;
        charset utf-8;
        client_max_body_size 128m;
        root /home/boilerplate-frontend-ssr/www;
        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

        location / {
            proxy_buffering off;
            proxy_pass http://localhost:38500;
            proxy_pass_request_headers on;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-NginX-Proxy true;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
    ```
