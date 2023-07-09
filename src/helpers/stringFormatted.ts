const onlyTenWords = str => {
  if (!str) return 'No description';
  let words = str.split(' ');
  if (words.length > 10) {
    words = words.slice(0, 10);
    words.push('...');
  }
  return words.join(' ').replace(/<.+?>/g, '');
};

export default onlyTenWords;
