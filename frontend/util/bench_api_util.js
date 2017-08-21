export const fetchBenches = () => {
  return $.ajax({
    url: '/api/benches',
    method: 'GET',
  });
};

export const createBench = (bench) => {
  return $.ajax({
    url: '/api/benches',
    method: 'POST',
    data: { bench },
  });
};
