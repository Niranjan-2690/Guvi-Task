const callBack = document.getElementById("countDown")

countDown = (num = 10, callback =()=>{})=>{
    callBack.innerText = num
    setTimeout(()=>{callback()}, 1000)
}

countDown(10, 
    ()=>countDown(9, 
        ()=>countDown(8, 
            ()=>countDown(7, 
                ()=>countDown(6, 
                    ()=>countDown(5, 
                        ()=>countDown(4, 
                            ()=>countDown(3, 
                                ()=>countDown(2, 
                                    ()=>countDown(1, 
                                        ()=>countDown("Happy Independance Day"))
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )