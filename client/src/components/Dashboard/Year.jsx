import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const YearChart = ({ data }) => {
  const years = data.map(item => item.end_year);
  const uniqueYears = [...new Set(years)]; // Get unique years

  const yearCounts = uniqueYears.map(year => {
    return data.filter(item => item.end_year === year).length;
  });

  const chartData = {
    labels: uniqueYears,
    datasets: [
      {
        label: 'Number of Entries per Year',
        data: yearCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white">
   
    <Heading as={"h2"} textAlign="left" mb={4} style={{ textAlign: "left" }} >
    EndYear
  </Heading>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default YearChart;
