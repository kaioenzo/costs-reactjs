import ProjetoForm from '../projeto/ProjetoForm'
import styles from './NovoProjeto.module.css'
import {Navigate, useNavigate} from 'react-router-dom'

function NovoProjeto(){

    const navigate = useNavigate();

    function createPost(project){
        
        // inicializando custos e serviços
        project.cost= 0
        project.service=[]

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projetos', {message: 'Projeto craido com sucesso!'})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.novoprojeto_container}>
            <h1 className={styles.novoprojeto_h1}>Criar projeto</h1>
            <p className={styles.novoprojeto_p}>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}
export default NovoProjeto