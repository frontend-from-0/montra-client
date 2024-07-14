import { useEffect, useState } from 'react';
import { colors } from 'src/styles/colors';

export const DateTime = () => {
  var [date, setDate] = useState(new Date());
  const time = date.getHours() + ':' + date.getMinutes();

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p style={{ color: `${colors.dark[50]}` }}>{time}</p>
    </div>
  );
};

export default DateTime;
