import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";

const Container = styled.article`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  h2{
    font-size: 24px;
  margin-bottom: 10px;
}


img{
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
}

button{
  background-color: steelblue;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer; 
}
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 8px;
`;

const SingleCocktailPage = () => {
  const { id } = useParams();
  const push = useNavigate();

  const handleNavigateBack = () => {
    push(-1);
  };

  const { data, isLoading, isError } = useQuery(["drink", id], () =>
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  const {strCategory, strInstructions, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7,strDrinkThumb,strDrink} = data.data.drinks[0]; 

  return (
    <Container>
        <h2>{strDrink}</h2>
       <img src={strDrinkThumb} alt={strDrink} />
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>Category:</TableHeader>
            <TableData>{strCategory}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Instructions:</TableHeader>
            <TableData>{strInstructions}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Glass:</TableHeader>
            <TableData>{strGlass}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Ingredient 1:</TableHeader>
            <TableData>{strIngredient1}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Ingredient 2:</TableHeader>
            <TableData>{strIngredient2}</TableData>
          </TableRow>

          {strIngredient3?<TableRow>
            <TableHeader>Ingredient 3:</TableHeader>
            <TableData>{strIngredient3}</TableData>
          </TableRow>:null}

          {strIngredient4?<TableRow>
            <TableHeader>Ingredient 4:</TableHeader>
            <TableData>{strIngredient4}</TableData>
          </TableRow>:null}

          {strIngredient5?<TableRow>
            <TableHeader>Ingredient 5:</TableHeader>
            <TableData>{strIngredient5}</TableData>
          </TableRow>:null}

          {strIngredient6?<TableRow>
            <TableHeader>Ingredient 6:</TableHeader>
            <TableData>{strIngredient6}</TableData>
          </TableRow>:null}

          {strIngredient7?<TableRow>
            <TableHeader>Ingredient 7:</TableHeader>
            <TableData>{strIngredient7}</TableData>
          </TableRow>:null}

        </tbody>
      </Table>
      <button onClick={handleNavigateBack}>Back</button>
    </Container>
  );
};

export default SingleCocktailPage;

