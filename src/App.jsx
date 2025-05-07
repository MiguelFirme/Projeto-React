
import './App.css'
import IntroComponent from './assets/components/IntroComponent'
import ConditionalComponent1 from  './assets/components/ConditionalComponent1'
import ConditionalComponent2 from  './assets/components/ConditionalComponent2'
import ProductComponent from './assets/components/ProductComponent';
import PostComponent from './assets/components/PostComponent';
import ChildrenProp from './assets/components/ChildrenProp';
import MyButtonComponent from './assets/components/MyButtonComponent';
import UseStateComponent from './assets/components/UseStateComponent';
import ProductForm from './assets/components/Formulários/ProductForm';
import ProductTable from './assets/components/Formulários/ProductTable';
import { useState } from 'react';



function App() {

  let component;
  let condition = true;
  if (condition) {
      component = <ConditionalComponent1 />
  } else {
      component = <ConditionalComponent2 />
  }

  
  // const products = [
  //   { id: 1, name: 'Laranja', },
  //   { id: 2, name: 'Uva'},
  //   { id: 3, name: 'Maçã'},
  //   { id: 4, name: 'Banana'}
  // ];

  // const listitems = products.map(products => 
  //   <li  key = {products.id}>
  //     {products.name}
  //   </li>
  // )

  const listPosts = [
    {id: 1, title: 'Post 1', descripition: 'Descrição do post 1'},
    {id: 2, title: 'Post 2', descripition: 'Descrição do post 2'}, 
    {id: 3, title: 'Post 3', descripition: 'Descrição do post 3'},
    {id: 4, title: 'Post 4', descripition: 'Descrição do post 4'},
    {id: 5, title: 'Post 5', descripition: 'Descrição do post 5'},
  ]

  const [ products, setProducts ] = useState([])
  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [edit, setEdit] = useState(false)

  const ClearForm = () => {
    setName("")
    setPrice("")
    setStock("")
  }

  const saveProduct = (e) => {
    e.preventDefault();
    if(!edit) {
      setId(v => v + 1);
      setProducts((prevProducts) => [...prevProducts, {id, name, price, stock}])
    }

    if(edit) {
      const productIndex = products.findIndex(prod => prod.id === id)
      products[productIndex] = {id, name, price, stock}
      setProducts(products)
      setEdit(false)
    }
    ClearForm()

  }

  const deleteProduct = (id) => {
    setProducts(products.filter(prod => prod.id !== id))
  }

  const editProduct = (id) => {
    const product = products.find(prod => prod.id === id)
    setId(product.id)
    setName(product.name)
    setPrice(product.price)
    setStock(product.stock) 
    setEdit(true)
  }

  const handleName =(e) => {setName(e.target.value)}
  const handlePrice =(e) => {setPrice(e.target.value)}
  const handleStock =(e) => {setStock(e.target.value)}
  
  return (

    <>
    <IntroComponent/>
    {component}

{/* Condicional booleana */}
    <div>
      {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
    </div>

{/* lista solta */}
    <div>
      {/* <ul>{listitems}</ul> */}
    </div>

{/* tabela */}
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {products.map(products => (
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
  <ProductComponent name="Arroz" category="Alimento" />
  <ProductComponent name="Marreta" category="Ferramenta" />
  <ProductComponent name="Cerveja" category="Bebida" />
    </div>

    <div>
      {listPosts.map((post) => (
        <PostComponent key={post.id} title={post.title} descripition={post.descripition} />
      ))}
    </div>

    <div>
      <ChildrenProp>
        <p>Eu sou o primeiro conteudo fornecido pelo componente pai</p>
        <hr />
      </ChildrenProp>
      <div>
        <ChildrenProp>
          <p>eu sou o segundo conteúdo fornecido pelo componente pai</p>
          <ul>
            <li>item 01</li>
            <li>item 02</li>
          </ul>
          <hr />
        </ChildrenProp>
      </div>
    </div>

    <div>
      <MyButtonComponent />
    </div>

    <div>
      <UseStateComponent />
    </div>


    <ProductForm name = {name} price = {price} stock = {stock} handleName = {handleName}
      handlePrice = {handlePrice} handleStock = {handleStock} saveProduct = {saveProduct}/>

      <div>
        {
          products.length > 0 ? <ProductTable products = {products} deleteProduct = {deleteProduct} editProduct = {editProduct}/> :
          <h3 style = {{marginBottom: '30px', color: 'black'}}>Nenhum produto cadastrado...</h3>
        }
      </div>
    </>
    
  )
}


export default App
