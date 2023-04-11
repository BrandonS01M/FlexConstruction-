import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import Title from "../atoms/Title";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledGP = styled.div`
  text-align: center;
  margin: 2% 0 2% 0;
`;

export const data = {
    labels: ["Block","Arena","Graba","Cemento","Brrilla","Alambre","Agua"],
    datasets: [
      {
        label: '# Precio $',
        data: [1200, 500, 600, 900, 480, 250, 500],
        backgroundColor: ['rgb(255, 255, 255)','rgb(255,0,0)','rgb(255,215,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,128,0)','rgb(0,255,255)','rgb(64,224,208)','rgb(0,0,255)'],
        borderColor: ['rgb(0, 0, 0)','rgb(255,0,0)','rgb(255,215,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,128,0)','rgb(0,255,255)','rgb(64,224,208)','rgb(0,0,255)'],
        borderWidth: 1,
      },
    ],
  };
  
  export function GraphicPrice() {
    return(
        <StyledGP>
            <Title msn={"Precio de materiales"}/>
            <Doughnut data={data} />
        </StyledGP>
    ) 
  }