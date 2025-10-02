new Promise((resolve, reject)=>{
    setTimeout(() => {
        document.getElementById("title1").style.visibility="visible"
        resolve()
        
    }, 1000)
})
.then(()=>{
    new Promise((resolve)=>{
        setTimeout(()=>{
        document.getElementById("title2").style.visibility="visible"
        resolve()
    },1000) 
    })
    .then(()=>{
        new Promise((resolve)=>{
        setTimeout(()=>{
        document.getElementById("title3").style.visibility="visible"
        resolve()
    },3000) 
        })
        .then(()=>{
            setTimeout(()=>{
                document.getElementById("title4").style.visibility="visible"

            },1000)
        })
    })
})
