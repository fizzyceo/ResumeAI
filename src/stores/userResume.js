import { create } from "zustand";
import { axiosHelper } from "./helpers/axios_helper";

export const useUserResumeStore = create((set, get) => ({
  userResumes: [],
  isLoading: false,
  isError: false,
  error: undefined,
  filters: {
    code: "",
    dateFrom: "",
    dateTo: "",
  },
  // Methods
  createResume: async (body) => {
    set({ isLoading: true });

    try {
      // Get the access token
      //   const accessToken = await tokenHelper.getToken();

      // Post the site creation request
      const response = await axiosHelper.post(
        `api/user-resumes`,
        body
        // ,{ headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log(response);

      //   // Link the site to the user
      //   await axiosHelper.patch(
      //     `/user/link-site?siteId=${response.site_id}`,
      //     { },
      //     { headers: { Authorization: `Bearer ${accessToken}` } }
      //   );

      //   // Refresh the list of sites
      await get().getUserResumes(body.data.user_email);
    } catch (e) {
      console.log(e);
    } finally {
      set({ isLoading: false });
    }
  },
  getUserResumes: async (email) => {
    // set({ filters: filterNonFalseValues(filters) });
    // console.log(filterNonFalseValues(filters));
    // const filtering = {
    //   // search: filterNonFalseValues(filters) || "",
    //   ...filters,

    // };
    try {
      set({ isLoading: true });

      let response = await axiosHelper.get(
        `api/user-resumes?filters[user_email][$eq]=` + email
      );
      console.log(response);

      // console.log(response.data);
      set({ userResumes: response.data.data, isLoading: false });
    } catch (e) {
      console.log(e);
    } finally {
      set({ isLoading: false });
    }
  },
  //   updateItem: async (id, info) => {
  //    try{
  //     const accessToken = await tokenHelper.getToken();

  //     console.log("id: ",id, " info: ", info );

  //     set({ isLoading: true });
  //     let response = await axiosHelper.patch(`/menu-item/${id}`, info, { headers: { Authorization: `Bearer ${accessToken}` } });
  //     console.log(response);

  //     // console.log(response.data);
  //     get().getResumes();

  //    }catch(e){
  //     console.log(e);

  //     }finally{

  //     set({ isLoading: false });
  //   }
  //   },
  //   deleteItem:async (id)=>{
  //    try{
  //       const accessToken = await tokenHelper.getToken();

  //     set({isLoading:true})
  //     let response = await axiosHelper.delete(`/menu-item/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });

  //     // console.log(response.data);
  //     get().getItems();

  //    }catch(e){
  //       console.log(e);

  //     }finally{
  //       set({ isLoading: false });

  //     }
  //   },
  setFilters: (filters) => {
    set({ filters: filterNonFalseValues(filters) });
  },
}));
