import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/13006411?s=460&u=ad8ad6fe91dab9326ca4993f2d9507a4447f09d7&v=4" alt="Marcos Cardoso" />
                <div>
                    <strong>Marcos Cardoso</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit quasi possimus, aperiam unde nemo corporis laborum quis enim voluptatum beatae atque ipsum molestiae labore est consectetur qui omnis accusantium!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
export default TeacherItem;