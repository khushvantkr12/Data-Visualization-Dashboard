import React from 'react';
import { Box, Select, Button } from '@chakra-ui/react';

const Filter = ({ selectedChart, setSelectedChart, fetchData }) => {
  const handleChartChange = (e) => {
    setSelectedChart(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} boxShadow="md" borderRadius="md">
      <Box mb={4}>
        <Select value={selectedChart} onChange={handleChartChange} mb={4}>
        <option value="Year">EndYearChart</option>
          <option value="IntensityChart">IntensityChart</option>
          <option value="RegionChart">RegionChart</option>
          <option value="RelevanceChart">RelevanceChart</option>
          <option value="TopicChart">TopicChart</option>
          <option value="SectorChart">SectorChart</option>
          <option value="CountryChart">CountryChart</option>
          <option value="LikelihoodChart">LikelihoodChart</option>
          
        </Select>
      </Box>
      
    </Box>
  );
};

export default Filter;