let settings = {
  companyName: "AIMS",
  email: "admin@aims.com",
  phone: "+97312345678",
  address: "Bahrain",
  currency: "INR",
  tax: 10,
  lowStockLimit: 10
};

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getSettings() {
  await delay();
  return { ...settings };
}

export async function updateSettings(data) {
  await delay();

  settings = {
    ...settings,
    ...data
  };

  return settings;
}