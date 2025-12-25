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

    sshClient exec "docker compose -f /home/boilerplate-frontend-ssr/app/ops/docker-compose.production.yml down"

    sshClient execf "rm -rf /home/boilerplate-frontend-ssr/app"

    sshClient cleanup

}

main "$@"
