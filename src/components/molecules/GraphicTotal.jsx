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
    labels: ["Total","Ganado"],
    datasets: [
      {
        label: '# Coste',
        data: [80, 20],
        backgroundColor: ['rgb(64,224,208)','rgb(0,0,255)'],
        borderColor: ['rgb(64,224,208)','rgb(0,0,255)'],
        borderWidth: 1,
      },
    ],
};
  
export function GraphicBudget() {
    return(
        <StyledGP>
            <Title msn={"Presupuesto"}/>
            <Doughnut data={data} />
        </StyledGP>
    ) 
}