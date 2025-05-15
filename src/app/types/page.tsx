//  import './types.scss';

//  let allTypes: string[];

//  const Types = () => {

//      const fetchTypes = async () => {
//          try {
//              let response = await fetch("https:pokeapi.co/api/v2/type");
//              let data = await response.json();
//              console.log(data)

//              allTypes = data.results.map((item: { name: any; }) => item.name)

//          } catch (error) {
//              console.log(`no data is found ${error}`)

//          }
//      }
//      fetchTypes();

//      return (
//          <div className="pokemon__types">
//              {allTypes && allTypes.filter((item: string, index:number) => index <18).map((item:string, index) =><a  key={index}href="" className={`pokemon__content--${item}`}> {item}</a>)}
//          </div>

//      )
//  }

// export default Types

"use client"
import './types.scss';
import { typesItemProp } from "@/utils/types"
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/type";

type resultsProp = {
results:typesItemProp[]

}

const Types = () => {
     const [typesData, setTypesData] = useState<typesItemProp []>([])

    const FetchData = async () => {
        try {
           
            let response = await fetch(API_ENDPOINT);
            let data:resultsProp = await response.json();
            setTypesData(data.results)
            console.log(data);
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchData()
    }, []);

    return (
        <div className="pokemon__types">
            {typesData && typesData.filter((_item, index)=> index < 18).map((item:typesItemProp, index: number)=> <a key={index} href="#" className={`pokemon__content--${item.name}`}>{item.name}</a>)}
        </div>
    )

}

export default Types
