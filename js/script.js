var data = {
    title: "Тест по программированию",
    lines: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    answers: [
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6'],
        ['Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9']
    ],
    createTree: function () {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        var body = document.querySelector('body');
        body.appendChild(wrapper);

        var title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = this.title;
        wrapper.appendChild(title);

        var list = document.createElement('ol');
        list.classList.add('list');
        wrapper.appendChild(list);

        for (var i = 0; i < this.lines.length; i++) {
            var listLine = document.createElement('li');
            listLine.innerHTML = this.lines[i];
            list.appendChild(listLine);
            var listUl = document.createElement('ul');
            listLine.appendChild(listUl);

            for (var z = 0; z < this.answers[i].length; z++) {
                var innerListLine = document.createElement('li');
                innerListLine.classList.add('menu__item');

                var lineCheckbox = document.createElement('input');
                lineCheckbox.classList.add('checkbox');
                lineCheckbox.setAttribute("type", "checkbox");

                var labelCheckbox = document.createElement('label');
                labelCheckbox.classList.add('label');


                var spanCheckbox = document.createElement('span');
                spanCheckbox.classList.add('span');
                spanCheckbox.innerHTML = this.answers[i][z];

                innerListLine.appendChild(labelCheckbox);
                labelCheckbox.appendChild(lineCheckbox);
                labelCheckbox.appendChild(spanCheckbox);

                listUl.appendChild(innerListLine);
            }

        }
        var submit = document.createElement('input');
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Проверить мои результаты");
        submit.classList.add('submit');
        wrapper.appendChild(submit);

    }
};

data.createTree();







































