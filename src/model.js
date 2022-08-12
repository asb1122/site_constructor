import image from './assets/image.png';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks';

const text = `Крутые видео уроки по js тут: <a href="onliner.by">onlinerby</a>`

export const model = [
    new TitleBlock(
        'Hello world!!!',
        {
            tag: 'h2', 
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }             
        }
    ), 

    new ImageBlock(
        image,
       { 
            styles: {
                padding: '2rem',
                disolay: 'flex',
                'justefify-content': 'center'
            },
            imageStyles: {
                width: '500',
                height: 'auto'
            },
            alt: 'это картинка'
        }
    ),
    
    new ColumnsBlock([
            'Приложение на чистом JS без использования библиотек.',
            'Узнакшь как работают приципы SOLID и ООП за один курс.',
            'JavaScript это интерсно.'
        ],
        {
            styles: {
                background: '#6a99d1',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold' 
            }
        } 
    ),

    new TextBlock( 
         text,
        {
            styles: {
                background: 'linear-gradient(to right, #e3ce4a, #9f8e0c)',
                padding: '1rem',
                'font-weight': 'bold' 
            }
        } 
    ),
] 