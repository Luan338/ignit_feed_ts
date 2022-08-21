import React, { useState } from 'react';
import styles from "./Comment.module.css";
import perfil3 from "../../assets/eupo.jpg";
import { HandsClapping, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';

interface CommentProps{
    comment: string;
    onRemoveComment: (comment: string) => void;
}

export default function Comment({comment, onRemoveComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onRemoveComment(comment)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

  return (
    <section className={styles.container}>
        <Avatar src={perfil3} />
        <div className={styles.contain}>
            <div className={styles.card_comment}>
                <div>
                    <div className={styles.content_profile}>
                        <div>
                            <h3>Luan Eric <span>(Você)</span></h3>
                            <time 
                            title='15 de Agosto de 2022' 
                            dateTime='2022-08-15 21:38'
                            >Cerca de 2h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={25} />
                        </button>
                    </div>
                    <h4>{comment}</h4>
                </div>
            </div>
            <div className={styles.box_interaction}>
                <button onClick={handleLikeComment}>
                    <HandsClapping size={22} />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </div>

        </div>
    </section>
  )
}

