import Post from "../Posts/Post";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";


const posts = [
  {
    id: 1,
    author:{
      avatarURL: "https://github.com/Luan338.png",
      name: "Luan Eric",
      role: "Programador III"
    },
    content:[
      {type: "paragraph", content: "Fala rapaziada, suave?!"},
      {type: "paragraph", content: "Consegui minha maravilhosa oportunidade na área da programação!!"},
      {type: "link", content: "https://www.linkedin.com/in/luan-silva-devweb/"},
    ],
    publishedAt: new Date("2022-08-16 12:59")
  },
  {
    id: 2,
    author:{
      avatarURL: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content:[
      {type: "paragraph", content: "Fala turma, tranquilo?!"},
      {type: "paragraph", content: "O Luan agora é meu melhor aluno!"},
      {type: "link", content: "https://www.linkedin.com/in/diego-schell-fernandes/"},
    ],
    publishedAt: new Date("2022-08-16 13:01")
  }
]

export default function Main(){
  return(
    <section className={styles.wrapper}>
      <Sidebar />
      <div>
        {posts.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
        ))}
      </div>
    </section>
  )
}