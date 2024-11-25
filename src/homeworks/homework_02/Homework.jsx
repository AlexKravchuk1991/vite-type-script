import './Homework.css'
import ProfileCard from '../../components/profileCard/ProfileCard';

const users = [
    {
        avatar: 'https://phantom-marca.unidadeditorial.es/ab075d41d68f99cc783349e7d143130b/crop/0x0/2045x1363/resize/1320/f/webp/assets/multimedia/imagenes/2023/10/27/16984314296728.jpg',
        firstName: 'Mike',
        lastName: 'Tison',
        occupation: 'Убийца',
        hobbies: ['Бох', 'Наркотики', 'Драки в баре']
    },
    {
        avatar: 'https://f10.pmo.ee/nHbQ9_ZKaOuTSLwSxI5REIobQps=/1442x0/filters:focal(2203x607:2274x648):format(webp)/nginx/o/2024/10/24/16439165t1h2be3.jpg',
        firstName: 'Александр',
        lastName: 'Усик',
        occupation: 'Боксер',
        hobbies: ['Видеоигры', 'Спорт', 'Приготовление еды']
    },
    {
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/548px-Conor_McGregor_2018.jpg',
        firstName: 'Konor',
        lastName: 'McGregor',
        occupation: 'Менеджер',
        hobbies: ['Смешаные единоборства', 'Музыка', 'Создание шоу']
    }
];

function Homework_02 (){
    return (
        <div className='profile-container'>
            
            {users.map((user, index) => (
                <ProfileCard key={index} user={user} />
            ))}
        </div>

      
    )
}

export default Homework_02
