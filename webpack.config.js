var webpack=require('webpack');
var path=require('path');
module.exports={
    entry:{
        bundle:'./index.js'
    },
    output:{
        path:__dirname,
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:'/plugins/*/*.js$',
                loader:"imports?jQuery=jquery,$=jquery,this=>window"
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ]
}