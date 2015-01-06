var express=require('express');
var jobModel=require('./models/Job');
var jobsData=require("./jobs-data.js");

var app=express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname+'/public'));

app.get('/api/jobs',function(req,res){
    jobsData.findJobs().then(function(collection){
        res.send(collection);
    })
});

app.get('*',function(req,res){
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDb('mongodb://jfdev:jfdev@ds031751.mongolab.com:31751/jobfinder')
.then(function(){
    console.log('connected to mongodb successfully!');
    jobsData.seedJobs();
});

app.listen(process.env.PORT,process.env.IP);