const Data = require('../models/Data');

exports.getData = async (req, res) => {
    try {
        const { end_year, topic, sector, region, pestle, source, country, city } = req.query;

        let filter = {};
        if (end_year) filter.end_year = end_year;
        if (topic) filter.topic = topic;
        if (sector) filter.sector = sector;
        if (region) filter.region = region;
        if (pestle) filter.pestle = pestle;
        if (source) filter.source = source;
        if (country) filter.country = country;
        if (city) filter.city = city;
        
        const data = await Data.find(filter).limit(30);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
