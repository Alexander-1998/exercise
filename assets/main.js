let slideBox = document.querySelector('.slide_box'),
    slide = document.querySelectorAll('.slide_box .slide'),
    next = document.querySelector('#next'),
    prev = document.querySelector('#prev'),
    cntItem = document.querySelectorAll('.cnt_item .item');

const size = document.querySelector('.slide_box').clientWidth;
let count = 1,
    i = 1,
    j = 1;
slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';


next.addEventListener('click', () => {

    if (count == slide.length - 1) {
        count = 0;
        i = 0;
        cntItem[i].checked = true;
        slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';

    } else {
        count++;
        i++;
        cntItem[i].checked = true;
        slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});



prev.addEventListener('click', () => {
    if (count <= 0) {
        count = slide.length - 1;
        i = count;
        cntItem[i].checked = true;
        slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';

    } else {
        count--;
        i--;
        cntItem[i].checked = true;
        slideBox.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});

//Input and select visibly

const about_youtself = document.querySelector('.about_youtself'),
        input_about = about_youtself.querySelectorAll('input[type="text"]');

let counter = 0;



console.log(input_about);




//File input

const form = document.querySelector('.form_input'),
    fileInput = form.querySelector('.file_input'),
      Fname = document.querySelector('.name'),
      Fsize = document.querySelector('.size'),
      row = document.querySelector('.row'),
      trash = document.getElementById('trash_can');

form.addEventListener('click', () => {

    fileInput.click();

});

fileInput.onchange = ({traget}) => {
    let f_size = fileInput.files[0].size;
    let f_name = fileInput.files[0].name;
    let f_type = fileInput.files[0].type;
    
    let s = f_type.slice(6);
    console.log(s);
    
    row.style.visibility = 'visible';
    
    
    Fname.innerHTML = f_name;
    Fsize.innerHTML = Math.ceil(f_size / 1000) + ' mb ' + s;
    
};


trash.addEventListener('click', () => {
    
    row.style.visibility = 'hidden';
    
    Fname.innerHTML = '';
    Fsize.innerHTML = '';
});




