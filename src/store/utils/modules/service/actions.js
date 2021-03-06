/* eslint-disable no-unused-vars */
import {
  SET_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  ADD_SERVICE
} from "@/store/utils/mutations";
import ServiceService from "@/services/ServiceService";

export default {
  async setService({ commit }) {
    await new Promise((resolve, reject) => {
      ServiceService.getService()
        .then(result => {
          commit(SET_SERVICE, result.data);
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
