class getQuestion {
    constructor(){
        this.questionURL = 'question-api/question.json';
    }

    async gettingAPI(){
        const response = await fetch(this.questionURL);
        const data = await response.json();

        return data;
    }
}

const Question = new getQuestion();
const quizSection = document.querySelector('.quiz__section');
const answerKey = ['A', 'A', 'A', 'B', 'C', 'C', 'B', 'B'];
const Button = document.querySelector('.submit');
const resultScore = document.querySelector('.score__popup');

Question.gettingAPI()
    .then((data) => {
        const userAnswer = data.forEach(each => {
            const html = `
            <div class="my-4">
                <p class="soal lead font-weight-normal">
                    ${each.question}
                </p>
                <div class="form-check">
                    <input type="radio" name="${each.name}" value="A" checked>
                    <label for="">${each.option1}</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="${each.name}" value="B">
                    <label for="">${each.option2}</label>
                </div>
                <div class="form-check">
                    <input type="radio" name="${each.name}" value="C">
                    <label for="">${each.option3}</label>
                </div>
            </div>
            `;

            quizSection.innerHTML += html;
        });
        
        Button.addEventListener('click', () => {

            let score = 0;
            const userAnswers = [   quizSection.q1.value, quizSection.q2.value, quizSection.q3.value, quizSection.q4.value,
                                    quizSection.q5.value, quizSection.q6.value, quizSection.q7.value, quizSection.q8.value
            ];
            userAnswers.forEach((answer, index) => {
                // console.log(answer, index);
                if(answer === answerKey[index]){
                    score += 12.5;
                }
            });
            resultScore.textContent = `Your Score Is : ${score}`;
        });
        
    })
    .catch(err => {
        return console.log(err);
    });
