import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IArticle } from 'entities/Article';
import { ARTICLE_BLOCK_TYPE, ARTICLE_TYPE } from 'entities/Article/model/types/IArticle';
import { THEME } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ArticleDetailsRoot } from './ArticleDetailsRoot';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetailsRoot,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsRoot>;

const Template: ComponentStory<typeof ArticleDetailsRoot> = (args) => <ArticleDetailsRoot {...args} />;

const article: IArticle = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: {
        id: '1',
        username: 'Ulbi tv',
    },
    createdAt: '26.02.2022',
    type: [ARTICLE_TYPE.IT],
    blocks: [
        {
            id: '1',
            type: ARTICLE_BLOCK_TYPE.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                // eslint-disable-next-line max-len
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                // eslint-disable-next-line max-len
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ARTICLE_BLOCK_TYPE.CODE,
            // eslint-disable-next-line max-len
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ARTICLE_BLOCK_TYPE.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                // eslint-disable-next-line max-len
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        data: article,
        hasData: true,
        error: null,
        isLoading: false,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        data: article,
        hasData: false,
        error: null,
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        data: null,
        hasData: false,
        error: 'error',
        isLoading: false,
    },
})];
