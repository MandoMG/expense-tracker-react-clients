const useGraphBar = () => {
  const getGraphPercentage = (total: number, current: number) => {
    if (current === 0) {
      return 0
    }

    const percentage = (current / total) * 100;
    if (percentage >= 100) {
      return 100;
    };

    return Number(percentage.toFixed(0));
  };

  return { getGraphPercentage };
};

export default useGraphBar;