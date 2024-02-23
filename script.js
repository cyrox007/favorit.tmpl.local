let navbar_nav = document.querySelectorAll('[data-navbar]');
let navbar__items = document.querySelectorAll('.navbar__item:not(.navbar__item_nested)');
const navbar__toggler = document.querySelector('.navbar__toggler');

navbar__toggler.addEventListener('click', (e) => {
    e.preventDefault();
    navbar_nav.forEach(nav => {
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            document.body.style.overflowY = 'hidden';
            return;
        }
        document.body.style.overflowY = 'scroll';
    })
    // navbar_nav.classList.toggle('active');

});

navbar__items.forEach(item => {
    item.addEventListener('click', e => {
        navbar_nav.forEach(nav => {
            nav.classList.remove('active');
        })
    //    navbar_nav.classList.remove('active'); 
    });
});

//TEST

const questions = [
    {
        id: 1,
        question: "Имеется ли в данный момент долг более 300 т.р. по вступившему в законную силу решению суда?",
        answers: ["Да", "Нет"],

    },{
        id: 2,
        question: "Каков общий размер задолженности перед кредиторами?",
        answers: ["300 т. – 5 млн", "15 млн – 100 млн", "5 млн – 15 млн", "100 млн – более"],

    },{
        id: 3,
        question: "Укажите размер самого крупного кредитора",
        answers: ["300 т. – 5 млн", "15 млн – 100 млн", "5 млн – 15 млн", "100 млн – более"],

    },{
        id: 4,
        question: "Какое количество кредиторов?",
        answers: ["1-5", "5-15", "15-100", "100  – более"],

    },{
        id: 5,
        question: "Имеется ли на данный момент задолженность перед ФНС? Если имеется, то укажите сумму",
        answers: ["Нет", "от 300 - 10 млн", "от 10 млн до 100", "больше 100 млн"],
    },{
        id: 6,
        question: "Имеется ли на данный момент задолженность перед банками. Если да, то на какую сумму?",
        answers: ["Нет", "от 300 - 10 млн", "от 10 млн до 100", "больше 100 млн"],
    },{
        id: 7,
        question: "Вы являетесь:",
        answers: ["Директором", "Директором и собственником", "Собственником", "Иное"],
    },{
        id: 8,
        question: "Какая система налогообложения у компании?",
        answers: ["Общая (с НДС)", "Упрощенная"],
    },{
        id: 9,
        question: "Имеется ли на балансе организации имущество? Если да, то укажите стоимость.",
        answers: ["Нет", "от 300 - 10 млн", "от 10 млн до 100", "больше 100 млн"],
    },{
        id: 10,
        question: "Имеется ли дебиторская задолженность у организации? Укажите стоимость?",
        answers: ["Нет", "от 300 - 10 млн", "от 10 млн до 100", "больше 100 млн"],
    },{
        id: 11,
        question: "Количество сотрудников в штате на дату банкротства?",
        answers: ["0", "от 1 до 10", "от 10 до 100", "больше 100 "],
    },{
        id: 12,
        question: "Продавались ли последние 3 года недвижимое имущество у организации?",
        answers: ["Да", "Нет"],
    },
];

let nextId = 1;
let activeId = 1;

const test_start_btn = document.querySelector('[data-test-start-btn]');
const test_container = document.querySelector('.test__container');
const test_content = document.querySelector('.test__content');
const test_progress = document.querySelector('.progress__track');
const test_next_btn = document.querySelector('.test__button_next');
const test_prev_btn = document.querySelector('.test__button_prev');
const test_submit = document.querySelector('.test__submit');

let data = [];

function createQuestion() {


    test_start_btn.classList.remove('active');

    test_container.classList.add('active');
    test_content.classList.add('active');


    test_progress.style.width = activeId / questions.length * 100 + '%';

    let div = document.createElement('form');
    div.classList.add('question');
    
    let question = questions.find(item => item.id == nextId);
    let div_text = question.question;

    div.dataset.id = question.id;


    let p = document.createElement('p');
    p.classList.add('question__text');
    p.textContent = div_text;
    div.appendChild(p);

    let answers_container = document.createElement('div'); //container for block of answers
    answers_container.classList.add('question__answers');

    
    
    question.answers.forEach((item, index) => {

        let answer_container = document.createElement('div'); //container for each answer

        answer_container.classList.add('question__answer');

        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question'+nextId;
        radio.value = item;
        radio.id = 'Question' + nextId + "_"  + index + 1;
        radio.classList.add('question__radio');


        if (index == 0) {
            radio.checked = true;
        }


        let label = document.createElement('label');
        label.classList.add('question__label');
        label.textContent = item;
        label.htmlFor = 'Question' + nextId + "_"  + index + 1;


        answer_container.appendChild(radio);
        answer_container.appendChild(label);

        answers_container.appendChild(answer_container);

        
    });

    

    div.appendChild(answers_container);

    test_content.append(div);

    nextId++;


}

test_start_btn.addEventListener('click', (e) => {
    e.preventDefault();

    questions.forEach(() => {
        createQuestion();
    });

    //create form to submit
    let div = document.createElement('form');
    div.classList.add('question', 'submit-test-form');
    let title = document.createElement('p');
    title.classList.add('question__text');
    title.textContent = 'Ваши данные';
    div.appendChild(title);

    let input_name = document.createElement('input');
    input_name.type = 'text';
    input_name.placeholder = 'Ваше имя...'
    input_name.classList.add('submit-test-form__input');
    let input_phone = document.createElement('input');
    input_phone.type = 'text';
    input_phone.placeholder = 'Ваш телефон...'
    input_phone.classList.add('submit-test-form__input');
    
    div.appendChild(input_name);
    div.appendChild(input_phone);

    test_content.appendChild(div);

    
})


test_next_btn.addEventListener('click', (e) => {
    e.preventDefault();
    activeId++;
    if (activeId == questions.length) {
        
        test_next_btn.style.display = 'none';
        test_submit.classList.add('active');
        test_content.style.left = -activeId * 100 +'%';
        return;
    }
    

    let form = document.querySelector('[data-id="'+activeId+'"]');

    let question = form.querySelector('p').textContent;

    let answer = form.querySelector('input[type=radio]:checked').value;

    let context = {
        id: activeId,
        question,
        answer
    };
    data.push(context);
    
   
    test_content.style.left = -activeId * 100 +'%';
    test_progress.style.width = activeId / questions.length * 100 + '%';
});


test_prev_btn.addEventListener('click', (e) => {
    e.preventDefault();
    data = data.filter(item => item.id != activeId);
    
    if (activeId <= 1) {
        test_content.style.left = 0;
        return;
    }
    activeId--;
    test_content.style.left = -activeId * 100 +'%';
    test_progress.style.width = activeId / questions.length * 100 + '%';
    test_submit.classList.remove('active');
    test_next_btn.style.display = 'block';
})