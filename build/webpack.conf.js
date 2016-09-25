const webpack = require('webpack');

const path = require('path');
const fs = require('fs');
const srcFolder = path.join(__dirname, '../src', 'components');
const components = fs.readdirSync(srcFolder);
const utils = require('./utils')
const files = [];
const entries = {};
components.forEach(component => {
    const name = component.split('.')[0];
    if (name) {
        const file = `./src/components/${name}`;
        files.push(file);
        entries[name] = file;
    }
});

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: './lib/components/',
        libraryTarget: 'commonjs2'
    },
    externals(context, request, callback) {
        if (files.indexOf(request) > -1) {
            return callback(null, false);
        }
        return callback(null, true);
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'jsx'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'vue-html'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.vue']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.NoErrorsPlugin()
    ]
};
