function Dashboard() {
  const data = [
      { title: 'Revenue', value: '$405,091.00', percentage: '+4.75%', positive: true },
      { title: 'Overdue invoices', value: '$12,787.00', percentage: '+54.02%', positive: false },
      { title: 'Outstanding invoices', value: '$245,988.00', percentage: '-1.39%', positive: false },
      { title: 'Expenses', value: '$30,156.00', percentage: '+10.18%', positive: false },
  ];

  return (
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center border-r last:border-r-0">
                  <span className="text-sm text-gray-500">{item.title}</span>
                  <span className="text-2xl font-bold text-gray-800">{item.value}</span>
                  <span className={`text-sm ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {item.percentage}
                  </span>
              </div>
          ))}
      </div>
  );
};
export default Dashboard;