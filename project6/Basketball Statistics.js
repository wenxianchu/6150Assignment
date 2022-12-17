var point1 = 0
var threeH1 = 0
var threeAll1 = 0
var throwAll1 = 0
var throwH1 = 0 
var freeThrowH1 = 0
var freeThrowAll1 = 0
var throwPercentage1 = 0
var threePercentage1 = 0
var freeThrowPercentage1 = 0
var fRebound1 = 0
var bRebound1 = 0
var rebound1 = 0
var assist1 = 0
var turnover1 = 0
var steal1 = 0
var block1 = 0



function twoPointHit1(){
    point1 = point1 + 2
    throwH1 = throwH1 + 1
    throwAll1 = throwAll1 + 1
    throwPercentage1 = throwH1/throwAll1
    document.getElementById('score1').innerHTML = point1
    document.getElementById('fieldGoal1').innerHTML = (throwH1+"/"+throwAll1)
    document.getElementById('fieldGoalPercentage1').innerHTML = Math.round(throwPercentage1 * 10000) / 100 + "%"
}

function threePointHit1(){
    point1 = point1 + 3
    throwH1 = throwH1 + 1
    throwAll1 = throwAll1 + 1
    throwPercentage1 = throwH1/throwAll1
    threeH1 = threeH1 + 1
    threeAll1 = threeAll1 + 1
    threePercentage1 = threeH1/threeAll1
    document.getElementById('score1').innerHTML = point1
    document.getElementById('fieldGoal1').innerHTML = (throwH1+"/"+throwAll1)
    document.getElementById('fieldGoalPercentage1').innerHTML = Math.round(throwPercentage1 * 10000) / 100 + "%"
    document.getElementById('threePointShot1').innerHTML = (threeH1+"/"+threeAll1)
    document.getElementById('threePointShotPercentage1').innerHTML = Math.round(threePercentage1 * 10000) / 100 + "%"
}

function twoPointMiss1(){
    throwAll1 = throwAll1 + 1
    throwPercentage1 = throwH1/throwAll1
    document.getElementById('fieldGoal1').innerHTML = (throwH1+"/"+throwAll1)
    document.getElementById('fieldGoalPercentage1').innerHTML = Math.round(throwPercentage1 * 10000) / 100 + "%"
}

function threePointMiss1(){
    throwAll1 = throwAll1 + 1
    throwPercentage1 = throwH1/throwAll1
    threeAll1 = threeAll1 + 1
    threePercentage1 = threeH1/threeAll1
    document.getElementById('fieldGoal1').innerHTML = (throwH1+"/"+throwAll1)
    document.getElementById('fieldGoalPercentage1').innerHTML = Math.round(throwPercentage1 * 10000) / 100 + "%"
    document.getElementById('threePointShot1').innerHTML = (threeH1+"/"+threeAll1)
    document.getElementById('threePointShotPercentage1').innerHTML = Math.round(threePercentage1 * 10000) / 100 + "%"
}

function freeThrowHit1(){
    point1 = point1 + 1
    freeThrowH1 = freeThrowH1 + 1
    freeThrowAll1 = freeThrowAll1 + 1
    freeThrowPercentage1 = freeThrowH1/freeThrowAll1
    document.getElementById('score1').innerHTML = point1
    document.getElementById('freeThrow1').innerHTML = (freeThrowH1+'/'+freeThrowAll1)
    document.getElementById('freeThrowPercentage1').innerHTML = Math.round(freeThrowPercentage1 * 10000) / 100 + "%"
}

function freeThrowMiss1(){
    freeThrowAll1 = freeThrowAll1 + 1
    freeThrowPercentage1 = freeThrowH1/freeThrowAll1
    document.getElementById('freeThrow1').innerHTML = (freeThrowH1+'/'+freeThrowAll1)
    document.getElementById('freeThrowPercentage1').innerHTML = Math.round(freeThrowPercentage1 * 10000) / 100 + "%"
}

function frontCourtRebound1(){
    fRebound1 = fRebound1 + 1
    rebound1 = rebound1 + 1
    document.getElementById('frontCourtRebound1').innerHTML = fRebound1
    document.getElementById('rebound1').innerHTML = rebound1
}

function backCourtRebound1(){
    bRebound1 = bRebound1 + 1
    rebound1 = rebound1 + 1
    document.getElementById('backCourtRebound1').innerHTML = bRebound1
    document.getElementById('rebound1').innerHTML = rebound1
}
function addAssist1(){
    assist1 = assist1 + 1
    document.getElementById('assist1').innerHTML = assist1
}

function addSteal1(){
    steal1 = steal1 + 1
    document.getElementById('steal1').innerHTML = steal1
}

function addTurnover1(){
    turnover1 = turnover1 + 1
    document.getElementById('turnover1').innerHTML = turnover1
}

function addBlock1(){
    block1 = block1 + 1
    document.getElementById('block1').innerHTML = block1
}

function submitInformation1(){
    document.getElementById('playerName1').innerHTML = document.getElementById('inputPlayerName1').value
    document.getElementById('playerPosition1').innerHTML = document.getElementById('inputPlayerPosition1').value
    document.getElementById('playerNumber1').innerHTML = document.getElementById('inputPlayerNumber1').value
}




var point2 = 0
var threeH2 = 0
var threeAll2 = 0
var throwAll2 = 0
var throwH2 = 0 
var freeThrowH2 = 0
var freeThrowAll2 = 0
var throwPercentage2 = 0
var threePercentage2 = 0
var freeThrowPercentage2 = 0
var fRebound2 = 0
var bRebound2 = 0
var rebound2 = 0
var assist2 = 0
var turnover2 = 0
var steal2 = 0
var block2 = 0



function twoPointHit2(){
    point2 = point2 + 2
    throwH2 = throwH2 + 1
    throwAll2 = throwAll2 + 1
    throwPercentage2 = throwH2/throwAll2
    document.getElementById('score2').innerHTML = point2
    document.getElementById('fieldGoal2').innerHTML = (throwH2+"/"+throwAll2)
    document.getElementById('fieldGoalPercentage2').innerHTML = Math.round(throwPercentage2 * 10000) / 100 + "%"
}

function threePointHit2(){
    point2 = point2 + 3
    throwH2 = throwH2 + 1
    throwAll2 = throwAll2 + 1
    throwPercentage2 = throwH2/throwAll2
    threeH2 = threeH2 + 1
    threeAll2 = threeAll2 + 1
    threePercentage2 = threeH2/threeAll2
    document.getElementById('score2').innerHTML = point2
    document.getElementById('fieldGoal2').innerHTML = (throwH2+"/"+throwAll2)
    document.getElementById('fieldGoalPercentage2').innerHTML = Math.round(throwPercentage2 * 10000) / 100 + "%"
    document.getElementById('threePointShot2').innerHTML = (threeH2+"/"+threeAll2)
    document.getElementById('threePointShotPercentage2').innerHTML = Math.round(threePercentage2 * 10000) / 100 + "%"
}

function twoPointMiss2(){
    throwAll2 = throwAll2 + 1
    throwPercentage2 = throwH2/throwAll2
    document.getElementById('fieldGoal2').innerHTML = (throwH2+"/"+throwAll2)
    document.getElementById('fieldGoalPercentage2').innerHTML = Math.round(throwPercentage2 * 10000) / 100 + "%"
}

function threePointMiss2(){
    throwAll2 = throwAll2 + 1
    throwPercentage2 = throwH2/throwAll2
    threeAll2 = threeAll2 + 1
    threePercentage2 = threeH2/threeAll2
    document.getElementById('fieldGoal2').innerHTML = (throwH2+"/"+throwAll2)
    document.getElementById('fieldGoalPercentage2').innerHTML = Math.round(throwPercentage2 * 10000) / 100 + "%"
    document.getElementById('threePointShot2').innerHTML = (threeH2+"/"+threeAll2)
    document.getElementById('threePointShotPercentage2').innerHTML = Math.round(threePercentage2 * 10000) / 100 + "%"
}

function freeThrowHit2(){
    point2 = point2 + 1
    freeThrowH2 = freeThrowH2 + 1
    freeThrowAll2 = freeThrowAll2 + 1
    freeThrowPercentage2 = freeThrowH2/freeThrowAll2
    document.getElementById('score2').innerHTML = point2
    document.getElementById('freeThrow2').innerHTML = (freeThrowH2+'/'+freeThrowAll2)
    document.getElementById('freeThrowPercentage2').innerHTML = Math.round(freeThrowPercentage2 * 10000) / 100 + "%"
}

function freeThrowMiss2(){
    freeThrowAll2 = freeThrowAll2 + 1
    freeThrowPercentage2 = freeThrowH2/freeThrowAll2
    document.getElementById('freeThrow2').innerHTML = (freeThrowH2+'/'+freeThrowAll2)
    document.getElementById('freeThrowPercentage2').innerHTML = Math.round(freeThrowPercentage2 * 10000) / 100 + "%"
}

function frontCourtRebound2(){
    fRebound2 = fRebound2 + 1
    rebound2 = rebound2 + 1
    document.getElementById('frontCourtRebound2').innerHTML = fRebound2
    document.getElementById('rebound2').innerHTML = rebound2
}

function backCourtRebound2(){
    bRebound2 = bRebound2 + 1
    rebound2 = rebound2 + 1
    document.getElementById('backCourtRebound2').innerHTML = bRebound2
    document.getElementById('rebound2').innerHTML = rebound2
}
function addAssist2(){
    assist2 = assist2 + 1
    document.getElementById('assist2').innerHTML = assist2
}

function addSteal2(){
    steal2 = steal2 + 1
    document.getElementById('steal2').innerHTML = steal2
}

function addTurnover2(){
    turnover2 = turnover2 + 1
    document.getElementById('turnover2').innerHTML = turnover2
}

function addBlock2(){
    block2 = block2 + 1
    document.getElementById('block2').innerHTML = block2
}

function submitInformation2(){
    document.getElementById('playerName2').innerHTML = document.getElementById('inputPlayerName2').value
    document.getElementById('playerPosition2').innerHTML = document.getElementById('inputPlayerPosition2').value
    document.getElementById('playerNumber2').innerHTML = document.getElementById('inputPlayerNumber2').value
}









var point3 = 0
var threeH3 = 0
var threeAll3 = 0
var throwAll3 = 0
var throwH3 = 0 
var freeThrowH3 = 0
var freeThrowAll3 = 0
var throwPercentage3 = 0
var threePercentage3 = 0
var freeThrowPercentage3 = 0
var fRebound3 = 0
var bRebound3 = 0
var rebound3 = 0
var assist3 = 0
var turnover3 = 0
var steal3 = 0
var block3 = 0



function twoPointHit3(){
    point3 = point3 + 2
    throwH3 = throwH3 + 1
    throwAll3 = throwAll3 + 1
    throwPercentage3 = throwH3/throwAll3
    document.getElementById('score3').innerHTML = point3
    document.getElementById('fieldGoal3').innerHTML = (throwH3+"/"+throwAll3)
    document.getElementById('fieldGoalPercentage3').innerHTML = Math.round(throwPercentage3 * 10000) / 100 + "%"
}

function threePointHit3(){
    point3 = point3 + 3
    throwH3 = throwH3 + 1
    throwAll3 = throwAll3 + 1
    throwPercentage3 = throwH3/throwAll3
    threeH3 = threeH3 + 1
    threeAll3 = threeAll3 + 1
    threePercentage3 = threeH3/threeAll3
    document.getElementById('score3').innerHTML = point3
    document.getElementById('fieldGoal3').innerHTML = (throwH3+"/"+throwAll3)
    document.getElementById('fieldGoalPercentage3').innerHTML = Math.round(throwPercentage3 * 10000) / 100 + "%"
    document.getElementById('threePointShot3').innerHTML = (threeH3+"/"+threeAll3)
    document.getElementById('threePointShotPercentage3').innerHTML = Math.round(threePercentage3 * 10000) / 100 + "%"
}

function twoPointMiss3(){
    throwAll3 = throwAll3 + 1
    throwPercentage3 = throwH3/throwAll3
    document.getElementById('fieldGoal3').innerHTML = (throwH3+"/"+throwAll3)
    document.getElementById('fieldGoalPercentage3').innerHTML = Math.round(throwPercentage3 * 10000) / 100 + "%"
}

function threePointMiss3(){
    throwAll3 = throwAll3 + 1
    throwPercentage3 = throwH3/throwAll3
    threeAll3 = threeAll3 + 1
    threePercentage3 = threeH3/threeAll3
    document.getElementById('fieldGoal3').innerHTML = (throwH3+"/"+throwAll3)
    document.getElementById('fieldGoalPercentage3').innerHTML = Math.round(throwPercentage3 * 10000) / 100 + "%"
    document.getElementById('threePointShot3').innerHTML = (threeH3+"/"+threeAll3)
    document.getElementById('threePointShotPercentage3').innerHTML = Math.round(threePercentage3 * 10000) / 100 + "%"
}

function freeThrowHit3(){
    point3 = point3 + 1
    freeThrowH3 = freeThrowH3 + 1
    freeThrowAll3 = freeThrowAll3 + 1
    freeThrowPercentage3 = freeThrowH3/freeThrowAll3
    document.getElementById('score3').innerHTML = point3
    document.getElementById('freeThrow3').innerHTML = (freeThrowH3+'/'+freeThrowAll3)
    document.getElementById('freeThrowPercentage3').innerHTML = Math.round(freeThrowPercentage3 * 10000) / 100 + "%"
}

function freeThrowMiss3(){
    freeThrowAll3 = freeThrowAll3 + 1
    freeThrowPercentage3 = freeThrowH3/freeThrowAll3
    document.getElementById('freeThrow3').innerHTML = (freeThrowH3+'/'+freeThrowAll3)
    document.getElementById('freeThrowPercentage3').innerHTML = Math.round(freeThrowPercentage3 * 10000) / 100 + "%"
}

function frontCourtRebound3(){
    fRebound3 = fRebound3 + 1
    rebound3 = rebound3 + 1
    document.getElementById('frontCourtRebound3').innerHTML = fRebound3
    document.getElementById('rebound3').innerHTML = rebound3
}

function backCourtRebound3(){
    bRebound3 = bRebound3 + 1
    rebound3 = rebound3 + 1
    document.getElementById('backCourtRebound3').innerHTML = bRebound3
    document.getElementById('rebound3').innerHTML = rebound3
}
function addAssist3(){
    assist3 = assist3 + 1
    document.getElementById('assist3').innerHTML = assist3
}

function addSteal3(){
    steal3 = steal3 + 1
    document.getElementById('steal3').innerHTML = steal3
}

function addTurnover3(){
    turnover3 = turnover3 + 1
    document.getElementById('turnover3').innerHTML = turnover3
}

function addBlock3(){
    block3 = block3 + 1
    document.getElementById('block3').innerHTML = block3
}

function submitInformation3(){
    document.getElementById('playerName3').innerHTML = document.getElementById('inputPlayerName3').value
    document.getElementById('playerPosition3').innerHTML = document.getElementById('inputPlayerPosition3').value
    document.getElementById('playerNumber3').innerHTML = document.getElementById('inputPlayerNumber3').value
}






var point4 = 0
var threeH4 = 0
var threeAll4 = 0
var throwAll4 = 0
var throwH4 = 0 
var freeThrowH4 = 0
var freeThrowAll4 = 0
var throwPercentage4 = 0
var threePercentage4 = 0
var freeThrowPercentage4 = 0
var fRebound4 = 0
var bRebound4 = 0
var rebound4 = 0
var assist4 = 0
var turnover4 = 0
var steal4 = 0
var block4 = 0



function twoPointHit4(){
    point4 = point4 + 2
    throwH4 = throwH4 + 1
    throwAll4 = throwAll4 + 1
    throwPercentage4 = throwH4/throwAll4
    document.getElementById('score4').innerHTML = point4
    document.getElementById('fieldGoal4').innerHTML = (throwH4+"/"+throwAll4)
    document.getElementById('fieldGoalPercentage4').innerHTML = Math.round(throwPercentage4 * 10000) / 100 + "%"
}

function threePointHit4(){
    point4 = point4 + 3
    throwH4 = throwH4 + 1
    throwAll4 = throwAll4 + 1
    throwPercentage4 = throwH4/throwAll4
    threeH4 = threeH4 + 1
    threeAll4 = threeAll4 + 1
    threePercentage4 = threeH4/threeAll4
    document.getElementById('score4').innerHTML = point4
    document.getElementById('fieldGoal4').innerHTML = (throwH4+"/"+throwAll4)
    document.getElementById('fieldGoalPercentage4').innerHTML = Math.round(throwPercentage4 * 10000) / 100 + "%"
    document.getElementById('threePointShot4').innerHTML = (threeH4+"/"+threeAll4)
    document.getElementById('threePointShotPercentage4').innerHTML = Math.round(threePercentage4 * 10000) / 100 + "%"
}

function twoPointMiss4(){
    throwAll4 = throwAll4 + 1
    throwPercentage4 = throwH4/throwAll4
    document.getElementById('fieldGoal4').innerHTML = (throwH4+"/"+throwAll4)
    document.getElementById('fieldGoalPercentage4').innerHTML = Math.round(throwPercentage4 * 10000) / 100 + "%"
}

function threePointMiss4(){
    throwAll4 = throwAll4 + 1
    throwPercentage4 = throwH4/throwAll4
    threeAll4 = threeAll4 + 1
    threePercentage4 = threeH4/threeAll4
    document.getElementById('fieldGoal4').innerHTML = (throwH4+"/"+throwAll4)
    document.getElementById('fieldGoalPercentage4').innerHTML = Math.round(throwPercentage4 * 10000) / 100 + "%"
    document.getElementById('threePointShot4').innerHTML = (threeH4+"/"+threeAll4)
    document.getElementById('threePointShotPercentage4').innerHTML = Math.round(threePercentage4 * 10000) / 100 + "%"
}

function freeThrowHit4(){
    point4 = point4 + 1
    freeThrowH4 = freeThrowH4 + 1
    freeThrowAll4 = freeThrowAll4 + 1
    freeThrowPercentage4 = freeThrowH4/freeThrowAll4
    document.getElementById('score4').innerHTML = point4
    document.getElementById('freeThrow4').innerHTML = (freeThrowH4+'/'+freeThrowAll4)
    document.getElementById('freeThrowPercentage4').innerHTML = Math.round(freeThrowPercentage4 * 10000) / 100 + "%"
}

function freeThrowMiss4(){
    freeThrowAll4 = freeThrowAll4 + 1
    freeThrowPercentage4 = freeThrowH4/freeThrowAll4
    document.getElementById('freeThrow4').innerHTML = (freeThrowH4+'/'+freeThrowAll4)
    document.getElementById('freeThrowPercentage4').innerHTML = Math.round(freeThrowPercentage4 * 10000) / 100 + "%"
}

function frontCourtRebound4(){
    fRebound4 = fRebound4 + 1
    rebound4 = rebound4 + 1
    document.getElementById('frontCourtRebound4').innerHTML = fRebound4
    document.getElementById('rebound4').innerHTML = rebound4
}

function backCourtRebound4(){
    bRebound4 = bRebound4 + 1
    rebound4 = rebound4 + 1
    document.getElementById('backCourtRebound4').innerHTML = bRebound4
    document.getElementById('rebound4').innerHTML = rebound4
}
function addAssist4(){
    assist4 = assist4 + 1
    document.getElementById('assist4').innerHTML = assist4
}

function addSteal4(){
    steal4 = steal4 + 1
    document.getElementById('steal4').innerHTML = steal4
}

function addTurnover4(){
    turnover4 = turnover4 + 1
    document.getElementById('turnover4').innerHTML = turnover4
}

function addBlock4(){
    block4 = block4 + 1
    document.getElementById('block4').innerHTML = block4
}

function submitInformation4(){
    document.getElementById('playerName4').innerHTML = document.getElementById('inputPlayerName4').value
    document.getElementById('playerPosition4').innerHTML = document.getElementById('inputPlayerPosition4').value
    document.getElementById('playerNumber4').innerHTML = document.getElementById('inputPlayerNumber4').value
}





var point5 = 0
var threeH5 = 0
var threeAll5 = 0
var throwAll5 = 0
var throwH5 = 0 
var freeThrowH5 = 0
var freeThrowAll5 = 0
var throwPercentage5 = 0
var threePercentage5 = 0
var freeThrowPercentage5 = 0
var fRebound5 = 0
var bRebound5 = 0
var rebound5 = 0
var assist5 = 0
var turnover5 = 0
var steal5 = 0
var block5 = 0



function twoPointHit5(){
    point5 = point5 + 2
    throwH5 = throwH5 + 1
    throwAll5 = throwAll5 + 1
    throwPercentage5 = throwH5/throwAll5
    document.getElementById('score5').innerHTML = point5
    document.getElementById('fieldGoal5').innerHTML = (throwH5+"/"+throwAll5)
    document.getElementById('fieldGoalPercentage5').innerHTML = Math.round(throwPercentage5 * 10000) / 100 + "%"
}

function threePointHit5(){
    point5 = point5 + 3
    throwH5 = throwH5 + 1
    throwAll5 = throwAll5 + 1
    throwPercentage5 = throwH5/throwAll5
    threeH5 = threeH5 + 1
    threeAll5 = threeAll5 + 1
    threePercentage5 = threeH5/threeAll5
    document.getElementById('score5').innerHTML = point5
    document.getElementById('fieldGoal5').innerHTML = (throwH5+"/"+throwAll5)
    document.getElementById('fieldGoalPercentage5').innerHTML = Math.round(throwPercentage5 * 10000) / 100 + "%"
    document.getElementById('threePointShot5').innerHTML = (threeH5+"/"+threeAll5)
    document.getElementById('threePointShotPercentage5').innerHTML = Math.round(threePercentage5 * 10000) / 100 + "%"
}

function twoPointMiss5(){
    throwAll5 = throwAll5 + 1
    throwPercentage5 = throwH5/throwAll5
    document.getElementById('fieldGoal5').innerHTML = (throwH5+"/"+throwAll5)
    document.getElementById('fieldGoalPercentage5').innerHTML = Math.round(throwPercentage5 * 10000) / 100 + "%"
}

function threePointMiss5(){
    throwAll5 = throwAll5 + 1
    throwPercentage5 = throwH5/throwAll5
    threeAll5 = threeAll5 + 1
    threePercentage5 = threeH5/threeAll5
    document.getElementById('fieldGoal5').innerHTML = (throwH5+"/"+throwAll5)
    document.getElementById('fieldGoalPercentage5').innerHTML = Math.round(throwPercentage5 * 10000) / 100 + "%"
    document.getElementById('threePointShot5').innerHTML = (threeH5+"/"+threeAll5)
    document.getElementById('threePointShotPercentage5').innerHTML = Math.round(threePercentage5 * 10000) / 100 + "%"
}

function freeThrowHit5(){
    point5 = point5 + 1
    freeThrowH5 = freeThrowH5 + 1
    freeThrowAll5 = freeThrowAll5 + 1
    freeThrowPercentage5 = freeThrowH5/freeThrowAll5
    document.getElementById('score5').innerHTML = point5
    document.getElementById('freeThrow5').innerHTML = (freeThrowH5+'/'+freeThrowAll5)
    document.getElementById('freeThrowPercentage5').innerHTML = Math.round(freeThrowPercentage5 * 10000) / 100 + "%"
}

function freeThrowMiss5(){
    freeThrowAll5 = freeThrowAll5 + 1
    freeThrowPercentage5 = freeThrowH5/freeThrowAll5
    document.getElementById('freeThrow5').innerHTML = (freeThrowH5+'/'+freeThrowAll5)
    document.getElementById('freeThrowPercentage5').innerHTML = Math.round(freeThrowPercentage5 * 10000) / 100 + "%"
}

function frontCourtRebound5(){
    fRebound5 = fRebound5 + 1
    rebound5 = rebound5 + 1
    document.getElementById('frontCourtRebound5').innerHTML = fRebound5
    document.getElementById('rebound5').innerHTML = rebound5
}

function backCourtRebound5(){
    bRebound5 = bRebound5 + 1
    rebound5 = rebound5 + 1
    document.getElementById('backCourtRebound5').innerHTML = bRebound5
    document.getElementById('rebound5').innerHTML = rebound5
}
function addAssist5(){
    assist5 = assist5 + 1
    document.getElementById('assist5').innerHTML = assist5
}

function addSteal5(){
    steal5 = steal5 + 1
    document.getElementById('steal5').innerHTML = steal5
}

function addTurnover5(){
    turnover5 = turnover5 + 1
    document.getElementById('turnover5').innerHTML = turnover5
}

function addBlock5(){
    block5 = block5 + 1
    document.getElementById('block5').innerHTML = block5
}

function submitInformation5(){
    document.getElementById('playerName5').innerHTML = document.getElementById('inputPlayerName5').value
    document.getElementById('playerPosition5').innerHTML = document.getElementById('inputPlayerPosition5').value
    document.getElementById('playerNumber5').innerHTML = document.getElementById('inputPlayerNumber5').value
}



































