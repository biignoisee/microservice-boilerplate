// una clase adaptadora, que se encarga de adaptar la respuesta de la api a un formato que sea compatible con nuestra aplicacion, para que no tengamos que cambiar el codigo de nuestra aplicacion cada vez que cambie la api, sino que solo tenemos que cambiar el adaptador. (mayormente adaptar desde una clase o api de terceros)

import axios from "axios";

export class PokeApiFetchAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  }
}

export class PokeApiAdapter {
  private readonly axios = axios;

  //T generico por defecto
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {

  }

  async patch(url: string, data: any) {

  }

  async delete(url: string) {

  }
}
