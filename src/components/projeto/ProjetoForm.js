import styles from './ProjetoForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import { useEffect, useState } from 'react'


function ProjetoForm({btnText, handleSubmit, projectData}){

const [categories, SetCategories] = useState([])
const [project, SetProject] = useState(projectData || {})

useEffect(() => {
    fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((resp) => resp.json())
.then((data) => {
    SetCategories(data)
})
.catch(err => console.log(err))
}, [])
    

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        SetProject({ ...project, [e.target.name] : e.target.value })
        console.log(project)
    }

    function handleCategory(e){
        SetProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }, 
    })
    }

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto" 
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />

            <Input 
            type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento do projeto" 
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            />

           <Select
           name="categoria_id"
           text="Selecione a categoria"
           options={categories}
           handleOnChange={handleCategory}
           value={project.category ? project.category.id : ''}
           />
   
        <Submit text={btnText}/>
        </form>
        </div>
    )
}
export default ProjetoForm