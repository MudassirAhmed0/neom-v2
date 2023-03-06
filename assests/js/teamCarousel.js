let transform =0
    
      const teamNextBtn  =document.querySelector('.teamNextBtn') 
     const teamPrevBtn  =document.querySelector('.teamPrevBtn') 
     const teamSlides = document.querySelectorAll('.teamSlide')
     let activeTeamSlide = 0
    let totalSlides= teamSlides.length -1

    const handleActiveSlide =()=>{
         
        teamSlides.forEach((slide,index)=>{
            
            if(index== activeTeamSlide){
              
                slide.classList.add('active')
            }else{
                slide.classList.remove('active')

            }
            slide.style.transform= `translateX(-${transform}px)`
        })
   
    }
        const handleBtnsDisable =()=>{
            if(activeTeamSlide == 0 ){
                teamPrevBtn.classList.add('disable')
            }else{
                teamPrevBtn.classList.remove('disable')

            }
            if(totalSlides == activeTeamSlide ){
                teamNextBtn.classList.add('disable')
            }else{
                teamNextBtn.classList.remove('disable')

            }
        }
    const handleSlide=(selectedSlideNumber)=>{
        
            activeTeamSlide =selectedSlideNumber ? selectedSlideNumber : activeTeamSlide
            let slideSize = window.innerWidth /100 *  16.6666666667  
            transform= slideSize * activeTeamSlide
        handleActiveSlide()
        handleBtnsDisable()
      }


      const handlePrevBtn =()=>{
        if(activeTeamSlide != 0){
            activeTeamSlide--
            handleSlide()
        }
      }
      const handleNextBtn =()=>{
        if(activeTeamSlide != totalSlides){
            activeTeamSlide++
            handleSlide()
        }
      }
      teamSlides.forEach((slide,index)=>slide.addEventListener('click',()=> handleSlide(index)))
      teamPrevBtn.addEventListener('click',handlePrevBtn)
      teamNextBtn.addEventListener('click',handleNextBtn)