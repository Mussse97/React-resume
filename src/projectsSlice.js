import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async för att hämta repos från GitHub
export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  const reposResponse = await fetch("https://api.github.com/users/Mussse97/repos");
  if (!reposResponse.ok) throw new Error("Något gick fel vid hämtning!");

  const repos = await reposResponse.json();

  
  const languagesMap = {};
  await Promise.all(
    repos.map(async (repo) => {
      const langResponse = await fetch(repo.languages_url);
      console.log(repo.languages_url);
      if (langResponse.ok) {
        const languages = await langResponse.json();
        Object.keys(languages).forEach((lang) => {
          languagesMap[lang] = (languagesMap[lang] || 0) + languages[lang];
        });
      }
    })
  );

  return { repos, languagesMap };
});
// här lagras state
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    data: [], // Här lagras alla hämtade repos
    languages: {}, // Här lagras alla språk och språkfördelningen
    status: "idle",
    error: null,
  },
  reducers: {},
  // Extra reducers hanterar alla tre tillstånd
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.repos;
        state.languages = action.payload.languagesMap;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
