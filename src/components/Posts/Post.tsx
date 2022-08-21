import styles from "./Post.module.css";
import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author{
  name: string;
  role: string;
  avatarURL: string
}

interface Content{
  type:'paragraph' | 'link';
  content: string;
}

interface PostProps{
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export default function Post({author, content, publishedAt}: PostProps){

 const [comments, setComments] = useState([]);

 const [newCommentText, setNewCommentText] = useState("");

 const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
 })

 const publishedDayRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true
 }) 

 function handleCreateNewComment(e: FormEvent){
  e.preventDefault();

  setComments([...comments, newCommentText])
  setNewCommentText("")
 }

 function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>){
  setNewCommentText(e.target.value)
  e.target.setCustomValidity('')
 }

 function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>){
  e.target.setCustomValidity('Esse campo é obrigatório')
 }

 function removeComment(comment: string){
  const commentsWithoutDeletedOne = comments.filter((commentDelete) => {
    return comment !== commentDelete
  })
  setComments(commentsWithoutDeletedOne);
 }

 const isNewCommentEmpty = newCommentText.length === 0;

  return(
    <article className={styles.Post}>
      <section className={styles.container}>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} text="Perfil"/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDayRelativeToNow}
        </time>
      </section>

      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === "paragraph"){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === "link"){
            return <p key={line.content}>Meu Linkedin 👉<a href="#">{line.content}</a></p>
          }
          })}

      </div>

      <footer className={styles.container_footer}>
        <strong>Deixe seu feedback</strong>
        <form onSubmit={handleCreateNewComment}>
          <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
           />
          <div className={styles.comment_btn}>
              <button 
              disabled={isNewCommentEmpty} 
              className={styles.btn_publish}
              >
                Publicar
              </button>
          </div>
        </form>
      </footer>
      <div>
        {comments.map((comment) => {
          return (
          <Comment 
            key={comment} 
            comment={comment} 
            onRemoveComment={removeComment}
          />
          )
        })}
      </div>
    </article>
  )
}