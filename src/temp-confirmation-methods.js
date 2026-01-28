// Helper script to generate confirmation methods
// Pattern: id % 3 determines the method
// 0 -> dokumentasjon
// 1 -> digitalt-besok
// 2 -> fysisk-besok

const confirmationMethods = ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];

function getConfirmationMethod(id) {
  const numId = parseInt(id);
  return confirmationMethods[numId % 3];
}

// IDs from 23-55 need confirmation methods
for (let i = 23; i <= 55; i++) {
  console.log(`{ id: '${i}', confirmationMethod: '${getConfirmationMethod(i)}' },`);
}
