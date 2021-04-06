alert('سلام دوست عزیزم، این تست رو انجام بده تا ببینم چه مقداری منو میشناسی:)))');
const correctAnswer = ['B' , 'A', 'A' , 'C'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
form.addEventListener('submit', e=>{
e.preventDefault();
let score = 0;
const userAnswer = [form.q1.value , form.q2.value , form.q3.value , form.q4.value];
userAnswer.forEach((answer,index)=>{
    if(answer === correctAnswer[index]){
        score +=25;
    }
});
scrollTo(0,0);

result.classList.remove('d-none');
let time = 0;
const timer = setInterval( ()=>{
    result.querySelector('span').textContent=`${time}%`;
    if(score===time){clearInterval(timer)}else{time++}
},50);

});