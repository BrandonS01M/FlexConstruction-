import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import Title from "../atoms/Title";

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledGT = styled.div`
    margin: 2% 0 2% 0;
    text-align: center;
`;

export const data = {
    labels: ["Topografía plana","Topografía irregular","Topografía irregular","Topografía costera","Topografía boscosa","Topografía urbana"],
    datasets: [
      {
        label: '# Aproximadamente',
        data: [30, 40, 10,5,15,10],
        backgroundColor: ['rgb(255,0,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,128,0)','rgb(64,224,208)','rgb(0,0,255)'],
        borderColor: ['rgb(0, 0, 0)'],
        borderWidth: 1,
      },
    ],
};

export function GraphicTopography() {
    return(
        <StyledGT>
            <Title msn={"Topografias"}/>
            <Doughnut data={data} />
        </StyledGT>
    ) 
}