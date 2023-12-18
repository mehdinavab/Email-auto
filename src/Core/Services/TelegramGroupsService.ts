import axios from "axios";
import { Env } from "../ServicesConfigs";
import { IGetTelegramGroupsResponseDto } from "../Models/TelegramGroupsDTOs/GetTelegramGroupsDto";
import {
  IPutTelegramGroupsRequestDto,
  IPutTelegramGroupsResponseDto,
} from "../Models/TelegramGroupsDTOs/PutTelegramGroupsDto";
import { StorageService } from "./StorageService";
import {
  IPostTelegramGroupsRequestDto,
  IPostTelegramGroupsResponseDto,
} from "../Models/TelegramGroupsDTOs/PostTelegramGroupsDto";

export class TelegramGroupsService {
  constructor(private SrStorage: StorageService) {}
  apiPath: string = "telegram-groups/";
  Header = {
    headers: {
      Bearer: this.SrStorage.RestoreToken(),
    },
  };
  async GetAllTelegramGroups(): Promise<IGetTelegramGroupsResponseDto[]> {
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

  async CreateNewTelegramGroup(
    NewTelegramGroup: IPostTelegramGroupsRequestDto
  ): Promise<IPostTelegramGroupsResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .post(`${Env.BaseUrl}${this.apiPath}`, NewTelegramGroup, this.Header)
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
  async GetTelegramGroupById(
    TelegramGroupId: string
  ): Promise<IGetTelegramGroupsResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}${TelegramGroupId}`, this.Header)
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

  async UpdateEmailAuthInfo(
    TelegramGroupId: string,
    EditTelegramGroup: IPutTelegramGroupsRequestDto
  ): Promise<IPutTelegramGroupsResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .put(
        `${Env.BaseUrl}${this.apiPath}${TelegramGroupId}`,
        EditTelegramGroup,
        this.Header
      )
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
  async DeleteEmailAuthInfo(TelegramGroupId: string): Promise<boolean> {
    let IsSuccess: boolean = false;
    await axios
      .delete(`${Env.BaseUrl}${this.apiPath}${TelegramGroupId}`, this.Header)
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
