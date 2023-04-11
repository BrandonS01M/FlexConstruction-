import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import Title from "../atoms/Title";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledGL = styled.div`
    margin: 2% 0 2% 0;
    text-align: center;
`;

export const data = {
    labels: ["Block","Arena","Graba","Cemento","Brrilla","Alambre","Agua"],
    datasets: [
      {
        label: '# Cantidad',
        data: [20, 15, 15, 10, 5, 10, 15],
        backgroundColor: ['rgb(255, 255, 255)','rgb(255,0,0)','rgb(255,215,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,128,0)','rgb(0,255,255)','rgb(64,224,208)','rgb(0,0,255)'],
        borderColor: ['rgb(0, 0, 0)','rgb(255,0,0)','rgb(255,215,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,128,0)','rgb(0,255,255)','rgb(64,224,208)','rgb(0,0,255)'],
        borderWidth: 1,
      },
    ],
  };
  
  export function GraphicLot() {
    return(
        <StyledGL>
            <Title msn={"Cantidad de material"}/>
            <Doughnut data={data} />
        </StyledGL>
    ) 
  }