
// Create an array for each line
const subwayLines = {
    Red: [
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green: [
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore'
    ],
    Orange: [
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'
    ]
  }
  
  /*
    stopsBetweenStations function
    accepts 4 arguments a start line, a start station, an end line, and an end station
    it should return the total number of stops between two stations
    for stopsBetweenStations('Red', 'Park Street', 'Green', 'Kenmore')
    the result is 5
  */
  const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
    // get the index of the startLine startStation
    const startStationIndex = subwayLines[startLine].indexOf(startStation)
    // get the index of the end station
    const endStationIndex = subwayLines[endLine].indexOf(endStation)
  
    /*
      if both stops are on the same line then we don't need to bother with
      stopping at Park Street, we can simply figure out how far those stops are
      from each other and return that absolute value.
    */
    if (startLine === endLine) {
      return Math.abs(startStationIndex - endStationIndex)
    }
  
    // get the index of the startLine Park Street station
    const startLineParkStreetIndex = subwayLines[startLine].indexOf('Park Street')
  
    /*
      calculate the difference between the start station index and Park Street index
      take the absolute value of that difference to get the trip to Park Street length
    */
    const tripToParkStreet = Math.abs(startStationIndex - startLineParkStreetIndex)

    // get the index of the endLine Park Street station
    const endLineParkStreetIndex = subwayLines[endLine].indexOf('Park Street')
  
    /*
      calculate the difference between the end station index and end line Park Street index
      take the absolute value of that difference to get the trip to destination length
    */
    const tripToDestination = Math.abs(endStationIndex - endLineParkStreetIndex)
  
    // add the tripToParkStreet and tripToDestination to get the trip total
    const totalTrip = tripToParkStreet + tripToDestination
  
    // return the total trip
    return totalTrip
  }
  
// // shorter version, less readable
//   const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
//     const startStationIndex = subwayLines[startLine].indexOf(startStation)
//     const endStationIndex = subwayLines[endLine].indexOf(endStation)

//     if (startLine === endLine) {
//       return Math.abs(startStationIndex - endStationIndex)
//     }
  
//     return Math.abs(startStationIndex - subwayLines[startLine].indexOf('Park Street')) + Math.abs(endStationIndex - subwayLines[endLine].indexOf('Park Street'))
  
//   }

//////////////////////////////////////////////
////////////// Alanoud AlRasheed /////////////
//////////////////////////////////////////////
// const subwayLines = {
//     Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
//     Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
//     Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
// }

// function oneLineStops(line, startStation, endStation) {
//     const startIndex = subwayLines[line].indexOf(startStation);
//     const endIndex = subwayLines[line].indexOf(endStation);
//     let counter = 0;
//     if (startIndex < endIndex) {
//         for (let i = startIndex + 1; i <= endIndex; i++) {
//             console.log(`Rider arrives at ${line} Line and ${subwayLines[line][i]}.`)
//             counter++;
//         }
//     } else {
//         for (let i = startIndex - 1; i >= endIndex; i--) {
//             console.log(`Rider arrives at ${line} Line and ${subwayLines[line][i]}.`)
//             counter++;
//         }
//     }
//     return counter;
// }



// function stopsBetweenStations(startLine, startStation, endLine, endStation) {
//     let results = 0;
//     console.log(`Rider boards the train a ${startLine} Line and ${startStation}.`)
//     if (startLine === endLine) {
//         results = oneLineStops(startLine, startStation, endStation)
//     } else {
//         results = oneLineStops(startLine, startStation, 'Park Street')
//         console.log(`Rider transfers from ${startLine} Line to ${endLine} Line at Park Street.`)
//         results += oneLineStops(endLine, 'Park Street', endStation)
//     }
//     console.log(`Rider exits the train a ${endLine} Line and ${endStation}.`)
//     console.log(`${results} stops in total!`)
// }


// stopsBetweenStations('Red', 'South Station', 'Green', 'Copley')


//////////////////////////////////////////////////////////////////////////////////////

// const subwayLines = {
//     Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
//     Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
//     Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
//  }

// const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
//     // check the validity of the inputs for the lines
//     if ( !(startLine in subwayLines) || !(endLine in subwayLines)){
//         return `Please enter valid lines.\n The avalible lines are Red, Green and Orange.`;
//     }
    
//     // check if the stops is correct for the lines
//     if (!(subwayLines[startLine].includes(startStation))) {
//         return `Start station is not in ${startLine} line.`;
//     }
//     if (!(subwayLines[endLine].includes(endStation))) {
//         return `End station is not in ${endLine} line.`;
//     }

//     // save the indices in variables
//     const startStationIndex = subwayLines[startLine].indexOf(startStation);
//     const endStationIndex =  subwayLines[endLine].indexOf(endStation);
//     const startLineInt = subwayLines[startLine].indexOf('Park Street');
//     const endLineInt = subwayLines[endLine].indexOf('Park Street');

//     let stops = 0;
//     if ( startLine == endLine){
//         stops = Math.abs( startStationIndex - endStationIndex);
        
//         //print the lines and stops if the start line == end line 
//         console.log(`Rider boards the train at ${startLine} Line and ${startStation}.`);
//         for ( let i = startStationIndex; !(i == endStationIndex) ; startStationIndex > endStationIndex ? i-- : i++ ){
//             console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine]
//                 [startStationIndex > endStationIndex ? i-1 : i+1]}.`);
//         }
//         console.log(`Rider exit the train at ${endLine} Line and ${endStation}.`);

//     } else {
//         stops = Math.abs( startStationIndex - startLineInt ) +
//              Math.abs( endLineInt - endStationIndex);
//         //print the lines and stops if start line !== end line
//         console.log(`Rider boards the train at ${startLine} Line and ${startStation}.`);
//         for ( let i = startStationIndex; !(i == startLineInt) ; startStationIndex > startLineInt ? i-- : i++ ){
//             console.log(`Rider arrives at ${startLine} Line and ${subwayLines[startLine]
//                 [startStationIndex > startLineInt ? i-1 : i+1]}.`);
//         }
//         console.log(`Rider transfers from ${startLine} line to ${endLine} line at ${subwayLines[endLine][endLineInt]}.`)
//         for ( let i = endLineInt; !(i == endStationIndex) ; endLineInt > endStationIndex ? i-- : i++ ){
//             console.log(`Rider arrives at ${endLine} Line and ${subwayLines[endLine]
//                 [endLineInt > endStationIndex ? i-1 : i+1]}.`);
//         }
//         console.log(`Rider exit the train at ${endLine} Line and ${endStation}.`);
//     }
    
//     return `${stops} stops.`;
// }