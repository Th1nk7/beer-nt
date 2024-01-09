let currentPage = '#page1'
let side4nummer = 1

function setup() {
  select('#item1').mouseClicked( () => switchPage('#page1') )
  select('#item2').mouseClicked( () => switchPage('#page2') )
  select('#item3').mouseClicked( () => switchPage('#page3') )
  select('#item4').mouseClicked( () => switchPage('#page4') )
  select('#item5').mouseClicked( () => switchPage('#page5') )
  select('#item6').mouseClicked( () => switchPage('#page6') )
}

function switchPage(whichPage){
  select(currentPage).removeClass('show')
  select(whichPage).addClass('show')
  currentPage = whichPage
}

let toggle = () => {

  let side1 = "#page4side1"
  let side2 = "#page4side2"

  if(side4nummer===1){
    select(side1).removeClass('beGone')
    select(side2).addClass('beGone')
    side4nummer = 2
  } else if(side4nummer===2){
    select(side1).addClass('beGone')
    select(side2).removeClass('beGone')
    side4nummer = 1
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}