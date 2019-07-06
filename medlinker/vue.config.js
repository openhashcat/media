module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/MedLinker/' : '/',
    devServer: {
        host: '0.0.0.0'
    }
}
