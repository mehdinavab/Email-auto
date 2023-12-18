import { IGetConfigsResponseDto } from "../Models/ConfigsDTOs/GetConfigsDto";
import axios from "axios";
import { Env } from "../ServicesConfigs";
import {
  IPostConfigRequestDto,
  IPostConfigResponseDto,
} from "../Models/ConfigsDTOs/PostConfigDto";
import {
  IPutConfigRequestDto,
  IPutConfigResponseDto,
} from "../Models/ConfigsDTOs/PutConfigDto";
import { StorageService } from "./StorageService";

export class configService {
  constructor(private SrStorage: StorageService) {}
  apiPath: string = "config/";
  Header = {
    headers: {
      Bearer: this.SrStorage.RestoreToken(),
    },
  };

  async GetAllConfigs(): Promise<IGetConfigsResponseDto[]> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}`, this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        res = err;
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }

  async CreateNewConfig(
    NewConfig: IPostConfigRequestDto
  ): Promise<IPostConfigResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .post(`${Env.BaseUrl}${this.apiPath}`, NewConfig, this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        res = err;
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }
  async GetConfigById(ConfigId: number): Promise<IGetConfigsResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}${ConfigId}`, this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        IsSuccess = false;
        res = err;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }

  async UpdateConfig(
    ConfigId: number,
    EditConfig: IPutConfigRequestDto
  ): Promise<IPutConfigResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .put(`${Env.BaseUrl}${this.apiPath}${ConfigId}`, EditConfig, this.Header)
      .then((response: any) => {
        IsSuccess = true;
        res = response;
      })
      .catch((err) => {
        IsSuccess = false;
        res = err;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }
  async DeleteConfig(ConfigId: number): Promise<boolean> {
    let IsSuccess: boolean = false;

    await axios
      .delete(`${Env.BaseUrl}${this.apiPath}${ConfigId}`, this.Header)
      .then((response: any) => {
        IsSuccess = true;
      })
      .catch((err) => {
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(IsSuccess);
    else return Promise.reject(IsSuccess);
  }
}
