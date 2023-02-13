import * as React from 'react';
import { BsGithub } from 'react-icons/bs';
import { useState } from 'react';
import About from './components/About';
import WhatsIt from './components/WhatsIt';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Interface(props: any) {

    const [content, setContent] = useState('');
    const [char, setChar] = useState('');
    const [message, setMessage] = useState('');

    function cifraDeCesar(mensagem: any) {
        var cifrada = "";
        for (var i = 0; i < mensagem.length; i++) {
            var codigo = mensagem.charCodeAt(i);
            if (codigo >= 65 && codigo <= 90) {
                // maiúsculas
                cifrada += String.fromCharCode(((codigo - 65 + 7) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                // minúsculas
                cifrada += String.fromCharCode(((codigo - 97 + 7) % 26) + 97);
            } else {
                // outros caracteres, como espaços em branco
                cifrada += mensagem.charAt(i);
            }
        }
        return cifrada;
    }

    function setCharAndValidate() {
        if (!content) return;
        if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(content)) {
            setMessage("A mensagem contém caracteres inválidos");
            return;
        }
        if (content.length > 50) {
            setMessage("A mensagem excede o limite de caracteres");
            return;
        }
        setChar(`Mensagem cifrada: ${cifraDeCesar(content)}`);
    }

    function getTextOfInput(e: any) {
        setContent(e.target.value);
        setChar('');
        setMessage('');
    }

    return (
        <div>
            <header className='top'>
                <nav className='top-navbar'>
                    <a href="#" className="logo">Cifra de Cesar</a>
                    <ul className='git_redirect'>
                        <li className='git-icon'><a href="https://github.com/Luan16p" id='git-icon'><BsGithub/></a></li>
                    </ul>
                </nav>
            </header>

            <section className='criptografador'>
                <form action='' method='dialog'>
                    <h2>Criptografia a Base de Cifra de César</h2>
                    <p>Insira sua mensagem e nosso aplicativo lhe fornecerá o resultado com a cifra de césar</p>
                    <input type="text" name='conteudo' onChange={getTextOfInput} value={content} id='content' placeholder='Digite aqui' maxLength={20} />
                    <button onClick={setCharAndValidate}>Criptografar</button>
                    <p className='mensagemFinal'>{char}</p>
                    <p className='mensagemErro'>{message}</p>
                </form>
            </section>

            <About height={40} id="%"/>
            <WhatsIt height={40} id="%"/>

            <div className="box-center">
                <h2>Features</h2>
            </div>

            <Features />
            <Footer/>

        </div>
    );
}
