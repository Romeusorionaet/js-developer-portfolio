async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Romeusorionaet/js-developer-portfolio/refs/heads/main/src/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();

  return profileData;
}
