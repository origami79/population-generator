const roll6 = function() {
  return Math.floor(Math.random() * (6) + 1);
}

const roll10 = function() {
  return Math.floor(Math.random() * (10) + 1);
}

const roll20 = function() {
  return Math.floor(Math.random() * (20) + 1);
}

export { roll6, roll10, roll20 }