
const https=require("node:https");

//process.env.UV_THREADPOOL_SIZE=8;
const MAX_CALLS=15;

const start= Date.now();

for (let i=0; i<MAX_CALLS; i++){

  https.request("https://www.google.com", (res)=>{
    res.on("data",()=>{});
    res.on("end", ()=>{
        console.log(`Request: ${i+1}`, Date.now()-start);
    });
  })
  .end();

};


