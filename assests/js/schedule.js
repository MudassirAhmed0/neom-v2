const scheduleDropdown =(selected)=>{
    let dropDown =
    selected.parentElement.parentElement.querySelector('ul')
    
    dropDown.classList.add('max-h-[300px]')
    dropDown.classList.remove('max-h-[0px]')
}

const closeScheduleDropdown =(selected)=>{
    let dropDown =
    selected
     
    dropDown.classList.add('max-h-[0px]')
    dropDown.classList.remove('max-h-[300px]')
}

