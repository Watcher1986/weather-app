import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    celsius: 24,
  },
  {
    name: 'Page B',
    celsius: 18,
    // amt: 2210,
  },
  {
    name: 'Page C',
    celsius: 10,
    // amt: 2290,
  },
  {
    name: 'Page D',
    celsius: -30,
    // amt: 2000,
  },
  {
    name: 'Page E',
    celsius: 24,
    // amt: 2181,
  },
  {
    name: 'Page F',
    celsius: 22,
    // amt: 2500,
  },
  {
    name: 'Page G',
    celsius: 19,
    // amt: 2100,
  },
];

export const WeatherChart = () => {
  return (
    <section className='min-[998px]:max-w-[453px] h-[432px] rounded-2xl bg-[#1a1a1a] px-3 py-2 relative'>
      <h5 className='absolute top-3 left-5 text-white'>Analitics</h5>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={data}>
          <defs>
            <linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#B3FC4F' stopOpacity={1} />
              <stop offset='100%' stopColor='#173102' stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray='3 3'
            vertical={false}
            strokeWidth={0.8}
            strokeOpacity={0.7}
          />
          <XAxis
            dataKey='name'
            stroke='#fff'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='#888888'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `℃${value}`}
          />
          <Tooltip
            formatter={(value) => `${value}℃`}
            contentStyle={{
              fontSize: '12px',
              backgroundColor: '#515151',
              color: '#fff',
              borderRadius: '8px',
            }}
          />
          <Legend verticalAlign='top' height={52} align='right' />
          <ReferenceLine y={0} stroke='#888888' />
          <Bar
            dataKey='celsius'
            fill='url(#colorGradient)'
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};
