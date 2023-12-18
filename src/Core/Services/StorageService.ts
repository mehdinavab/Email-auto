import { StorageKeys } from "../Enums/StorageEnums";

export class StorageService {
  StoreToken(
    Token: string = "",
    UserId: string = "",
    RefreshToken: string = "",
    Role: string[]
  ) {
    localStorage.clear();
    localStorage.setItem(StorageKeys.JwtToken, Token);
    localStorage.setItem(StorageKeys.UserId, UserId);
    localStorage.setItem(StorageKeys.RefreshToken, RefreshToken);
    localStorage.setItem(StorageKeys.Role, Role.join(","));
  }
  RestoreToken() {
    return localStorage.getItem(StorageKeys.JwtToken);
  }
  RestoreUserId() {
    return localStorage.getItem(StorageKeys.UserId);
  }
  RestoreUserRole() {
    return localStorage.getItem(StorageKeys.Role)?.toString().split(",");
  }
  EmptyStorage() {
    localStorage.clear();
  }
}
