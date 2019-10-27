import React from "react";
import Chart from "./Chart";

const App = ({ message }) => {
  return (
    <div>
      <header>MCDL MQTT Client</header>
      {message ? (
        <div>
          <Chart
            title="Channel 1"
            time={message.timestamp}
            data={message.channel1}
          />
          <Chart
            title="Channel 2"
            time={message.timestamp}
            data={message.channel2}
          />
          <Chart
            title="Channel 3"
            time={message.timestamp}
            data={message.channel3}
          />
          <Chart
            title="Channel 4"
            time={message.timestamp}
            data={message.channel4}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
