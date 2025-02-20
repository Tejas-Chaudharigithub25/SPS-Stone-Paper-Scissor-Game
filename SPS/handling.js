let sele;
let loop = true;
let index = 0;
let imgarray1 = ['s1.png', 'p1.png', 'sc1.png'];
let imgarray = ['s2.png', 'p2.png', 'sc2.png'];
let i=0;
let i2=0;
// 01                02
// 12                10
// 20                21

function handleRestart(){
    window.location.reload();
}

function handleStart(e) {
    
    let userOption = document.querySelector('.dn');
    let comp = document.querySelector('.comp-img');
    let player = document.querySelector('.user-img');

    userOption.style.display = 'flex';

    loop = true;
    
    let interval = setInterval(() => {
        comp.src = `assets/img/${imgarray1[index]}`;
        player.src = `assets/img/${imgarray[index]}`;
        index = (index + 1) % imgarray.length;
        if (!loop) {
            clearInterval(interval);
        }
    }, 500);
    // e.innerHTML = 'Stop';
}
function handleAns(e) {
    
    e.preventDefault();
    let userOption = document.querySelector('.dn');
    let wintask = document.querySelector('.wintask');
    let selected = document.querySelector('input[name="user_ans"]:checked');
    if (!selected) return;
    let compval = Math.floor(Math.random() * imgarray1.length);
    let playerval = selected.value;
    loop = false;

    setTimeout(() => {
        document.querySelector('.comp-img').src = `assets/img/${imgarray1[compval]}`;
        document.querySelector('.user-img').src = `assets/img/${imgarray[playerval]}`;
    }, 500);
    selected.checked = false;
    userOption.style.display = 'none';
    console.log(compval, ' ', playerval);

    let cp = document.querySelector('.cp');
    let up = document.querySelector('.up');

    if (compval == playerval || playerval == compval) return wintask.innerHTML = 'Tie Match. Try Again';
    if ((compval == 0 && playerval == 1) || (compval == 1 && playerval == 2) || (compval == 2 && playerval == 0)) {
        up.innerHTML = `📃Points: ${i=i+1}`;
        wintask.innerHTML = 'Player is won. <span style="font-size: 30px;">🙌🫅🎊</span>';
        let sound = new Audio('assets/sound/win.mp3');
        sound.play();
    }
    if ((compval == 0 && playerval == 2) || (compval == 1 && playerval == 0) || (compval == 2 && playerval == 1)) {
        cp.innerHTML = `📃Points: ${i2=i2+1}`;
        wintask.innerHTML = 'Computer is won. <span style="font-size: 30px;">🙌🫅🎊</span>';
        let sound = new Audio('assets/sound/lose.mp3');
        sound.play();
    }

}

// Theme
function handleDark(){
    document.body.style.backgroundColor = 'black';
    document.getElementById('nav').style.boxShadow='1px 1px 10px 1px rgb(20, 212, 237)';
    document.getElementById('card1').style.boxShadow='1px 1px 10px 1px rgb(20, 212, 237)';
    document.getElementById('card2').style.boxShadow='1px 1px 10px 1px rgb(20, 212, 237)';
    document.getElementById('card1').style.backgroundColor='black';
    document.getElementById('card2').style.backgroundColor='black';
    document.getElementById('cname').style.border='1px solid white';
    document.getElementById('uname').style.border='1px solid white';
    document.getElementById('user-option').style.background='black';
    document.body.style.color = 'white';
}
function handleLight(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('nav').style.boxShadow='1px 1px 20px 2px black';
    document.getElementById('card1').style.boxShadow='1px 1px 10px 1px black';
    document.getElementById('card2').style.boxShadow='1px 1px 10px 1px black';
    document.getElementById('card1').style.backgroundColor='white';
    document.getElementById('card2').style.backgroundColor='white';
    document.getElementById('cname').style.border='1px solid black';
    document.getElementById('uname').style.border='1px solid black';
    document.getElementById('user-option').style.background='white';
    document.body.style.color = 'black';
    
}