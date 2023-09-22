import { useCocktails } from "../store/api";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";


const StyledDiv=styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content:space-around;
  margin-top: 20px;

  article{
  width: 300px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px; 
  height: 400px;
  }

  h2{
    font-size: 20px;
  margin-bottom: 10px;
  }

  img{
    width: 100%;
  height: auto;
  margin-bottom: 10px; 
  }

  p{
  font-size: 16px;
  color: #333;
  }
  button{
  background-color: steelblue;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer; 
}

`


const CoktailsPage = () => {
    const push =useNavigate()
    const handleNavigate = (id:string)=>{
        push(`/${id}`);
    }

  const { data, isLoading, isError } = useCocktails();

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>Error</h1>
  }

    return ( 
       <StyledDiv>
        {data.data.drinks.map((drink) => (
          <article key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <button onClick={()=>handleNavigate(drink.idDrink)}>
                view details
            </button>
          </article>
        ))}
       </StyledDiv>
     );
}
 
export default CoktailsPage;