import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { CocktailResponse } from "../Types/types";



const getCocktails = (): Promise<CocktailResponse> =>
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");

export const useCocktails = () => useQuery(['cocktails'], getCocktails);