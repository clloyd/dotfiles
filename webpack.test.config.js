module.exports = {
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: 'node_modules',
                loaders: ['babel']
            },
            {
                test:    /\.json$/,
                loaders: ['json']
            },

        ],
        postLoaders: [
            {
                test:    /\.(jsx|js)$/,
                exclude: /(__spec|node_modules)\//,
                loader:  'istanbul-instrumenter'
            }
        ]
    },

    resolveLoader: {
        modulesDirectories: ['node_modules']
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
