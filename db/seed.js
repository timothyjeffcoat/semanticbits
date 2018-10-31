const faker = require('faker');

const db = require('./sequelize');
const { Patient, Drug, PatientDrug } = require('./models');

async function seedDb() {
  await db.init(true);

  // force: true will drop the tables if they already exists
  
  // create patients
  await Patient.sync({force: true});
  const patients = [];
  for (let i = 0; i < 1000; i += 1) {
    patients.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.random.number(98)
    });
    
  }
  await Patient.bulkCreate(patients);

  // create drugs
  await Drug.sync({force: true});
  const drugs = [];
  for (let i = 0; i < 100; i += 1) {
    drugs.push({
      name: faker.random.word(),
      details: faker.lorem.paragraph()
    });
    
  }
  await Drug.bulkCreate(drugs);

  // create pateint drugs
  await PatientDrug.sync({force: true});
  const patientDrugs = [];
  for (let i = 0; i < 3000; i += 1) {
    patientDrugs.push({
      patientId: faker.random.number(1000),
      drugId: faker.random.number(100)
    });
    
  }
  await PatientDrug.bulkCreate(patientDrugs);
}

seedDb()
  .then(() => {
    console.log('Seed data complete!')
    process.exit(0);
  })
  .catch((error) => {
    console.log('Failed to seed data!', error);
    process.exit(1);
  });