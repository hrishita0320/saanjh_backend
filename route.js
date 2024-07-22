const router = require('express').Router();
const {getReport, getPatient, setPatient, getPatients, getOldageHomeInfo,getDates,savePrecautions,getPrevReports,getreports,editPatient, getreportsdetails,updatedoctornotes} = require('./controllers/get_set')
const {uploadReport,getParameters,analysis,chatbot} = require('./controllers/LLM')
const {uploadpdf,pdfid,pdfparse,reciver}=require('./controllers/pdfs')
router.get('/getreport/:id', getReport)
router.post('/setPatient',setPatient)
router.get('/getpatient/:id', getPatient)
router.get('/getpatients', getPatients)
router.get('/getoldagehomeinfo', getOldageHomeInfo)
router.post('/upload', uploadReport)
 router.post('/uploadpdf', uploadpdf)

 router.post('/pdfparse', pdfparse)
 router.post('/reciver',reciver)
 router.post('/getparameters',getParameters)
 router.post('/analysis',analysis);
 router.get('/getdates/:id',getDates)
 router.post('/saveprecautions',savePrecautions)
 router.post('/getprevreports',getPrevReports)
 router.get('/getreports',getreports)
 router.post('/editPatient',editPatient)
 router.get('/getreportdetails',getreportsdetails)
 router.post("/updateDoctorNotes/:id",updatedoctornotes)
 router.get('/files/:id',pdfid);
 router.post('/chatbot',chatbot)

module.exports = router