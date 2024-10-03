export default function PetDetail(props){

    if(!props.selectedPet){
        return
    } 

    return(
        <>
        <h1>{props.selectedPet.name}</h1>
        <h2>Breed: {props.selectedPet.breed}</h2>
        <h2>Age: {props.selectedPet.age} year 
            {props.selectedPet.age > 1 ? "s" : ""}{" "} old</h2>


            <button onClick={() => props.setSelectedPet(null)}>Close</button>
        </>
    )
}