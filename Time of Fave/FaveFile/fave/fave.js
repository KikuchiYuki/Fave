// Aボタン
const buttonA = document.getElementById('a_btn');

// Bボタン
const buttonB = document.getElementById('b_btn');

// A画面
const screenA = document.querySelector('.a_screen');

// B画面
const screenB = document.querySelector('.b_screen');



buttonA.addEventListener('click',function(){   // Aボタンをクリックした時
    buttonA.classList.remove('active');        // 'buttonA' から 'active' が外される
    buttonB.classList.remove('active');        // 'buttonB' から 'active' が外される 
});

buttonB.addEventListener('click',function(){   // Bボタンをクリックした時
    buttonA.classList.add('active');           // 'buttonA' に 'active' が追加される
    buttonB.classList.add('active');           // 'buttonB' に 'active' が追加される
});


buttonA.addEventListener('click',function(){   // Aボタンをクリックした時
    buttonA.classList.remove('active');        // 'buttonA' から 'active' が外される
    buttonB.classList.remove('active');        // 'buttonB' から 'active' が外される
    screenA.classList.remove('active');        // 'screenA' から 'active' が外される
    screenB.classList.remove('active');        // 'screenB' から 'active' が外される
});

buttonB.addEventListener('click',function(){   // Bボタンをクリックした時
    buttonA.classList.add('active');           // 'buttonA' に 'active' が追加される
    buttonB.classList.add('active');           // 'buttonB' に 'active' が追加される
    screenA.classList.add('active');           // 'screenA' に 'active' が追加される
    screenB.classList.add('active');           // 'screenB' に 'active' が追加される
});
