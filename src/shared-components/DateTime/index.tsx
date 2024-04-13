import { useEffect, useState } from 'react';

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
      <p style={{ color: 'white' }}>{time}</p>
    </div>
  );
};

export default DateTime;
