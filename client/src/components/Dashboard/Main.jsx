import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
//import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";
import Filter from "./Filter";
import Year from "./Year";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);
  const [selectedChart, setSelectedChart] = useState("");

  const fetchDataFromApi = async () => {
    const API_URL = "http://localhost:5000";
    try {
      const response = await axios.get(`${API_URL}/api/data`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const updateSelection = () => {
    // This will trigger a re-render and show only the selected chart
  };

  return (
    <ChakraProvider>
      <Navbar />
      
      <Filter selectedChart={selectedChart} setSelectedChart={setSelectedChart} fetchData={updateSelection} />
      {selectedChart === "" ? (
        <>
        <IntensityChart data={data} />
          <Flex direction={{ base: "column", md: "row" }} m={50}>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={2}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              borderRadius={20}
            >
              <RegionChart data={data} />
            </Box>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={2}
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              borderRadius={20}
            >
              <TopicsRadarChart data={data} />
            </Box>
          </Flex>
           <RelevanceBubbleChart data={data} />
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <Box>
              <PieChart data={data} />
            </Box>
            <Box>
              <LikelihoodRadarChart data={data} />
            </Box>
          </Grid>
          <CountryChart data={data} />
          <Year data={data} />
        </>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={6} mb={6}>
        {selectedChart === 'Year' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><Year data={data} /></Box>}
        {selectedChart === 'IntensityChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><IntensityChart data={data} /></Box>}
        {selectedChart === 'RegionChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><RegionChart data={data} /></Box>}
        {selectedChart === 'RelevanceChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><RelevanceBubbleChart data={data} /></Box>}
        {selectedChart === 'TopicChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><TopicsRadarChart data={data} /></Box>}
        {selectedChart === 'SectorChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><PieChart data={data} /></Box>}
        {selectedChart === 'CountryChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><CountryChart data={data} /></Box>}
        {selectedChart === 'LikelihoodChart' && <Box p={5} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" borderRadius={20} bg="white"><LikelihoodRadarChart data={data} /></Box>}
      </Grid>
      )}
      <Footer />
    </ChakraProvider>
  );
};

export default Main;
