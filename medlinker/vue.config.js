module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/': '/',
    devServer: {
        host: '0.0.0.0'
    }
}
