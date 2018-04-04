/**
 * Created by yanghui on 2018/4/4.
 */

const express = require("express")
const debug = require("debug")("app:bin:server")

const app = express()
app.use('*',function (req,res,next) {
    res.send('333')
})
app.listen(8888)

debug("app已经启动")
