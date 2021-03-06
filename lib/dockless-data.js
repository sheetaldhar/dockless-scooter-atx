var consumer = new soda.Consumer('data.austintexas.gov');
    consumer.query()
        .withDataset('7d8e-dm7r')
        .select(['start_time',
                 'end_time',
                 'start_latitude',
                 'start_longitude',
                 'end_latitude',
                 'end_longitude',
                 'trip_duration',
                 'trip_distance',
                 'day_of_week'])
        .where({vehicle_type: 'scooter'}, "end_longitude < -90")
        .order('start_time DESC')
        .limit(200)
        .getRows()
            .on('success', function(rows) { createMap(rows); })
            .on('error', function(error) { console.error(error); });