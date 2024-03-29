const sleep =(ms: number)=>{
  return new Promise((resolve)=> {
    setTimeout(()=>resolve(null), ms);
  })
} 

const run = async () => {
  await sleep(150);
  const toggleBtn = document.querySelectorAll<HTMLButtonElement>('button[class^="PTS_button"]');
  const groundViewBtn = document.querySelectorAll<HTMLButtonElement>('button[class^="GroundView_button_close"]');
  const groundView = document.querySelectorAll<HTMLDivElement>('div[class^="GroundView_ground_view"]');
  toggleBtn.forEach((elem )=> {
    elem.style.display = 'none';
  })
  
  groundViewBtn.forEach((elem)=> {
    elem.click();
    elem.style.display='none';
  })
  await sleep(50);
  groundView.forEach((elem)=>{
    elem.style.display = 'block';
    elem.style.background = 'transparent';
  })
}

run();