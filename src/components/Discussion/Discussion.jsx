import React, {useState, useEffect} from "react";

//CSS
import './style.css'

//Icones
import icon1 from '../../assets/icons/icone1.png'
import icon2 from '../../assets/icons/icone2.png'
import icon3 from '../../assets/icons/icone3.png'
import strong from '../../assets/icons/strong.png'
import italic from '../../assets/icons/italic.png'
import check from '../../assets/icons/check.jpg'
import like from '../../assets/icons/like.png'
import download from '../../assets/icons/download.png'

export default function Discussion(props){

//STATES

// State que verifica se o usuário está na "Home" ou quer adiciobar um tópico
const [checkShare, setcheckShare] = useState(true)

// State que verifica se o usuário enviou o tópico
const [checkTopic, setcheckTopic] = useState('inline')

// State responsável por armazenar o valor do input
const [inputValue, setinputValue] = useState('')
// State responsável por armazenar o valor do textArea
const [textAreaValue, setTextAreaValue] = useState('')

//State responsável por armazenzar os tópicos
const [topics, setTopics] = useState([])

//State responsavél por renderizar os comentarios
const [checkComment, setCkComment] = useState('none')

// State respónsavel por habilitar a edição
const [checkEdit, setCheckEdit] = useState(false)

//FUNÇÕES

//Função para renderizar os comentarios
function renderComment(){
  if(checkComment === 'none'){
    setCkComment('inline')
  }

  if(checkComment === 'inline'){
    setCkComment('none')
  }
}

// função para controlar a renderização da página de formulário
function renderPagForm(){
  if(checkTopic === 'inline'){
    setcheckTopic('none')
  } 

  if(checkTopic === 'none') {
    setcheckTopic('inline')
  }
}

function addTopic(checkEdit){
  

  if(inputValue === '' && textAreaValue === ''){
    return
  }

  if(checkEdit){
    const editTopcs = [...topics]
    editTopcs.pop()
    editTopcs.push({ subject: inputValue, content: textAreaValue })
    setTopics(editTopcs)
    setinputValue('')
    setTextAreaValue('')
    renderPagForm()
    setCheckEdit(false)
  }

  if(!checkEdit){
    const newTopcs = [...topics];
    newTopcs.push({ subject: inputValue, content: textAreaValue });
    setTopics(newTopcs);
    setinputValue('')
    setTextAreaValue('')
    renderPagForm()
  }

 }

function editLastTopic(){
  renderPagForm()
  const last = topics.length - 1
  setinputValue(topics[last].subject)
  setTextAreaValue(topics[last].content)
  setCheckEdit(true)
}

 //Função que adiciona os tópicos
useEffect(()=> {
  console.log(topics)
}, [topics]) 

  return(
      <div className="discussion">
       
        <h3>Discussões</h3>

        <div className="shareArea" style={{display: `${checkTopic}`}}>
        {checkShare ? 
        <div className="createTopic">
        <h5>Compartilhe suas ideias ou dúvidas com os autores!</h5>
        <div className="iconsArea">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </div>
        <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
        <button href="/" onClick={()=> setcheckShare(false)}>
          Criar Tópico
        </button>
      </div>
        : 
        <div className="form">

          <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

          <div className="formInput">

          <label htmlFor="subject">Assunto</label>
          <input type="text" name="subject" id="subject" value={inputValue} onChange={(e) => setinputValue(e.target.value)}/>

          <label htmlFor="content">Conteúdo</label>
          <textarea id="content" name="content" rows="4" cols="50" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)}>
          </textarea>

          <div className="btns">

            <div className="text-btn">
            <button>
              <img src={strong} alt="Negrito" />
            </button>
            <button>
              <img src={italic} alt="italic" />
            </button>
            </div>

            <button className="submit" onClick={()=> addTopic(checkEdit)}>Enviar</button>
          </div>
          </div>
          
        </div>
        }

        <div>
        </div>
       </div>
       {checkTopic !== 'inline' ? 
        <div className="sendTopic">
        <div className="thankYouSend">
          <h4>Seu tópico foi enviado com sucesso! :D</h4>
          <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
          <a>Descubra outros trabalhos!</a>
          <button onClick={()=> renderPagForm()} >criar novo tópico</button>
        </div>
        <div className="waitFeedback">
          <img src={check} alt="Envio realizado" />
          <h5>Aguardando feedback dos autores</h5>
          <a onClick={()=> editLastTopic()}>Editar tópico</a>
        </div>
      </div>
       : false}
        {  
        topics.map(topic => {
          return (
            
              <div className="answers" style={{cursor: 'defaultF'}}>
                <h5>{topic.subject}</h5>
                <p className="author">Carlos Henrique Santos</p>
                <p className="questionContent">{topic.content}</p>
                <div className="icons">
                  <img src="" alt="" />
                  <img className="like" src={like} alt="Curtir tópico" />
                  <p> 1 like</p>
                  <p> 1 Resposta</p>
              </div>
              {/*
                <div className="sendComment" style={{display: 'none'}}>
                <label htmlFor="comment">Comentar</label>
                <textarea name="comment" cols="50" rows="4"></textarea>
              </div>              
              */}
              
            </div>
            
          )
        })   
        }
        <div className="answers" onClick={()=> renderComment()}>
          <h5>Assunto da pergunta aparece aqui</h5>
          <p className="author">Carlos Henrique Santos</p>
          <p className="questionContent">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
          <div className="icons">
            <img src="" alt="" />
            <img className="like" src={like} alt="Curtir tópico" />
            <p> 1 like</p>
            <p> 1 Resposta</p>
          </div>
        </div>

        <div style={{display: `${checkComment}`}}>
        <div className="comment">
          <div className="header-comment">
            <h5>Adriano da Silva</h5>
            <div className="icons-comment">
              <h5>Autor</h5>
              <img src="" alt="" />
            </div>
          </div>
          <p>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
        </div>

        <div className="comment author">
          <div className="header-comment">
            <h5>Carlos Henrique Santos</h5>
            <div className="icons-comment">
              <h5>Autor</h5>
              <img src="" alt="" />
            </div>
          </div>
          <p>Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.
            Obrigada pela resposta, muito interessante o seu trabalho! </p>
        </div>

        <div className="comment">
          <div className="header-comment">
            <h5>Carmila Ferreira Andrade</h5>
            <div className="icons-comment">
              <h5>Coautor</h5>
              <img src="" alt="" />
            </div>
          </div>
          <p>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
        </div>

        <div className="comment">
          <div className="header-comment">
            <h5>Ana Carolina</h5>
            <div className="icons-comment">
              <h5>Coautor</h5>
              <img src="" alt="" />
            </div>
          </div>
          <p>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
        </div>
        </div>
        

        
      </div>
 
  )
}