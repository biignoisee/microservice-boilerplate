// una clase adaptadora, que se encarga de adaptar la respuesta de la api a un formato que sea compatible con nuestra aplicacion, para que no tengamos que cambiar el codigo de nuestra aplicacion cada vez que cambie la api, sino que solo tenemos que cambiar el adaptador. (mayormente adaptar desde una clase o api de terceros)

import axios from "axios";


export class PokeApiAdapter {
  private readonly axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get(url);
    return data;
  }

  async post(url: string, data: any) {

  }

  async patch(url: string, data: any) {

  }

  async delete(url: string) {

  }
}
