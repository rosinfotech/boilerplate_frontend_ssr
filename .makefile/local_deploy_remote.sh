#!/bin/bash

set -e

source ./.makefile/setup.sh
source ./.makefile/ssh_client.sh
source ./.makefile/ssh_file_upload.sh
source ./.makefile/ssh_directory_upload.sh
source ./.makefile/get_home_secret.sh

main() {

    local host=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_frontend_ssr.ssh.host')
    local port=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_frontend_ssr.ssh.port')
    local username=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_frontend_ssr.ssh.username')
    local password=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_frontend_ssr.ssh.password')

    if [ -z "$host" ] || [ -z "$port" ] || [ -z "$username" ] || [ -z "$password" ]; then
        echo "Error: Failed to load SSH secrets from $SECRETS_FILE"
        exit 1
    fi

    sshClient init "$host" "$port" "$username" "$password"

    npm run format:fix

    npm run lint:fix

    npm run stylelint:fix

    sshClient execf "docker compose -f /home/boilerplate-frontend-ssr/app/ops/docker-compose.production.yml down"

    sshClient execf "rm -rf /home/boilerplate-frontend-ssr/app"

    sshClient execf "mkdir -p /home/boilerplate-frontend-ssr/app"

    sshFileUpload "./package.json" "/home/boilerplate-frontend-ssr/app/package.json"

    sshFileUpload "./package-lock.json" "/home/boilerplate-frontend-ssr/app/package-lock.json"

    sshFileUpload "./next.config.ts" "/home/boilerplate-frontend-ssr/app/next.config.ts"

    sshFileUpload "./postcss.config.mjs" "/home/boilerplate-frontend-ssr/app/postcss.config.mjs"

    sshFileUpload "./tsconfig.json" "/home/boilerplate-frontend-ssr/app/tsconfig.json"

    sshDirectoryUpload "./envs" "/home/boilerplate-frontend-ssr/app/envs" "/.DS_Store"

    sshDirectoryUpload "./ops" "/home/boilerplate-frontend-ssr/app/ops" "/.DS_Store"

    sshDirectoryUpload "./public" "/home/boilerplate-frontend-ssr/app/public" "/.DS_Store"

    sshDirectoryUpload "./src" "/home/boilerplate-frontend-ssr/app/src" "/.DS_Store"

    sshClient execf "chmod -R 0775 /home/boilerplate-frontend-ssr/app"

    sshClient execf "chown -R boilerplate-frontend-ssr:www /home/boilerplate-frontend-ssr/app"

    sshClient exec "docker compose -f /home/boilerplate-frontend-ssr/app/ops/docker-compose.production.yml up -d"

    sshClient cleanup

}

main "$@"
