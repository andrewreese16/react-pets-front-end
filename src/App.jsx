import { useState, useEffect } from 'react'

import * as petService from './services/petService'

import PetList from './components/PetList'
import PetDetail from './components/PetDetail'
import PetForm from './components/PetForm'

const App = () => {
  const [pets, setPets] = useState([])
  const [selectedPet, setSelectedPet] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    async function getPets(){
      try{

        const pets = await petService.index()

        console.log(pets, '<-- pets from express server')
        setPets(pets)

      } catch(err){
        console.log(err)
      }
    }

    getPets()

  }, [])

async function handleAddPet(formData){
  try{
    const newPet = await petService.create(formData)
    console.log(newPet, '<-- response from the server')
    setPets([newPet.data, ...pets])

  } catch(err){
    console.log(err, '<-- err in handleAppPet')
  }
}
  return (
    <>
    <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Close' : 'Create Pet'}</button>
    {showForm ? <PetForm handleAddPet={handleAddPet}/> : ''  }
    
    <PetList petList={pets} setSelectedPet={setSelectedPet}/>
    <PetDetail selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
    </>
  )
};

export default App;
