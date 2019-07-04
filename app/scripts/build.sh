function build() {
    # readonly CURRENT_DIR=$(cd "$(dirname "$0")"; pwd)
    umi build
    mv 'dist' '../docs'
}

build
